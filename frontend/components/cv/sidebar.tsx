import type { PortfolioData } from "@/lib/types";
import { MATERI_PDF_NAME, MATERI_PDF_URL, PROFILE_PHOTO } from "@/lib/constants";
import { ProfilePhoto } from "./profile-photo";

interface SidebarProps {
  data: PortfolioData;
}

export function Sidebar({ data }: SidebarProps) {
  const { profile } = data;
  const [firstLine, ...rest] = profile.name.split(" Al-");
  const secondLine = rest.length > 0 ? `Al-${rest.join(" Al-")}` : null;

  return (
    <aside id="sidebar">
      <div className="sd">
        <ProfilePhoto src={PROFILE_PHOTO} alt={profile.name} variant="sidebar" />

        <div className="sd-name">
          <h1>
            {firstLine}
            {secondLine ? (
              <>
                <br />
                {secondLine}
              </>
            ) : null}
          </h1>
          <span>{profile.role}</span>
        </div>

        <div className="sd-social">
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

        <div className="sd-div">
          <i className="fa-solid fa-diamond" />
        </div>

        <div className="sd-status">
          <div className="dot" />
          <span>{profile.status}</span>
        </div>

        <div className="sd-quote">
          <p>&quot;{profile.focus_quote}&quot;</p>
        </div>

        <div className="sd-stats">
          {profile.stats.slice(0, 2).map((stat) => (
            <div className="sd-stat" key={stat.label}>
              <div className="n">{stat.number}</div>
              <div className="l">{stat.label}</div>
            </div>
          ))}
        </div>

        <a
          href={MATERI_PDF_URL}
          download={MATERI_PDF_NAME}
          className="sd-cv"
        >
          <i className="fa-solid fa-file-pdf" />
          <span>Download Materi RPL (PDF)</span>
        </a>
      </div>
    </aside>
  );
}
