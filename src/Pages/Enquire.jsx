import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const LOGOS = [
  "/DOAP.AVIF",
  "/ZB3DS.AVIF",
  "/DTP.AVIF",
  "/FSWD.AVIF",
  "/DAMD.AVIF",
  "/DS.AVIF",
  "/DA.AVIF",
  "/EH.AVIF",
  "/DM.AVIF",
  "/IDD.AVIF",
  "/AFA.AVIF",
  "/HRMD.AVIF",
  "/PP.AVIF",
  "/UIUXD.AVIF",
  "/CC.AVIF",
  "/AI.AVIF",
  "/DAMD.AVIF",
  "/AA.AVIF",
  "/MO.AVIF",
  "/GD.AVIF",
  "/2D3DA.AVIF",
];

// Course information mapping
const COURSE_INFO = {
  "/DOAP.AVIF": {
    name: "Digital Optimization & Analytics",
    desc: "SEO, Analytics, Digital Marketing",
  },
  "/ZB3DS.AVIF": {
    name: "3D Design & Modeling",
    desc: "3DS Max, Blender, Advanced Modeling",
  },
  "/DTP.AVIF": {
    name: "Desktop Publishing",
    desc: "InDesign, Photoshop, Print Design",
  },
  "/FSWD.AVIF": {
    name: "Full Stack Web Development",
    desc: "MERN Stack, Responsive Design",
  },
  "/DAMD.AVIF": {
    name: "Data Analysis & Modeling",
    desc: "Data Science, Python, SQL",
  },
  "/DS.AVIF": { name: "Data Science", desc: "Machine Learning, AI, Analytics" },
  "/DA.AVIF": {
    name: "Digital Advertising",
    desc: "Google Ads, Facebook Marketing",
  },
  "/EH.AVIF": {
    name: "E-Commerce Hub",
    desc: "Shopify, WooCommerce, Store Setup",
  },
  "/DM.AVIF": {
    name: "Digital Marketing",
    desc: "SEO, SEM, Social Media Marketing",
  },
  "/IDD.AVIF": {
    name: "Interface & UX Design",
    desc: "UI/UX, Figma, User Experience",
  },
  "/AFA.AVIF": { name: "Advanced Front-end", desc: "React, Vue, Advanced JS" },
  "/HRMD.AVIF": { name: "HR & Management", desc: "HR Basics, Team Management" },
  "/PP.AVIF": {
    name: "Project Planning",
    desc: "Agile, Scrum, Project Management",
  },
  "/UIUXD.AVIF": {
    name: "UI/UX Design",
    desc: "Figma, Prototyping, Design Systems",
  },
  "/CC.AVIF": {
    name: "Cyber Security",
    desc: "Network Security, Ethical Hacking",
  },
  "/AI.AVIF": {
    name: "Artificial Intelligence",
    desc: "Python, ML, Deep Learning",
  },
};

const STATS = [
  { number: "1000+", label: "Students Enrolled" },
  { number: "50+", label: "Industry Mentors" },
  { number: "100%", label: "Placement Support" },
];

const PROGRAMS = [
  "Web Development",
  "App Development",
  "AI & Robotics",
  "Cyber Security",
];

const COURSES = [
  "AAE",
  "FVEC",
  "APP",
  "MAYA",
  "UIUXDAF",
  "BA",
  "PD",
  "SE",
  "MEVBA",
  "MA",
  "ADFA",
  "ALMC",
  "TPGST",
  "CIA",
  "BUSYAS",
  "SAPFICO",
  "SAPMM",
  "SAPSD",
  "SAPPP",
  "SAPHCM",
  "B3DA",
  "Others",
];

const QUALIFICATIONS = [
  "10th Pass",
  "12th Pass",
  "Graduation",
  "Post Graduation",
  "Other",
];

const WHATSAPP_NUMBER = "919217661339";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello IIOFT! \nI need information about admission..\nKindly guide me. ",
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

// ─── Shared animation variants ────────────────────────────────────────────────

const containerVariant = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

// ─── WhatsApp Icon ─────────────────────────────────────────────────────────────

function WhatsAppIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

// ─── LOGO CAROUSEL COMPONENT ─────────────────────────────────────────────────

