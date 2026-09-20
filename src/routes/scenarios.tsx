import { createFileRoute } from "@tanstack/react-router";
import { FloodSimApp } from "@/components/floodsim";

export const Route = createFileRoute("/scenarios")({
  head: () => ({
    meta: [
      { title: "Scenario Builder — Ujjani FloodSim" },
      { name: "description", content: "Configure dam-break and flood scenario inputs: breach parameters, boundary conditions, terrain, and hydrodynamic model selection." },
      { property: "og:title", content: "Scenario Builder — Ujjani FloodSim" },
      { property: "og:description", content: "Configure dam-break and flood scenario inputs for Ujjani Dam hydrodynamic modelling." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <FloodSimApp screen="scenarios" />,
});
