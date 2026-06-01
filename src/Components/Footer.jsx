import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";
import { BsWhatsapp } from "react-icons/bs";

// ─── Static data ──────────────────────────────────────────────────────────────

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/profile.php?id=61578516476737",
    icon: <FaFacebookF className="text-blue-600 text-lg md:text-2xl" />,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/iioft.official",
    icon: <FaInstagramSquare className="text-pink-600 text-lg md:text-2xl" />,
    label: "Instagram",
  },
  {
    href: "https://www.youtube.com/channel/UCLhUsvW0O-c6mf7Ti9jrOBg",
    icon: <FaYoutube className="text-red-600 text-lg md:text-2xl" />,
    label: "YouTube",
  },
  {
    href: "https://www.linkedin.com/in/iioft-a72bb83b7/",
    icon: <FaLinkedin className="text-blue-800 text-lg md:text-2xl" />,
    label: "LinkedIn",
  },
  {
    href: "https://x.com/iioft",
    icon: <FaXTwitter className="text-black text-lg md:text-2xl" />,
    label: "X (Twitter)",
  },
  {
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=info@iioft.co.in&su=Inquiry&body=Hello%20IIOFT%20Team",
    icon: <IoIosMailUnread className="text-yellow-500 text-lg md:text-2xl" />,
    label: "Email",
  },
  {
    href: "https://wa.me/919560307098",
    icon: <BsWhatsapp className="text-green-600 text-lg md:text-2xl" />,
    label: "WhatsApp",
  },
];

