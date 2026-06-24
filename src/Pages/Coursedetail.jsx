import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { TbMoodEmpty } from "react-icons/tb";

import coursesData from "../data/courses.json";

const categoryLabel = {
  master: "Master Diploma",
  advance: "Advance Professional",
  "soft skill's": "Soft Skill",
  "tranding course": "Trending Course",
};

// Per-category color theme for the hero gradient & accents
const categoryTheme = {
  master: {
    hero: "from-blue-900 via-blue-700 to-indigo-600",
    badge: "bg-blue-700/80 text-blue-100 border-blue-400/40",
    accent: "bg-blue-600",
    accentText: "text-blue-600",
    accentBorder: "border-blue-500",
    accentBg: "bg-blue-50",
    moduleNumBg: "bg-blue-100 text-blue-700",
    pillBg: "bg-blue-50 text-blue-700 border-blue-200",
    btn: "from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700",
    dot: "bg-blue-500",
    featIconBg: [
      "bg-blue-100 text-blue-600",
      "bg-indigo-100 text-indigo-600",
      "bg-violet-100 text-violet-600",
      "bg-sky-100 text-sky-600",
      "bg-cyan-100 text-cyan-600",
      "bg-blue-100 text-blue-500",
    ],
  },
  advance: {
    hero: "from-indigo-950 via-indigo-800 to-purple-700",
    badge: "bg-indigo-700/80 text-indigo-100 border-indigo-400/40",
    accent: "bg-indigo-600",
    accentText: "text-indigo-600",
    accentBorder: "border-indigo-500",
    accentBg: "bg-indigo-50",
    moduleNumBg: "bg-indigo-100 text-indigo-700",
    pillBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
    btn: "from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700",
    dot: "bg-indigo-500",
    featIconBg: [
      "bg-indigo-100 text-indigo-600",
      "bg-purple-100 text-purple-600",
      "bg-violet-100 text-violet-600",
      "bg-blue-100 text-blue-600",
      "bg-fuchsia-100 text-fuchsia-600",
      "bg-indigo-100 text-indigo-500",
    ],
  },
  "soft skill's": {
    hero: "from-emerald-900 via-green-700 to-teal-600",
    badge: "bg-emerald-700/80 text-emerald-100 border-emerald-400/40",
    accent: "bg-emerald-600",
    accentText: "text-emerald-600",
    accentBorder: "border-emerald-500",
    accentBg: "bg-emerald-50",
    moduleNumBg: "bg-emerald-100 text-emerald-700",
    pillBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    btn: "from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700",
    dot: "bg-emerald-500",
    featIconBg: [
      "bg-emerald-100 text-emerald-600",
      "bg-teal-100 text-teal-600",
      "bg-green-100 text-green-600",
      "bg-cyan-100 text-cyan-600",
      "bg-lime-100 text-lime-700",
      "bg-emerald-100 text-emerald-500",
    ],
  },
  "tranding course": {
    hero: "from-orange-700 via-amber-600 to-yellow-500",
    badge: "bg-orange-700/80 text-orange-100 border-orange-400/40",
    accent: "bg-amber-500",
    accentText: "text-amber-600",
    accentBorder: "border-amber-500",
    accentBg: "bg-amber-50",
    moduleNumBg: "bg-amber-100 text-amber-700",
    pillBg: "bg-amber-50 text-amber-700 border-amber-200",
    btn: "from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600",
    dot: "bg-amber-500",
    featIconBg: [
      "bg-orange-100 text-orange-600",
      "bg-amber-100 text-amber-600",
      "bg-yellow-100 text-yellow-600",
      "bg-red-100 text-red-500",
      "bg-pink-100 text-pink-500",
      "bg-orange-100 text-orange-500",
    ],
  },
};

const defaultTheme = categoryTheme.advance;

// Feature icons using SVG (simple, no extra deps)
const featureIcons = [
  // terminal
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className="w-5 h-5"
  >
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>,
  // globe
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className="w-5 h-5"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>,
  // shield
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className="w-5 h-5"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>,
  // zap
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className="w-5 h-5"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>,
  // wifi
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className="w-5 h-5"
  >
    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <line x1="12" y1="20" x2="12.01" y2="20" />
  </svg>,
  // cpu
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className="w-5 h-5"
  >
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="14" x2="4" y2="14" />
  </svg>,
];

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-4">
      <div className="text-5xl text-black">
        <TbMoodEmpty />
      </div>
      <h1 className="text-2xl font-bold text-black">Course Not Found</h1>
      <p className="text-gray-500 text-sm max-w-xs">
        The course you're looking for doesn't exist or may have been moved.
      </p>
      <Link
        to="/courses"
        className="mt-2 text-blue-600 font-semibold text-sm hover:underline"
      >
        ← Back to Courses
      </Link>
    </div>
  );
}

