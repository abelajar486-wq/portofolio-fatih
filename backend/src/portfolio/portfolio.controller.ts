import { Controller, Get } from "@nestjs/common";
import { PortfolioService } from "./portfolio.service";

@Controller()
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Get("portfolio")
  getPortfolio() {
    return this.portfolioService.getPortfolio();
  }

  @Get("profile")
  getProfile() {
    return this.portfolioService.getProfile();
  }

  @Get("skills")
  getSkills() {
    return this.portfolioService.getSkills();
  }

  @Get("projects")
  getProjects() {
    return {
      status: "success",
      author: "Muhammad Fatih Al-Adiyat",
      framework: "NestJS 12",
      message: "Portfolio API active",
      data: this.portfolioService.getProjects(),
    };
  }

  @Get("health")
  getHealth() {
    return this.portfolioService.getHealth();
  }
}
