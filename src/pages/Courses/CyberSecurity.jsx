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

const CyberSecurity = () => {

  const skillsData = [
    {
      title: "Network Security",
      skills: ["Firewalls", "VPNs", "IDS/IPS", "Packet Sniffing", "Wireshark"]
    },
    {
      title: "Ethical Hacking",
      skills: ["Penetration Testing", "Vulnerability Assessment", "Metasploit", "Nmap", "Burp Suite"]
    },
    {
      title: "Cryptography",
      skills: ["Encryption Algorithms", "PKI", "Hashing", "Digital Signatures", "SSL/TLS"]
    },
    {
      title: "Web App Security",
      skills: ["OWASP Top 10", "SQL Injection", "XSS", "CSRF", "Security Auditing"]
    },
    {
      title: "Incident Response",
      skills: ["Threat Hunting", "Malware Analysis", "Forensics", "SIEM (Splunk)", "Disaster Recovery"]
    },
    {
      title: "Compliance & Risk",
      skills: ["ISO 27001", "GDPR", "Risk Assessment", "Security Policies", "Auditing"]
    }
  ];

  const curriculumData = [
    {
      title: "Module 1: Introduction to Cybersecurity & Networking",
      topics: ["OSI & TCP/IP Models", "Basic Networking Concepts", "Introduction to Cyber Threats", "Setting up a Kali Linux Lab"]
    },
    {
      title: "Module 2: Information Gathering & Scanning",
      topics: ["Footprinting and Reconnaissance", "Network Scanning using Nmap", "Enumeration techniques", "Vulnerability Analysis"]
    },
    {
      title: "Module 3: System & Network Hacking",
      topics: ["Password Cracking techniques", "Gaining Access (Metasploit)", "Privilege Escalation", "Sniffing and Man-in-the-Middle (MITM) attacks"]
    },
    {
      title: "Module 4: Web Application Security",
      topics: ["Understanding OWASP Top 10", "Exploiting SQL Injections", "Cross-Site Scripting (XSS)", "Using Burp Suite for Web Pentesting"]
    },
    {
      title: "Module 5: Cryptography & Malware Threats",
      topics: ["Symmetric vs Asymmetric Encryption", "Public Key Infrastructure (PKI)", "Trojans, Backdoors, and Ransomware", "Malware Analysis basics"]
    },
    {
      title: "Module 6: Security Operations & Incident Response",
      topics: ["Introduction to SIEM (Splunk/QRadar)", "Log Management and Analysis", "Incident Handling Process", "Cybersecurity Career & Interview Prep"]
    }
  ];

  return (
    <>
      <CourseHero 
        title="Cybersecurity & Ethical Hacking" 
        subtitleList={[
          "Penetration Testing",
          "Network Security",
          "Web App Security",
          "Cryptography",
          "Incident Response",
          "Kali Linux"
        ]}
        description="Learn to think like a hacker to defend against them. Master the tools and techniques used by cybersecurity professionals to secure enterprise systems."
        breadcrumbs={[
          { label: "Courses", link: "/courses" },
          { label: "Cybersecurity" }
        ]}
      />
      
      <BatchDetails 
        courseName="Cybersecurity & Ethical Hacking"
        nextBatch="Upcoming Week"
        sessionTime="06:00 PM TO 08:00 PM"
        duration="3.5 months"
      />

      <CourseFeatures />

      <SkillsMastered skillsData={skillsData} />

      <CourseCurriculum curriculumData={curriculumData} />

      <WhyChooseUsCourse />

      <Certification 
        courseName="Certified Ethical Hacker (CEH) Prep"
      />

      <Testimonials />

      <ReadyToStart 
        title="Ready to secure the digital world?"
        subtitle="Join our elite Cybersecurity program and become a highly sought-after security professional."
      />
    </>
  );
};

export default CyberSecurity;
