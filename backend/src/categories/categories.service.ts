import { Injectable, NotFoundException } from "@nestjs/common";
import { Category, Prisma } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import { CreateCategoryDto, UpdateCategoryDto } from "./dto/category.dto";

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Category[]> {
    return this.prisma.category.findMany({ orderBy: { name: "asc" } });
  }

  async findOne(id: number): Promise<Category> {
    const category = await this.prisma.category.findUnique({ where: { id } });

    if (!category) {
      throw new NotFoundException(`Kategori dengan id ${id} tidak ditemukan.`);
    }

    return category;
  }

  create(dto: CreateCategoryDto): Promise<Category> {
    return this.prisma.category.create({
      data: {
        name: dto.name,
        genre: dto.genre,
        description: dto.description ?? null,
      },
    });
  }

  async update(id: number, dto: UpdateCategoryDto): Promise<Category> {
    await this.findOne(id);

    const data: Prisma.CategoryUpdateInput = {};

    if (dto.name !== undefined) data.name = dto.name;
    if (dto.genre !== undefined) data.genre = dto.genre;
    if (dto.description !== undefined) data.description = dto.description;

    return this.prisma.category.update({ where: { id }, data });
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.prisma.category.delete({ where: { id } });
    return { success: true, deletedId: id };
  }
}
