"use client";

import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ReviewsSection from "@/components/ReviewsSection";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <>
      <SEOHead />
      <div className="min-h-screen">
        <HeroSection />
        <ServicesSection />
        <CallToAction />
        <ReviewsSection />
      </div>
    </>
  );
}