import { createFileRoute } from "@tanstack/react-router";
import { FloodSimApp } from "@/components/floodsim";

export const Route = createFileRoute("/datasets")({
  head: () => ({
    meta: [
      { title: "Dataset Registry — Ujjani FloodSim" },
      { name: "description", content: "Registry of terrain, hydrology, satellite, and exposure datasets with sources, resolutions, coordinate systems, and validation status." },
      { property: "og:title", content: "Dataset Registry — Ujjani FloodSim" },
      { property: "og:description", content: "Registry of terrain, hydrology, satellite, and exposure datasets with validation status." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <FloodSimApp screen="datasets" />,
});
