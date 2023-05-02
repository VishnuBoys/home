import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Footer2 from "../components/Footer2";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <div>
      <Banner />
      <Hero />
      <CTA />
    </div>
  );
}
