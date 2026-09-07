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

const ReactJS = () => {

  const skillsData = [
    {
      title: "Frontend Basics",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "DOM Manipulation", "Responsive Design"]
    },
    {
      title: "React Fundamentals",
      skills: ["Components & Props", "State Management", "Lifecycle Methods", "Hooks (useState, useEffect)", "Event Handling"]
    },
    {
      title: "Advanced React",
      skills: ["Context API", "React Router", "Higher Order Components", "Custom Hooks", "Performance Optimization"]
    },
    {
      title: "State Management",
      skills: ["Redux", "Redux Toolkit", "Thunk/Saga", "Zustand", "React Query"]
    },
    {
      title: "Backend & API Integration",
      skills: ["Node.js Basics", "Express", "RESTful APIs", "Axios", "GraphQL"]
    },
    {
      title: "Deployment & Tools",
      skills: ["Git & GitHub", "Webpack/Vite", "Vercel/Netlify", "Jest Testing", "Firebase"]
    }
  ];

  const curriculumData = [
    {
      title: "Module 1: Web Development Fundamentals",
      topics: ["HTML5 semantic elements", "Advanced CSS3 and Flexbox/Grid", "JavaScript ES6+ syntax and concepts", "Building responsive layouts"]
    },
    {
      title: "Module 2: React Core Concepts",
      topics: ["Introduction to React and JSX", "Functional vs Class Components", "State and Props", "Handling Events and Forms"]
    },
    {
      title: "Module 3: React Hooks & Routing",
      topics: ["Mastering useState and useEffect", "Creating custom hooks", "React Router DOM v6", "Protected Routes"]
    },
    {
      title: "Module 4: Advanced State Management",
      topics: ["Understanding Context API", "Introduction to Redux", "Redux Toolkit (RTK)", "Async operations with Thunk"]
    },
    {
      title: "Module 5: API Integration & Backend Basics",
      topics: ["Fetching data with Axios", "Handling loading and error states", "Intro to Node.js and Express", "Creating simple REST APIs"]
    },
    {
      title: "Module 6: Capstone Project & Deployment",
      topics: ["Building a full-stack E-commerce app", "Authentication (JWT/Firebase)", "Testing components with Jest", "Deploying to Vercel/Netlify"]
    }
  ];

  return (
    <>
      <CourseHero 
        title="Full-Stack Web Development (React/MERN)" 
        subtitleList={[
          "React JS",
          "Node.js",
          "Express",
          "MongoDB",
          "Redux Toolkit",
          "API Integration"
        ]}
        description="Master modern web development by building dynamic, high-performance web applications using the MERN stack."
        breadcrumbs={[
          { label: "Courses", link: "/courses" },
          { label: "React JS & MERN" }
        ]}
      />
      
      <BatchDetails 
        courseName="React JS & MERN"
        nextBatch="Upcoming Week"
        sessionTime="10:00 AM TO 12:00 PM"
        duration="3 months"
      />

      <CourseFeatures />

      <SkillsMastered skillsData={skillsData} />

      <CourseCurriculum curriculumData={curriculumData} />

      <WhyChooseUsCourse />

      <Certification 
        courseName="Full-Stack Web Development"
      />

      <Testimonials />

      <ReadyToStart 
        title="Ready to become a Full-Stack Developer?"
        subtitle="Join our comprehensive React and MERN stack program and build a portfolio of real-world projects."
      />
    </>
  );
};

export default ReactJS;
