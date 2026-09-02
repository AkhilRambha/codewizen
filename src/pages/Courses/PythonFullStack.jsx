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

const PythonFullStack = () => {

  const skillsData = [
    {
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap", "Tailwind"]
    },
    {
      title: "Core Python",
      skills: ["Data Types", "Functions", "OOPs", "Exception Handling", "File I/O"]
    },
    {
      title: "Backend Frameworks",
      skills: ["Django", "Django REST Framework", "Flask", "FastAPI"]
    },
    {
      title: "Database Management",
      skills: ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "ORM Concepts"]
    },
    {
      title: "Version Control & Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Command Line"]
    },
    {
      title: "Deployment & Cloud",
      skills: ["Docker basics", "AWS EC2", "Heroku", "Nginx", "Gunicorn"]
    }
  ];

  const curriculumData = [
    {
      title: "Module 1: Web Development Fundamentals (Frontend)",
      topics: ["HTML5 semantic tags & forms", "CSS3 styling, Flexbox & Grid", "Responsive Design with Bootstrap", "JavaScript ES6+ fundamentals", "DOM Manipulation & Events"]
    },
    {
      title: "Module 2: React.js for Interactive UI",
      topics: ["React Components & JSX", "State & Props management", "React Hooks (useState, useEffect)", "React Router DOM", "Consuming APIs using Axios"]
    },
    {
      title: "Module 3: Core Python Programming",
      topics: ["Python Syntax and Data Structures", "Control Flow and Loops", "Object-Oriented Programming (OOP)", "Modules and Packages"]
    },
    {
      title: "Module 4: Django Web Framework",
      topics: ["Django Architecture (MVT)", "Models and Database Migrations", "Views, URLs, and Templates", "Form handling & Validation"]
    },
    {
      title: "Module 5: REST APIs with DRF",
      topics: ["Introduction to REST APIs", "Django REST Framework setup", "Serializers and ViewSets", "Authentication and Permissions"]
    },
    {
      title: "Module 6: Database Integration & Deployment",
      topics: ["PostgreSQL Integration", "Executing raw SQL queries vs ORM", "Deploying the App to AWS/Heroku", "Full Stack Capstone Project"]
    }
  ];

  return (
    <>
      <CourseHero 
        title="Python Full Stack Development" 
        subtitleList={[
          "Python",
          "Django",
          "React.js",
          "SQL",
          "REST APIs",
          "AWS"
        ]}
        description="Become a complete software engineer. Master front-end with React and back-end with Python & Django."
        breadcrumbs={[
          { label: "Courses", link: "/courses" },
          { label: "Python Full Stack" }
        ]}
      />
      
      <BatchDetails 
        courseName="Python Full Stack"
        nextBatch="Upcoming Week"
        sessionTime="07:00 AM TO 09:00 AM"
        duration="4 months"
      />

      <CourseFeatures />

      <SkillsMastered skillsData={skillsData} />

      <CourseCurriculum curriculumData={curriculumData} />

      <WhyChooseUsCourse />

      <Certification />

      <Testimonials />

      <ReadyToStart />
    </>
  );
};

export default PythonFullStack;
