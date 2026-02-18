"use client";

import HomeNav from "@/components/home/HomeNav";
import Hero from "@/components/home/Hero";
import TrustMarquee from "@/components/home/TrustMarquee";
import ProcessSteps from "@/components/home/ProcessSteps";
import About from "@/components/home/About";
import Merchandise from "@/components/home/Merchandise";
import BrochureCTA from "@/components/home/BrochureCTA";
import HomeFooter from "@/components/home/HomeFooter";

export default function HomeContent() {
  return (
    <>
      <HomeNav />
      <Hero />
      <TrustMarquee />
      <ProcessSteps />
      <About />
      <Merchandise />
      <BrochureCTA />
      <HomeFooter />
    </>
  );
}
