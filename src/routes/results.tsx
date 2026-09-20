import { createFileRoute } from "@tanstack/react-router";
import { FloodSimApp } from "@/components/floodsim";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Flood Results — Ujjani FloodSim" },
      { name: "description", content: "Interactive flood depth, velocity, extent, and arrival-time results for the Ujjani Dam breach scenario with timestep playback." },
      { property: "og:title", content: "Flood Results — Ujjani FloodSim" },
      { property: "og:description", content: "Interactive flood depth, velocity, extent, and arrival-time results with timestep playback." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <FloodSimApp screen="results" />,
});
