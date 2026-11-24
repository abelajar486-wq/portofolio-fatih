import type { PortfolioData } from "@/lib/types";

interface SectionProps {
  data: PortfolioData;
  active: boolean;
  height: number;
}

export function ContactSection({ data, active, height }: SectionProps) {
  const { profile } = data;

  return (
    <section
      className={`s s-alt${active ? " active" : ""}`}
      style={height > 0 ? { height } : undefined}
    >
      <div className="ct-hero">
        <p className="eyebrow">
          <i className="fa-solid fa-paper-plane" style={{ marginRight: 7 }} />
          Get In Touch
        </p>
        <h2 className="title">Contact</h2>
      </div>

      <div className="ct-ban">
        <i className="fa-solid fa-briefcase big" />
        <div>
          <strong>Tertarik Merekrut Saya?</strong>
          <p>
            Jika Anda ingin merekrut saya, silahkan hubungi melalui{" "}
            <strong>{profile.email}</strong> atau klik tombol{" "}
            <strong>&quot;Hubungi Saya&quot;</strong> di bawah. Saya siap berdiskusi mengenai peluang
            kerja, magang, maupun freelance!
          </p>
        </div>
      </div>

      <div className="ct-grid">
        <div className="ct-card">
          <p className="ct-lbl">
            <i className="fa-solid fa-location-dot" style={{ marginRight: 5 }} />
            Location
          </p>
          <span className="ct-val">{profile.location}</span>
        </div>
        <div className="ct-card">
          <p className="ct-lbl">
            <i className="fa-solid fa-phone" style={{ marginRight: 5 }} />
            Phone
          </p>
          <span className="ct-val">{profile.phone}</span>
        </div>
        <div className="ct-card">
          <p className="ct-lbl">
            <i className="fa-solid fa-globe" style={{ marginRight: 5 }} />
            Website
          </p>
          <a
            href={`https://${profile.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ct-val"
          >
            {profile.website}
          </a>
        </div>
        <div className="ct-card">
          <p className="ct-lbl">
            <i className="fa-solid fa-envelope" style={{ marginRight: 5 }} />
            Email
          </p>
          <a href={`mailto:${profile.email}`} className="ct-val">
            {profile.email}
          </a>
        </div>
      </div>

      <div className="ct-div" />

      <div className="ct-ft">
        <div className="ct-nm">
          <h2>
            {profile.first_name} <span>{profile.last_name}</span>
          </h2>
        </div>

        <div className="ct-cta">
          <a
            href={profile.whatsapp_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa"
          >
            <i className="fa-brands fa-whatsapp" />
            <span>Hubungi Saya</span>
          </a>

          <div className="ct-sm">
            <a href={profile.social.linkedin} aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in" />
            </a>
            <a href={profile.social.github} aria-label="GitHub">
              <i className="fa-brands fa-github" />
            </a>
            <a href={profile.social.instagram} aria-label="Instagram">
              <i className="fa-brands fa-instagram" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
