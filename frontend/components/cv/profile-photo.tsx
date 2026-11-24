"use client";

import { useState } from "react";

interface ProfilePhotoProps {
  src: string;
  alt: string;
  variant: "sidebar" | "mobile";
}

export function ProfilePhoto({ src, alt, variant }: ProfilePhotoProps) {
  const [failed, setFailed] = useState(false);
  const isSidebar = variant === "sidebar";

  return (
    <div className={isSidebar ? "ph-wrap" : "mh-ph"}>
      <img
        src={src}
        alt={alt}
        onError={() => setFailed(true)}
        style={failed ? { display: "none" } : undefined}
      />
      <div
        className={isSidebar ? "ph-fb" : "mh-ph-fb"}
        style={failed ? { display: "flex" } : undefined}
      >
        <i className="fa-solid fa-user" />
      </div>
    </div>
  );
}
