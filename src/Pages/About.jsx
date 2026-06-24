import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

// ─── Static data ──────────────────────────────────────────────────────────────

const MISSION_VISION = [
  {
    title: "Mission",
    text: "To nurture innovative minds and prepare students for future technologies.",
  },
  {
    title: "Vision",
    text: "To be a leading hub for cutting-edge research and futuristic education.",
  },
];

const GALLERY_IMAGES = ["/AB.AVIF", "/AB2.AVIF", "/Team.AVIF"];

const USP_ITEMS = [
  "Advanced Curriculum",
  "State-of-the-Art Labs",
  "Expert Faculty",
  "Global Opportunities",
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50 overflow-hidden">
      <Helmet>
        <title>
          About Us - IIOFT | International Institute of Futuristic Technology
          Delhi
        </title>
        <meta
          name="description"
          content="IIOFT ke baare mein jaano. Hamaara mission hai students ko future-ready banana with world-class technology education. Advanced Curriculum, Expert Faculty aur Global Opportunities."
        />
        <meta
          name="keywords"
          content="about IIOFT, IIOFT Delhi, International Institute of Futuristic Technology, best technology institute Delhi, futuristic education, IIOFT mission vision"
        />
        <meta
          property="og:title"
          content="About Us - IIOFT | International Institute of Futuristic Technology Delhi"
        />
        <meta
          property="og:description"
          content="IIOFT ke baare mein jaano. Advanced Curriculum, Expert Faculty aur 100% Placement Support."
        />
        <meta property="og:url" content="https://iioft.co.in/about" />
        <link rel="canonical" href="https://iioft.co.in/about" />
      </Helmet>

      {/* HEADER */}
      <header className="py-12 px-4 text-center bg-linear-to-r from-blue-700 via-indigo-700 to-blue-900 text-white animate-fade-in">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          International Institute of Futuristic Technology
        </h1>
        <p className="mt-4 text-lg opacity-90">
          Shaping minds for tomorrow's technology
        </p>
      </header>

      {/* MISSION & VISION */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {MISSION_VISION.map(({ title, text }) => (
            <div
              key={title}
              className="p-10 rounded-3xl backdrop-blur-lg bg-white/40 border border-white shadow-2xl text-center transition-all duration-300 hover:scale-105 animate-slide-up"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-700">
                {title}
              </h2>
              <p className="text-lg font-medium">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT OVERVIEW */}
      <section className="py-16 bg-linear-to-r from-indigo-600 to-blue-600 text-center text-white px-6 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          About <span className="font-serif">(IIOFT)</span>
        </h2>
        <p className="text-lg md:text-xl max-w-4xl mx-auto">
          IIOFT is dedicated to equipping students with knowledge and skills for
          emerging technologies and global challenges.
        </p>
      </section>

      {/* IMAGE GALLERY */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-3xl shadow-2xl group relative transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <img
                src={img}
                alt="Gallery"
                className="w-full h-96 object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
            </div>
          ))}
        </div>
      </section>

      {/* USP SECTION */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose (IIOFT)
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {USP_ITEMS.map((item, i) => (
            <div
              key={i}
              className="p-8 bg-linear-to-br from-blue-100 to-indigo-100 rounded-2xl shadow-xl text-center transition-all duration-300 hover:-translate-y-4 animate-slide-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <h3 className="font-bold text-xl mb-3">{item}</h3>
              <p>Designed for future industries and global careers.</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-linear-to-r from-blue-600 to-indigo-600 text-white text-center px-6 animate-scale-in">
        <h2 className="text-4xl font-bold mb-6">
          Shape Your Future with IIOFT
        </h2>
        <p className="text-lg">
          Explore our programs and admissions to begin your journey today.
        </p>
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
