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

const DataAnalytics = () => {

  const skillsData = [
    {
      title: "Data Foundations",
      skills: ["Data Cleaning", "Data Formatting", "Data Validation", "Statistical Analysis", "Data Modeling"]
    },
    {
      title: "Advanced Excel",
      skills: ["VLOOKUP & HLOOKUP", "Pivot Tables", "Macros & VBA", "Power Query", "Complex Formulas"]
    },
    {
      title: "SQL Mastery",
      skills: ["SQL Server / MySQL", "Complex Joins", "Window Functions", "Stored Procedures", "Subqueries"]
    },
    {
      title: "Power BI",
      skills: ["DAX Functions", "Data Modeling", "Interactive Dashboards", "Power BI Service", "Scheduled Refresh"]
    },
    {
      title: "Tableau Essentials",
      skills: ["Tableau Desktop", "Data Blending", "Calculated Fields", "Storytelling with Data"]
    },
    {
      title: "Python for Analytics",
      skills: ["Pandas", "NumPy", "Matplotlib", "Data Wrangling scripts", "Jupyter Notebooks"]
    }
  ];

  const curriculumData = [
    {
      title: "Module 1: Advanced Excel for Data Analysis",
      topics: ["Data cleaning and formatting techniques", "Advanced functions (Logical, Lookup, Text)", "Pivot Tables and Pivot Charts", "Introduction to Power Query"]
    },
    {
      title: "Module 2: SQL for Data Analytics",
      topics: ["Introduction to RDBMS and SQL commands", "Filtering and sorting data", "Aggregation and Grouping", "Advanced Joins and Subqueries", "Window functions and CTEs"]
    },
    {
      title: "Module 3: Business Intelligence with Power BI",
      topics: ["Connecting to multiple data sources", "Data modeling and relationships", "Introduction to DAX (Data Analysis Expressions)", "Designing interactive dashboards and reports"]
    },
    {
      title: "Module 4: Data Visualization with Tableau",
      topics: ["Tableau workspace and data connections", "Creating basic to advanced charts", "Calculated fields and parameters", "Creating dashboards and stories"]
    },
    {
      title: "Module 5: Python Basics for Data Analysts",
      topics: ["Python syntax and data structures", "Data manipulation with Pandas", "Exploratory Data Analysis (EDA)"]
    },
    {
      title: "Module 6: Capstone Project",
      topics: ["End-to-end data analysis lifecycle", "Extracting data from a database", "Cleaning and modeling data", "Building a comprehensive business dashboard"]
    }
  ];

  return (
    <>
      <CourseHero 
        title="Data Analytics & Power BI" 
        subtitleList={[
          "Advanced Excel",
          "SQL Mastery",
          "Power BI",
          "Tableau",
          "Python Basics"
        ]}
        description="Transform raw data into actionable insights. Master SQL, Advanced Excel, Power BI, and Python to become a highly sought-after Data Analyst."
        breadcrumbs={[
          { label: "Courses", link: "/courses" },
          { label: "Data Analytics" }
        ]}
      />
      
      <BatchDetails 
        courseName="Data Analytics"
        nextBatch="Upcoming Week"
        sessionTime="08:00 AM TO 10:00 AM"
        duration="3 months"
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

export default DataAnalytics;
