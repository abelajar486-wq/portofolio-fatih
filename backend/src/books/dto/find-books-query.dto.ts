import { Type } from "class-transformer";
import { IsIn, IsInt, IsOptional, IsString, Max, Min } from "class-validator";

export const BOOK_SORT_FIELDS = [
  "created_at",
  "updated_at",
  "title",
  "author",
  "year",
] as const;

export class FindBooksQueryDto {
  @IsOptional()
  @IsString()
  q?: string;

  @IsOptional()
  @IsString()
  genre?: string;

  @IsOptional()
  @IsIn(BOOK_SORT_FIELDS)
  sort?: (typeof BOOK_SORT_FIELDS)[number];

  @IsOptional()
  @IsIn(["asc", "desc"])
  order?: "asc" | "desc";

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(50)
  limit?: number;
}
