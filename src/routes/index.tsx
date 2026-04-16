import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import HeroSection from "../components/HeroSection";
import FeaturedFlavors from "../components/FeaturedFlavors";
import AboutPreview from "../components/AboutPreview";
import MenuPreview from "../components/MenuPreview";

const Scene3D = lazy(() => import("../components/Scene3D"));

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Cool Uncle | Premium Ice Cream – Indore & Dewas" },
      { name: "description", content: "Cool Uncle Ice Cream – Premium handcrafted ice creams, sundaes & café delights from Indore since 2009. 300+ dealers across Central India." },
      { property: "og:title", content: "Cool Uncle | Premium Ice Cream – Indore & Dewas" },
      { property: "og:description", content: "Where every scoop tells a story. Premium ice creams crafted in the heart of Central India since 2009." },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <div className="relative" style={{ background: "var(--gradient-hero)" }}>
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>
      <div className="relative z-10">
        <HeroSection />
        <FeaturedFlavors />
        <AboutPreview />
        <MenuPreview />
      </div>
    </div>
  );
}
