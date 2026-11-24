export interface Stat {
  number: string;
  label: string;
}

export interface Profile {
  name: string;
  first_name: string;
  last_name: string;
  role: string;
  status: string;
  focus_quote: string;
  location: string;
  phone: string;
  email: string;
  website: string;
  whatsapp_url: string;
  bio: string;
  stats: Stat[];
  social: {
    linkedin: string;
    github: string;
    instagram: string;
    behance: string;
  };
}

export interface TechnicalSkill {
  name: string;
  percent: number;
}

export interface LanguageSkill {
  name: string;
  level: string;
  width: number;
}

export interface Skills {
  technical: TechnicalSkill[];
  languages: LanguageSkill[];
}

export type ProjectCategory = "web" | "uiux" | "graphic";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  badge: string | null;
  is_featured: boolean;
  image: string;
  cat_label: string;
  tech: string;
  has_modal: boolean;
}

export interface PortfolioData {
  profile: Profile;
  skills: Skills;
  projects: Project[];
}
