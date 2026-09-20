import { createFileRoute } from "@tanstack/react-router";
import { FloodSimApp } from "@/components/floodsim";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ujjani FloodSim — Operational Overview" },
      { name: "description", content: "Dam-break and flood inundation modelling workspace for Ujjani Dam and the lower Bhima River: live scenarios, results, and HADR exposure analysis." },
      { property: "og:title", content: "Ujjani FloodSim — Operational Overview" },
      { property: "og:description", content: "Dam-break and flood inundation modelling workspace for Ujjani Dam and the lower Bhima River." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <FloodSimApp screen="overview" />,
});
