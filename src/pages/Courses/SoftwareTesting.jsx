import React from 'react';
import CourseHero from '../../components/common/CourseHero/CourseHero';
import BatchDetails from '../../components/sections/BatchDetails/BatchDetails';
import CourseFeatures from '../../components/sections/CourseFeatures/CourseFeatures';
import SkillsMastered from '../../components/sections/SkillsMastered/SkillsMastered';
import CourseCurriculum from '../../components/sections/CourseCurriculum/CourseCurriculum';
import WhyChooseUsCourse from '../../components/sections/WhyChooseUsCourse/WhyChooseUsCourse';
import Certification from '../../components/sections/Certification/Certification';
import ReadyToStart from '../../components/sections/ReadyToStart/ReadyToStart';

const SoftwareTesting = () => {

  const skillsData = [
    {
      title: "Manual Testing",
      skills: ["SDLC & STLC", "Test Cases Design", "Bug Tracking", "Agile & Scrum", "Jira"]
    },
    {
      title: "Core Java for QA",
      skills: ["Java Basics", "OOP Concepts", "Collections Framework", "Exception Handling"]
    },
    {
      title: "Selenium Automation",
      skills: ["Selenium WebDriver", "Locators (XPath, CSS)", "Waits & Synchronization", "Handling Alerts & Frames"]
    },
    {
      title: "Test Frameworks",
      skills: ["TestNG", "JUnit", "Data-Driven Framework", "Page Object Model (POM)", "Cucumber (BDD)"]
    },
    {
      title: "API Testing",
      skills: ["Postman", "REST Assured", "JSON/XML Parsing", "HTTP Methods & Status Codes"]
    },
    {
      title: "DevOps & CI/CD",
      skills: ["Git & GitHub", "Jenkins", "Maven", "Docker basics", "Continuous Integration"]
    }
  ];

  const curriculumData = [
    {
      title: "Module 1: Manual Testing Fundamentals",
      topics: ["Software Development Life Cycle (SDLC)", "Software Testing Life Cycle (STLC)", "Writing effective Test Cases", "Defect Life Cycle & Bug Tracking with Jira"]
    },
    {
      title: "Module 2: Core Java for Automation",
      topics: ["Setting up Java and Eclipse/IntelliJ", "Data types, variables, and operators", "Object-Oriented Programming (Classes, Methods, Inheritance)", "Collections Framework (List, Set, Map)"]
    },
    {
      title: "Module 3: Selenium WebDriver",
      topics: ["Introduction to Selenium architecture", "Locating elements using XPath and CSS Selectors", "Handling dropdowns, alerts, and multiple windows", "Implicit and Explicit Waits"]
    },
    {
      title: "Module 4: Testing Frameworks (TestNG & Cucumber)",
      topics: ["TestNG annotations and assertions", "Grouping and parallel execution", "Page Object Model (POM) design pattern", "Behavior Driven Development (BDD) with Cucumber"]
    },
    {
      title: "Module 5: API Automation Testing",
      topics: ["Understanding Web Services and APIs", "Manual API testing using Postman", "Automating API tests using RestAssured framework", "Validating JSON responses"]
    },
    {
      title: "Module 6: CI/CD & Capstone Project",
      topics: ["Version control with Git & GitHub", "Build management with Maven", "Setting up CI/CD pipelines with Jenkins", "End-to-End Automation Framework Project"]
    }
  ];

  return (
    <>
      <CourseHero 
        title="Software Testing (QA Automation)" 
        subtitleList={[
          "Manual Testing",
          "Agile & Jira",
          "Core Java",
          "Selenium WebDriver",
          "API Testing",
          "TestNG"
        ]}
        description="Master Manual Testing, Selenium, Java, and API Automation. Become a certified Quality Assurance Engineer and ensure flawless software delivery."
        breadcrumbs={[
          { label: "Courses", link: "/courses" },
          { label: "Software Testing" }
        ]}
      />
      
      <BatchDetails 
        nextBatch="Upcoming Week"
        sessionTime="07:30 AM TO 09:30 AM"
        duration="3.5 months"
      />

      <CourseFeatures />

      <SkillsMastered skillsData={skillsData} />

      <CourseCurriculum curriculumData={curriculumData} />

      <WhyChooseUsCourse />

      <Certification />

      <ReadyToStart />
    </>
  );
};

export default SoftwareTesting;
