import { Injectable, NotFoundException } from "@nestjs/common";
import { Book, Prisma } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import { CreateBookDto, BookPageDto } from "./dto/create-book.dto";
import { FindBooksQueryDto } from "./dto/find-books-query.dto";
import { UpdateBookDto } from "./dto/update-book.dto";

const SORT_FIELD_MAP: Record<string, string> = {
  created_at: "createdAt",
  updated_at: "updatedAt",
  title: "title",
  author: "author",
  year: "year",
};

@Injectable()
export class BooksService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(query: FindBooksQueryDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 9;

    const where: Prisma.BookWhereInput = {};

    if (query.q) {
      where.OR = [
        { title: { contains: query.q } },
        { author: { contains: query.q } },
        { genre: { contains: query.q } },
      ];
    }

    if (query.genre) {
      where.genre = query.genre;
    }

    const sortField = SORT_FIELD_MAP[query.sort ?? "created_at"] ?? "createdAt";
    const orderBy = {
      [sortField]: query.order ?? "desc",
    } as Prisma.BookOrderByWithRelationInput;

    const [total, books] = await this.prisma.$transaction([
      this.prisma.book.count({ where }),
      this.prisma.book.findMany({
        where,
        orderBy,
        skip: (page - 1) * limit,
        take: limit,
      }),
    ]);

    return {
      data: books.map((book) => this.toListItem(book)),
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findOne(id: number) {
    const book = await this.findBookOrFail(id);
    return this.toListItem(book);
  }

  async read(id: number) {
    const book = await this.findBookOrFail(id);
    return {
      ...this.toListItem(book),
      pages: this.parsePages(book.pages),
    };
  }

  async create(dto: CreateBookDto) {
    const book = await this.prisma.book.create({
      data: {
        title: dto.title,
        author: dto.author,
        year: dto.year ?? null,
        genre: dto.genre ?? null,
        synopsis: dto.synopsis ?? null,
        pages: dto.pages ? JSON.stringify(dto.pages) : null,
      },
    });

    return this.toListItem(book);
  }

  async update(id: number, dto: UpdateBookDto) {
    await this.findBookOrFail(id);

    const data: Prisma.BookUpdateInput = {};

    if (dto.title !== undefined) data.title = dto.title;
    if (dto.author !== undefined) data.author = dto.author;
    if (dto.year !== undefined) data.year = dto.year;
    if (dto.genre !== undefined) data.genre = dto.genre;
    if (dto.synopsis !== undefined) data.synopsis = dto.synopsis;
    if (dto.pages !== undefined) data.pages = JSON.stringify(dto.pages);

    const book = await this.prisma.book.update({ where: { id }, data });
    return this.toListItem(book);
  }

  async remove(id: number) {
    await this.findBookOrFail(id);
    await this.prisma.book.delete({ where: { id } });
    return { success: true, deletedId: id };
  }

  private async findBookOrFail(id: number): Promise<Book> {
    const book = await this.prisma.book.findUnique({ where: { id } });

    if (!book) {
      throw new NotFoundException(`Buku dengan id ${id} tidak ditemukan.`);
    }

    return book;
  }

  private toListItem(book: Book) {
    const { pages, ...rest } = book;
    return {
      ...rest,
      pageCount: this.parsePages(pages).length,
    };
  }

  private parsePages(pages: string | null): BookPageDto[] {
    if (!pages) {
      return [];
    }

    try {
      const parsed = JSON.parse(pages);
      return Array.isArray(parsed) ? (parsed as BookPageDto[]) : [];
    } catch {
      return [];
    }
  }
}
