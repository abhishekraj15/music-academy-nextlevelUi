import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import Webinar from "@/components/Webinar";
import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";

const page = () => {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonialCards />
      <Webinar />
      <Instructors />
      <Footer />
    </main>
  );
};

export default page;
