import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
const TESTIMONIALS = [
  {
    name: "Urvi",
    course: "Data Analytics",
    review:
      "IIOFT changed my life. After learning Data Analytics from here, I got placed in a top company. The faculty is very supportive!",
    Image: "/Urvi.jpeg",
  },
  {
    name: "Vishal Yadav",
    course: "Data Analytics & Business Analytics",
    review:
      "Best institute for design courses in Delhi. The practical projects gave me real-world experience. Now I am doing freelance work and earning well. After learning from here Data Analytics & Business Analytics, The faculty is very supportive!",
    Image: "/Vishal Yadav.jpeg",
  },
  {
    name: "Sourav",
    course: "DCA",
    review:
      "After learning DCA from IIOFT's curriculum is industry-aligned. The learning approach is completely hands-on. All my doubts were cleared and I also got placement.",
    Image: "/Sourav.jpeg",
  },
  {
    name: "Student",
    course: "Web Development",
    review:
      "I took courses from many places, but I never got practical training like IIOFT. After learning from here, I started my own agency.",
    Image: "",
  },
  {
    name: "Bharti",
    course: "SAP FICO",
    review:
      "Hyy I'm Bharti I completed my course from IIOFT / SAP FICO. The instructors are very experienced and they give personal attention to every student. I received a lot of help in preparing my portfolio.",
    Image: "/Bharti.jpeg",
  },
  {
    name: "Student",
    course: "Advanced Finance & Accounting",
    review:
      "The course content was very detailed. Now I can confidently handle accounts. I would recommend IIOFT to everyone!",
    Image: "",
  },
];

export default function Reviews() {
  return (
    <div className="font-sans bg-gray-50 overflow-hidden">

      <Helmet>
        <title>Reviews - IIOFT | Student Reviews</title>
        <meta
          name="description"
          content="IIOFT students ki real stories. Janiye kaise IIOFT ne unki zindagi badal di. 100% Placement Support ke saath Data Science, Web Development aur aur bhi courses."
        />
        <meta
          name="keywords"
          content="IIOFT testimonials, IIOFT student reviews, IIOFT placement stories, best institute Delhi reviews"
        />
        <link rel="canonical" href="https://iioft.co.in/testimonials" />
      </Helmet>

      {/* HEADER */}
      <motion.header
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="py-12 px-4 text-center bg-linear-to-r from-blue-700 via-indigo-700 to-blue-900 text-white"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          What Our Students Say
        </h1>
        <p className="mt-4 text-lg opacity-90">
          Real stories from real students who transformed their careers at IIOFT
        </p>
      </motion.header>

      {/* TESTIMONIALS GRID */}
      <section className="py-20 px-6 min-h-screen">
        <div className="max-w-6xl mx-auto">

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center text-gray-500 mb-12 text-lg"
          >
            Skill Up with IIOFT — Where Learning Meets Opportunity. Join Thousands of Successful Alumni!
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl shadow-xl p-6 flex flex-col gap-4 border border-gray-100"
              >
                {/* Stars */}
                <div className="flex gap-1 text-yellow-400 text-xl">
                  {"★★★★★"}
                </div>

                {/* Review */}
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  "{t.review}"
                </p>

                {/* Student Info — badi image + naam & course side mein */}
                <div className="flex items-center gap-4 mt-2">

                  {/* Badi Image */}
                  <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 bg-blue-600 flex items-center justify-center shadow-md">
                    {t.Image ? (
                      <img
                        src={t.Image}
                        alt={t.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-white text-3xl">?</span>
                    )}
                  </div>

                  {/* Naam + Course */}
                  <div className="flex flex-col gap-1">
                    <p className="font-bold text-gray-800 text-base">{t.name}</p>
                    <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full w-fit">
                      {t.course}
                    </span>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER BOTTOM ── */}
      <footer className="bg-blue-950 mt-6">
        <div className="max-w-6xl mx-auto px-4 py-6 sm:py-5">
          {/* Mobile: Stacked Layout | Desktop: Single Row */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
            {/* Copyright */}
            <p className="text-blue-300 text-xs sm:text-sm text-center sm:text-left">
              © 2026 IIOFT. All Rights Reserved.
            </p>

            {/* Contact Links */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
              <a
                href="tel:+919560307098"
                className="text-blue-400 hover:text-white text-xs sm:text-sm transition-colors"
              >
                📞 +91 9560307098
              </a>
              <a
                href="mailto:info@iioft.co.in"
                className="text-blue-400 hover:text-white text-xs sm:text-sm transition-colors break-all"
              >
                ✉️ info@iioft.co.in
              </a>
            </div>

            {/* Policy Links */}
            <div className="flex gap-4 sm:gap-3 items-center justify-center flex-wrap">
              <Link
                className="text-blue-400 hover:text-white text-xs sm:text-sm transition-colors whitespace-nowrap"
                to="/PrivacyPolicy"
              >
                Privacy Policy
              </Link>
              <span className="text-blue-600 hidden sm:inline">|</span>
              <Link
                className="text-blue-400 hover:text-white text-xs sm:text-sm transition-colors whitespace-nowrap"
                to="/TermsConditions"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}