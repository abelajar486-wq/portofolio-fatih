import type { PortfolioData } from "@/lib/types";

interface SectionProps {
  data: PortfolioData;
  active: boolean;
  height: number;
}

export function SkillsSection({ data, active, height }: SectionProps) {
  const { technical, languages } = data.skills;

  return (
    <section
      className={`s s-alt${active ? " active" : ""}`}
      style={height > 0 ? { height } : undefined}
    >
      <div className="ax" style={{ transitionDelay: ".18s" }}>
        <p className="eyebrow">
          <i className="fa-solid fa-terminal" style={{ marginRight: 7 }} />
          Technical Arsenal
        </p>
        <h2 className="title">Skills</h2>
      </div>

      <div className="sk-grid">
        {technical.map((skill) => (
          <div className="sk-row" key={skill.name}>
            <div className="sk-meta">
              <span className="sk-nm">{skill.name}</span>
              <span className="sk-pc">{skill.percent}%</span>
            </div>
            <div className="sk-tr">
              <div
                className="sk-bar"
                data-width={skill.percent}
                style={{ width: active ? `${skill.percent}%` : 0 }}
              />
            </div>
          </div>
        ))}

        <div className="lang-sep sk-row">
          <span>
            <i className="fa-solid fa-language" style={{ marginRight: 5 }} />
            Language Proficiency
          </span>
        </div>

        {languages.map((language) => (
          <div className="sk-row" key={language.name}>
            <div className="sk-meta">
              <span className="sk-nm">{language.name}</span>
              <span className="sk-pc">{language.level}</span>
            </div>
            <div className="sk-tr">
              <div
                className="sk-bar"
                data-width={language.width}
                style={{ width: active ? `${language.width}%` : 0 }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
