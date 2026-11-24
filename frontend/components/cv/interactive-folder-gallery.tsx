"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export interface GalleryPhoto {
  id: string | number;
  image: string;
  title?: string;
  subtitle?: string;
  onClick?: () => void;
}

export interface InteractiveFolderGalleryProps {
  photos?: GalleryPhoto[];
  folderName?: string;
  dragHintText?: string;
  className?: string;
  onPhotoClick?: (photo: GalleryPhoto) => void;
}

export function InteractiveFolderGallery({
  photos = [],
  folderName = "Projects.gallery",
  dragHintText = "Drag any photo down to close",
  className,
  onPhotoClick,
}: InteractiveFolderGalleryProps) {
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [hoverFolder, setHoverFolder] = useState(false);

  return (
    <div className={`w-full py-8 md:py-16 relative ${className ?? ""}`}>
      <div className="relative w-full min-h-[460px] flex flex-col items-center justify-center">
        <div className="relative w-[380px] md:w-[420px] h-[480px] flex justify-center pointer-events-none z-0">
          <motion.div
            className="absolute bottom-6 w-80 h-56 drop-shadow-2xl"
            animate={{ opacity: isFolderOpen ? 0 : 1, scale: isFolderOpen ? 0.9 : 1 }}
          >
            <div className="absolute top-0 left-0 w-32 h-10 bg-gradient-to-t from-[#1e1e1e] to-[#2a2a2a] rounded-t-xl border-t border-l border-r border-white/10" />
            <div className="absolute top-8 left-0 right-0 bottom-0 bg-gradient-to-b from-[#1e1e1e] to-[#0a0a0a] rounded-b-xl rounded-tr-xl border border-white/10 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]" />
            <div className="absolute top-10 left-2 right-2 bottom-2 bg-black rounded-lg shadow-inner pointer-events-none" />
          </motion.div>

          <div className="absolute bottom-10 z-10 flex justify-center">
            {photos.map((photo, index) => {
              const offset = index - Math.floor(photos.length / 2);

              const stackY = hoverFolder ? offset * -10 - 40 : offset * -5;
              const stackX = hoverFolder ? offset * 28 : offset * 3;
              const stackRotate = hoverFolder ? offset * 7 : offset * 3;
              const stackScale = 1 - Math.abs(offset) * 0.03;

              const openY = -120;
              const openX = offset * 90;
              const openRotate = 0;
              const openScale = 1.05;

              return (
                <motion.div
                  key={photo.id}
                  drag={isFolderOpen}
                  dragSnapToOrigin
                  onDragEnd={(_event, info) => {
                    if (info.offset.y > 100 && isFolderOpen) {
                      setIsFolderOpen(false);
                      setHoverFolder(false);
                    }
                  }}
                  onClick={() => {
                    if (isFolderOpen && (photo.onClick || onPhotoClick)) {
                      photo.onClick?.();
                      onPhotoClick?.(photo);
                    }
                  }}
                  className={`absolute bottom-0 w-52 md:w-56 h-64 md:h-72 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] overflow-hidden border border-white/20 origin-bottom transition-colors ${
                    isFolderOpen
                      ? "cursor-grab active:cursor-grabbing pointer-events-auto hover:border-red-500"
                      : "pointer-events-none"
                  }`}
                  animate={
                    !isFolderOpen
                      ? {
                          y: stackY,
                          x: stackX,
                          rotate: stackRotate,
                          scale: stackScale,
                          zIndex: index + 10,
                        }
                      : {
                          y: openY,
                          x: openX,
                          rotate: openRotate,
                          scale: openScale,
                          zIndex: 50,
                        }
                  }
                  whileHover={isFolderOpen ? { scale: openScale + 0.06, zIndex: 100 } : {}}
                  whileDrag={isFolderOpen ? { scale: openScale + 0.1, rotate: 5, zIndex: 150 } : {}}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                >
                  <img
                    src={photo.image}
                    alt={photo.title ?? "Gallery item"}
                    className="w-full h-full object-cover pointer-events-none"
                  />

                  {isFolderOpen && photo.title ? (
                    <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col justify-end">
                      <span className="text-white text-xs font-bold uppercase tracking-wider">
                        {photo.title}
                      </span>
                      {photo.subtitle ? (
                        <span className="text-white/60 text-[10px]">{photo.subtitle}</span>
                      ) : null}
                    </div>
                  ) : null}
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="absolute bottom-0 w-[320px] md:w-[350px] h-44 drop-shadow-[0_-20px_40px_rgba(0,0,0,0.8)] cursor-pointer z-20 pointer-events-auto"
            style={{ transformOrigin: "bottom" }}
            animate={{
              opacity: isFolderOpen ? 0 : 1,
              rotateX: hoverFolder ? -25 : 0,
              y: hoverFolder ? 10 : 0,
              pointerEvents: isFolderOpen ? "none" : "auto",
            }}
            onMouseEnter={() => setHoverFolder(true)}
            onMouseLeave={() => setHoverFolder(false)}
            onClick={() => setIsFolderOpen(true)}
          >
            <div className="w-full h-full bg-gradient-to-b from-[#2a2a2a] to-[#111] rounded-2xl border border-white/20 shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)] relative overflow-hidden flex items-end justify-center pb-8">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

              <div className="px-5 py-2.5 bg-black rounded-lg border border-black/80 shadow-inner flex items-center justify-center backdrop-blur-md">
                <span className="text-white/90 text-sm font-medium tracking-wide flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                  {folderName}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ opacity: isFolderOpen ? 1 : 0, y: isFolderOpen ? 0 : 50 }}
          className="absolute bottom-4 px-6 py-2.5 rounded-full bg-black/60 dark:bg-white/10 border border-white/20 backdrop-blur-md text-white/80 text-xs font-medium uppercase tracking-widest pointer-events-none flex items-center gap-2 shadow-lg"
        >
          <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
          {dragHintText}
        </motion.div>
      </div>
    </div>
  );
}
