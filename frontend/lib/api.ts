import { fallbackPortfolio } from "./fallback-data";
import type { PortfolioData } from "./types";

const API_URL =
  process.env.API_URL ?? process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

export async function getPortfolio(): Promise<PortfolioData> {
  try {
    const response = await fetch(`${API_URL}/api/portfolio`, {
      cache: "no-store",
      signal: AbortSignal.timeout(5000),
    });

    if (!response.ok) {
      throw new Error(`API responded with ${response.status}`);
    }

    const data = (await response.json()) as PortfolioData;

    if (!data?.profile || !data?.skills || !Array.isArray(data?.projects)) {
      throw new Error("Invalid portfolio payload");
    }

    return data;
  } catch {
    return fallbackPortfolio;
  }
}

export function getApiUrl(): string {
  return API_URL.replace(/\/$/, "");
}
