import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

// ─── Static data ──────────────────────────────────────────────────────────────

const VISION_MISSION = [
  {
    title: "Our Vision",
    icon: "🌍",
    accent: "from-green-400 to-green-600",
    ring: "ring-green-200",
    badge: "bg-green-50 text-green-700",
    text: "To become a globally recognized institute empowering students with next-generation technical expertise and leadership qualities.",
  },
  {
    title: "Our Mission",
    icon: "🚀",
    accent: "from-blue-500 to-blue-700",
    ring: "ring-blue-200",
    badge: "bg-blue-50 text-blue-700",
    text: "To provide practical, industry-aligned training that prepares students for real-world challenges and successful professional careers.",
  },
];

const WHY_CHOOSE = [
  {
    icon: "🎓",
    title: "Expert Faculty",
    text: "Learn from certified industry professionals with real-world experience and proven track records.",
    stat: "50+ Experts",
  },
  {
    icon: "🏛️",
    title: "Modern Infrastructure",
    text: "Advanced labs, smart classrooms, and the latest technology tools to enhance your learning.",
    stat: "10,000+ sq ft",
  },
  {
    icon: "💼",
    title: "Career Support",
    text: "Dedicated placement cell guiding every student toward top companies and dream roles.",
    stat: "100% Placement",
  },
];

const TEAM = [
  {
    name: "Rampal Soni",
    role: "Founder & CEO",
    img: "Rampal.AVIF",
    initial: "R",
  },
  {
    name: "Manoj Soni",
    role: "Head of Department",
    img: "Manoj Soni.AVIF",
    initial: "M",
  },
  {
    name: "Vinay Rojha",
    role: "Marketing Head & Managing Director",
    img: "Vinay Soni.AVIF",
    initial: "V",
  },
  {
    name: "Akash Soni",
    role: "Technical Head",
    img: "Akash Soni.AVIF",
    initial: "A",
  },
  {
    name: "Anjali Singh",
    role: "Career & Placement Coordinator",
    img: "Anjali.AVIF",
    initial: "An",
  },
];

// ─── Team Card ────────────────────────────────────────────────────────────────

