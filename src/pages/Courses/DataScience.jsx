import React from 'react';
import CourseHero from '../../components/common/CourseHero/CourseHero';
import BatchDetails from '../../components/sections/BatchDetails/BatchDetails';
import CourseFeatures from '../../components/sections/CourseFeatures/CourseFeatures';
import SkillsMastered from '../../components/sections/SkillsMastered/SkillsMastered';
import CourseCurriculum from '../../components/sections/CourseCurriculum/CourseCurriculum';
import WhyChooseUsCourse from '../../components/sections/WhyChooseUsCourse/WhyChooseUsCourse';
import Certification from '../../components/sections/Certification/Certification';
import ReadyToStart from '../../components/sections/ReadyToStart/ReadyToStart';

const DataScience = () => {

  const skillsData = [
    {
      title: "Data Manipulation & Analysis",
      skills: ["Python", "Pandas", "NumPy", "SQL", "Data Wrangling", "EDA"]
    },
    {
      title: "Data Visualization",
      skills: ["Matplotlib", "Seaborn", "Tableau", "Power BI", "Plotly"]
    },
    {
      title: "Machine Learning (Supervised)",
      skills: ["Linear Regression", "Logistic Regression", "Decision Trees", "Random Forest", "SVM"]
    },
    {
      title: "Machine Learning (Unsupervised)",
      skills: ["K-Means Clustering", "PCA", "Hierarchical Clustering", "Anomaly Detection"]
    },
    {
      title: "Advanced AI Concepts",
      skills: ["Neural Networks", "NLP Basics", "Time Series Analysis", "Recommendation Systems"]
    },
    {
      title: "Deployment & Tools",
      skills: ["Git & GitHub", "Jupyter", "Docker basics", "Flask/Streamlit", "AWS Basics"]
    }
  ];

  const curriculumData = [
    {
      title: "Module 1: Python for Data Science",
      topics: ["Python Basics & Data Structures", "Functions and OOP concepts", "NumPy for numerical computation", "Pandas for data manipulation"]
    },
    {
      title: "Module 2: Statistics & Exploratory Data Analysis (EDA)",
      topics: ["Descriptive & Inferential Statistics", "Probability Distributions", "Hypothesis Testing", "Data Cleaning and Feature Engineering"]
    },
    {
      title: "Module 3: Data Visualization",
      topics: ["Creating charts with Matplotlib & Seaborn", "Interactive plots with Plotly", "Dashboarding with Tableau", "Dashboarding with Power BI"]
    },
    {
      title: "Module 4: SQL & Database Management",
      topics: ["RDBMS Concepts", "Writing Complex Queries", "Joins and Subqueries", "Window Functions"]
    },
    {
      title: "Module 5: Machine Learning Algorithms",
      topics: ["Supervised vs Unsupervised Learning", "Regression & Classification Models", "Ensemble Methods (XGBoost, Random Forest)", "Model Evaluation Metrics"]
    },
    {
      title: "Module 6: Capstone Project & Deployment",
      topics: ["End-to-end Machine Learning Project", "Building a Web App with Streamlit", "Deploying models to the cloud", "Resume & Interview Prep"]
    }
  ];

  return (
    <>
      <CourseHero 
        title="Data Science & Machine Learning" 
        subtitleList={[
          "Python",
          "Machine Learning",
          "Deep Learning",
          "NLP",
          "SQL",
          "Power BI"
        ]}
        description="Become a full-stack Data Scientist. Master everything from data wrangling to predictive modeling and AI."
        breadcrumbs={[
          { label: "Courses", link: "/courses" },
          { label: "Data Science" }
        ]}
      />
      
      <BatchDetails 
        nextBatch="Upcoming Week"
        sessionTime="10:00 AM TO 12:00 PM"
        duration="6 months"
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

export default DataScience;
