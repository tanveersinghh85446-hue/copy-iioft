// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
// import { TbMoodEmpty } from "react-icons/tb";

// import coursesData from "../data/courses.json";

// // Category label map — FIX: handles all categories properly
// const categoryLabel = {
//   master: "Master Diploma",
//   advance: "Advance Professional",
//   "soft skill's": "Soft Skill",
//   "tranding course": "Trending Course",
// };

// function NotFound() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-4">
//       <div className="text-5xl text-gray-400">
//         <TbMoodEmpty />
//       </div>
//       <h1 className="text-2xl font-bold text-gray-800">Course Not Found</h1>
//       <p className="text-gray-500 text-sm max-w-xs">
//         The course you're looking for doesn't exist or may have been moved.
//       </p>
//       <Link
//         to="/courses"
//         className="mt-2 text-blue-600 font-semibold text-sm hover:underline"
//       >
//         Back to Courses
//       </Link>
//     </div>
//   );
// }

// function SyllabusItem({ mod }) {
//   return (
//     <div className="border border-gray-200 rounded-lg overflow-hidden">
//       <div className="px-4 py-3 bg-gray-50">
//         <span className="font-bold text-gray-800 text-sm">
//           {String(mod.module).padStart(2, "0")}. {mod.title}
//         </span>
//       </div>
//       {mod.topics?.length > 0 && (
//         <ul className="list-disc pl-8 py-3 pr-4 space-y-1 bg-white">
//           {mod.topics.map((topic, j) => (
//             <li key={j} className="text-gray-700 text-sm">
//               {topic}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default function CourseDetail() {
//   const { slug } = useParams();
//   const course = coursesData.find((c) => c.slug === slug);
//   if (!course) return <NotFound />;

//   const imgSrc = `/${(course.image || "").split("/").pop()}`;

//   // FIX: use categoryLabel map, fallback to "Professional"
//   const catLabel = categoryLabel[course.category] || "Professional";

//   return (
//     <>
//       <Helmet>
//         <title>{course.metaTitle}</title>
//         <meta name="description" content={course.metaDescription} />
//         <meta name="robots" content="index, follow" />
//         <meta property="og:title" content={course.metaTitle} />
//         <meta property="og:description" content={course.metaDescription} />
//         <meta property="og:type" content="website" />
//         <meta property="og:image" content={imgSrc} />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={course.metaTitle} />
//         <meta name="twitter:description" content={course.metaDescription} />
//         <meta name="twitter:image" content={imgSrc} />
//         <link
//           rel="canonical"
//           href={`${window.location.origin}/course/${course.slug}`}
//         />
//       </Helmet>

//       <div className="max-w-3xl mx-auto px-5 py-10 bg-white text-gray-900 font-sans text-[15px] leading-relaxed">

//         {/* Back Link — FIX: removed invalid w-45, clean styling */}
//         <Link
//           to="/courses"
//           className="inline-flex items-center gap-1.5 text-sm font-semibold text-black border-2 border-black hover:bg-amber-300 hover:text-black transition-all duration-150 px-4 py-2 rounded-2xl mb-6"
//         >
//           ← Back to All Courses
//         </Link>

//         {/* Header — FIX: uses categoryLabel map */}
//         <p className="text-sm text-gray-500 mb-1 tracking-wide">
//           IIOFT — {catLabel}
//         </p>
//         <h1 className="text-2xl font-bold underline mb-1">{course.title}</h1>
//         <p className="italic text-gray-600 mb-4">{course.shortDescription}</p>

//         {/* Duration */}
//         <div className="flex gap-6 mb-6">
//           <p className="text-gray-700">
//             <span className="font-bold">Duration:</span> {course.duration}
//           </p>
//         </div>

//         {/* Full Description */}
//         <p className="text-gray-800 mb-6">{course.fullDescription}</p>

//         <hr className="border-gray-200 my-7" />

//         {/* Course Features */}
//         {course.features?.length > 0 && (
//           <>
//             <h2 className="text-lg font-bold underline mb-3">
//               Course Features
//             </h2>
//             <ul className="list-disc pl-6 mb-2 text-gray-800 space-y-1">
//               {course.features.map((f, i) => (
//                 <li key={i}>{f}</li>
//               ))}
//             </ul>
//             <hr className="border-gray-200 my-7" />
//           </>
//         )}

//         {/* Syllabus */}
//         {course.syllabus?.length > 0 && (
//           <>
//             <h2 className="text-lg font-bold underline mb-4" id="syllabus">
//               What You Will Learn
//             </h2>
//             <div className="flex flex-col gap-3 mb-2">
//               {course.syllabus.map((mod, i) => (
//                 <SyllabusItem key={i} mod={mod} />
//               ))}
//             </div>
//             <hr className="border-gray-200 my-7" />
//           </>
//         )}

//         {/* Enroll CTA */}
//         <h2 className="text-lg font-bold underline mb-3">Ready to Enroll?</h2>
//         <p className="text-gray-800 mb-4">
//           Take the next step in your career. Contact us to get started with{" "}
//           <strong>{course.title}</strong>.
//         </p>
//         <div className="flex flex-wrap gap-4">
//           <Link
//             to="/Enquire"
//             className="px-6 py-2.5 bg-blue-600 text-white font-bold rounded-full text-sm hover:bg-blue-700 transition"
//           >
//             Enquire Now →
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }

// ==================================================================================

// import React, { useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
// import { TbMoodEmpty } from "react-icons/tb";

// import coursesData from "../data/courses.json";

// const categoryLabel = {
//   master: "Master Diploma",
//   advance: "Advance Professional",
//   "soft skill's": "Soft Skill",
//   "tranding course": "Trending Course",
// };

