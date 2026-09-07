# CodeWizen - Project Overview & Architecture Documentation

Welcome to the CodeWizen web application documentation! This document provides a high-level overview of the technology stack, the project structure, and the tools utilized to build this platform. 

## 🛠 Technology Stack

### 1. Frontend Framework: React + Vite
- **What it is:** React is a component-based UI library. Vite is an ultra-fast build tool and development server.
- **Why we used it:** React allows us to build reusable UI components (like the Navbar, Hero, and Course cards), making the code scalable. Vite provides lightning-fast hot module replacement (HMR), drastically speeding up development times compared to Create React App.

### 2. Backend & Database: Firebase
- **What it is:** Google's Backend-as-a-Service platform.
- **Why we used it:** 
  - **Firebase Authentication:** Handles secure student and admin logins via email/password.
  - **Firebase Realtime Database:** Used as the primary data store. We sync application state (courses, leads, placement data, testimonials) in real-time between the database and the frontend using our custom `useFirebaseData` hook. This ensures that any changes made in the Admin panel instantly reflect on the public website without needing a page refresh.

### 3. Styling: Vanilla CSS
- **What it is:** Pure Cascading Style Sheets without heavy frameworks.
- **Why we used it:** For maximum control over the aesthetics, ensuring a premium, custom look with dynamic micro-animations. It keeps the bundle size low and avoids the learning curve or overhead of utility-first frameworks.

### 4. Routing: React Router DOM
- **What it is:** The standard routing library for React.
- **Why we used it:** To create a Single Page Application (SPA). It allows users to navigate between the Home, Courses, Dashboard, and Admin pages instantly without the browser reloading the page.

### 5. Email Services: EmailJS
- **What it is:** A service that sends emails directly from client-side JavaScript.
- **Why we used it:** Used for sending OTPs (One Time Passwords) during student authentication and for sending course inquiry/lead notifications to the Admin team. It bypasses the need to build and host a separate Node.js backend server just for sending emails.

### 6. Iconography: React Icons (`react-icons/fa`)
- **What it is:** A library providing SVG icons as React components.
- **Why we used it:** FontAwesome (FA) icons are used globally (e.g., social links, checkmarks, trash cans in the admin panel) to enhance the UI and provide visual cues to the user.

---

## 📁 Directory Structure

Here is a high-level overview of where everything lives and why:

```text
SOFTWARE INSTITUTE/
├── public/                 # Static assets served at the root URL.
│   └── images/             # All global placeholder images, logos, and course thumbnails.
├── src/                    # The main source code directory.
│   ├── components/         # Reusable UI pieces used across multiple pages.
│   │   ├── common/         # Globally shared components (Navbar, Footer, PageHero, Modal).
│   │   ├── layout/         # Structural wrappers (AdminLayout for the admin dashboard).
│   │   └── sections/       # Distinct sections that make up pages (Hero, Placements, Testimonials).
│   ├── data/               # Static fallback data.
│   │   └── defaultData.js  # The source of truth for fallback dummy data before Firebase loads.
│   ├── hooks/              # Custom React Hooks.
│   │   └── useFirebaseData.js # Critical hook that binds Firebase Realtime DB nodes to React state.
│   ├── pages/              # Dedicated route views (Home, Courses, Admin, Dashboard).
│   ├── styles/             # Global CSS files (App.css, global.css).
│   ├── utils/              # Helper functions (like exportCsv.js for the Admin panel).
│   ├── App.jsx             # The root component where all routing and layouts are defined.
│   └── main.jsx            # The React entry point that attaches the app to the DOM.
├── index.html              # The main HTML file.
├── vite.config.js          # Configuration for the Vite bundler.
└── package.json            # Project metadata and dependencies.
```

## 🔐 Core Workflows

### 1. Data Synchronization (The Admin Panel)
We built a custom hook called `useFirebaseData`. 
- **Where it's used:** Used in almost every component that displays dynamic data (e.g., `Courses.jsx`, `Testimonials.jsx`, `AdminLeads.jsx`).
- **How it works:** When a component mounts, it subscribes to a specific Firebase node (like `codewizen_leads`). If the admin updates a lead in the `AdminLeads` dashboard, Firebase instantly pushes that update to all connected clients. If Firebase is empty or offline, it elegantly falls back to the hardcoded dummy data in `src/data/defaultData.js`.

### 2. Authentication Flow
- **Where it's used:** `AdminLogin.jsx` and `StudentAuth.jsx`.
- **How it works:** 
  - Admin login requires an email and password verified by Firebase Auth.
  - Student login is a two-step process: First, Firebase Auth verifies the account. Second, EmailJS sends an OTP to the student's email. The student must enter this OTP to finalize login, and this verification state is saved in the local storage (`codewizen_device_verified_...`).

### 3. Student Dashboard & Store
- **Where it's used:** `BundleDashboard.jsx` and `Offers.jsx`.
- **How it works:** Students can view active courses in the "Store". Upon buying, a pending order is created in Firebase. The Admin reviews this order in `AdminOffers.jsx` and marks it as "Paid". The `BundleDashboard.jsx` constantly listens to this status, and once marked as Paid, instantly unlocks the course content for the student.
