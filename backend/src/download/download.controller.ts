import { Controller, Get, NotFoundException, Res } from "@nestjs/common";
import { Response } from "express";
import { existsSync } from "node:fs";
import { join } from "node:path";

const MATERI_FILE = "Materi Belajar RPL (Sesuai Kisi-Kisi dari Guru).pdf";

@Controller()
export class DownloadController {
  @Get("download-materi-rpl")
  downloadMateri(@Res() res: Response): void {
    const filePath = join(process.cwd(), "assets", "docs", MATERI_FILE);

    if (!existsSync(filePath)) {
      throw new NotFoundException("File materi RPL tidak ditemukan.");
    }

    res.download(filePath, MATERI_FILE, (error) => {
      if (error && !res.headersSent) {
        res.status(500).json({ message: "Gagal mengunduh file materi RPL." });
      }
    });
  }
}
