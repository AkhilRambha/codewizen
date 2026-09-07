import React from 'react';
import CourseHero from '../../components/common/CourseHero/CourseHero';
import BatchDetails from '../../components/sections/BatchDetails/BatchDetails';
import CourseFeatures from '../../components/sections/CourseFeatures/CourseFeatures';
import SkillsMastered from '../../components/sections/SkillsMastered/SkillsMastered';
import CourseCurriculum from '../../components/sections/CourseCurriculum/CourseCurriculum';
import WhyChooseUsCourse from '../../components/sections/WhyChooseUsCourse/WhyChooseUsCourse';
import Certification from '../../components/sections/Certification/Certification';
import Testimonials from '../../components/sections/Testimonials/Testimonials';
import ReadyToStart from '../../components/sections/ReadyToStart/ReadyToStart';

const UIUXDesign = () => {

  const skillsData = [
    {
      title: "Design Principles",
      skills: ["Color Theory", "Typography", "Grid Systems", "Visual Hierarchy", "Composition"]
    },
    {
      title: "User Research",
      skills: ["User Interviews", "Personas", "Empathy Mapping", "Journey Mapping", "A/B Testing"]
    },
    {
      title: "Design Tools",
      skills: ["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin"]
    },
    {
      title: "Wireframing & Prototyping",
      skills: ["Low-fidelity Wireframes", "High-fidelity Prototypes", "Micro-interactions", "User Flows", "Information Architecture"]
    },
    {
      title: "Usability & Testing",
      skills: ["Usability Testing", "Heuristic Evaluation", "Accessibility (a11y)", "Heatmaps", "Analytics Basics"]
    },
    {
      title: "Developer Handoff",
      skills: ["Design Systems", "Style Guides", "Asset Exporting", "CSS Basics", "Collaboration"]
    }
  ];

  const curriculumData = [
    {
      title: "Module 1: Introduction to UI/UX",
      topics: ["Differences between UI and UX", "The Design Thinking Process", "Understanding User Needs", "Principles of Good Design"]
    },
    {
      title: "Module 2: User Research & Strategy",
      topics: ["Conducting User Interviews and Surveys", "Creating User Personas and Stories", "Journey Mapping", "Information Architecture (IA)"]
    },
    {
      title: "Module 3: Wireframing & User Flows",
      topics: ["Sketching and Ideation", "Creating Low-Fidelity Wireframes", "Designing User Flows", "Tools for Wireframing (Balsamiq/Figma)"]
    },
    {
      title: "Module 4: UI Design & Visuals (Figma Mastery)",
      topics: ["Mastering Figma Interface", "Color Theory and Typography", "Creating High-Fidelity Mockups", "Responsive and Mobile-First Design"]
    },
    {
      title: "Module 5: Prototyping & Interaction",
      topics: ["Creating Clickable Prototypes", "Adding Micro-interactions and Animations", "Usability Testing Methods", "Iterating based on Feedback"]
    },
    {
      title: "Module 6: Design Systems & Portfolio",
      topics: ["Building and Managing Design Systems", "Developer Handoff process", "Creating a professional Dribbble/Behance Portfolio", "Interview Preparation"]
    }
  ];

  return (
    <>
      <CourseHero 
        title="UI/UX Design" 
        subtitleList={[
          "User Research",
          "Wireframing",
          "Figma Mastery",
          "Prototyping",
          "Usability Testing",
          "Design Systems"
        ]}
        description="Design intuitive and beautiful digital experiences. Master the complete UI/UX process from user research to interactive prototypes using Figma."
        breadcrumbs={[
          { label: "Courses", link: "/courses" },
          { label: "UI/UX Design" }
        ]}
      />
      
      <BatchDetails 
        courseName="UI/UX Design"
        nextBatch="Upcoming Week"
        sessionTime="04:00 PM TO 06:00 PM"
        duration="3 months"
      />

      <CourseFeatures />

      <SkillsMastered skillsData={skillsData} />

      <CourseCurriculum curriculumData={curriculumData} />

      <WhyChooseUsCourse />

      <Certification 
        courseName="Certified UI/UX Designer"
      />

      <Testimonials />

      <ReadyToStart 
        title="Ready to design the future?"
        subtitle="Join our UI/UX program and build a stunning portfolio that will land you your dream design job."
      />
    </>
  );
};

export default UIUXDesign;
