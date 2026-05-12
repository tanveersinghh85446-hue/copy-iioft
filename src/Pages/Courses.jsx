import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import coursesData from "../data/courses.json";

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
      <div className="bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-3">
          Explore Our Courses
        </h1>
        <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto">
          Industry-ready programs in tech, design, finance, animation, and more.
        </p>
      </div>

      {/* ── TABS + SEARCH ── */}
      <div className="sticky top-0 z-30 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Tabs */}
          <div className="flex rounded-xl overflow-hidden border border-slate-200 shrink-0">
            <button
              onClick={() => handleTab("master")}
              className={`px-5 py-2.5 text-sm font-semibold cursor-pointer border-0 transition-all duration-150 ${
                activeTab === "master"
                  ? "bg-linear-to-r from-blue-700 to-blue-600 text-white"
                  : "bg-white text-slate-600 hover:bg-slate-50"
              }`}
            >
              Master Diploma
            </button>
            <button
              onClick={() => handleTab("advance")}
              className={`px-5 py-2.5 text-sm font-semibold cursor-pointer border-0 border-l border-slate-200 transition-all duration-150 ${
                activeTab === "advance"
                  ? "bg-linear-to-r from-indigo-700 to-indigo-600 text-white"
                  : "bg-white text-slate-600 hover:bg-slate-50"
              }`}
            >
              Advance Professional
            </button>
          </div>

          {/* Search */}
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 w-full sm:w-64">
            <svg
              className="w-4 h-4 text-slate-400 shrink-0"
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
              className="bg-transparent border-0 outline-none text-sm text-black w-full placeholder-slate-400"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="bg-transparent border-0 cursor-pointer text-slate-400"
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
        </div>
      </div>

      {/* ── COURSE GRID ── */}
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-10">
        {/* Section heading */}
        <div className="mb-6 flex items-center gap-3">
          <span
            className={`w-1 h-6 rounded-sm ${activeTab === "master" ? "bg-blue-600" : "bg-indigo-600"}`}
          />
          <h2 className="text-sm font-extrabold uppercase tracking-widest text-slate-700">
            {activeTab === "master"
              ? "Master Diploma Courses"
              : "Advance Professional Specialization"}
          </h2>
          <span className="text-xs text-slate-400 font-medium">
            ({filtered.length} courses)
          </span>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16 text-slate-400 text-sm">
            No courses found for "{search}"
          </div>
        ) : (
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            }}
          >
            {filtered.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </main>

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