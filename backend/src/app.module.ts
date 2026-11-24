import { Module } from "@nestjs/common";
import { BooksModule } from "./books/books.module";
import { CategoriesModule } from "./categories/categories.module";
import { DownloadModule } from "./download/download.module";
import { PortfolioModule } from "./portfolio/portfolio.module";
import { PrismaModule } from "./prisma/prisma.module";

@Module({
  imports: [PrismaModule, PortfolioModule, BooksModule, CategoriesModule, DownloadModule],
})
export class AppModule {}