// // Per-category color theme for the hero gradient & accents
// const categoryTheme = {
//   master: {
//     hero: "from-blue-900 via-blue-700 to-indigo-600",
//     badge: "bg-blue-700/80 text-blue-100 border-blue-400/40",
//     accent: "bg-blue-600",
//     accentText: "text-blue-600",
//     accentBorder: "border-blue-500",
//     accentBg: "bg-blue-50",
//     moduleNumBg: "bg-blue-100 text-blue-700",
//     pillBg: "bg-blue-50 text-blue-700 border-blue-200",
//     btn: "from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700",
//     dot: "bg-blue-500",
//     featIconBg: [
//       "bg-blue-100 text-blue-600",
//       "bg-indigo-100 text-indigo-600",
//       "bg-violet-100 text-violet-600",
//       "bg-sky-100 text-sky-600",
//       "bg-cyan-100 text-cyan-600",
//       "bg-blue-100 text-blue-500",
//     ],
//   },
//   advance: {
//     hero: "from-indigo-950 via-indigo-800 to-purple-700",
//     badge: "bg-indigo-700/80 text-indigo-100 border-indigo-400/40",
//     accent: "bg-indigo-600",
//     accentText: "text-indigo-600",
//     accentBorder: "border-indigo-500",
//     accentBg: "bg-indigo-50",
//     moduleNumBg: "bg-indigo-100 text-indigo-700",
//     pillBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
//     btn: "from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700",
//     dot: "bg-indigo-500",
//     featIconBg: [
//       "bg-indigo-100 text-indigo-600",
//       "bg-purple-100 text-purple-600",
//       "bg-violet-100 text-violet-600",
//       "bg-blue-100 text-blue-600",
//       "bg-fuchsia-100 text-fuchsia-600",
//       "bg-indigo-100 text-indigo-500",
//     ],
//   },
//   "soft skill's": {
//     hero: "from-emerald-900 via-green-700 to-teal-600",
//     badge: "bg-emerald-700/80 text-emerald-100 border-emerald-400/40",
//     accent: "bg-emerald-600",
//     accentText: "text-emerald-600",
//     accentBorder: "border-emerald-500",
//     accentBg: "bg-emerald-50",
//     moduleNumBg: "bg-emerald-100 text-emerald-700",
//     pillBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
//     btn: "from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700",
//     dot: "bg-emerald-500",
//     featIconBg: [
//       "bg-emerald-100 text-emerald-600",
//       "bg-teal-100 text-teal-600",
//       "bg-green-100 text-green-600",
//       "bg-cyan-100 text-cyan-600",
//       "bg-lime-100 text-lime-700",
//       "bg-emerald-100 text-emerald-500",
//     ],
//   },
//   "tranding course": {
//     hero: "from-orange-700 via-amber-600 to-yellow-500",
//     badge: "bg-orange-700/80 text-orange-100 border-orange-400/40",
//     accent: "bg-amber-500",
//     accentText: "text-amber-600",
//     accentBorder: "border-amber-500",
//     accentBg: "bg-amber-50",
//     moduleNumBg: "bg-amber-100 text-amber-700",
//     pillBg: "bg-amber-50 text-amber-700 border-amber-200",
//     btn: "from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600",
//     dot: "bg-amber-500",
//     featIconBg: [
//       "bg-orange-100 text-orange-600",
//       "bg-amber-100 text-amber-600",
//       "bg-yellow-100 text-yellow-600",
//       "bg-red-100 text-red-500",
//       "bg-pink-100 text-pink-500",
//       "bg-orange-100 text-orange-500",
//     ],
//   },
// };

// const defaultTheme = categoryTheme.advance;

// // Feature icons using SVG (simple, no extra deps)
// const featureIcons = [
//   // terminal
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>,
//   // globe
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
//   // shield
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
//   // zap
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
//   // wifi
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5"><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>,
//   // cpu
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>,
// ];

// function NotFound() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-4">
//       <div className="text-5xl text-gray-400"><TbMoodEmpty /></div>
//       <h1 className="text-2xl font-bold text-gray-800">Course Not Found</h1>
//       <p className="text-gray-500 text-sm max-w-xs">
//         The course you're looking for doesn't exist or may have been moved.
//       </p>
//       <Link to="/courses" className="mt-2 text-blue-600 font-semibold text-sm hover:underline">
//         ← Back to Courses
//       </Link>
//     </div>
//   );
// }

// function SyllabusItem({ mod, theme, index }) {
//   const [open, setOpen] = useState(index < 2);

//   return (
//     <div className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 hover:shadow-md">
//       <button
//         onClick={() => setOpen((o) => !o)}
//         className="w-full flex items-center gap-3 px-4 py-3.5 bg-white hover:bg-gray-50 transition-colors text-left cursor-pointer border-0"
//       >
//         {/* Module number badge */}
//         <span className={`text-xs font-bold px-2.5 py-1 rounded-lg shrink-0 ${theme.moduleNumBg}`}>
//           {String(mod.module).padStart(2, "0")}
//         </span>
//         <span className="font-semibold text-gray-800 text-sm flex-1">{mod.title}</span>
//         <span className={`text-xs font-medium px-2 py-0.5 rounded-full mr-1 ${theme.accentBg} ${theme.accentText}`}>
//           {mod.topics?.length || 0} topics
//         </span>
//         {/* Chevron */}
//         <svg
//           className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
//           fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//         </svg>
//       </button>

//       {open && mod.topics?.length > 0 && (
//         <div className="px-4 pb-4 pt-1 bg-gray-50 border-t border-gray-100">
//           <div className="flex flex-wrap gap-2 pt-2">
//             {mod.topics.map((topic, j) => (
//               <span
//                 key={j}
//                 className={`text-xs px-3 py-1 rounded-full border font-medium ${theme.pillBg}`}
//               >
//                 {topic}
//               </span>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default function CourseDetail() {
//   const { slug } = useParams();
//   const course = coursesData.find((c) => c.slug === slug);
//   if (!course) return <NotFound />;

//   const imgSrc = `/${(course.image || "").split("/").pop()}`;
//   const catLabel = categoryLabel[course.category] || "Professional";
//   const theme = categoryTheme[course.category] || defaultTheme;

//   return (
//     <>
//       <Helmet>
//         <title>{course.metaTitle}</title>
//         <meta name="description" content={course.metaDescription} />
//         <meta name="robots" content="index, follow" />
//         <meta property="og:title" content={course.metaTitle} />
//         <meta property="og:description" content={course.metaDescription} />
//         <meta property="og:type" content="website" />
//         <meta property="og:image" content={imgSrc} />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={course.metaTitle} />
//         <meta name="twitter:description" content={course.metaDescription} />
//         <meta name="twitter:image" content={imgSrc} />
//         <link rel="canonical" href={`${window.location.origin}/course/${course.slug}`} />
//       </Helmet>

