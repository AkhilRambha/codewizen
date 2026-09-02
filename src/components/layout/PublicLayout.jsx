import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar/Navbar';
import Footer from '../common/Footer/Footer';
import Chatbot from '../common/Chatbot/Chatbot';
import LatestEventModal from '../common/LatestEventModal/LatestEventModal';

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Chatbot />
      <LatestEventModal />
    </>
  );
};

export default PublicLayout;
