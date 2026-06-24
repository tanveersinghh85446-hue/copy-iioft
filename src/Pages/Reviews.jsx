import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const TESTIMONIALS = [
  {
    name: "Urvi",
    course: "Data Analytics",
    review:
      "IIOFT changed my life. After learning Data Analytics from here, I got placed in a top company. The faculty is very supportive!",
    Image: "/Urvi.AVIF",
  },
  {
    name: "Vishal Yadav",
    course: "Data Analytics & Business Analytics",
    review:
      "Best institute for design courses in Delhi. The practical projects gave me real-world experience. Now I am doing freelance work and earning well. After learning from here Data Analytics & Business Analytics, The faculty is very supportive!",
    Image: "/Vishal Yadav.AVIF",
  },
  {
    name: "Sourav",
    course: "DCA",
    review:
      "After learning DCA from IIOFT's curriculum is industry-aligned. The learning approach is completely hands-on. All my doubts were cleared and I also got placement.",
    Image: "/Sourav.AVIF",
  },
  {
    name: "Student",
    course: "Web Development",
    review:
      "I took courses from many places, but I never got practical training like IIOFT. After learning from here, I started my own agency.",
    Image: "/Student.AVIF",
  },
  {
    name: "Bharti",
    course: "SAP FICO",
    review:
      "Hyy I'm Bharti I completed my course from IIOFT / SAP FICO. The instructors are very experienced and they give personal attention to every student. I received a lot of help in preparing my portfolio.",
    Image: "/Bharti.AVIF",
  },
  {
    name: "Student",
    course: "Advanced Finance & Accounting",
    review:
      "The course content was very detailed. Now I can confidently handle accounts. I would recommend IIOFT to everyone!",
    Image: "/Student.AVIF",
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
      <header className="py-12 px-4 text-center bg-linear-to-r from-blue-700 via-indigo-700 to-blue-900 text-white animate-fade-in">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          What Our Students Say
        </h1>
        <p className="mt-4 text-lg opacity-90">
          Real stories from real students who transformed their careers at IIOFT
        </p>
      </header>

      {/* TESTIMONIALS GRID */}
      <section className="py-20 px-6 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-500 mb-12 text-lg animate-fade-in">
            Skill Up with IIOFT — Where Learning Meets Opportunity. Join
            Thousands of Successful Alumni!
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl shadow-xl p-6 flex flex-col gap-4 border border-gray-100 transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${i * 0.1}s` }}
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
                    <p className="font-bold text-gray-800 text-base">
                      {t.name}
                    </p>
                    <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full w-fit">
                      {t.course}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER BOTTOM ── */}
      <footer className="bg-blue-950 mt-6 border-t border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Contact Section */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left w-full lg:w-auto">
              <a
                href="tel:+919560307098"
                className="flex items-center gap-2 text-blue-300 hover:text-white text-sm transition-all duration-300 break-all"
              >
                <span className="text-base">📞</span>
                <span>+91 9560307098</span>
              </a>

              <a
                href="mailto:info@iioft.co.in"
                className="flex items-center gap-2 text-blue-300 hover:text-white text-sm transition-all duration-300 break-all"
              >
                <span className="text-base">✉️</span>
                <span className="break-all">info@iioft.co.in</span>
              </a>
            </div>

            {/* Policy Links */}
            <div className="flex flex-wrap justify-center items-center gap-3 text-center">
              <Link
                to="/PrivacyPolicy"
                className="text-blue-300 hover:text-white text-sm transition-all duration-300"
              >
                Privacy Policy
              </Link>

              <span className="text-white hidden sm:block">||</span>

              <Link
                to="/TermsConditions"
                className="text-blue-300 hover:text-white text-sm transition-all duration-300"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="mt-5 pt-4 border-t border-blue-900 text-center lg:text-left">
            <p className="text-blue-400 text-xs sm:text-sm leading-relaxed">
              © 2026 IIOFT. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
