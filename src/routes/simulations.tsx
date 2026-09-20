import { createFileRoute } from "@tanstack/react-router";
import { FloodSimApp } from "@/components/floodsim";

export const Route = createFileRoute("/simulations")({
  head: () => ({
    meta: [
      { title: "Simulation Monitor — Ujjani FloodSim" },
      { name: "description", content: "Track hydrodynamic simulation execution status, solver convergence, processing stages, and compute telemetry in real time." },
      { property: "og:title", content: "Simulation Monitor — Ujjani FloodSim" },
      { property: "og:description", content: "Track hydrodynamic simulation execution status, solver convergence, and compute telemetry." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <FloodSimApp screen="simulations" />,
});
