import { createFileRoute } from "@tanstack/react-router";
import { FloodSimApp } from "@/components/floodsim";

export const Route = createFileRoute("/model-comparison")({
  head: () => ({
    meta: [
      { title: "Model Comparison — Ujjani FloodSim" },
      { name: "description", content: "Side-by-side comparison of Delft3D and SPH hydrodynamic model outputs: extent, depth, velocity, and arrival-time differences." },
      { property: "og:title", content: "Model Comparison — Ujjani FloodSim" },
      { property: "og:description", content: "Side-by-side comparison of Delft3D and SPH hydrodynamic model outputs." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <FloodSimApp screen="comparison" />,
});
