import { createFileRoute } from "@tanstack/react-router";
import { FloodSimApp } from "@/components/floodsim";

export const Route = createFileRoute("/exports")({
  head: () => ({
    meta: [
      { title: "Export Center — Ujjani FloodSim" },
      { name: "description", content: "Generate and download GIS-ready flood outputs: shapefiles, KML, GeoTIFF rasters, and technical PDF reports." },
      { property: "og:title", content: "Export Center — Ujjani FloodSim" },
      { property: "og:description", content: "Generate and download GIS-ready flood outputs and technical reports." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <FloodSimApp screen="exports" />,
});
