import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import coursesData from "../data/courses.json";

// const categoryColors = {
//   master: {
//     bg: "bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600",
//     badge: "bg-blue-700/70",
//     accent: "text-blue-600",
//     border: "border-blue-200",
//     btnBorder: "border-blue-600",
//     btnHover: "hover:bg-blue-600",
//     tabActive: "bg-gradient-to-r from-blue-700 to-blue-600",
//   },
//   advance: {
//     bg: "bg-gradient-to-br from-indigo-950 via-indigo-800 to-indigo-600",
//     badge: "bg-indigo-700/70",
//     accent: "text-indigo-600",
//     border: "border-indigo-200",
//     btnBorder: "border-indigo-600",
//     btnHover: "hover:bg-indigo-600",
//     tabActive: "bg-gradient-to-r from-indigo-700 to-indigo-600",
//   },
// };

const categoryColors = {
  master: {
    bg: "bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600",
    badge: "bg-blue-700/70",
    accent: "text-blue-600",
    border: "border-blue-200",
    btnBorder: "border-blue-600",
    btnHover: "hover:bg-blue-600",
    tabActive: "bg-gradient-to-r from-blue-700 to-blue-600",
  },

  "soft skill's": {
    bg: "bg-gradient-to-br from-green-900 via-green-800 to-green-600",
    badge: "bg-green-700/70",
    accent: "text-green-600",
    border: "border-green-200",
    btnBorder: "border-green-600",
    btnHover: "hover:bg-green-600",
    tabActive: "bg-gradient-to-r from-green-700 to-green-600",
  },

  "tranding course": {
    bg: "bg-gradient-to-br from-yellow-700 via-yellow-600 to-orange-500",
    badge: "bg-yellow-600/70",
    accent: "text-yellow-600",
    border: "border-yellow-200",
    btnBorder: "border-yellow-600",
    btnHover: "hover:bg-yellow-600",
    tabActive: "bg-gradient-to-r from-yellow-600 to-orange-500",
  },

  advance: {
    bg: "bg-gradient-to-br from-indigo-950 via-indigo-800 to-indigo-600",
    badge: "bg-indigo-700/70",
    accent: "text-indigo-600",
    border: "border-indigo-200",
    btnBorder: "border-indigo-600",
    btnHover: "hover:bg-indigo-600",
    tabActive: "bg-gradient-to-r from-indigo-700 to-indigo-600",
  },
};

