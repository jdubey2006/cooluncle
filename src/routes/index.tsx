import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FlavorsSection from "../components/FlavorsSection";
import AboutSection from "../components/AboutSection";
import LocationsSection from "../components/LocationsSection";
import FooterSection from "../components/FooterSection";

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
    <div className="relative min-h-screen" style={{ background: "var(--gradient-hero)" }}>
      {/* 3D Background */}
      <Suspense fallback={null}>
        <div className="fixed inset-0 z-0">
          <Scene3D />
        </div>
      </Suspense>

      {/* UI Layer */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <div className="relative" style={{ background: "linear-gradient(to bottom, transparent, var(--background) 15%)" }}>
          <FlavorsSection />
          <AboutSection />
          <LocationsSection />
          <FooterSection />
        </div>
      </div>
    </div>
  );
}
