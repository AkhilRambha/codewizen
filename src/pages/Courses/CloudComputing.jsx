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

const CloudComputing = () => {

  const skillsData = [
    {
      title: "AWS Fundamentals",
      skills: ["EC2", "S3", "VPC", "IAM", "Route 53"]
    },
    {
      title: "Azure Basics",
      skills: ["Azure VMs", "Blob Storage", "Azure AD", "Azure Virtual Networks", "App Services"]
    },
    {
      title: "Cloud Security",
      skills: ["Encryption", "Security Groups", "WAF", "Compliance", "Identity Management"]
    },
    {
      title: "Serverless Computing",
      skills: ["AWS Lambda", "Azure Functions", "API Gateway", "DynamoDB", "Event Grid"]
    },
    {
      title: "Infrastructure as Code",
      skills: ["Terraform", "CloudFormation", "ARM Templates", "Ansible", "Chef/Puppet"]
    },
    {
      title: "Monitoring & Scaling",
      skills: ["CloudWatch", "Azure Monitor", "Auto Scaling", "Load Balancing", "Cost Management"]
    }
  ];

  const curriculumData = [
    {
      title: "Module 1: Introduction to Cloud Computing",
      topics: ["Cloud Service Models (IaaS, PaaS, SaaS)", "Cloud Deployment Models", "AWS vs Azure Comparison", "Creating Free Tier Accounts"]
    },
    {
      title: "Module 2: Core Compute Services",
      topics: ["Provisioning AWS EC2 and Azure VMs", "Managing Server Images (AMIs)", "Understanding Pricing Models", "Connecting via SSH/RDP"]
    },
    {
      title: "Module 3: Storage & Databases",
      topics: ["Object Storage (S3 & Blob)", "Relational Databases (RDS & Azure SQL)", "NoSQL Databases", "Data Backup and Recovery"]
    },
    {
      title: "Module 4: Networking & Security",
      topics: ["Designing VPCs and VNETs", "Subnets, Route Tables, and Gateways", "Identity and Access Management (IAM/Azure AD)", "Implementing Security Groups and Firewalls"]
    },
    {
      title: "Module 5: High Availability & Scaling",
      topics: ["Elastic Load Balancing", "Auto Scaling Groups", "Content Delivery Networks (CloudFront)", "Disaster Recovery Strategies"]
    },
    {
      title: "Module 6: Capstone Project & Certification Prep",
      topics: ["Deploying a Multi-Tier Architecture", "Infrastructure as Code with Terraform", "AWS Solutions Architect / Azure Fundamentals Prep", "Mock Exams and Interviews"]
    }
  ];

  return (
    <>
      <CourseHero 
        title="Cloud Computing (AWS / Azure)" 
        subtitleList={[
          "Amazon Web Services (AWS)",
          "Microsoft Azure",
          "Cloud Security",
          "Serverless Architecture",
          "Terraform (IaC)",
          "Load Balancing"
        ]}
        description="Become a certified Cloud Architect. Master the world's leading cloud platforms to design, deploy, and manage highly scalable and secure infrastructure."
        breadcrumbs={[
          { label: "Courses", link: "/courses" },
          { label: "Cloud Computing" }
        ]}
      />
      
      <BatchDetails 
        courseName="Cloud Computing (AWS / Azure)"
        nextBatch="Upcoming Week"
        sessionTime="07:00 AM TO 09:00 AM"
        duration="2.5 months"
      />

      <CourseFeatures />

      <SkillsMastered skillsData={skillsData} />

      <CourseCurriculum curriculumData={curriculumData} />

      <WhyChooseUsCourse />

      <Certification 
        courseName="Cloud Computing Architect"
      />

      <Testimonials />

      <ReadyToStart 
        title="Ready to rule the Cloud?"
        subtitle="Start your journey to becoming a highly paid Cloud Architect with our hands-on certification training."
      />
    </>
  );
};

export default CloudComputing;