//       <div className="min-h-screen bg-gray-50">

//         {/* ── HERO ─────────────────────────────────────────────── */}
//         <div className={`bg-gradient-to-br ${theme.hero} text-white`}>
//           <div className="max-w-3xl mx-auto px-5 pt-8 pb-10">
//             {/* Back button */}
//             <Link
//               to="/courses"
//               className="inline-flex items-center gap-2 text-xs font-semibold text-white/80 hover:text-white border border-white/25 hover:border-white/50 bg-white/10 hover:bg-white/20 transition-all duration-150 px-4 py-2 rounded-full mb-6 no-underline"
//             >
//               <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//               </svg>
//               Back to All Courses
//             </Link>

//             {/* Category badge */}
//             <div className="mb-3">
//               <span className={`text-xs font-bold px-3 py-1 rounded-full border backdrop-blur-sm ${theme.badge}`}>
//                 IIOFT — {catLabel}
//               </span>
//             </div>

//             {/* Title */}
//             <h1 className="text-3xl sm:text-4xl font-black text-white mb-2 leading-tight">
//               {course.title}
//             </h1>
//             <p className="text-white/70 italic text-sm mb-5">{course.shortDescription}</p>

//             {/* Meta chips */}
//             <div className="flex flex-wrap gap-3">
//               <div className="flex items-center gap-2 bg-white/15 border border-white/20 rounded-xl px-4 py-2 text-sm text-white font-medium">
//                 <svg className="w-4 h-4 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                   <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
//                 </svg>
//                 {course.duration}
//               </div>
//               <div className="flex items-center gap-2 bg-white/15 border border-white/20 rounded-xl px-4 py-2 text-sm text-white font-medium">
//                 <svg className="w-4 h-4 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                   <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
//                 </svg>
//                 Certified Program
//               </div>
//               {course.features?.length > 0 && (
//                 <div className="flex items-center gap-2 bg-white/15 border border-white/20 rounded-xl px-4 py-2 text-sm text-white font-medium">
//                   <svg className="w-4 h-4 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                     <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
//                   </svg>
//                   {course.features.length} Features
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* ── CONTENT ──────────────────────────────────────────── */}
//         <div className="max-w-3xl mx-auto px-5 py-8 space-y-8">

//           {/* Full Description */}
//           {course.fullDescription && (
//             <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
//               <p className="text-gray-700 leading-relaxed text-sm">{course.fullDescription}</p>
//             </div>
//           )}

//           {/* Course Features */}
//           {course.features?.length > 0 && (
//             <div>
//               <div className="flex items-center gap-3 mb-4">
//                 <span className={`w-1 h-6 rounded-full ${theme.accent}`} />
//                 <h2 className="text-lg font-bold text-gray-900">Course Features</h2>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 {course.features.map((f, i) => (
//                   <div
//                     key={i}
//                     className="bg-white border border-gray-200 rounded-xl p-4 flex items-start gap-3 hover:shadow-md transition-shadow duration-200"
//                   >
//                     <span className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${theme.featIconBg[i % theme.featIconBg.length]}`}>
//                       {featureIcons[i % featureIcons.length]}
//                     </span>
//                     <span className="text-sm font-medium text-gray-800 leading-snug mt-1">{f}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Syllabus */}
//           {course.syllabus?.length > 0 && (
//             <div>
//               <div className="flex items-center gap-3 mb-4">
//                 <span className={`w-1 h-6 rounded-full ${theme.accent}`} />
//                 <h2 className="text-lg font-bold text-gray-900" id="syllabus">
//                   What You Will Learn
//                 </h2>
//                 <span className="text-xs font-semibold text-gray-400 ml-auto">
//                   {course.syllabus.length} Modules
//                 </span>
//               </div>

//               <div className="flex flex-col gap-2.5">
//                 {course.syllabus.map((mod, i) => (
//                   <SyllabusItem key={i} mod={mod} theme={theme} index={i} />
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Enroll CTA */}
//           <div className={`rounded-2xl p-6 bg-gradient-to-br ${theme.hero} text-white`}>
//             <h2 className="text-xl font-black mb-1">Ready to Enroll?</h2>
//             <p className="text-white/70 text-sm mb-5">
//               Take the next step in your career. Contact us to get started with{" "}
//               <strong className="text-white">{course.title}</strong>.
//             </p>
//             <Link
//               to="/Enquire"
//               className={`inline-flex items-center gap-2 px-7 py-3 bg-white text-sm font-bold rounded-full no-underline transition-all duration-150 hover:opacity-90 hover:scale-[1.02] ${theme.accentText}`}
//             >
//               Enquire Now
//               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
//               </svg>
//             </Link>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }

// ==================================================================================

// import React, { useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
// import { TbMoodEmpty } from "react-icons/tb";

// import coursesData from "../data/courses.json";

// const categoryLabel = {
//   master: "Master Diploma",
//   advance: "Advance Professional",
//   "soft skill's": "Soft Skill",
//   "tranding course": "Trending Course",
// };

// const categoryAccent = {
//   master: { color: "#2563eb", light: "#eff6ff", label: "text-blue-600" },
//   advance: { color: "#7c3aed", light: "#f5f3ff", label: "text-violet-600" },
//   "soft skill's": {
//     color: "#059669",
//     light: "#ecfdf5",
//     label: "text-emerald-600",
//   },
//   "tranding course": {
//     color: "#d97706",
//     light: "#fffbeb",
//     label: "text-amber-600",
//   },
// };
// const defaultAccent = categoryAccent.advance;

// function NotFound() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-4">
//       <TbMoodEmpty className="text-5xl text-gray-300" />
//       <h1 className="text-2xl font-black text-gray-800">Course Not Found</h1>
//       <p className="text-gray-400 text-sm max-w-xs">
//         This course doesn't exist or has been moved.
//       </p>
//       <Link
//         to="/courses"
//         className="mt-2 text-sm font-bold underline underline-offset-4 text-gray-700 hover:text-black"
//       >
//         ← Back to Courses
//       </Link>
//     </div>
//   );
// }

