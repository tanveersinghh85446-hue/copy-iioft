import React, { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";

const Courses = lazy(() => import("./Pages/Courses"));
const Reviews = lazy(() => import("./Pages/Reviews"));
const Contact = lazy(() => import("./Pages/Contact"));
const CourseDetail = lazy(() => import("./Pages/Coursedetail"));
const About = lazy(() => import("./Pages/About"));
const Blog = lazy(() => import("./Pages/Blog"));
const KnowMore = lazy(() => import("./Pages/Kmore"));
const HeroSection = lazy(() => import("./Components/Hero"));
const Enquire = lazy(() => import("./Pages/Enquire"));
const PrivacyPolicy = lazy(() => import("./Pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./Pages/TermsConditions"));

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("careerPopupShown");

    if (hasSeenPopup !== "true") {
      setShowPopup(true);
      localStorage.setItem("careerPopupShown", "true");
    }
  }, []);

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course" element={<Courses />} />
            <Route path="/course/:slug" element={<CourseDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/testimonials" element={<Reviews />} />
            <Route path="/know-more" element={<KnowMore />} />
            <Route path="/Enquire" element={<Enquire />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/TermsConditions" element={<TermsConditions />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
