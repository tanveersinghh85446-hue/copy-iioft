import React, { useState } from "react";
import { FaHourglassHalf } from "react-icons/fa6";
import { CiLocationOn, CiPhone } from "react-icons/ci";
import { GrMapLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { FaRoute } from "react-icons/fa";

import { Helmet } from "react-helmet-async";

// ─── Static data ──────────────────────────────────────────────────────────────

const FAQ_SECTIONS = [
  {
    title: "Mode of Learning",
    subtitle: "Explore flexible learning options available at IIOFT.",
    emoji: "🎓",
    items: [
      [
        "Are classes online or offline?",
        "IIOFT offers both online and offline learning modes to suit every student's lifestyle and schedule.",
      ],
      [
        "Are classes live or recorded?",
        "We provide live interactive classes alongside recorded lectures so you never miss a session.",
      ],
    ],
  },
  {
    title: "Certification & Placement",
    subtitle: "Learn more about certification and career support at IIOFT.",
    emoji: "🏆",
    items: [
      [
        "Will I receive a certificate?",
        "Yes, students receive an official industry-recognized certificate upon successful course completion.",
      ],
      [
        "Does IIOFT provide placement assistance?",
        "Yes, we provide end-to-end placement support including mock interviews, resume building, and job referrals.",
      ],
    ],
  },
  {
    title: "Frequently Asked Questions",
    subtitle: "Find answers to common questions about courses at IIOFT.",
    emoji: "💡",
    items: [
      [
        "What courses are available at IIOFT?",
        "IIOFT offers Web Development, Data Science, AI, Cyber Security, Digital Marketing, and Software Development.",
      ],
      [
        "What is the duration of the courses?",
        "Course durations range from 3 months to 1 year depending on the selected program and depth.",
      ],
      [
        "Can beginners apply?",
        "Absolutely! We offer foundation-level courses with no prior experience required.",
      ],
    ],
  },
];

const CONTACT_CARDS = [
  {
    icon: FaRoute,
    title: "Office Hours",
    lines: ["Monday – Saturday", "9:00 AM – 9:00 PM"],
    gradient: "from-blue-500 to-blue-700",
  },
  {
    icon: GrMapLocation,
    title: "Location",
    lines: ["IIOFT Institute", "Delhi, Dwarka (India)"],
    gradient: "from-blue-600 to-blue-800",
  },
  {
    icon: CiPhone,
    title: "Phone",
    lines: ["+91 9560307098"],
    gradient: "from-blue-500 to-blue-700",
  },
  {
    icon: MdOutlineMarkEmailRead,
    title: "Email",
    lines: ["info@iioft.co.in"],
    gradient: "from-blue-600 to-blue-800",
  },
];

// ─── FAQ Item with open/close state ──────────────────────────────────────────

function FAQItem({ question, answer, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="border border-blue-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-blue-100 hover:shadow-lg transition-all duration-300"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-4 sm:p-5 bg-white hover:bg-blue-50 transition-colors duration-200 text-left"
      >
        <span className="font-semibold text-gray-800 text-sm sm:text-base pr-4">
          {question}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-blue-600 text-2xl font-light shrink-0 leading-none"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-gray-600 text-sm sm:text-base bg-white border-t border-blue-50 pt-3">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── FAQ Section Card ─────────────────────────────────────────────────────────

function FAQSection({ section, index, wide }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className={wide ? "md:col-span-2 flex justify-center" : ""}
    >
      <div className={wide ? "w-full md:w-2/3" : "w-full"}>
        {/* Section header */}
        <div className="relative mb-6">
          <div className="bg-linear-to-r from-blue-600 to-blue-700 rounded-2xl px-5 py-5 sm:py-6 text-center shadow-lg shadow-blue-200">
            <span className="text-3xl mb-2 block">{section.emoji}</span>
            <h2 className="text-lg sm:text-2xl font-bold text-white tracking-wide">
              {section.title}
            </h2>
          </div>
          <p className="text-center text-gray-500 text-xs sm:text-sm mt-3 mb-4 px-2">
            {section.subtitle}
          </p>
        </div>
        {/* FAQ items */}
        <div className="space-y-3">
          {section.items.map(([q, a], i) => (
            <FAQItem key={q} question={q} answer={a} index={i} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Contact() {
  return (
    <div className="bg-linear-to-br from-blue-50 via-white to-blue-100 min-h-screen font-sans">
      <Helmet>
        <title>Contact Us - IIOFT Delhi | Admissions & Enquiry</title>
        <meta
          name="description"
          content="IIOFT Delhi se contact karo. Admission enquiry, course details ya career counselling ke liye humse aaj hi sampark karo. Phone: +91 9560307098. Location: Dwarka, Delhi."
        />
        <meta
          name="keywords"
          content="IIOFT contact, IIOFT Delhi address, IIOFT phone number, IIOFT admission enquiry, contact futuristic technology institute Delhi, IIOFT Dwarka"
        />
        <meta
          property="og:title"
          content="Contact Us - IIOFT Delhi | Admissions & Enquiry"
        />
        <meta
          property="og:description"
          content="IIOFT Delhi se contact karo - Admission, courses ya career counselling ke liye. Phone: +91 9560307098. Location: Dwarka, Delhi."
        />
        <meta property="og:url" content="https://iioft.co.in/contact" />
        <link rel="canonical" href="https://iioft.co.in/contact" />
      </Helmet>

      {/* ── Hero Section ── */}
      <div className="relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-40 pointer-events-none" />
        <div className="absolute -top-10 -right-10 w-56 h-56 bg-blue-300 rounded-full blur-3xl opacity-30 pointer-events-none" />

        <div className="relative flex flex-col justify-center items-center text-center px-4 pt-14 pb-10 sm:pt-20 sm:pb-14">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 text-blue-700 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full mb-5"
          >
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse inline-block" />
            We're here to help
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight"
          >
            Get in <span className="text-blue-600 relative">Touch</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg mt-5 max-w-xs sm:max-w-md md:max-w-2xl text-gray-500 leading-relaxed"
          >
            We'd love to hear from you! Reach out to IIOFT for admissions,
            course enquiries, or career counselling — our team is ready to
            assist you.
          </motion.p>
        </div>
      </div>

      {/* ── Map ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 pb-14"
      >
        <div className="rounded-3xl shadow-2xl shadow-blue-200 overflow-hidden border-4 border-white ring-1 ring-blue-100">
          <iframe
            className="w-full h-72 sm:h-96 md:h-120"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.4946156940155!2d77.0695990750898!3d28.584934975690793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b1640462c63%3A0x2773755cd2530ad8!2sKochhar%20Plaza!5e0!3m2!1sen!2sin!4v1771833625543!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="IIOFT Location"
          />
        </div>
      </motion.div>

      {/* ── FAQ Section ── */}
      <section className="py-8 sm:py-14 px-4 sm:px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">
              FAQs
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-1">
              Your Questions, Answered
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FAQ_SECTIONS.map((section, i) => (
              <FAQSection
                key={section.title}
                section={section}
                index={i}
                wide={i === 2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-4 sm:mx-8 md:mx-auto md:max-w-5xl rounded-3xl overflow-hidden my-10"
      >
        <div className="bg-linear-to-r from-blue-600 via-blue-700 to-blue-800 text-white text-center py-10 sm:py-14 px-6 relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-white opacity-5 rounded-full translate-x-1/3 translate-y-1/3" />

          <p className="text-blue-200 text-xs sm:text-sm uppercase tracking-widest font-medium mb-2">
            Take the next step
          </p>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold leading-snug">
            Ready to Start Your Future
            <br className="hidden sm:block" /> With IIOFT?
          </h2>
          <p className="mt-3 text-white text-sm sm:text-base max-w-md mx-auto">
            Join thousands of students building successful careers with
            industry-ready skills.
          </p>
          <a
            href="tel:+919560307098"
            className="inline-block mt-6 bg-white text-blue-700 font-bold px-7 py-3 rounded-full text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Call Us Now →
          </a>
        </div>
      </motion.div>

      {/* ── Contact Cards ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {CONTACT_CARDS.map(({ icon: Icon, title, lines, gradient }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 overflow-hidden"
          >
            {/* Top accent stripe */}
            <div className={`bg-linear-to-r ${gradient} h-1.5 w-full`} />
            <div className="p-4 sm:p-6 text-center">
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br ${gradient} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md`}
              >
                <Icon className="text-white text-lg sm:text-xl" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1.5">
                {title}
              </h3>
              {lines.map((line) => (
                <p
                  key={line}
                  className="text-gray-500 text-xs sm:text-sm leading-relaxed"
                >
                  {line}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

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