// function SyllabusItem({ mod, accent, index }) {
//   const [open, setOpen] = useState(index < 2);
//   return (
//     <div className="border-b border-gray-200 last:border-0">
//       <button
//         onClick={() => setOpen((o) => !o)}
//         className="w-full flex items-center gap-4 py-4 text-left cursor-pointer bg-transparent border-0 group"
//       >
//         <span
//           className="text-xs font-black tabular-nums w-8 shrink-0"
//           style={{ color: accent.color }}
//         >
//           {String(mod.module).padStart(2, "0")}
//         </span>
//         <span className="flex-1 font-bold text-gray-900 text-sm group-hover:text-black transition-colors">
//           {mod.title}
//         </span>
//         <span className="text-xs text-gray-400 mr-2 shrink-0">
//           {mod.topics?.length || 0} topics
//         </span>
//         <svg
//           className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M19 9l-7 7-7-7"
//           />
//         </svg>
//       </button>
//       {open && mod.topics?.length > 0 && (
//         <div className="pb-4 pl-12 flex flex-wrap gap-2">
//           {mod.topics.map((topic, j) => (
//             <span
//               key={j}
//               className="text-xs font-semibold px-3 py-1 rounded-full border"
//               style={{
//                 backgroundColor: accent.light,
//                 color: accent.color,
//                 borderColor: accent.color + "33",
//               }}
//             >
//               {topic}
//             </span>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default function CourseDetail() {
//   const { slug } = useParams();
//   const course = coursesData.find((c) => c.slug === slug);
//   if (!course) return <NotFound />;

//   const imgSrc = `/${(course.image || "").split("/").pop()}`;
//   const catLabel = categoryLabel[course.category] || "Professional";
//   const accent = categoryAccent[course.category] || defaultAccent;

//   return (
//     <>
//       <Helmet>
//         <title>{course.metaTitle}</title>
//         <meta name="description" content={course.metaDescription} />
//         <meta name="robots" content="index, follow" />
//         <meta property="og:title" content={course.metaTitle} />
//         <meta property="og:description" content={course.metaDescription} />
//         <meta property="og:type" content="website" />
//         <meta property="og:image" content={imgSrc} />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={course.metaTitle} />
//         <meta name="twitter:description" content={course.metaDescription} />
//         <meta name="twitter:image" content={imgSrc} />
//         <link
//           rel="canonical"
//           href={`${window.location.origin}/course/${course.slug}`}
//         />
//       </Helmet>

//       <div className="min-h-screen bg-white">
//         {/* ── TOP BAR ─────────────────────────────────────────── */}
//         <div className="border-b border-gray-100 px-5 py-4">
//           <div className="max-w-3xl mx-auto">
//             <Link
//               to="/courses"
//               className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-black transition-colors no-underline tracking-widest uppercase"
//             >
//               <svg
//                 className="w-3.5 h-3.5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2.5}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M15 19l-7-7 7-7"
//                 />
//               </svg>
//               All Courses
//             </Link>
//           </div>
//         </div>

//         <div className="max-w-3xl mx-auto px-5">
//           {/* ── HERO HEADER ─────────────────────────────────────── */}
//           <div className="pt-12 pb-10 border-b border-gray-100">
//             {/* Category tag */}
//             <div className="mb-5">
//               <span
//                 className="text-xs font-black tracking-widest uppercase px-3 py-1.5 rounded-full"
//                 style={{ backgroundColor: accent.light, color: accent.color }}
//               >
//                 IIOFT · {catLabel}
//               </span>
//             </div>

//             {/* Giant title */}
//             <h1 className="text-5xl sm:text-6xl font-black text-gray-950 leading-none tracking-tight mb-4">
//               {course.title}
//             </h1>

//             {/* Accent underline */}
//             <div
//               className="w-16 h-1.5 rounded-full mb-6"
//               style={{ backgroundColor: accent.color }}
//             />

//             <p className="text-gray-500 text-base leading-relaxed max-w-xl mb-8">
//               {course.shortDescription}
//             </p>

//             {/* Stats row */}
//             <div className="flex flex-wrap gap-8">
//               <div>
//                 <p className="text-xs font-black uppercase tracking-widest text-black mb-0.5">
//                   Duration
//                 </p>
//                 <p className="text-lg font-black text-gray-900">
//                   {course.duration}
//                 </p>
//               </div>
//               {course.features?.length > 0 && (
//                 <div>
//                   <p className="text-xs font-black uppercase tracking-widest text-black mb-0.5">
//                     Features
//                   </p>
//                   <p className="text-lg font-black text-gray-900">
//                     {course.features.length} Modules
//                   </p>
//                 </div>
//               )}
//               {course.syllabus?.length > 0 && (
//                 <div>
//                   <p className="text-xs font-black uppercase tracking-widest text-black mb-0.5">
//                     Curriculum
//                   </p>
//                   <p className="text-lg font-black text-gray-900">
//                     {course.syllabus.length} Units
//                   </p>
//                 </div>
//               )}
//               <div>
//                 <p className="text-xs font-black uppercase tracking-widest text-black mb-0.5">
//                   Certificate
//                 </p>
//                 <p className="text-lg font-black text-gray-900">Included</p>
//               </div>
//             </div>
//           </div>

//           {/* ── ABOUT ───────────────────────────────────────────── */}
//           {course.fullDescription && (
//             <div className="py-10 border-b border-gray-100">
//               <p
//                 className="text-xs font-black uppercase tracking-widest mb-4"
//                 style={{ color: accent.color }}
//               >
//                 About This Course
//               </p>
//               <p className="text-gray-700 leading-relaxed text-[15px]">
//                 {course.fullDescription}
//               </p>
//             </div>
//           )}

