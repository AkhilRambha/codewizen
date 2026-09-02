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

const JavaFullStack = () => {

  const skillsData = [
    {
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Redux", "Material UI"]
    },
    {
      title: "Core Java",
      skills: ["OOP Concepts", "Collections", "Exception Handling", "Multithreading", "Java 8 Features"]
    },
    {
      title: "Advanced Java & Frameworks",
      skills: ["JDBC", "Servlets & JSP", "Spring Core", "Spring Boot", "Hibernate (JPA)"]
    },
    {
      title: "Microservices & APIs",
      skills: ["RESTful APIs", "Microservices Architecture", "Spring Cloud", "API Gateway"]
    },
    {
      title: "Database Management",
      skills: ["MySQL", "Oracle", "MongoDB", "Database Design", "SQL Queries"]
    },
    {
      title: "Testing & DevOps",
      skills: ["JUnit", "Mockito", "Maven/Gradle", "Git", "Jenkins", "Docker"]
    }
  ];

  const curriculumData = [
    {
      title: "Module 1: Web Development Basics (Frontend)",
      topics: ["HTML5 semantic elements", "CSS3 styling and responsive design", "JavaScript fundamentals and DOM", "Building interactive UIs with React.js"]
    },
    {
      title: "Module 2: Core Java Programming",
      topics: ["Variables, Data Types, and Operators", "Control Flow Statements", "Object-Oriented Programming (Inheritance, Polymorphism)", "Exception Handling and Collections Framework"]
    },
    {
      title: "Module 3: Database & JDBC",
      topics: ["Relational Database Concepts", "Writing SQL Queries (Joins, Subqueries)", "Connecting Java to Database (JDBC)", "CRUD Operations"]
    },
    {
      title: "Module 4: Spring Framework & Spring Boot",
      topics: ["Inversion of Control (IoC) & Dependency Injection", "Spring MVC Architecture", "Spring Boot auto-configuration", "Building REST APIs"]
    },
    {
      title: "Module 5: Hibernate & Data Persistence",
      topics: ["Object-Relational Mapping (ORM) concepts", "Configuring Hibernate", "Entity Mapping and Relationships", "Spring Data JPA"]
    },
    {
      title: "Module 6: Microservices & Capstone Project",
      topics: ["Introduction to Microservices Architecture", "Service Discovery and API Gateway", "Securing APIs with Spring Security (JWT)", "End-to-End E-commerce Application"]
    }
  ];

  return (
    <>
      <CourseHero 
        title="Java Full Stack Development" 
        subtitleList={[
          "Core Java",
          "Advanced Java",
          "Spring Boot",
          "Microservices",
          "React Integration",
          "AWS Basics"
        ]}
        description="Master front-end and back-end development with Java, Spring Boot, and React. Become an enterprise-ready software engineer."
        breadcrumbs={[
          { label: "Courses", link: "/courses" },
          { label: "Java Full Stack" }
        ]}
      />
      
      <BatchDetails 
        courseName="Java Full Stack"
        nextBatch="Upcoming Week"
        sessionTime="06:00 PM TO 08:00 PM"
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

export default JavaFullStack;
