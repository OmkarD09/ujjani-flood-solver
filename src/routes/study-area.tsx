import { createFileRoute } from "@tanstack/react-router";
import { FloodSimApp } from "@/components/floodsim";

export const Route = createFileRoute("/study-area")({
  head: () => ({
    meta: [
      { title: "Study Area — Ujjani FloodSim" },
      { name: "description", content: "Explore geospatial data and observation layers for the Ujjani Dam and lower Bhima River study area, including DEM, hydrology, and Sentinel-1 layers." },
      { property: "og:title", content: "Study Area — Ujjani FloodSim" },
      { property: "og:description", content: "Explore geospatial data and observation layers for the Ujjani Dam and lower Bhima River study area." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <FloodSimApp screen="study" />,
});
