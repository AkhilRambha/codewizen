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

const DevOpsAutomation = () => {

  const skillsData = [
    {
      title: "Version Control",
      skills: ["Git", "GitHub", "GitLab", "Branching Strategies", "Merge Conflicts"]
    },
    {
      title: "Continuous Integration",
      skills: ["Jenkins", "GitHub Actions", "GitLab CI", "Automated Testing", "Build Pipelines"]
    },
    {
      title: "Containerization",
      skills: ["Docker", "Docker Compose", "Images & Containers", "Registries", "Networking"]
    },
    {
      title: "Orchestration",
      skills: ["Kubernetes", "Pods & Nodes", "Deployments", "Services", "Helm Charts"]
    },
    {
      title: "Configuration Management",
      skills: ["Ansible", "Playbooks", "Inventory Management", "Roles", "Chef/Puppet Basics"]
    },
    {
      title: "Monitoring & Logging",
      skills: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "Alerting"]
    }
  ];

  const curriculumData = [
    {
      title: "Module 1: Linux Basics & Version Control",
      topics: ["Essential Linux Commands", "Shell Scripting basics", "Mastering Git & GitHub", "Collaborative workflows"]
    },
    {
      title: "Module 2: Continuous Integration (CI)",
      topics: ["Introduction to Jenkins", "Creating freestyle and pipeline jobs", "Integrating Git with Jenkins", "Automated testing in pipelines"]
    },
    {
      title: "Module 3: Containerization with Docker",
      topics: ["Docker Architecture", "Writing Dockerfiles", "Docker Volumes and Networks", "Multi-container apps with Docker Compose"]
    },
    {
      title: "Module 4: Container Orchestration (Kubernetes)",
      topics: ["Kubernetes Architecture (Master & Worker nodes)", "Deploying applications to K8s", "Managing Secrets and ConfigMaps", "Scaling and Self-healing"]
    },
    {
      title: "Module 5: Configuration Management (Ansible)",
      topics: ["Agentless architecture", "Writing Ansible Playbooks", "Automating server configuration", "Ansible Galaxy and Roles"]
    },
    {
      title: "Module 6: CI/CD Capstone & Monitoring",
      topics: ["End-to-End CI/CD Pipeline deployment", "Setting up Prometheus & Grafana", "Centralized logging with ELK Stack", "DevOps Interview Preparation"]
    }
  ];

  return (
    <>
      <CourseHero 
        title="DevOps & Automation" 
        subtitleList={[
          "Docker",
          "Kubernetes",
          "Jenkins (CI/CD)",
          "Ansible",
          "Git & GitHub",
          "Prometheus/Grafana"
        ]}
        description="Master the tools and practices that bridge the gap between development and operations. Learn to automate software delivery and infrastructure changes."
        breadcrumbs={[
          { label: "Courses", link: "/courses" },
          { label: "DevOps & Automation" }
        ]}
      />
      
      <BatchDetails 
        courseName="DevOps & Automation"
        nextBatch="Upcoming Week"
        sessionTime="08:00 PM TO 10:00 PM"
        duration="3 months"
      />

      <CourseFeatures />

      <SkillsMastered skillsData={skillsData} />

      <CourseCurriculum curriculumData={curriculumData} />

      <WhyChooseUsCourse />

      <Certification 
        courseName="DevOps Engineer"
      />

      <Testimonials />

      <ReadyToStart 
        title="Ready to automate the world?"
        subtitle="Join the elite group of DevOps Engineers who ensure software is delivered quickly, safely, and reliably."
      />
    </>
  );
};

export default DevOpsAutomation;