//           {/* ── FEATURES ────────────────────────────────────────── */}
//           {course.features?.length > 0 && (
//             <div className="py-10 border-b border-gray-100">
//               <p
//                 className="text-xs font-black uppercase tracking-widest mb-6"
//                 style={{ color: accent.color }}
//               >
//                 Course Features
//               </p>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
//                 {course.features.map((f, i) => (
//                   <div
//                     key={i}
//                     className="flex items-start gap-3 py-3 pr-4 border-b border-gray-100 last:border-0 sm:nth-last-[n+2]:border-0"
//                   >
//                     <span
//                       className="text-xs font-black tabular-nums mt-0.5 shrink-0 w-6"
//                       style={{ color: accent.color }}
//                     >
//                       {String(i + 1).padStart(2, "0")}
//                     </span>
//                     <span className="text-sm font-semibold text-gray-800">
//                       {f}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* ── SYLLABUS ────────────────────────────────────────── */}
//           {course.syllabus?.length > 0 && (
//             <div className="py-10 border-b border-gray-100">
//               <div className="flex items-center justify-between mb-6">
//                 <p
//                   className="text-xs font-black uppercase tracking-widest"
//                   style={{ color: accent.color }}
//                 >
//                   What You Will Learn
//                 </p>
//                 <span className="text-xs text-gray-400 font-bold">
//                   {course.syllabus.length} modules
//                 </span>
//               </div>
//               <div>
//                 {course.syllabus.map((mod, i) => (
//                   <SyllabusItem key={i} mod={mod} accent={accent} index={i} />
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* ── ENROLL CTA ──────────────────────────────────────── */}
//           <div className="py-12">
//             <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">
//               Next Step
//             </p>
//             <h2 className="text-3xl sm:text-4xl font-black text-gray-950 leading-tight mb-6">
//               Ready to start
//               <br />
//               <span style={{ color: accent.color }}>{course.title}?</span>
//             </h2>
//             <p className="text-gray-500 text-sm mb-8 max-w-md">
//               Take the next step in your career. Reach out to our team and get
//               enrolled today.
//             </p>
//             <Link
//               to="/Enquire"
//               className="inline-flex items-center gap-3 px-8 py-4 text-white text-sm font-black rounded-full no-underline transition-all duration-150 hover:opacity-90 hover:scale-[1.02]"
//               style={{ backgroundColor: accent.color }}
//             >
//               Enquire Now
//               <svg
//                 className="w-4 h-4"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2.5}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M5 12h14M12 5l7 7-7 7"
//                 />
//               </svg>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



// ==================================================================================

// import React, { useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
// import { TbMoodEmpty } from "react-icons/tb";

// import coursesData from "../data/courses.json";

// const categoryLabel = {
//   master: "Master Diploma",
//   advance: "Advance Professional",
//   "soft skill's": "Soft Skill",
//   "tranding course": "Trending Course",
// };

// const categoryAccent = {
//   master: { color: "#2563eb", light: "#eff6ff", pillBorder: "#bfdbfe" },
//   advance: { color: "#7c3aed", light: "#f5f3ff", pillBorder: "#ddd6fe" },
//   "soft skill's": { color: "#059669", light: "#ecfdf5", pillBorder: "#a7f3d0" },
//   "tranding course": { color: "#d97706", light: "#fffbeb", pillBorder: "#fde68a" },
// };
// const defaultAccent = categoryAccent.advance;

// function NotFound() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-4">
//       <TbMoodEmpty className="text-5xl text-gray-300" />
//       <h1 className="text-2xl font-medium text-gray-800">Course Not Found</h1>
//       <p className="text-gray-400 text-sm max-w-xs">
//         This course doesn't exist or has been moved.
//       </p>
//       <Link
//         to="/courses"
//         className="mt-2 text-sm font-medium underline underline-offset-4 text-gray-600 hover:text-black"
//       >
//         ← Back to Courses
//       </Link>
//     </div>
//   );
// }

// function SyllabusItem({ mod, accent, defaultOpen }) {
//   const [open, setOpen] = useState(defaultOpen);

//   return (
//     <div className="border-b border-gray-100 last:border-0">
//       <button
//         onClick={() => setOpen((o) => !o)}
//         className="w-full flex items-center gap-3 py-4 text-left bg-transparent border-0 cursor-pointer group"
//       >
//         <span
//           className="text-xs font-medium tabular-nums min-w-[24px] shrink-0"
//           style={{ color: accent.color }}
//         >
//           {String(mod.module).padStart(2, "0")}
//         </span>
//         <span className="flex-1 text-sm font-medium text-gray-900 group-hover:text-black transition-colors">
//           {mod.title}
//         </span>
//         <span className="text-xs text-gray-400 mr-2 shrink-0">
//           {mod.topics?.length || 0} topics
//         </span>
//         <svg
//           className="w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200"
//           style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//         </svg>
//       </button>

//       {open && mod.topics?.length > 0 && (
//         <div className="pb-4 pl-9 flex flex-wrap gap-1.5">
//           {mod.topics.map((topic, j) => (
//             <span
//               key={j}
//               className="text-xs font-medium px-3 py-1 rounded-full"
//               style={{
//                 backgroundColor: accent.light,
//                 color: accent.color,
//                 border: `0.5px solid ${accent.pillBorder}`,
//               }}
//             >
//               {topic}
//             </span>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default function CourseDetail() {
//   const { slug } = useParams();
//   const course = coursesData.find((c) => c.slug === slug);
//   if (!course) return <NotFound />;

//   const imgSrc = `/${(course.image || "").split("/").pop()}`;
//   const catLabel = categoryLabel[course.category] || "Professional";
//   const accent = categoryAccent[course.category] || defaultAccent;

//   return (
//     <>
//       <Helmet>
//         <title>{course.metaTitle}</title>
//         <meta name="description" content={course.metaDescription} />
//         <meta name="robots" content="index, follow" />
//         <meta property="og:title" content={course.metaTitle} />
//         <meta property="og:description" content={course.metaDescription} />
//         <meta property="og:type" content="website" />
//         <meta property="og:image" content={imgSrc} />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={course.metaTitle} />
//         <meta name="twitter:description" content={course.metaDescription} />
//         <meta name="twitter:image" content={imgSrc} />
//         <link
//           rel="canonical"
//           href={`${window.location.origin}/course/${course.slug}`}
//         />
//       </Helmet>