// ─── COURSE CARD ──────────────────────────────────────────────────────────────
function CourseCard({ course }) {
  const cat = categoryColors[course.category] || categoryColors.master;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
      {/* Header */}
      <div
        className={`relative ${cat.bg} overflow-hidden`}
        style={{ height: "150px" }}
      >
        <img
          src={`/${course.image.split("/").pop()}`}
          alt={course.title}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          width={700}
          height={150}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        <div
          className="absolute inset-0 items-center justify-center"
          style={{ display: "none" }}
        >
          <span className="text-7xl font-black tracking-tighter select-none text-white/30">
            {course.title.charAt(0)}
          </span>
        </div>
        {/* Duration overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent px-4 py-3">
          <p className="text-white text-xs font-bold tracking-widest uppercase">
            {course.duration}
          </p>
        </div>
        {/* Badge */}
        <span
          className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full border border-white/30 text-white/90 backdrop-blur-sm ${cat.badge}`}
        >
          {course.category === "master" ? "Diploma" : "Professional"}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="text-base font-bold text-slate-900 leading-snug">
          {course.title}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
          {course.shortDescription}
        </p>

        {/* Features preview */}
        <ul className="flex flex-col gap-1 flex-1">
          {course.features.slice(0, 3).map((f, i) => (
            <li
              key={i}
              className="flex items-start gap-1.5 text-xs text-slate-500"
            >
              <span
                className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${cat.accent.replace("text-", "bg-")}`}
              />
              {f}
            </li>
          ))}
          {course.features.length > 3 && (
            <li className={`text-xs font-medium ${cat.accent} mt-0.5`}>
              +{course.features.length - 3} more features
            </li>
          )}
        </ul>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-1">
          <span className="text-xs text-slate-400 font-medium">
            {course.duration}
          </span>
          <Link
            to={`/course/${course.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xs font-semibold px-4 py-1.5 rounded-full border cursor-pointer transition-all duration-150 ${cat.accent} ${cat.btnBorder} ${cat.btnHover} hover:text-white no-underline`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN COURSES PAGE ───────────────────────────────────────────────────────
export default function Courses() {
  const [activeTab, setActiveTab] = useState("master");
  const [search, setSearch] = useState("");

  const allCourses = useMemo(
    () => coursesData.filter((c) => c.category === activeTab),
    [activeTab],
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return allCourses;
    return allCourses.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.shortDescription.toLowerCase().includes(q),
    );
  }, [allCourses, search]);

  const handleTab = (tab) => {
    setActiveTab(tab);
    setSearch("");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* ── HERO ── */}
      <div className="bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-12 md:py-16 px-4 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight mb-3">
          Explore <span className="text-amber-400">IIOFT</span> Our Courses
        </h1>
        <p className="text-white/60 text-xs sm:text-sm md:text-base max-w-xl mx-auto px-4">
          Industry-ready programs in tech, design, finance, animation, and more.
        </p>
      </div>

      {/* ── TABS + SEARCH ── */}
      <div className="sticky top-0 z-30 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-3 flex flex-col gap-3">
          {/* Search - Full Width on Mobile */}
          <div className="flex items-center gap-2 bg-slate-50 border border-black rounded-xl px-3.5 py-2 w-100">
            <svg
              className="w-4 h-4 text-black shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
              />
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search courses..."
              className="border-0 outline-none text-sm text-black w-full placeholder-black"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="bg-transparent border-0 cursor-pointer text-black"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>

          {/* Course Tabs - Responsive Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full border-2 border-black rounded-xl overflow-hidden p-2">
            <button
              onClick={() => handleTab("master")}
              className={`px-3 sm:px-4 md:px-5 py-2 md:py-2.5 text-xs sm:text-sm font-semibold cursor-pointer border-0 rounded-lg transition-all duration-150 ${
                activeTab === "master"
                  ? "bg-linear-to-r from-blue-700 to-blue-600 text-white"
                  : "bg-white text-black hover:bg-slate-50"
              }`}
            >
              <h2 className="flex flex-col sm:flex-row gap-1 sm:gap-2 md:gap-4 text-sm sm:text-base md:text-xl font-semibold items-center justify-center">
                <span className="text-xs sm:text-sm md:text-base">
                  Master Diploma
                </span>
                <span className="text-base sm:text-lg md:text-xl">🎓</span>
              </h2>
            </button>

            <button
              onClick={() => handleTab("soft skill's")}
              className={`px-3 sm:px-4 md:px-5 py-2 md:py-2.5 text-xs sm:text-sm font-semibold cursor-pointer border-0 rounded-lg transition-all duration-150 ${
                activeTab === "soft skill's"
                  ? "bg-linear-to-r from-green-600 to-green-600 text-white"
                  : "bg-white text-black hover:bg-slate-50"
              }`}
            >
              <h2 className="flex flex-col sm:flex-row gap-1 sm:gap-2 md:gap-4 text-sm sm:text-base md:text-xl font-semibold items-center justify-center">
                <span className="text-xs sm:text-sm md:text-base">
                  Soft Skill's
                </span>
                <span className="text-base sm:text-lg md:text-xl">📚</span>
              </h2>
            </button>

            <button
              onClick={() => handleTab("tranding course")}
              className={`px-3 sm:px-4 md:px-5 py-2 md:py-2.5 text-xs sm:text-sm font-semibold cursor-pointer border-0 rounded-lg transition-all duration-150 ${
                activeTab === "tranding course"
                  ? "bg-linear-to-r from-yellow-500 to-yellow-500 text-white"
                  : "bg-white text-black hover:bg-slate-50"
              }`}
            >
              <h2 className="flex flex-col sm:flex-row gap-1 sm:gap-2 md:gap-4 text-sm sm:text-base md:text-xl font-semibold items-center justify-center">
                <span className="text-xs sm:text-sm md:text-base">
                  Tranding Course
                </span>
                <span className="text-base sm:text-lg md:text-xl">🚀</span>
              </h2>
            </button>

            <button
              onClick={() => handleTab("advance")}
              className={`px-3 sm:px-4 md:px-5 py-2 md:py-2.5 text-xs sm:text-sm font-semibold cursor-pointer border-0 rounded-lg transition-all duration-150 ${
                activeTab === "advance"
                  ? "bg-linear-to-r from-indigo-700 to-indigo-600 text-white"
                  : "bg-white text-black hover:bg-slate-50"
              }`}
            >
              <h2 className="flex flex-col sm:flex-row gap-1 sm:gap-2 md:gap-4 text-sm sm:text-base md:text-xl font-semibold items-center justify-center">
                <span className="text-xs sm:text-sm md:text-base">
                  Advance Professional
                </span>
                <span className="text-base sm:text-lg md:text-xl">⭐</span>
              </h2>
            </button>
          </div>
        </div>
      </div>

      {/* ── COURSE GRID ── */}
      <main className="max-w-7xl mx-auto w-full px-3 sm:px-4 md:px-6 py-6 md:py-10">
        {/* Section heading */}
        <div className="mb-6 flex items-center gap-2 md:gap-3 flex-wrap">
          <span
            className={`w-1 h-5 md:h-6 rounded-sm ${activeTab === "master" ? "bg-blue-600" : "bg-indigo-600"}`}
          />
          <h2 className="text-sm sm:text-base md:text-xl font-extrabold uppercase tracking-wider md:tracking-widest text-slate-700">
            {activeTab === "master"
              ? "Master Diploma Courses"
              : activeTab === "soft skill's"
                ? "Soft Skills Courses"
                : activeTab === "tranding course"
                  ? "Trending Courses"
                  : "Advance Professional Specialization"}
          </h2>
          <span className="text-base sm:text-lg md:text-xl text-slate-400 font-medium">
            ({filtered.length})
          </span>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16 text-slate-400 text-sm">
            No courses found for "{search}"
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </main>

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

              <span className="text-blue-700 hidden sm:block">•</span>

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