function LogoCarousel({ logos }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logos.length);
    }, 4000); // 4 seconds per image

    return () => clearInterval(interval);
  }, [autoPlay, logos.length]);

  const currentLogo = logos[currentIndex];
  const courseInfo = COURSE_INFO[currentLogo] || {
    name: "Course",
    desc: "Learn new skills",
  };

  return (
    <div className="py-20 px-6 max-w-6xl mx-auto">
      {/* Main Carousel Container */}
      <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative flex flex-col items-center">
            <div className="w-full max-w-sm h-64 md:h-80 bg-linear-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center overflow-hidden border border-white/40">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={currentLogo}
                  loading="eager"
                  decoding="async"
                  alt={courseInfo.name}
                  width={320}
                  height={240}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="w-auto h-auto max-h-full max-w-full object-contain p-4"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Info Section */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-3">
                {courseInfo.name}
              </h3>
              <p className="text-lg text-gray-600 mb-4">{courseInfo.desc}</p>
              <div className="h-1 w-20 bg-linear-to-r from-indigo-600 to-purple-600 rounded-full" />
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎓</span>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Industry-Ready
                  </h4>
                  <p className="text-sm text-gray-600">
                    Learn from experts in the field
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💼</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Job Support</h4>
                  <p className="text-sm text-gray-600">
                    100% placement assistance guaranteed
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">⏱️</span>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Flexible Schedule
                  </h4>
                  <p className="text-sm text-gray-600">
                    Learn at your own pace with mentorship
                  </p>
                </div>
              </div>
            </div>

            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
            >
              <motion.button
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0px 0px 30px rgba(37,211,102,0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-3 bg-[#25D366] hover:bg-[#20c25c] text-white font-semibold rounded-full shadow-lg transition-colors w-full justify-center"
              >
                <WhatsAppIcon size={20} />
                Enquire Now
              </motion.button>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ─── Enquire Form Component ──────────────────────────────────────────────────────

function EnquireForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    qualification: "",
    city: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, "")))
      newErrors.phone = "Enter a valid 10-digit mobile number";
    if (!form.course) newErrors.course = "Please select a course";
    return newErrors;
  };

  const buildMessage = () => {
    let text = `Hello IIOFT! 👋 I am interested in admission.\n\n`;
    text += `Name: ${form.name}\n`;
    text += `Phone: ${form.phone}\n`;
    if (form.email) text += `Email: ${form.email}\n`;
    text += `Course: ${form.course}\n`;
    if (form.qualification) text += `Qualification: ${form.qualification}\n`;
    if (form.city) text += `City: ${form.city}\n`;
    if (form.message) text += `Message: ${form.message}\n`;
    return text;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage())}`;
    setSubmitted(true);
    setTimeout(() => window.open(waUrl, "_blank"), 600);
  };

  const inputBase =
    "w-full px-4 py-3 rounded-xl border text-sm text-gray-800 bg-white placeholder-gray-400 outline-none transition focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400";
  const normalBorder = "border-gray-200 hover:border-gray-300";
  const errorBorder = "border-red-400 focus:ring-red-200 focus:border-red-400";

  return (
    <AnimatePresence mode="wait">
      {!submitted ? (
        <motion.div
          key="form"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-xl mx-auto bg-white/80 backdrop-blur-xl border border-white/60 rounded-xl shadow-2xl p-8"
        >
          <div className="items-center gap-4 mb-6">
            <img
              src="/Logo.WebP"
              alt="IIOFT Logo"
              width={160}
              height={60}
              loading="eager"
              decoding="async"
              style={{ width: "auto", height: "auto", maxHeight: "60px" }}
            />
            <div>
              <h3 className="text-xl mt-6 font-extrabold text-gray-800 justify-center items-center flex">
                Admission
              </h3>
            </div>
          </div>

          <div className="h-px bg-gray-100 mb-6" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={`${inputBase} ${errors.name ? errorBorder : normalBorder}`}
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                Phone Number <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Valid 10-digit mobile number"
                className={`${inputBase} ${errors.phone ? errorBorder : normalBorder}`}
              />
              {errors.phone && (
                <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email (optional)"
              className={`${inputBase} ${normalBorder}`}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                Course <span className="text-red-400">*</span>
              </label>
              <select
                name="course"
                value={form.course}
                onChange={handleChange}
                className={`${inputBase} ${errors.course ? errorBorder : normalBorder}`}
              >
                <option value="">Select a course</option>
                {COURSES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              {errors.course && (
                <p className="text-xs text-red-500 mt-1">{errors.course}</p>
              )}
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                Qualification
              </label>
              <select
                name="qualification"
                value={form.qualification}
                onChange={handleChange}
                className={`${inputBase} ${normalBorder}`}
              >
                <option value="">Select qualification</option>
                {QUALIFICATIONS.map((q) => (
                  <option key={q} value={q}>
                    {q}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
              City / Location
            </label>
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="Your city or location"
              className={`${inputBase} ${normalBorder}`}
            />
          </div>

          <div className="mb-6">
            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
              Message (Optional)
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={3}
              placeholder="Any questions or queries?"
              className={`${inputBase} ${normalBorder} resize-none`}
            />
          </div>

          {(form.name || form.phone || form.course) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 mb-5 text-xs text-gray-600 leading-relaxed"
            >
              <p className="text-green-700 font-semibold mb-1 text-xs uppercase tracking-wide">
                WhatsApp Message Preview
              </p>
              <p className="text-gray-500 whitespace-pre-line">
                {buildMessage()}
              </p>
            </motion.div>
          )}

          <motion.button
            onClick={handleSubmit}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 0px 24px rgba(37,211,102,0.5)",
            }}
            whileTap={{ scale: 0.97 }}
            className="w-full flex items-center justify-center gap-3 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20c25c] text-white font-bold text-base shadow-lg transition-colors"
          >
            <WhatsAppIcon size={20} />
            Send on WhatsApp
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-sm mx-auto bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl shadow-2xl p-10 flex flex-col items-center text-center gap-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 12,
              delay: 0.2,
            }}
            className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </motion.div>
          <h3 className="text-xl font-extrabold text-gray-800">
            WhatsApp Opening...
          </h3>
          <p className="text-sm text-gray-500">
            Your application is ready. Just hit{" "}
            <span className="font-semibold text-green-600">Send</span> on
            WhatsApp!
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-2 text-xs text-indigo-500 underline underline-offset-2 hover:text-indigo-700"
          >
            Go back to form
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Main Enquire Page ─────────────────────────────────────────────────────────

export default function Enquire() {
  return (
    <div className="relative overflow-hidden bg-linear-to-b from-white via-blue-50 to-indigo-100">
      {/* HERO CTA */}
      <motion.section
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col justify-center items-center text-center px-4 py-20 relative z-10"
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-6"
        >
          Ready to Start Your Tech Journey?
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-gray-600 max-w-2xl mb-10 text-lg"
        >
          Join IIOFT and build industry-ready skills that top companies are
          looking for.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 0px 30px rgba(37,211,102,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-10 py-4 bg-[#25D366] hover:bg-[#20c25c] text-white text-lg font-semibold rounded-full shadow-xl transition-colors"
            >
              <WhatsAppIcon size={24} />
              Enquire on WhatsApp
            </motion.button>
          </motion.a>

          <motion.a href="tel:+919217661339">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 border-2 border-indigo-600 text-indigo-700 text-lg font-semibold rounded-full shadow hover:bg-indigo-50 transition-colors"
            >
              Call Us Now
            </motion.button>
          </motion.a>
        </motion.div>
      </motion.section>

      {/* HELMET */}

      <Helmet>
        <title>Enquire Now - IIOFT Delhi | Admission Open 2026</title>
        <meta
          name="description"
          content="IIOFT Delhi mein admission ke liye abhi Enquire karo. Web Development, Data Science, AI & Robotics, Cyber Security aur bahut saare courses mein enroll karo. 100% Placement Support."
        />
        <meta
          name="keywords"
          content="IIOFT admission, Enquire IIOFT Delhi, IIOFT enrollment 2026, technology course admission Delhi, data science admission, web development admission Delhi"
        />
        <meta
          property="og:title"
          content="Enquire Now - IIOFT Delhi | Admission Open 2026"
        />
        <meta
          property="og:description"
          content="IIOFT Delhi mein admission ke liye abhi Enquire karo. Limited seats available. 100% Placement Support!"
        />
        <meta property="og:url" content="https://iioft.co.in/Enquire" />
        <link rel="canonical" href="https://iioft.co.in/Enquire" />

        {/* Preload first few images */}
        <link rel="preload" as="image" href="/DOAP.AVIF" />
        <link rel="preload" as="image" href="/ZB3DS.AVIF" />
        <link rel="preload" as="image" href="/DTP.AVIF" />
      </Helmet>

      {/* Background glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-400/20 blur-3xl rounded-full animate-pulse" />

      {/* LOGO CAROUSEL */}
      <LogoCarousel logos={LOGOS} />

      {/* STATS */}
      <section className="py-20 bg-white/40 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 text-center gap-10 px-6">
          {STATS.map(({ number, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-indigo-700">{number}</h3>
              <p className="text-gray-600 mt-2">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-indigo-700"
        >
          Our Flagship Programs
        </motion.h2>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-4 gap-8"
        >
          {PROGRAMS.map((program) => (
            <motion.div
              key={program}
              variants={fadeUp}
              whileHover={{ scale: 1.08, rotateY: 5 }}
              className="bg-white/30 backdrop-blur-xl border border-white/40 text-indigo-900 p-8 rounded-3xl shadow-2xl cursor-pointer"
            >
              <h3 className="text-xl font-semibold">{program}</h3>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ENQUIRE FORM SECTION */}
      <section className="py-24 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-indigo-700">
            Enquire Now
          </h2>
          <p className="text-gray-500 mt-6 text-lg">
            INTERNATIONAL INSTITUTE OF FUTURISTIC TECHNOLOGY
          </p>
        </motion.div>

        <EnquireForm />
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-950 mt-6 border-t border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
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