//       <div className="min-h-screen bg-white text-gray-900 font-sans">
//         {/* ── TOP BAR ─────────────────────────────────────── */}
//         <div className="border-b border-gray-100 px-5 py-4">
//           <div className="max-w-3xl mx-auto flex items-center gap-2">
//             <Link
//               to="/courses"
//               className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-black transition-colors no-underline"
//             >
//               <svg
//                 className="w-3.5 h-3.5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2.5}
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//               </svg>
//               All Courses
//             </Link>
//             <span className="text-gray-300 text-xs">/</span>
//             <span className="text-xs text-gray-400 truncate max-w-[200px]">
//               {course.title}
//             </span>
//           </div>
//         </div>

//         <div className="max-w-3xl mx-auto px-5">
//           {/* ── HERO ────────────────────────────────────────── */}
//           <div className="pt-10 pb-8 border-b border-gray-100">
//             {/* Category tag */}
//             <div className="mb-5">
//               <span
//                 className="text-xs font-medium tracking-wide px-3 py-1.5 rounded"
//                 style={{ backgroundColor: accent.light, color: accent.color }}
//               >
//                 IIOFT · {catLabel}
//               </span>
//             </div>

//             {/* Title */}
//             <h1 className="text-4xl sm:text-5xl font-medium text-gray-950 leading-tight tracking-tight mb-3">
//               {course.title}
//             </h1>

//             {/* Accent underline */}
//             <div
//               className="w-8 h-0.5 rounded-full mb-5"
//               style={{ backgroundColor: accent.color }}
//             />

//             <p className="text-gray-500 text-sm leading-relaxed max-w-lg mb-8">
//               {course.shortDescription}
//             </p>

//             {/* Stats row */}
//             <div className="flex flex-wrap gap-x-8 gap-y-4 border-t border-gray-100 pt-6">
//               <div>
//                 <p className="text-xs text-gray-400 mb-1 uppercase tracking-widest">Duration</p>
//                 <p className="text-base font-medium text-gray-900">{course.duration}</p>
//               </div>
//               {course.features?.length > 0 && (
//                 <div>
//                   <p className="text-xs text-gray-400 mb-1 uppercase tracking-widest">Features</p>
//                   <p className="text-base font-medium text-gray-900">
//                     {course.features.length} Included
//                   </p>
//                 </div>
//               )}
//               {course.syllabus?.length > 0 && (
//                 <div>
//                   <p className="text-xs text-gray-400 mb-1 uppercase tracking-widest">Curriculum</p>
//                   <p className="text-base font-medium text-gray-900">
//                     {course.syllabus.length} Modules
//                   </p>
//                 </div>
//               )}
//               <div>
//                 <p className="text-xs text-gray-400 mb-1 uppercase tracking-widest">Certificate</p>
//                 <p className="text-base font-medium text-gray-900">Included</p>
//               </div>
//             </div>
//           </div>

//           {/* ── ABOUT ───────────────────────────────────────── */}
//           {course.fullDescription && (
//             <div className="py-8 border-b border-gray-100">
//               <p
//                 className="text-xs font-medium uppercase tracking-widest mb-4"
//                 style={{ color: accent.color }}
//               >
//                 About This Course
//               </p>
//               <p className="text-gray-600 leading-relaxed text-sm">
//                 {course.fullDescription}
//               </p>
//             </div>
//           )}

//           {/* ── FEATURES ────────────────────────────────────── */}
//           {course.features?.length > 0 && (
//             <div className="py-8 border-b border-gray-100">
//               <p
//                 className="text-xs font-medium uppercase tracking-widest mb-6"
//                 style={{ color: accent.color }}
//               >
//                 Course Features
//               </p>
//               <div className="grid grid-cols-1 sm:grid-cols-2">
//                 {course.features.map((f, i) => (
//                   <div
//                     key={i}
//                     className="flex items-start gap-3 py-3 pr-4 border-b border-gray-100"
//                     style={
//                       i % 2 === 0
//                         ? { borderRight: "0.5px solid #f3f4f6", paddingRight: "24px" }
//                         : { paddingLeft: "24px" }
//                     }
//                   >
//                     <span
//                       className="text-xs font-medium tabular-nums shrink-0 mt-0.5 w-5"
//                       style={{ color: accent.color }}
//                     >
//                       {String(i + 1).padStart(2, "0")}
//                     </span>
//                     <span className="text-sm text-gray-800 leading-snug">{f}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* ── SYLLABUS ────────────────────────────────────── */}
//           {course.syllabus?.length > 0 && (
//             <div className="py-8 border-b border-gray-100">
//               <div className="flex items-center justify-between mb-1">
//                 <p
//                   className="text-xs font-medium uppercase tracking-widest"
//                   style={{ color: accent.color }}
//                 >
//                   What You Will Learn
//                 </p>
//                 <span className="text-xs text-gray-400">
//                   {course.syllabus.length} modules
//                 </span>
//               </div>
//               <div className="border-t border-gray-100 mt-4">
//                 {course.syllabus.map((mod, i) => (
//                   <SyllabusItem
//                     key={i}
//                     mod={mod}
//                     accent={accent}
//                     defaultOpen={i === 0}
//                   />
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* ── ENROLL CTA ──────────────────────────────────── */}
//           <div className="py-10">
//             <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-3">
//               Next Step
//             </p>
//             <h2 className="text-2xl sm:text-3xl font-medium text-gray-950 leading-tight mb-2">
//               Ready to enroll in{" "}
//               <span style={{ color: accent.color }}>{course.title}?</span>
//             </h2>
//             <p className="text-gray-500 text-sm mb-7 max-w-md">
//               Reach out to our team and get started on your learning journey today.
//             </p>
//             <Link
//               to="/Enquire"
//               className="inline-flex items-center gap-2.5 px-6 py-3 text-white text-sm font-medium rounded no-underline transition-opacity duration-150 hover:opacity-90"
//               style={{ backgroundColor: accent.color }}
//             >
//               Enquire Now
//               <svg
//                 className="w-4 h-4"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2}
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
//               </svg>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



