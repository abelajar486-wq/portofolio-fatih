import { PortfolioApp } from "@/components/cv/portfolio-app";
import { getPortfolio } from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function Page() {
  const data = await getPortfolio();

  return <PortfolioApp data={data} />;
}
