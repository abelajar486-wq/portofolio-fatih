"use client";

import { useMemo, useState } from "react";
import type { PortfolioData, Project } from "@/lib/types";
import { InteractiveFolderGallery } from "./interactive-folder-gallery";

interface PortfolioSectionProps {
  data: PortfolioData;
  active: boolean;
  height: number;
  onOpenProject: () => void;
}

function ProjectCard({
  project,
  onOpenProject,
}: {
  project: Project;
  onOpenProject: () => void;
}) {
  return (
    <div
      className={`pc ${project.category}`}
      onClick={project.has_modal ? onOpenProject : undefined}
      style={project.has_modal ? { cursor: "pointer" } : undefined}
    >
      {project.badge ? (
        <span className="pc-badge">
          <i className="fa-solid fa-fire" /> {project.badge}
        </span>
      ) : null}

      <img src={project.image} alt={project.title} />

      <div className="pc-ov">
        <p className="pc-cat">{project.cat_label}</p>
        <h4 className="pc-tt">{project.title}</h4>
        <p className="pc-tc">{project.tech}</p>
        {project.has_modal ? (
          <div className="pc-action">
            <i className="fa-solid fa-file-lines" />
            <span>Catatan &amp; Detail Projek</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function PortfolioSection({
  data,
  active,
  height,
  onOpenProject,
}: PortfolioSectionProps) {
  const [view, setView] = useState<"folder" | "grid">("folder");

  const photos = useMemo(
    () =>
      data.projects.map((project) => ({
        id: project.id,
        image: project.image,
        title: project.title,
        subtitle: project.tech,
        onClick: project.has_modal ? onOpenProject : undefined,
      })),
    [data.projects, onOpenProject],
  );

  return (
    <section
      className={`s s-port${active ? " active" : ""}`}
      style={height > 0 ? { height } : undefined}
    >
      <div className="port-hd">
        <div>
          <p className="eyebrow" style={{ marginBottom: 3 }}>
            <i className="fa-solid fa-layer-group" style={{ marginRight: 7 }} />
            Selected Works
          </p>
          <h2 className="title" style={{ marginBottom: 0, fontSize: 32 }}>
            Portfolio
          </h2>
        </div>

        <div className="port-fl">
          <button
            type="button"
            onClick={() => setView("folder")}
            id="btnViewFolder"
            className={`port-tb${view === "folder" ? " active" : ""}`}
          >
            <i className="fa-solid fa-folder-open" style={{ marginRight: 5 }} />
            3D Folder Gallery
          </button>
          <button
            type="button"
            onClick={() => setView("grid")}
            id="btnViewGrid"
            className={`port-tb${view === "grid" ? " active" : ""}`}
          >
            <i className="fa-solid fa-grip" style={{ marginRight: 5 }} />
            Grid Catalog
          </button>
        </div>
      </div>

      <div
        id="portfolio-interactive-gallery"
        className="port-folder-wrap"
        style={{ display: view === "folder" ? "flex" : "none", justifyContent: "center" }}
      >
        <InteractiveFolderGallery
          photos={photos}
          folderName="Fatih_Works.gallery"
          dragHintText="Tarik foto ke bawah untuk menutup folder"
        />
      </div>

      <div
        className="port-grid"
        id="portGrid"
        style={{ display: view === "grid" ? "grid" : "none" }}
      >
        {data.projects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpenProject={onOpenProject} />
        ))}
      </div>
    </section>
  );
}
