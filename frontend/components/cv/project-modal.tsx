"use client";

import { useEffect } from "react";
import type { Project } from "@/lib/types";

interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
  project: Project | null;
}

export function ProjectModal({ open, onClose, project }: ProjectModalProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  const image = project?.image ?? "/assets/images/projects/project-api.png";

  return (
    <div id="projectModal" className="p-modal" role="dialog" aria-modal="true">
      <div className="p-modal-backdrop" onClick={onClose} />

      <div className="p-modal-content">
        <div className="p-modal-header">
          <div className="p-modal-tag">
            <span className="sticker-badge">
              <i className="fa-solid fa-code" /> NESTJS 12 &amp; NEXT.JS 16 API
            </span>
            <span className="tag-status">
              <i className="fa-solid fa-circle-check" /> PRD v1.0 DOKUMENTASI
            </span>
          </div>
          <button className="p-modal-close" onClick={onClose} aria-label="Tutup Modal">
            <i className="fa-solid fa-xmark" />
          </button>
        </div>

        <div className="p-modal-body">
          <div className="p-modal-hero">
            <div className="p-modal-img-wrap">
              <img src={image} alt="GRAFFIOTEKA API & Library" className="p-modal-img" />
              <div className="p-modal-spray-tag">// GRAFFIOTEKA STREET ARCHITECTURE</div>
            </div>
            <div className="p-modal-intro">
              <h2 className="p-modal-title">GRAFFIOTEKA — Perpustakaan Jalanan &amp; API Lab</h2>
              <p className="p-modal-quote">
                &quot;Perpustakaan jalanan buat cerita yang belum selesai&quot;
              </p>
              <div className="p-modal-chips">
                <span className="chip">
                  <i className="fa-brands fa-react" /> React 19.3
                </span>
                <span className="chip">
                  <i className="fa-solid fa-server" /> NestJS 12.5
                </span>
                <span className="chip">
                  <i className="fa-solid fa-bolt" /> Next.js 16
                </span>
                <span className="chip">
                  <i className="fa-solid fa-database" /> Prisma + SQLite
                </span>
                <span className="chip">
                  <i className="fa-solid fa-network-wired" /> RESTful API
                </span>
              </div>
            </div>
          </div>

          <div className="p-modal-notes">
            <div className="p-note-block">
              <h3>
                <i className="fa-solid fa-bullseye" /> 1. Ringkasan &amp; Latar Belakang Proyek
              </h3>
              <p>
                GRAFFIOTEKA adalah platform perpustakaan jalanan digital berkonsep{" "}
                <em>street culture &amp; graffiti</em> yang menyatukan katalog rak buku fisik dengan
                pengalaman membaca digital terpadu. Website ini berfungsi sebagai wajah publik
                (landing page promosi), dashboard manajemen buku &amp; genre, ruang baca digital
                (Digital Reader), serta <strong>API Lab</strong> interaktif untuk eksplorasi dan
                pengujian live endpoint REST API NestJS langsung dari browser.
              </p>
            </div>

            <div className="p-note-block">
              <h3>
                <i className="fa-solid fa-layer-group" /> 2. Fitur &amp; Kemampuan Utama
              </h3>
              <ul className="p-feature-list">
                <li>
                  <strong>Unified Shell Navigation:</strong> Landing page iklan publik terintegrasi
                  harmonis dengan dashboard pengelola dalam satu shell navigasi responsif (Sidebar,
                  Topbar, Toast status, dan SiteFooter).
                </li>
                <li>
                  <strong>Manajemen Buku &amp; Genre (CRUD):</strong> Pengelolaan koleksi buku dan
                  kategori secara dinamis via REST API, lengkap dengan instant search, multi-field
                  sorting, paginasi 9 item/halaman, dan modal konfirmasi hapus aman.
                </li>
                <li>
                  <strong>Digital Book Reader:</strong> Modal fullscreen interaktif untuk membaca isi
                  buku bab per bab dengan navigasi tombol, slider progres, keyboard arrows (
                  <code>&larr;</code>/<code>&rarr;</code>), serta auto-save progres baca di{" "}
                  <code>localStorage</code>. Layar lebar mendukung mode <em>spread</em> 2 halaman.
                </li>
                <li>
                  <strong>Real-Time API Lab:</strong> Console interaktif untuk menguji endpoint
                  sistem NestJS (<code>GET /api/halo</code>, <code>GET /api/baik</code>,{" "}
                  <code>GET /api/hello/{"{name}"}</code>), pemantau latensi dan status koneksi
                  real-time, serta in-memory request logger hingga 40 entri.
                </li>
              </ul>
            </div>

            <div className="p-note-block">
              <h3>
                <i className="fa-solid fa-laptop-code" /> 3. Arsitektur &amp; Spesifikasi Teknis
              </h3>
              <div className="p-tech-grid">
                <div className="p-tech-card">
                  <h4>Frontend Architecture</h4>
                  <p>
                    React 19.3 SPA, Next.js 16, Pure CSS (Brutalist Graffiti design tokens), App Router
                    (<code>#/</code>, <code>#/beranda</code>, <code>#/buku</code>,{" "}
                    <code>#/kategori</code>, <code>#/lab</code>), custom hooks (
                    <code>useApiHealth</code>, <code>useCollection</code>,{" "}
                    <code>useRequestLogs</code>).
                  </p>
                </div>
                <div className="p-tech-card">
                  <h4>Backend &amp; Database</h4>
                  <p>
                    NestJS 12.5 (TypeScript), RESTful Controllers (<code>BooksController</code>,{" "}
                    <code>CategoriesController</code>), DTO validation dengan{" "}
                    <code>class-validator</code>, SQLite database dengan Prisma ORM.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-note-block">
              <h3>
                <i className="fa-solid fa-clipboard-check" /> 4. Catatan Khusus &amp; Pembelajaran
                (Key Notes)
              </h3>
              <div className="p-alert-note">
                <i className="fa-solid fa-circle-info" />
                <div>
                  <strong>Poin Evaluasi &amp; Best Practices:</strong>
                  <p>
                    Data isi buku (<code>pages</code>) sengaja dienkapsulasi dan di-stream hanya saat
                    membuka endpoint khusus <code>/api/books/{"{id}"}/read</code> untuk menjaga
                    kecepatan listing buku. Proyek ini mendemonstrasikan implementasi arsitektur
                    decoupled modern berstandar industri.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-modal-footer">
          <div className="p-modal-foot-tag">
            <i className="fa-solid fa-terminal" /> Status: Full PRD Documented &amp; Production Ready
          </div>
          <button className="btn-p-close" onClick={onClose}>
            <i className="fa-solid fa-check" /> Tutup Catatan
          </button>
        </div>
      </div>
    </div>
  );
}
