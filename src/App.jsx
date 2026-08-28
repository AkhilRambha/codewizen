import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/common/Navbar/Navbar";
import ScrollToTop from "./components/common/ScrollToTop/ScrollToTop";
import Footer from "./components/common/Footer/Footer";
import Home from "./pages/Home/Home";

import AboutUs from "./pages/About/AboutUs";
import OurTrainers from "./pages/About/OurTrainers";
import WhyChooseUs from "./pages/About/WhyChooseUs";

import CoursesOverview from "./pages/Courses/CoursesOverview";
import JavaFullStack from "./pages/Courses/JavaFullStack";
import PythonFullStack from "./pages/Courses/PythonFullStack";
import DataAnalytics from "./pages/Courses/DataAnalytics";
import SoftwareTesting from "./pages/Courses/SoftwareTesting";
import DataScience from "./pages/Courses/DataScience";
import GenerativeAI from "./pages/Courses/GenerativeAI";

import TrainingOverview from "./pages/Training/TrainingOverview";
import ClassroomTraining from "./pages/Training/ClassroomTraining";
import OnlineTraining from "./pages/Training/OnlineTraining";
import CorporateTraining from "./pages/Training/CorporateTraining";
import InternshipProgram from "./pages/Training/InternshipProgram";
import ProjectTraining from "./pages/Training/ProjectTraining";

import UpcomingBatches from "./pages/Training/UpcomingBatches";
import BatchSchedule from "./pages/Training/BatchSchedule";
import FreeDemo from "./pages/Enrollment/FreeDemo";

import CourseRegistration from "./pages/Enrollment/CourseRegistration";

import PlacementAssistance from "./pages/Placements/PlacementAssistance";
import PlacedStudents from "./pages/Placements/PlacedStudents";
import HiringPartners from "./pages/Placements/HiringPartners";
import CareerSupport from "./pages/Placements/CareerSupport";

import ContactUs from "./pages/Contact/ContactUs";
import OurLocation from "./pages/About/OurLocation";
import CourseEnquiry from "./pages/Enrollment/CourseEnquiry";

import Prices from "./pages/Prices/Prices";

import "./styles/App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-trainers" element={<OurTrainers />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />

        <Route path="/courses" element={<CoursesOverview />} />
        <Route path="/java-full-stack" element={<JavaFullStack />} />
        <Route path="/python-full-stack" element={<PythonFullStack />} />
        <Route path="/data-analytics" element={<DataAnalytics />} />
        <Route path="/software-testing" element={<SoftwareTesting />} />
        <Route path="/data-science" element={<DataScience />} />
        <Route path="/generative-ai" element={<GenerativeAI />} />

        <Route path="/training" element={<TrainingOverview />} />
        <Route path="/classroom-training" element={<ClassroomTraining />} />
        <Route path="/online-training" element={<OnlineTraining />} />
        <Route path="/corporate-training" element={<CorporateTraining />} />
        <Route path="/internship-program" element={<InternshipProgram />} />
        <Route path="/project-training" element={<ProjectTraining />} />

        <Route path="/upcoming-batches" element={<UpcomingBatches />} />
        <Route path="/batch-schedule" element={<BatchSchedule />} />
        <Route path="/free-demo" element={<FreeDemo />} />

        <Route path="/enroll-now" element={<Navigate to="/contact-us" replace />} />
        <Route path="/course-registration" element={<CourseRegistration />} />

        <Route path="/placement-assistance" element={<PlacementAssistance />} />
        <Route path="/placed-students" element={<PlacedStudents />} />
        <Route path="/hiring-partners" element={<HiringPartners />} />
        <Route path="/career-support" element={<CareerSupport />} />

        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/our-location" element={<OurLocation />} />
        <Route path="/course-enquiry" element={<CourseEnquiry />} />
        
        <Route path="/prices" element={<Prices />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;