// ==================================================================================





import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { TbMoodEmpty } from "react-icons/tb";

import coursesData from "../data/courses.json";

// ─── Category config ───────────────────────────────────────────────────────────
const categoryLabel = {
  master: "Master Diploma",
  advance: "Advance Professional",
  "soft skill's": "Soft Skill",
  "tranding course": "Trending Course",
};

const categoryAccent = {
  master: {
    color: "#2563eb",
    light: "#eff6ff",
    pillBorder: "#bfdbfe",
    bannerBg: "#eff6ff",
    bannerBottom: "#dbeafe",
    bannerBorder: "#bfdbfe",
    iconStroke: "#2563eb",
    textDark: "#1e40af",
  },
  advance: {
    color: "#7c3aed",
    light: "#f5f3ff",
    pillBorder: "#ddd6fe",
    bannerBg: "#f5f3ff",
    bannerBottom: "#ede9fe",
    bannerBorder: "#ddd6fe",
    iconStroke: "#7c3aed",
    textDark: "#534AB7",
  },
  "soft skill's": {
    color: "#059669",
    light: "#ecfdf5",
    pillBorder: "#a7f3d0",
    bannerBg: "#ecfdf5",
    bannerBottom: "#d1fae5",
    bannerBorder: "#a7f3d0",
    iconStroke: "#059669",
    textDark: "#065f46",
  },
  "tranding course": {
    color: "#d97706",
    light: "#fffbeb",
    pillBorder: "#fde68a",
    bannerBg: "#fffbeb",
    bannerBottom: "#fef3c7",
    bannerBorder: "#fde68a",
    iconStroke: "#d97706",
    textDark: "#92400e",
  },
};
const defaultAccent = categoryAccent.advance;

// ─── Per-category banner icons (6 icons per category) ─────────────────────────
const categoryIcons = {
  master: [
    {
      label: "Strategy",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M2 20h20M6 20V10l6-6 6 6v10" />
        </svg>
      ),
    },
    {
      label: "Leadership",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      label: "Research",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
    },
    {
      label: "Analytics",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
    },
    {
      label: "Projects",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      ),
    },
    {
      label: "Certificate",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      ),
    },
  ],
  advance: [
    {
      label: "Pivot\nTables",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
        </svg>
      ),
    },
    {
      label: "Data\nAnalysis",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
    {
      label: "Dashboard",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <rect x="2" y="3" width="20" height="14" rx="2" /><polyline points="8 21 12 17 16 21" /><line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      label: "Charts",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
    },
    {
      label: "Power\nQuery",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        </svg>
      ),
    },
    {
      label: "Certificate",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      ),
    },
  ],
  "soft skill's": [
    {
      label: "Communication",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    {
      label: "Teamwork",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      label: "Problem\nSolving",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      ),
    },
    {
      label: "Leadership",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
    {
      label: "Mindset",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" />
        </svg>
      ),
    },
    {
      label: "Certificate",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      ),
    },
  ],
  "tranding course": [
    {
      label: "Trending\nTopics",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
        </svg>
      ),
    },
    {
      label: "Live\nProjects",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      ),
    },
    {
      label: "Industry\nSkills",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
    },
    {
      label: "Tools",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
    {
      label: "Career\nGrowth",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
    },
    {
      label: "Certificate",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      ),
    },
  ],
};

// ─── Feature icons (cycled by index) ──────────────────────────────────────────
const featIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>,
];

// ─── Sub-components ───────────────────────────────────────────────────────────
function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-4">
      <TbMoodEmpty className="text-5xl text-gray-300" />
      <h1 className="text-2xl font-medium text-gray-800">Course Not Found</h1>
      <p className="text-gray-400 text-sm max-w-xs">
        This course doesn't exist or has been moved.
      </p>
      <Link
        to="/courses"
        className="mt-2 text-sm font-medium underline underline-offset-4 text-gray-600 hover:text-black"
      >
        ← Back to Courses
      </Link>
    </div>
  );
}

