import type { RefObject } from "react";
import type { PortfolioData } from "@/lib/types";
import { MATERI_PDF_NAME, MATERI_PDF_URL, PROFILE_PHOTO } from "@/lib/constants";
import { ProfilePhoto } from "./profile-photo";

interface MobileHeaderProps {
  data: PortfolioData;
  activeIndex: number;
  headerRef: RefObject<HTMLElement | null>;
}

const SECTION_ICONS = ["fa-house", "fa-terminal", "fa-layer-group", "fa-paper-plane"];

export function MobileHeader({ data, activeIndex, headerRef }: MobileHeaderProps) {
  const { profile } = data;
  const activeLabel = ["Home", "Skills", "Portfolio", "Contact"][activeIndex] ?? "Home";
  const activeIcon = SECTION_ICONS[activeIndex] ?? SECTION_ICONS[0];

  return (
    <header id="mh" ref={headerRef}>
      <div className="mh-r1">
        <ProfilePhoto src={PROFILE_PHOTO} alt={profile.name} variant="mobile" />

        <div className="mh-info">
          <h2>{profile.name}</h2>
          <div className="mh-role">{profile.role}</div>
          <div className="mh-avail">
            <div className="dot" />
            <span>{profile.status}</span>
          </div>
        </div>

        <a href={MATERI_PDF_URL} download={MATERI_PDF_NAME} className="mh-cv">
          <i className="fa-solid fa-file-pdf" />
          <span>Materi RPL</span>
        </a>
      </div>

      <div className="mh-r2">
        {profile.stats.map((stat) => (
          <div className="mh-st" key={stat.label}>
            <div className="n">{stat.number}</div>
            <div className="l">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="mh-r3">
        <div className="mh-soc">
          <a href={profile.social.instagram} aria-label="Instagram">
            <i className="fa-brands fa-instagram" />
          </a>
          <a href={profile.social.linkedin} aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin-in" />
          </a>
          <a href={profile.social.github} aria-label="GitHub">
            <i className="fa-brands fa-github" />
          </a>
          <a href={profile.social.behance} aria-label="Behance">
            <i className="fa-brands fa-behance" />
          </a>
        </div>

        <div className="mh-sec" id="mhSec">
          <i
            className={`fa-solid ${activeIcon}`}
            style={{ fontSize: 7, marginRight: 4 }}
          />
          {activeLabel}
        </div>
      </div>
    </header>
  );
}
