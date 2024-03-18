"use client"
import Blog from "@/components/Blog";
import ScrollUp from "@/components/CommonTags/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";


export default function HomeTourist() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}


