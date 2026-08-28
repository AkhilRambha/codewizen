import React from "react";
import Hero from "../../components/sections/Hero/Hero";
import TrendingCourses from "../../components/sections/TrendingCourses/TrendingCourses";
import AboutSection from "../../components/sections/AboutSection/AboutSection";
import Benefits from "../../components/sections/Benefits/Benefits";
import Courses from "../../components/sections/Courses/Courses";
import PlacementSupport from "../../components/sections/PlacementSupport/PlacementSupport";
import Placements from "../../components/sections/Placements/Placements";
import Testimonials from "../../components/sections/Testimonials/Testimonials";
import Companies from "../../components/sections/Companies/Companies";

function Home() {
  return (
    <>
      <main id="home">
        <Hero />
      </main>

      <TrendingCourses />
      <AboutSection />
      <Benefits />
      <Courses />
      <PlacementSupport />
      <Placements />
      <Testimonials />
      <Companies />
    </>
  );
}

export default Home;
