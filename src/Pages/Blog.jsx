import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { IoIosFlash } from "react-icons/io";
import { SiMinds } from "react-icons/si";
import { FaRobot } from "react-icons/fa6";
import { FaSquarespace } from "react-icons/fa";
import { BiSolidInstitution } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";
import { Link } from "react-router-dom";

// Static Data
const categories = [
  { id: "all", label: "All Posts", icon: <IoIosFlash /> },
  { id: "ai", label: "AI & Machine Learning", icon: <SiMinds /> },
  { id: "robotics", label: "Robotics & Automation", icon: <FaRobot /> },
  { id: "space", label: "Space & Futuristic", icon: <FaSquarespace /> },
  { id: "institute", label: "Institute News", icon: <BiSolidInstitution /> },
];

const posts = [
  {
    id: 1,
    category: "Education",
    title: "A Teacher Guiding a Student",
    excerpt:
      "A teacher helping a student understand lessons with patience and dedication, showing how the right guidance and support can make learning easier and more meaningful for students.",
    tag: "Education Teaching Mentorship",
    img: "Study.AVIF",
  },
  {
    id: 2,
    category: "Education / Events",
    title: "Inauguration of IBM SkillsBuild Training Program",
    excerpt:
      "The inauguration ceremony of the IBM SkillsBuild training program began with the traditional lamp lighting, marking the start of advanced IT skills training for students and learners.",
    tag: "IBM SkillsBuild",
    img: "Image1.AVIF",
  },
  {
    id: 3,
    category: "Event, IT Training",
    title: "Group Photo of IBM SkillsBuild Training Participants",
    excerpt:
      "Students and faculty gathered for a group photo after the successful completion of the IBM SkillsBuild training program at the institute, capturing memories of learning, collaboration, and achievement.",
    tag: "Trinity Institute",
    img: "Team.AVIF",
  },
  {
    id: 4,
    category: "Training / Education / Workshop",
    title: "Professional Training and Presentation Session",
    excerpt:
      "A trainer delivering a presentation during a professional training session, where participants learn through discussions, visual presentations, and practical work on laptops.",
    tag: "Professional Training",
    img: "AB.AVIF",
  },
  {
    id: 5,
    category: "institute",
    title: "Digital Learning and Media Controls Interface",
    excerpt:
      "A digital interface showing media control buttons used in video playback, editing, or e-learning platforms, representing modern digital learning and technology-based education.",
    tag: "Digital learning, Media player",
    img: "Group.AVIF",
  },
];