const LOCATIONS = [
  {
    name: "Delhi, India, Dwarka",
    link: "https://www.google.com/maps/search/?api=1&query=Kochhar+Plaza+H3MC+XVF+Ramphal+Chowk+Sector+7+Palam+Delhi+110077",
  },
  {
    name: "Banglore, India",
    link: "https://maps.app.goo.gl/X1jBeHhow9cDK1qG8?g_st=aw",
  },
  {
    name: "Gujrat, India",
    link: "https://maps.app.goo.gl/HP72h9DCfNQjeUfTA?g_st=aw",
  },
  {
    name: "Hyderabad, India",
    link: "https://maps.app.goo.gl/bdL2hZgcMKuAtfxE9?g_st=aw",
  },
  {
    name: "Pune, India",
    link: "https://maps.app.goo.gl/gyt6TCVYwRRpr4Fr8?g_st=aw",
  },
  {
    name: "Capetown, South Africa",
    link: "https://maps.app.goo.gl/aqUSTiutzfPv7EYE7?g_st=aw",
  },
  {
    name: "London, United Kingdom",
    link: "https://maps.app.goo.gl/mswfsuEuiDnDwmRB8?g_st=aw",
  },
  {
    name: "Toronto, Canada",
    link: "https://maps.app.goo.gl/yhSD6dUpi9eoaK149?g_st=aw",
  },
  {
    name: "New York, United States",
    link: "https://maps.app.goo.gl/Yr8xWz4MY8f9aM8U9?g_st=aw",
  },
  {
    name: "Paris, France",
    link: "https://maps.app.goo.gl/yNFMHZTgRBuZbQSE8?g_st=aw",
  },
  {
    name: "Sydney, Australia",
    link: "https://maps.app.goo.gl/NMCKRFoAP8gqNDRK7?g_st=aw",
  },
  {
    name: "Perth, Australia",
    link: "https://maps.app.goo.gl/Rzd2LHerrhH2t1vu6?g_st=aw",
  },
  {
    name: "Adelaide, Australia",
    link: "https://maps.app.goo.gl/Rzd2LHerrhH2t1vu6?g_st=aw",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SocialButton({ href, icon, label }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <button
        aria-label={label}
        className="bg-white transition-transform duration-300 hover:scale-150 h-9 w-9 md:h-12 md:w-12 rounded-full flex items-center justify-center"
      >
        {icon}
      </button>
    </a>
  );
}

// ─── Main Footer Component ────────────────────────────────────────────────────

export default function Footer() {
  const [showMap, setShowMap] = useState(false);

  return (
    <>
      {/* ── FOOTER ── */}
      <div className="bg-blue-600 text-white px-6 md:px-12 lg:px-32 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          <div className="w-full lg:max-w-55 lg:shrink-0">
            <img
              className="max-h-12 w-auto object-contain mb-4"
              src="Logo.WebP"
              sizes="175px"
              alt="Logo"
              loading="lazy"
              decoding="async"
            />
            <p className="text-sm text-white leading-relaxed">
              International Institute of Futuristic Technology (IIOFT) prepares
              students with practical skills and advanced knowledge.
            </p>
            <div className="mt-6">
              <h2 className="text-xl font-bold text-white mb-4">
                Connect With Us!
              </h2>
              <div className="flex flex-wrap gap-2">
                {SOCIAL_LINKS.map((s, i) => (
                  <SocialButton key={i} {...s} />
                ))}
              </div>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-3 lg:contents gap-8">
            <div className="lg:shrink-0">
              <h3 className="text-lg font-bold mb-3">
                India-Based. Globally Focused
              </h3>
              <div className="w-8 h-0.5 bg-blue-300 mb-3" />
              <ul className="space-y-1.5">
                {LOCATIONS.map((loc, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-white cursor-pointer hover:text-black transition-colors duration-200"
                    onClick={() => window.open(loc.link, "_blank")}
                  >
                    <FaMapMarkerAlt className="text-blue-300 text-xs mt-1 shrink-0" />{" "}
                    {loc.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:shrink-0">
              <h3 className="text-lg font-bold mb-3">Quick Links</h3>
              <div className="w-8 h-0.5 bg-blue-300 mb-3" />

              <ul className="flex flex-col space-y-1.5">
                {[
                  ["Home", "/"],
                  ["Contact", "/contact"],
                  ["Course", "/course"],
                  ["About", "/about"],
                  ["Know More", "/know-more"],
                ].map(([label, to]) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="flex items-center gap-2 text-sm text-white hover:text-black transition-colors duration-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-300 shrink-0" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:shrink-0">
              <h3 className="text-lg font-bold mb-3">Contact Us</h3>
              <div className="w-8 h-0.5 bg-blue-300 mb-3" />
              <div className="space-y-2">
                <p className="flex items-center gap-2 text-sm text-white">
                  <FaPhoneAlt className="text-blue-300 shrink-0" /> +91
                  9560307098
                </p>
                <p className="flex items-center gap-2 text-sm text-white">
                  <FaEnvelope className="text-blue-300 shrink-0" />{" "}
                  info@iioft.co.in
                </p>
                <p className="flex items-center gap-2 text-sm text-white">
                  <FaMapMarkerAlt className="text-blue-300 shrink-0" /> India,
                  Dwarka
                </p>
              </div>
              <motion.div
                className="mt-6"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Link to="Enquire">
                  <button className="w-full sm:w-auto px-6 py-2 border-2 border-white rounded-lg font-semibold text-sm hover:bg-white hover:text-blue-600 transition-all duration-300">
                    Enquire Now →
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="w-full lg:w-56 lg:shrink-0">
            <img
              src="Map.AVIF"
              sizes="(min-width: 1024px) 224px, 364px"
              alt="Global Presence Map"
              onClick={() => setShowMap(true)}
              loading="lazy"
              decoding="async"
              className="w-full lg:w-56 h-auto rounded-xl shadow-lg opacity-90 hover:opacity-100 transition duration-300 cursor-pointer"
            />
          </div>

          {showMap && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
              <button
                onClick={() => setShowMap(false)}
                className="absolute top-5 right-5 text-white text-3xl font-bold"
              >
                ×
              </button>
              <img
                src="Map.AVIF"
                alt="Map Full View"
                className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
              />
            </div>
          )}
        </div>
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
    </>
  );
}
