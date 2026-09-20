import { createFileRoute } from "@tanstack/react-router";
import { FloodSimApp } from "@/components/floodsim";

export const Route = createFileRoute("/validation")({
  head: () => ({
    meta: [
      { title: "Historical Validation — Ujjani FloodSim" },
      { name: "description", content: "Validate simulated flood extents against the October 2020 Sentinel-1 reference event with IoU, precision, recall, and F1 metrics." },
      { property: "og:title", content: "Historical Validation — Ujjani FloodSim" },
      { property: "og:description", content: "Validate simulated flood extents against the October 2020 Sentinel-1 reference event." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <FloodSimApp screen="validation" />,
});
