import React from "react";
import Header from "../component/Header";
import HeroSection from "../component/HeroSection";
import Features from "../component/Features";
import Footer from "../component/Footer";
import HeroAbout from "../component/HeroAbout";
import HeroFormation from "../component/HeroFormation";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <HeroFormation/>
      <Footer />
    </>
  );
}
