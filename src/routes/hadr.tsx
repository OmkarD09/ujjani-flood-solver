import { createFileRoute } from "@tanstack/react-router";
import { FloodSimApp } from "@/components/floodsim";

export const Route = createFileRoute("/hadr")({
  head: () => ({
    meta: [
      { title: "HADR Impact Analysis — Ujjani FloodSim" },
      { name: "description", content: "Humanitarian assistance and disaster relief exposure assessment: population, villages, roads, bridges, hospitals, and schools at flood risk." },
      { property: "og:title", content: "HADR Impact Analysis — Ujjani FloodSim" },
      { property: "og:description", content: "Humanitarian disaster-relief exposure assessment for downstream flood risk." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <FloodSimApp screen="hadr" />,
});