const popularTags = [
  "Neural Networks",
  "Automation",
  "Quantum",
  "Mars",
  "Deep Learning",
  "Drones",
  "LLMs",
  "Biotech",
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = posts.filter((p) => {
    const matchCat = activeCategory === "all" || p.category === activeCategory;
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="font-sans text-gray-800 bg-gray-50 overflow-hidden">
      {/* HELMET */}
      <Helmet>
        <title>Blog - IIOFT | Tech Insights & Institute News</title>
        <meta
          name="description"
          content="IIOFT Blog — AI, Robotics, Space Tech aur Institute News ke latest articles padho."
        />
        <meta
          name="keywords"
          content="IIOFT blog, tech insights, AI articles, robotics news, space technology, institute news Delhi"
        />
        <meta property="og:title" content="Blog - IIOFT | Tech Insights" />
        <meta property="og:url" content="https://iioft.co.in/blog" />
        <link rel="canonical" href="https://iioft.co.in/blog" />
      </Helmet>

      {/* ── HERO ── */}
      <header className="py-16 px-4 text-center bg-linear-to-r from-blue-700 via-indigo-700 to-blue-900 text-white animate-fade-in">
        <p className="text-sm uppercase tracking-widest opacity-75 mb-3 font-medium">
          INTERNATIONAL INSTITUTE OF FUTURISTIC TECHNOLOGY
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Our Blog
        </h1>
        <p className="text-lg opacity-90 max-w-xl mx-auto mb-10">
          Exploring the Future of Technology
        </p>
        <div className="max-w-lg mx-auto relative">
          <input
            type="text"
            placeholder="Search articles…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-5 py-3 pr-12 rounded-full text-gray-800 bg-white shadow-lg
                       placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
            <FaSearch />
          </span>
        </div>
      </header>

      {/* ── CATEGORIES ── */}
      <section className="bg-white border-b border-gray-200 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-sm
                          transition-all duration-300 shadow-sm
                          ${
                            activeCategory === cat.id
                              ? "bg-linear-to-r from-blue-700 to-indigo-700 text-white shadow-md scale-105"
                              : "bg-blue-50 text-blue-700 hover:bg-blue-100"
                          }`}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* ── MAIN + SIDEBAR ── */}
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12">
        {/* ── BLOG GRID ── */}
        <main className="flex-1">
          {filtered.length === 0 ? (
            <div className="text-center py-24 text-gray-400">
              <p className="text-5xl mb-4 flex justify-center">
                <FaSearch />
              </p>
              <p className="text-xl font-semibold">No articles found.</p>
              <p className="text-sm mt-2">
                Try a different search or category.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {filtered.map((post, i) => (
                <article
                  key={post.id}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col
                             border border-gray-100 transition-all duration-300 hover:-translate-y-3 hover:scale-105 animate-slide-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="relative overflow-hidden h-48 group">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                    <span
                      className="absolute top-3 left-3 bg-linear-to-r from-blue-700 to-indigo-700
                                     text-white text-xs font-bold px-3 py-1 rounded-full shadow"
                    >
                      {post.tag}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h2 className="text-lg font-bold text-gray-800 mb-3 leading-snug line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </main>

        {/* ── SIDEBAR ── */}
        <aside className="lg:w-80 flex flex-col gap-8">
          {/* Search Box */}
          <div className="bg-linear-to-br from-blue-100 to-indigo-100 rounded-3xl p-6 shadow-xl">
            <h3 className="font-bold text-lg text-blue-700 mb-4 flex items-center gap-2">
              <FaSearch /> Search
            </h3>
            <input
              type="text"
              placeholder="Search articles…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-blue-200 bg-white
                         text-gray-700 placeholder-gray-400 focus:outline-none
                         focus:ring-2 focus:ring-indigo-400 transition text-sm"
            />
          </div>

          {/* Popular Tags */}
          <div className="bg-linear-to-br from-blue-100 to-indigo-100 rounded-3xl p-6 shadow-xl">
            <h3 className="font-bold text-lg text-blue-700 mb-4 flex items-center gap-2">
              <IoMdPricetags /> Popular Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white text-blue-700 text-xs font-semibold
                             rounded-full shadow-sm hover:bg-blue-700 hover:text-white
                             cursor-pointer transition-all duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* ── FEATURED ARTICLES STRIP ── */}
      <section className="py-20 bg-linear-to-r from-indigo-600 to-blue-600 text-white px-6 animate-slide-up">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {posts.slice(0, 3).map((post, i) => (
              <div
                key={post.id}
                className="overflow-hidden rounded-3xl shadow-2xl group relative transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-56 object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-xs font-bold bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                    {post.tag}
                  </span>
                  <h3 className="font-bold text-base mt-2 line-clamp-2">
                    {post.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL SHARE + CTA ── */}
      <section className="py-20 bg-white text-center px-6 animate-scale-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Stay Connected with IIOFT
        </h2>
        <p className="text-gray-500 mb-10 text-lg">
          Follow us on social media and never miss an update.
        </p>
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {[
            {
              label: "Facebook",
              icon: <FaFacebookF />,
              link: "https://www.facebook.com/profile.php?id=61578516476737",
            },
            {
              label: "Instagram",
              icon: <FaInstagram />,
              link: "https://www.instagram.com/iioft.official",
            },
            {
              label: "LinkedIn",
              icon: <FaLinkedinIn />,
              link: "https://www.linkedin.com/in/iioft-a72bb83b7/",
            },
            {
              label: "Twitter",
              icon: <FaXTwitter />,
              link: "https://x.com/iioft",
            },
            {
              label: "YouTube",
              icon: <IoLogoYoutube />,
              link: "https://www.youtube.com/channel/UCLhUsvW0O-c6mf7Ti9jrOBg",
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-linear-to-r from-blue-700 to-indigo-700 text-white font-semibold shadow-lg text-sm hover:from-blue-800 hover:to-indigo-800 hover:-translate-y-2 hover:scale-110 transition-all duration-300"
            >
              <span>{s.icon}</span>
              {s.label}
            </a>
          ))}
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
