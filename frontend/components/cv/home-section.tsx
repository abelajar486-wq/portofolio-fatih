import type { PortfolioData } from "@/lib/types";
import { RichText } from "./rich-text";

interface SectionProps {
  data: PortfolioData;
  active: boolean;
  height: number;
}

export function HomeSection({ data, active, height }: SectionProps) {
  const { profile } = data;

  return (
    <section
      className={`s s-home${active ? " active" : ""}`}
      style={height > 0 ? { height } : undefined}
    >
      <div className="dv" />
      <div className="dr" />

      <p className="h-eye">
        <i className="fa-solid fa-star" style={{ fontSize: 7, marginRight: 7 }} />
        Open to Opportunities — 2025
      </p>

      <p className="h-sm">{profile.first_name}</p>
      <h1 className="h-lg">{profile.last_name}</h1>

      <p className="h-bio">
        <RichText text={profile.bio} />
      </p>

      <div className="h-cts">
        <div className="h-ci">
          <i className="fa-solid fa-location-dot" />
          <span>{profile.location}</span>
        </div>
        <div className="h-ci">
          <i className="fa-solid fa-phone" />
          <span>{profile.phone}</span>
        </div>
        <div className="h-ci">
          <i className="fa-solid fa-envelope" />
          <span>{profile.email}</span>
        </div>
      </div>
    </section>
  );
}
