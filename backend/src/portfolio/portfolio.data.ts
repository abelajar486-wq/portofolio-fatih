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

export interface Project {
  id: string;
  title: string;
  category: "web" | "uiux" | "graphic";
  badge: string | null;
  is_featured: boolean;
  image: string;
  cat_label: string;
  tech: string;
  has_modal: boolean;
}

export const PROFILE: Profile = {
  name: "Muhammad Fatih Al-Adiyat",
  first_name: "muhammad",
  last_name: "Fatih Al-Adiyat",
  role: "Fullstack Dev & UI/UX Designer",
  status: "Available for Freelance",
  focus_quote: "Mastering Modern Fullstack Architecture & AI Integration",
  location: "Bogor, Indonesia",
  phone: "+62 812 3456 7890",
  email: "abelajar486@gmail.com",
  website: "fatih-dev.com",
  whatsapp_url:
    "https://wa.me/6281234567890?text=" +
    encodeURIComponent("Halo Fatih, saya tertarik berdiskusi mengenai peluang kerja bersama Anda."),
  bio:
    "Halo! Saya adalah seorang **Siswa** yang memiliki passion besar dalam dunia teknologi. " +
    "Meskipun masih menempuh pendidikan, saya aktif mengembangkan kemampuan sebagai " +
    "**Fullstack Developer & UI/UX Designer**. Saya senang mengubah ide menjadi kode dan " +
    "menciptakan antarmuka web yang interaktif serta fungsional.",
  stats: [
    { number: "12+", label: "Projects" },
    { number: "1+", label: "Exp (Yr)" },
    { number: "3", label: "Languages" },
    { number: "6", label: "Skills" },
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/muhammad-fatih-3652483a4/",
    github: "https://github.com/abelajar486-wq",
    instagram: "#",
    behance: "#",
  },
};

export const SKILLS: Skills = {
  technical: [
    { name: "HTML & CSS", percent: 85 },
    { name: "JavaScript", percent: 60 },
    { name: "Tailwind CSS", percent: 80 },
    { name: "TypeScript", percent: 30 },
    { name: "UI/UX Design", percent: 80 },
    { name: "Database", percent: 65 },
  ],
  languages: [
    { name: "Bahasa Indonesia", level: "Native", width: 90 },
    { name: "Bahasa Inggris", level: "Intermediate", width: 65 },
    { name: "Bahasa Arab", level: "Intermediate", width: 65 },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "graffioteka",
    title: "GRAFFIOTEKA — Perpustakaan Jalanan",
    category: "web",
    badge: "Featured Project",
    is_featured: true,
    image: "/assets/images/projects/project-api.png",
    cat_label: "NestJS 12 + Next.js 16",
    tech: "NestJS REST API · Prisma · SQLite · Reader · API Lab",
    has_modal: true,
  },
  {
    id: "sepatu",
    title: "Aplikasi Toko Sepatu",
    category: "uiux",
    badge: null,
    is_featured: false,
    image: "/assets/images/projects/project-uts.png",
    cat_label: "UI/UX Design",
    tech: "Figma · Prototyping · User Research",
    has_modal: false,
  },
  {
    id: "lt2",
    title: "Website Toko Kopi - LT2 Roastery",
    category: "web",
    badge: null,
    is_featured: false,
    image: "/assets/images/projects/website-coffee.jpg",
    cat_label: "Website",
    tech: "HTML · CSS · JavaScript",
    has_modal: false,
  },
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    category: "uiux",
    badge: null,
    is_featured: false,
    image: "/assets/images/projects/e-commerce.png",
    cat_label: "Mobile App",
    tech: "Figma · Prototyping · User Research",
    has_modal: false,
  },
  {
    id: "typing",
    title: "Typing Game Website",
    category: "web",
    badge: null,
    is_featured: false,
    image: "/assets/images/projects/website-learning.png",
    cat_label: "Website",
    tech: "Claude.ai · Visual Studio Code",
    has_modal: false,
  },
  {
    id: "mockup",
    title: "Mockup LT2 Roastery",
    category: "graphic",
    badge: null,
    is_featured: false,
    image: "/assets/images/projects/mockup.png",
    cat_label: "Graphic Design",
    tech: "Canva · Illustration",
    has_modal: false,
  },
  {
    id: "poster",
    title: "Eco-Conscious Poster",
    category: "graphic",
    badge: null,
    is_featured: false,
    image: "/assets/images/projects/poster.jpg",
    cat_label: "Graphic Design",
    tech: "Canva · Content Strategy",
    has_modal: false,
  },
];