function CourseBanner({ course, accent, icons }) {
  return (
    <div
      className="rounded-xl overflow-hidden flex flex-col"
      style={{
        background: accent.bannerBg,
        border: `0.5px solid ${accent.bannerBorder}`,
        aspectRatio: "1 / 0.88",
      }}
    >
      <div className="flex-1 p-3.5 flex items-center justify-center">
        <div className="grid grid-cols-3 gap-2 w-full">
          {icons.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-1.5 py-2.5 px-1 rounded-lg"
              style={{ background: "white", border: `0.5px solid ${accent.bannerBorder}` }}
            >
              <div style={{ color: accent.iconStroke }}>{item.svg}</div>
              <span
                className="text-center leading-tight whitespace-pre-line"
                style={{ fontSize: "9px", color: accent.textDark }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div
        className="px-3.5 py-2.5"
        style={{ background: accent.bannerBottom, borderTop: `0.5px solid ${accent.bannerBorder}` }}
      >
        <p className="text-xs font-medium truncate" style={{ color: accent.textDark }}>
          {course.title}
        </p>
        <p style={{ fontSize: "10px", color: accent.color, opacity: 0.7 }}>
          IIOFT · Professional Program
        </p>
      </div>
    </div>
  );
}

function SyllabusItem({ mod, accent, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-2.5 py-3.5 text-left bg-transparent border-0 cursor-pointer group"
      >
        <span
          className="text-xs font-medium tabular-nums min-w-[22px] shrink-0"
          style={{ color: accent.color }}
        >
          {String(mod.module).padStart(2, "0")}
        </span>
        <span className="flex-1 text-sm font-medium text-gray-900 group-hover:opacity-70 transition-opacity">
          {mod.title}
        </span>
        <span className="text-xs text-gray-400 mr-1.5 shrink-0">
          {mod.topics?.length || 0} topics
        </span>
        <svg
          className="w-3.5 h-3.5 text-gray-400 shrink-0 transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && mod.topics?.length > 0 && (
        <div className="pb-3.5 pl-8 flex flex-wrap gap-1.5">
          {mod.topics.map((topic, j) => (
            <span
              key={j}
              className="text-xs font-medium px-2.5 py-1 rounded-full"
              style={{
                background: accent.light,
                color: accent.color,
                border: `0.5px solid ${accent.pillBorder}`,
              }}
            >
              {topic}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function CourseDetail() {
  const { slug } = useParams();
  const course = coursesData.find((c) => c.slug === slug);
  if (!course) return <NotFound />;

  const imgSrc = `/${(course.image || "").split("/").pop()}`;
  const catLabel = categoryLabel[course.category] || "Professional";
  const accent = categoryAccent[course.category] || defaultAccent;
  const bannerIcons = categoryIcons[course.category] || categoryIcons.advance;

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

      <div className="min-h-screen bg-white font-sans text-gray-900">

        {/* ── TOP BAR ──────────────────────────────────────── */}
        <div className="border-b border-gray-100 px-5 py-3.5">
          <div className="max-w-3xl mx-auto flex items-center gap-2">
            <Link
              to="/courses"
              className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-black transition-colors no-underline"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              All Courses
            </Link>
            <span className="text-gray-300 text-xs">/</span>
            <span className="text-xs text-gray-400 truncate max-w-[220px]">{course.title}</span>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5">

          {/* ── HERO ─────────────────────────────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_200px] gap-6 items-start pt-9 pb-8 border-b border-gray-100">

            {/* Left: text */}
            <div>
              <div className="mb-4">
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full"
                  style={{
                    background: accent.light,
                    color: accent.color,
                    border: `0.5px solid ${accent.pillBorder}`,
                  }}
                >
                  <span
                    className="w-4 h-4 rounded-full flex items-center justify-center text-white"
                    style={{ background: accent.color, fontSize: "8px" }}
                  >
                    ✦
                  </span>
                  IIOFT · {catLabel}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-medium text-gray-950 leading-tight tracking-tight mb-2">
                {course.title}
              </h1>

              <div className="w-7 h-0.5 rounded-full mb-4" style={{ background: accent.color }} />

              <p className="text-sm text-gray-500 leading-relaxed mb-7 max-w-sm">
                {course.shortDescription}
              </p>

              <div className="flex flex-wrap gap-x-7 gap-y-3">
                <div>
                  <p className="text-gray-400 uppercase tracking-widest mb-0.5" style={{ fontSize: "10px" }}>Duration</p>
                  <p className="text-sm font-medium text-gray-900">{course.duration}</p>
                </div>
                {course.features?.length > 0 && (
                  <div>
                    <p className="text-gray-400 uppercase tracking-widest mb-0.5" style={{ fontSize: "10px" }}>Features</p>
                    <p className="text-sm font-medium text-gray-900">{course.features.length} Included</p>
                  </div>
                )}
                {course.syllabus?.length > 0 && (
                  <div>
                    <p className="text-gray-400 uppercase tracking-widest mb-0.5" style={{ fontSize: "10px" }}>Curriculum</p>
                    <p className="text-sm font-medium text-gray-900">{course.syllabus.length} Modules</p>
                  </div>
                )}
                <div>
                  <p className="text-gray-400 uppercase tracking-widest mb-0.5" style={{ fontSize: "10px" }}>Certificate</p>
                  <p className="text-sm font-medium text-gray-900">Included</p>
                </div>
              </div>
            </div>

            {/* Right: banner card — hidden on mobile */}
            <div className="hidden sm:block">
              <CourseBanner course={course} accent={accent} icons={bannerIcons} />
            </div>
          </div>

          {/* ── ABOUT ────────────────────────────────────────── */}
          {course.fullDescription && (
            <div className="py-8 border-b border-gray-100">
              <p
                className="font-medium uppercase tracking-widest mb-3.5"
                style={{ fontSize: "10px", color: accent.color }}
              >
                About This Course
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">{course.fullDescription}</p>
            </div>
          )}

          {/* ── FEATURES ─────────────────────────────────────── */}
          {course.features?.length > 0 && (
            <div className="py-8 border-b border-gray-100">
              <p
                className="font-medium uppercase tracking-widest mb-5"
                style={{ fontSize: "10px", color: accent.color }}
              >
                Course Features
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {course.features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 py-2.5 border-b border-gray-100"
                    style={
                      i % 2 === 0
                        ? { borderRight: "0.5px solid #f3f4f6", paddingRight: "20px" }
                        : { paddingLeft: "20px" }
                    }
                  >
                    <div
                      className="w-7 h-7 rounded-md flex items-center justify-center shrink-0"
                      style={{
                        background: accent.light,
                        border: `0.5px solid ${accent.pillBorder}`,
                        color: accent.color,
                      }}
                    >
                      {featIcons[i % featIcons.length]}
                    </div>
                    <span className="text-sm text-gray-800 leading-snug pt-1">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── SYLLABUS ─────────────────────────────────────── */}
          {course.syllabus?.length > 0 && (
            <div className="py-8 border-b border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <p
                  className="font-medium uppercase tracking-widest"
                  style={{ fontSize: "10px", color: accent.color }}
                >
                  What You Will Learn
                </p>
                <span className="text-xs text-gray-400">{course.syllabus.length} modules</span>
              </div>
              <div className="border-t border-gray-100">
                {course.syllabus.map((mod, i) => (
                  <SyllabusItem key={i} mod={mod} accent={accent} defaultOpen={i === 0} />
                ))}
              </div>
            </div>
          )}

          {/* ── CTA ──────────────────────────────────────────── */}
          <div className="py-10">
            <div
              className="flex items-center justify-between gap-4 flex-wrap rounded-xl px-6 py-5"
              style={{
                background: accent.light,
                border: `0.5px solid ${accent.pillBorder}`,
              }}
            >
              <div>
                <p className="text-sm font-medium text-gray-900 mb-0.5">Ready to enroll?</p>
                <p className="text-xs text-gray-500">
                  Reach out and get started with{" "}
                  <span className="font-medium text-gray-700">{course.title}</span>.
                </p>
              </div>
              <Link
                to="/Enquire"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-white text-xs font-medium rounded-md no-underline transition-opacity hover:opacity-90"
                style={{ background: accent.color }}
              >
                Enquire Now
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}