function TeamCard({ name, role, img, initial }) {
  return (
    <div className="group relative bg-white rounded-3xl shadow-md hover:shadow-2xl hover:shadow-blue-200 transition-all duration-300 overflow-hidden hover:-translate-y-2 animate-scale-in">
      {/* Top gradient bar */}
      <div className="h-1.5 w-full bg-linear-to-r from-blue-500 via-indigo-500 to-blue-700" />

      <div className="p-6 sm:p-8 text-center">
        {/* Avatar */}
        <div className="relative w-24 h-24 mx-auto mb-4">
          <div className="absolute inset-0 rounded-full bg-linear-to-br from-blue-400 to-indigo-600 blur-sm opacity-30 scale-110" />
          <img
            src={img}
            alt={name}
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
            className="relative w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
          />
          {/* Fallback avatar */}
          <div
            style={{ display: "none" }}
            className="relative w-24 h-24 rounded-full bg-linear-to-br from-blue-500 to-indigo-700 border-4 border-white shadow-lg items-center justify-center text-white font-bold text-2xl"
          >
            {initial}
          </div>
        </div>

        <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-1">
          {name}
        </h3>
        <p className="text-blue-600 text-xs sm:text-sm font-medium">{role}</p>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Kmore() {
  return (
    <div className="bg-gray-50 overflow-hidden font-sans">
      <Helmet>
        <title>Know More - IIOFT Delhi | Faculty, Team & Why Choose Us</title>
        <meta
          name="description"
          content="IIOFT Delhi ke baare mein aur jaano. Expert Faculty, Modern Infrastructure, Career Support aur hamaari dedicated team ke baare mein detail mein samjho. Founder: Rampal Soni."
        />
        <meta
          name="keywords"
          content="IIOFT know more, IIOFT team, IIOFT faculty Delhi, IIOFT founder, why choose IIOFT, futuristic technology institute Delhi, IIOFT placements, IIOFT infrastructure"
        />
        <meta
          property="og:title"
          content="Know More - IIOFT Delhi | Faculty, Team & Why Choose Us"
        />
        <meta
          property="og:description"
          content="IIOFT ke Expert Faculty, Modern Infrastructure aur Career Support ke baare mein detail mein jaano."
        />
        <meta property="og:url" content="https://iioft.co.in/know-more" />
        <link rel="canonical" href="https://iioft.co.in/know-more" />
      </Helmet>

      {/* ── HERO ── */}
      <section className="relative bg-linear-to-br from-blue-700 via-indigo-700 to-blue-900 text-white py-24 sm:py-32 px-6 text-center overflow-hidden">
        {/* Decorative orbs */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-20 translate-x-1/3 translate-y-1/3 pointer-events-none" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white text-xs sm:text-sm px-4 py-1.5 rounded-full mb-8 animate-scale-in">
            <span className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse inline-block" />
            International Institute of Futuristic Technology
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight animate-fade-in">
            Shaping The Future <br className="hidden sm:block" />
            With{" "}
            <span className="text-yellow-300 font-serif italic">IIOFT</span>
          </h1>

          <p className="mt-6 text-sm sm:text-lg max-w-2xl mx-auto text-blue-100 leading-relaxed animate-fade-in">
            Industry-ready skills, innovation-driven learning, and
            career-focused programs — built for the leaders of tomorrow.
          </p>

          {/* Stat pills */}
          <div className="mt-10 flex flex-wrap justify-center gap-3 animate-slide-up">
            {["500+ Graduates", "100% Placement Rate", "42+ Courses"].map(
              (s) => (
                <span
                  key={s}
                  className="bg-white/10 border border-white/20 backdrop-blur-sm text-white text-xs sm:text-sm px-4 py-2 rounded-full font-medium"
                >
                  {s}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-14 animate-fade-in">
          <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">
            What Drives Us
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mt-2">
            Our Core Foundation
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {VISION_MISSION.map(
            ({ title, icon, accent, ring, badge, text }, i) => (
              <div
                key={title}
                className={`relative bg-white rounded-3xl shadow-lg ring-2 ${ring} p-8 sm:p-10 overflow-hidden transition-all duration-300 hover:scale-105 animate-slide-up`}
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {/* Gradient top bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r ${accent}`}
                />
                {/* Background glow */}
                <div
                  className={`absolute -top-10 -right-10 w-40 h-40 bg-linear-to-br ${accent} rounded-full blur-2xl opacity-10`}
                />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-3xl">{icon}</span>
                    <span
                      className={`${badge} text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider`}
                    >
                      {title}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {text}
                  </p>
                </div>
              </div>
            ),
          )}
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 sm:py-28 bg-linear-to-br from-indigo-50 via-blue-50 to-blue-100 relative overflow-hidden">
        {/* Decorative shape */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-blue-300 to-transparent opacity-60" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="mb-14 animate-fade-in">
            <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">
              Our Strengths
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mt-2">
              Why Choose{" "}
              <span className="text-blue-500 font-serif italic">IIOFT?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {WHY_CHOOSE.map(({ icon, title, text, stat }, i) => (
              <div
                key={title}
                className="bg-white rounded-3xl shadow-md hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 p-8 text-left relative overflow-hidden hover:-translate-y-3 animate-slide-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-3xl" />

                <div className="text-4xl mb-5">{icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {text}
                </p>
                <div className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-full">
                  {stat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-linear-to-br from-blue-600 via-blue-500 to-indigo-600 relative overflow-hidden">
        {/* Decorative elements */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl opacity-5" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-indigo-300 rounded-full blur-3xl opacity-10" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-14 animate-fade-in">
            <span className="text-blue-200 font-semibold text-sm tracking-widest uppercase">
              The People Behind IIOFT
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2">
              Meet Our Expert Team
            </h2>
          </div>

          {/* First row: 3 cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
            {TEAM.slice(0, 3).map((member, i) => (
              <div key={member.name} style={{ animationDelay: `${i * 0.1}s` }}>
                <TeamCard {...member} />
              </div>
            ))}
          </div>

          {/* Second row: 2 cards centered */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {TEAM.slice(3).map((member, i) => (
              <div
                key={member.name}
                style={{ animationDelay: `${(i + 3) * 0.1}s` }}
              >
                <TeamCard {...member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 sm:py-32 bg-linear-to-br from-blue-800 via-indigo-800 to-blue-900 text-center text-white px-6 overflow-hidden animate-fade-in">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-150 h-150 bg-blue-500 rounded-full blur-3xl opacity-10 pointer-events-none" />

        <div className="relative max-w-3xl mx-auto">
          <span className="inline-block bg-yellow-300 text-blue-900 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6">
            Your Journey Starts Here
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Start Your Future Today
          </h2>

          <p className="mt-5 text-base sm:text-lg text-blue-200 max-w-xl mx-auto leading-relaxed">
            Take the first step toward a successful career in technology with
            International Institute of Futuristic Technology.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919560307098"
              className="bg-yellow-300 text-blue-900 font-bold px-8 py-3.5 rounded-full text-sm sm:text-base shadow-lg hover:shadow-yellow-300/40 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Call Now: +91 9560307098
            </a>
            <a
              href="mailto:info@iioft.co.in"
              className="bg-white/10 border border-white/20 backdrop-blur-sm text-white font-semibold px-8 py-3.5 rounded-full text-sm sm:text-base hover:bg-white/20 transition-all duration-200"
            >
              Email Us →
            </a>
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
