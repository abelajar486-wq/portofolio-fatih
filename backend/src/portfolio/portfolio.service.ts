import { Injectable } from "@nestjs/common";
import { PROFILE, PROJECTS, SKILLS } from "./portfolio.data";

@Injectable()
export class PortfolioService {
  getPortfolio() {
    return {
      profile: PROFILE,
      skills: SKILLS,
      projects: PROJECTS,
    };
  }

  getProfile() {
    return PROFILE;
  }

  getSkills() {
    return SKILLS;
  }

  getProjects() {
    return PROJECTS;
  }

  getHealth() {
    return {
      status: "online",
      app: "Muhammad Fatih Al-Adiyat — Portfolio (NestJS)",
      framework: "NestJS 12",
      timestamp: new Date().toISOString(),
    };
  }
}