function SyllabusItem({ mod, theme, index }) {
  const [open, setOpen] = useState(index < 2);

  return (
    <div className="border border-black rounded-xl overflow-hidden transition-all duration-200 hover:shadow-md">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-3 px-4 py-3.5 bg-white hover:bg-gray-50 transition-colors text-left cursor-pointer border-0"
      >
        {/* Module number badge */}
        <span
          className={`text-xs font-bold px-2.5 py-1 rounded-lg shrink-0 ${theme.moduleNumBg}`}
        >
          {String(mod.module).padStart(2, "0")}
        </span>
        <span className="font-semibold text-black text-sm flex-1">
          {mod.title}
        </span>
        <span
          className={`text-xs font-medium px-2 py-0.5 rounded-full mr-1 ${theme.accentBg} ${theme.accentText}`}
        >
          {mod.topics?.length || 0} topics
        </span>
        {/* Chevron */}
        <svg
          className={`w-4 h-4 text-black shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && mod.topics?.length > 0 && (
        <div className="px-4 pb-4 pt-1 bg-gray-50 border-t border-gray-100">
          <div className="flex flex-wrap gap-2 pt-2">
            {mod.topics.map((topic, j) => (
              <span
                key={j}
                className={`text-xs px-3 py-1 rounded-full border font-medium ${theme.pillBg}`}
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function CourseDetail() {
  const { slug } = useParams();
  const course = coursesData.find((c) => c.slug === slug);
  if (!course) return <NotFound />;

  const imgSrc = `/${(course.image || "").split("/").pop()}`;
  const catLabel = categoryLabel[course.category] || "Professional";
  const theme = categoryTheme[course.category] || defaultTheme;

  return (
    <>
      <Helmet>
        <title>{course.metaTitle}</title>
        <meta name="description" content={course.metaDescription} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={course.metaTitle} />
        <meta property="og:description" content={course.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={imgSrc} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={course.metaTitle} />
        <meta name="twitter:description" content={course.metaDescription} />
        <meta name="twitter:image" content={imgSrc} />
        <link
          rel="canonical"
          href={`${window.location.origin}/course/${course.slug}`}
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* ── HERO ─────────────────────────────────────────────── */}
        <div className={`bg-linear-to-br ${theme.hero} text-white`}>
          <div className="max-w-3xl mx-auto px-5 pt-8 pb-10">
            {/* Back button */}
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 text-xs font-semibold text-white/80 hover:text-white border border-white/25 hover:border-white/50 bg-white/10 hover:bg-white/20 transition-all duration-150 px-4 py-2 rounded-full mb-6 no-underline"
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to All Courses
            </Link>

            {/* Category badge */}
            <div className="mb-3">
              <span
                className={`text-xs font-bold px-3 py-1 rounded-full border backdrop-blur-sm ${theme.badge}`}
              >
                IIOFT — {catLabel}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-black text-white mb-2 leading-tight">
              {course.title}
            </h1>
            <p className="text-white/70 italic text-sm mb-5">
              {course.shortDescription}
            </p>

            {/* Meta chips */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white/15 border border-white/20 rounded-xl px-4 py-2 text-sm text-white font-medium">
                <svg
                  className="w-4 h-4 text-white/70"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {course.duration}
              </div>
              <div className="flex items-center gap-2 bg-white/15 border border-white/20 rounded-xl px-4 py-2 text-sm text-white font-medium">
                <svg
                  className="w-4 h-4 text-white/70"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                </svg>
                Certified Program
              </div>
              {course.features?.length > 0 && (
                <div className="flex items-center gap-2 bg-white/15 border border-white/20 rounded-xl px-4 py-2 text-sm text-white font-medium">
                  <svg
                    className="w-4 h-4 text-white/70"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  {course.features.length} Features
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── CONTENT ──────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto px-5 py-8 space-y-8">
          {/* Full Description */}
          {course.fullDescription && (
            <div className="bg-white rounded-2xl border border-black p-6 shadow-sm">
              <p className="text-black leading-relaxed font-semibold">
                {course.fullDescription}
              </p>
            </div>
          )}

          {/* Course Features */}
          {course.features?.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className={`w-1 h-6 rounded-full ${theme.accent}`} />
                <h2 className="text-lg font-bold text-black">
                  Course Features
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.features.map((f, i) => (
                  <div
                    key={i}
                    className="bg-white border border-black rounded-xl p-4 flex items-start gap-3 hover:shadow-md transition-shadow duration-200"
                  >
                    <span
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${theme.featIconBg[i % theme.featIconBg.length]}`}
                    >
                      {featureIcons[i % featureIcons.length]}
                    </span>
                    <span className="text-sm font-medium text-black leading-snug mt-1">
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Syllabus */}
          {course.syllabus?.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className={`w-1 h-6 rounded-full ${theme.accent}`} />
                <h2 className="text-lg font-bold text-black" id="syllabus">
                  What You Will Learn
                </h2>
                <span className="text-xs font-semibold text-black ml-auto">
                  {course.syllabus.length} Modules
                </span>
              </div>

              <div className="flex flex-col gap-2.5">
                {course.syllabus.map((mod, i) => (
                  <SyllabusItem key={i} mod={mod} theme={theme} index={i} />
                ))}
              </div>
            </div>
          )}

          {/* Enroll CTA */}
          <div
            className={`rounded-2xl p-6 bg-linear-to-br ${theme.hero} text-white`}
          >
            <h2 className="text-xl font-black mb-1">Ready to Enroll?</h2>
            <p className="text-white/70 text-sm mb-5">
              Take the next step in your career. Contact us to get started with{" "}
              <strong className="text-white">{course.title}</strong>.
            </p>
            <Link
              to="/Enquire"
              className={`inline-flex items-center gap-2 px-7 py-3 bg-white text-sm font-bold rounded-full no-underline transition-all duration-150 hover:opacity-90 hover:scale-[1.02] ${theme.accentText}`}
            >
              Enquire Now
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
