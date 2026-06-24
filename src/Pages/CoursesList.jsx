import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import coursesData from "../data/courses.json";

const categoryLabel = {
  master: "Master Diploma",
  advance: "Advance Professional",
  "soft skill's": "Soft Skill",
  "tranding course": "Trending Course",
};

const categoryTheme = {
  master: {
    badge: "bg-blue-100 text-blue-700 border-blue-200",
    accentBg: "bg-blue-50",
    accentText: "text-blue-600",
    accentBorder: "border-blue-200",
    btn: "bg-blue-600 hover:bg-blue-700 text-white",
    tag: "bg-blue-50 text-blue-700 border-blue-200",
  },
  advance: {
    badge: "bg-indigo-100 text-indigo-700 border-indigo-200",
    accentBg: "bg-indigo-50",
    accentText: "text-indigo-600",
    accentBorder: "border-indigo-200",
    btn: "bg-indigo-600 hover:bg-indigo-700 text-white",
    tag: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
  "soft skill's": {
    badge: "bg-emerald-100 text-emerald-700 border-emerald-200",
    accentBg: "bg-emerald-50",
    accentText: "text-emerald-600",
    accentBorder: "border-emerald-200",
    btn: "bg-emerald-600 hover:bg-emerald-700 text-white",
    tag: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  "tranding course": {
    badge: "bg-amber-100 text-amber-700 border-amber-200",
    accentBg: "bg-amber-50",
    accentText: "text-amber-600",
    accentBorder: "border-amber-200",
    btn: "bg-amber-600 hover:bg-amber-700 text-white",
    tag: "bg-amber-50 text-amber-700 border-amber-200",
  },
};

const levelOptions = ["Beginner", "Intermediate", "Advanced", "Expert"];
const durationOptions = [
  "1-3 Months",
  "3-6 Months",
  "6-12 Months",
  "12+ Months",
];

function CourseCard({ course }) {
  const theme = categoryTheme[course.category] || categoryTheme.advance;
  const catLabel = categoryLabel[course.category] || "Professional";
  const imgSrc = `/${(course.image || "").split("/").pop()}`;

  return (
    <Link
      to={`/course/${course.slug}`}
      className="group no-underline block h-full"
    >
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
        {/* Course Image */}
        <div className="relative h-48 bg-gray-200 overflow-hidden group-hover:opacity-90 transition-opacity">
          <img
            src={imgSrc}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full border ${theme.badge}`}
            >
              {catLabel}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          {/* Title */}
          <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-700 transition-colors">
            {course.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-1">
            {course.shortDescription}
          </p>

          {/* Meta Info */}
          <div className="space-y-2 mb-4 pb-4 border-t border-gray-100">
            <div className="flex items-center gap-4 text-xs text-gray-600 mt-3">
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 2L15.09 8.26H22L17.45 12.5L19.54 18.76L12 14.01L4.46 18.76L6.55 12.5L2 8.26H8.91L12 2Z" />
                </svg>
                <span>{course.level || "Beginner"}</span>
              </div>
            </div>

            {course.instructor && (
              <div className="text-xs text-gray-600">
                <span className="font-medium">Instructor:</span>{" "}
                {course.instructor}
              </div>
            )}
          </div>

          {/* Features Count */}
          {course.features?.length > 0 && (
            <div
              className={`text-xs font-semibold mb-4 px-3 py-1 rounded-full text-center ${theme.tag}`}
            >
              {course.features.length} Key Features
            </div>
          )}

          {/* CTA Button */}
          <button
            className={`w-full py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 ${theme.btn}`}
            onClick={(e) => e.preventDefault()}
          >
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
}

function FilterSidebar({ filters, setFilters, categories }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 h-fit sticky top-8">
      <h3 className="text-lg font-bold text-gray-900 mb-5">Filters</h3>

      {/* Category Filter */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <label className="text-sm font-semibold text-gray-800 block mb-3">
          Category
        </label>
        <div className="space-y-2.5">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.category.length === 0}
              onChange={() => setFilters({ ...filters, category: [] })}
              className="w-4 h-4 rounded border-gray-300"
            />
            <span className="text-sm text-gray-700">All Categories</span>
          </label>
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.category.includes(cat)}
                onChange={(e) => {
                  const newCats = e.target.checked
                    ? [...filters.category, cat]
                    : filters.category.filter((c) => c !== cat);
                  setFilters({ ...filters, category: newCats });
                }}
                className="w-4 h-4 rounded border-gray-300"
              />
              <span className="text-sm text-gray-700">
                {categoryLabel[cat] || cat}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Level Filter */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <label className="text-sm font-semibold text-gray-800 block mb-3">
          Level
        </label>
        <div className="space-y-2.5">
          {levelOptions.map((level) => (
            <label
              key={level}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={filters.level.includes(level)}
                onChange={(e) => {
                  const newLevels = e.target.checked
                    ? [...filters.level, level]
                    : filters.level.filter((l) => l !== level);
                  setFilters({ ...filters, level: newLevels });
                }}
                className="w-4 h-4 rounded border-gray-300"
              />
              <span className="text-sm text-gray-700">{level}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Duration Filter */}
      <div>
        <label className="text-sm font-semibold text-gray-800 block mb-3">
          Duration
        </label>
        <div className="space-y-2.5">
          {durationOptions.map((duration) => (
            <label
              key={duration}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={filters.duration.includes(duration)}
                onChange={(e) => {
                  const newDurations = e.target.checked
                    ? [...filters.duration, duration]
                    : filters.duration.filter((d) => d !== duration);
                  setFilters({ ...filters, duration: newDurations });
                }}
                className="w-4 h-4 rounded border-gray-300"
              />
              <span className="text-sm text-gray-700">{duration}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {(filters.category.length > 0 ||
        filters.level.length > 0 ||
        filters.duration.length > 0 ||
        filters.search) && (
        <button
          onClick={() =>
            setFilters({
              category: [],
              level: [],
              duration: [],
              search: "",
            })
          }
          className="w-full mt-6 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );
}

export default function CoursesList() {
  const [filters, setFilters] = useState({
    category: [],
    level: [],
    duration: [],
    search: "",
  });

  const categories = [...new Set(coursesData.map((c) => c.category))];

  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      const matchCategory =
        filters.category.length === 0 ||
        filters.category.includes(course.category);
      const matchLevel =
        filters.level.length === 0 ||
        filters.level.includes(course.level || "Beginner");
      const matchDuration =
        filters.duration.length === 0 ||
        filters.duration.includes(course.duration);
      const matchSearch =
        filters.search === "" ||
        course.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        course.shortDescription
          ?.toLowerCase()
          .includes(filters.search.toLowerCase());

      return matchCategory && matchLevel && matchDuration && matchSearch;
    });
  }, [filters]);

  return (
    <>
      <Helmet>
        <title>Our Courses - IIOFT</title>
        <meta
          name="description"
          content="Explore our comprehensive range of professional courses and certifications"
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* ── HERO ─────────────────────────────────────────────── */}
        <div className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
          <div className="max-w-7xl mx-auto px-5 py-12">
            <h1 className="text-4xl sm:text-5xl font-black mb-3">
              Our Courses
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl">
              Explore our curated selection of professional courses designed to
              accelerate your career growth and skill development.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Search courses..."
                value={filters.search}
                onChange={(e) =>
                  setFilters({ ...filters, search: e.target.value })
                }
                className="w-full pl-12 pr-4 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:bg-white/15 focus:border-white/40 transition-colors focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* ── CONTENT ──────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-5 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Filters */}
            <div className="lg:col-span-1">
              <FilterSidebar
                filters={filters}
                setFilters={setFilters}
                categories={categories}
              />
            </div>

            {/* Main Content - Course Grid */}
            <div className="lg:col-span-3">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {filteredCourses.length} Courses
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    {filters.search && `Matching "${filters.search}"`}
                    {filters.category.length > 0 &&
                      ` in ${filters.category.map((c) => categoryLabel[c]).join(", ")}`}
                  </p>
                </div>

                {/* Sort Dropdown */}
                <select className="px-4 py-2 rounded-lg border border-gray-300 text-sm text-gray-700 bg-white hover:border-gray-400 transition-colors">
                  <option value="popular">Most Popular</option>
                  <option value="newest">Newest First</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>

              {/* Course Grid */}
              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <svg
                    className="w-16 h-16 text-gray-300 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747 0-5.002-4.5-10.747-10-10.747z"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    No courses found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your filters or search term
                  </p>
                  <button
                    onClick={() =>
                      setFilters({
                        category: [],
                        level: [],
                        duration: [],
                        search: "",
                      })
                    }
                    className="px-6 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── CTA SECTION ─────────────────────────────────────── */}
        {filteredCourses.length > 0 && (
          <div className="bg-linear-to-r from-blue-600 to-indigo-600 text-white mt-16">
            <div className="max-w-4xl mx-auto px-5 py-12 text-center">
              <h2 className="text-3xl font-black mb-3">
                Ready to advance your career?
              </h2>
              <p className="text-blue-100 text-lg mb-6">
                Choose a course above and enroll today. Get started on your
                learning journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/Enquire"
                  className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors no-underline inline-block"
                >
                  Contact Us
                </Link>
                <a
                  href="#"
                  className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors no-underline"
                >
                  Download Brochure
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
