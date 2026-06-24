import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { path: "/", name: "Home" },
  { path: "/course", name: "Course" },
  { path: "/about", name: "About" },
  { path: "/know-more", name: "Know More" },
  { path: "/blog", name: "Blog" },
  { path: "/testimonials", name: "Reviews" },
  { path: "/contact", name: "Contact" },
  { path: "/enquire", name: "Enquire" },
];

const ABOUT_DROPDOWN = [
  { path: "/about", name: "About" },
  { path: "/know-more", name: "Know More" },
  { path: "/blog", name: "Blog" },
  { path: "/testimonials", name: "Reviews" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [aboutMobileOpen, setAboutMobileOpen] = useState(false);

  const MOBILE_LINKS = [
    { path: "/", name: "Home" },
    { path: "/course", name: "Course" },
    { path: "/contact", name: "Contact" },
    { path: "/enquire", name: "Enquire" },
  ];

  return (
    <>
      <nav className="bg-blue-700 text-white shadow-md w-full sticky top-0 z-50">
        <div className="px-4 md:px-10 py-3 border-b border-blue-600">
          <div className="hidden md:flex justify-center gap-20">
            <Link to="/">
              <img
                className="h-12 w-auto object-contain"
                src="/Logo.WebP"
                alt="IIOFT Logo"
              />
            </Link>

            <h1 className="font-bold text-2xl lg:text-3xl leading-tight tracking-wide">
              INTERNATIONAL INSTITUTE OF FUTURISTIC TECHNOLOGY
            </h1>

            <div className="bg-blue-700 flex gap-10">
              <Link to="/">
                <img
                  className="h-12 w-auto object-contain"
                  src="/NSDC.WebP"
                  alt="NSDC Logo"
                />
              </Link>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="md:hidden">
            <div className="flex items-center justify-between">
              <div className="flex-1 flex justify-center">
                <Link to="/">
                  <img
                    className="h-12 w-auto object-contain"
                    src="/Logo.WebP"
                    alt="IIOFT Logo"
                  />
                </Link>
              </div>
              <button
                className="flex flex-col gap-1.5 p-2 focus:outline-none absolute right-4"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                <span
                  className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </button>
            </div>
            <h1 className="font-bold text-base sm:text-lg text-center mt-3 leading-tight tracking-wide">
              INTERNATIONAL INSTITUTE OF FUTURISTIC TECHNOLOGY
            </h1>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center justify-center gap-10 px-10 py-3 font-semibold text-base lg:text-lg bg-blue-700">
          {NAV_LINKS.map(({ path, name }) => (
            <Link
              key={path}
              to={path}
              className={`transition duration-300 hover:text-yellow-300 ${
                pathname === path
                  ? "text-yellow-300 border-b-2 border-yellow-300"
                  : ""
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-72 bg-blue-700 text-white z-50 shadow-2xl md:hidden flex flex-col pt-20 px-6 gap-4 font-semibold text-lg"
          >
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 p-2 focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              <span className="block w-6 h-0.5 bg-white rotate-45 translate-y-1" />
              <span className="block w-6 h-0.5 bg-white -rotate-45 -translate-y-0.5" />
            </button>

            {/* Mobile Links */}
            {MOBILE_LINKS.map(({ path, name }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`transition duration-300 border-b border-blue-600 pb-4 hover:text-yellow-300 ${
                  pathname === path ? "text-yellow-300" : ""
                }`}
              >
                {name}
              </Link>
            ))}

            {/* About Accordion - Mobile */}
            <div className="border-b border-blue-600 pb-4">
              <button
                onClick={() => setAboutMobileOpen(!aboutMobileOpen)}
                className="w-full flex justify-between items-center hover:text-yellow-300 transition duration-300"
              >
                About
                <motion.span
                  animate={{ rotate: aboutMobileOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm"
                >
                  ▾
                </motion.span>
              </button>

              <AnimatePresence>
                {aboutMobileOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-4 flex flex-col gap-3 pl-4"
                  >
                    {ABOUT_DROPDOWN.map(({ path, name }) => (
                      <Link
                        key={path}
                        to={path}
                        onClick={() => setIsOpen(false)}
                        className={`text-base font-medium transition duration-300 hover:text-yellow-300 ${
                          pathname === path ? "text-yellow-300" : "text-white"
                        }`}
                      >
                        → {name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
