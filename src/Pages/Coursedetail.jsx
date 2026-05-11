import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { TbMoodEmpty } from "react-icons/tb";

import coursesData from "../data/courses.json";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-4">
      <div className="text-5xl"><TbMoodEmpty/></div>
      <h1 className="text-2xl font-bold text-gray-800">Course Not Found</h1>
      <p className="text-gray-500 text-sm max-w-xs">
        The course you're looking for doesn't exist or may have been moved.
      </p>
      <Link
        to="/courses"
        className="mt-2 text-blue-600 border-black font-semibold text-sm hover:underline"
      >
         Back to Courses
      </Link>
    </div>
  );
}

function SyllabusItem({ mod }) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="px-4 py-3 bg-gray-50">
        <span className="font-bold text-gray-800 text-sm">
          {String(mod.module).padStart(2, "0")}. {mod.title}
        </span>
      </div>
      {mod.topics?.length > 0 && (
        <ul className="list-disc pl-8 py-3 pr-4 space-y-1 bg-white">
          {mod.topics.map((topic, j) => (
            <li key={j} className="text-gray-700 text-sm">
              {topic}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function CourseDetail() {
  const { slug } = useParams();
  const course = coursesData.find((c) => c.slug === slug);
  if (!course) return <NotFound />;

  const imgSrc = `/${course.image.split("/").pop()}`;

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
        <link rel="canonical" href={`${window.location.origin}/course/${course.slug}`} />
      </Helmet>

      <div className="max-w-3xl mx-auto px-5 py-10 bg-white text-gray-900 font-sans text-[15px] leading-relaxed">

        {/* Back Link */}
        <Link
          to="/courses"
          className="text-blue-600 text-sm font-semibold hover:underline mb-6 inline-block"
        >
          ← Back to All Courses
        </Link>

        {/* Header */}
        <p className="text-sm text-gray-500 mb-1 tracking-wide">
          IIOFT — {course.category === "master" ? "Master Diploma" : "Advance Professional"}
        </p>
        <h1 className="text-2xl font-bold underline mb-1">{course.title}</h1>
        <p className="italic text-gray-600 mb-4">{course.shortDescription}</p>

        {/* Image */}
        {/* <img
          src={imgSrc}
          alt={course.title}
          className="w-full rounded-lg mb-5 object-cover"
          onError={(e) => (e.target.style.display = "none")}
        /> */}

        {/* Duration & Price */}
        <div className="flex gap-6 mb-6">
          <p className="text-gray-700">
            <span className="font-bold">Duration:</span> {course.duration}
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Price:</span> {course.price}
          </p>
        </div>

        {/* Full Description */}
        <p className="text-gray-800 mb-6">{course.fullDescription}</p>

        <hr className="border-gray-200 my-7" />

        {/* Course Features */}
        {course.features?.length > 0 && (
          <>
            <h2 className="text-lg font-bold underline mb-3">Course Features</h2>
            <ul className="list-disc pl-6 mb-2 text-gray-800 space-y-1">
              {course.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <hr className="border-gray-200 my-7" />
          </>
        )}

        {/* Syllabus */}
        {course.syllabus?.length > 0 && (
          <>
            <h2 className="text-lg font-bold underline mb-4" id="syllabus">
              What You Will Learn
            </h2>
            <div className="flex flex-col gap-3 mb-2">
              {course.syllabus.map((mod, i) => (
                <SyllabusItem key={i} mod={mod} />
              ))}
            </div>
            <hr className="border-gray-200 my-7" />
          </>
        )}

        {/* Enroll CTA */}
        <h2 className="text-lg font-bold underline mb-3">Ready to Enroll?</h2>
        <p className="text-gray-800 mb-4">
          Take the next step in your career. Contact us to get started with{" "}
          <strong>{course.title}</strong>.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/apply"
            className="px-6 py-2.5 bg-blue-600 text-white font-bold rounded-full text-sm hover:bg-blue-700 transition"
          >
            Apply Now →
          </Link>
         
        </div>

      </div>
    </>
  );
}