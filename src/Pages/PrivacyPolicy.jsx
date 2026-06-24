import React from "react";
import { Link } from "react-router-dom";
export default function PrivacyPolicy() {
  return (
    <div className="bg-white text-black min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-blue-600 mb-6 border-b pb-3">
          Privacy Policy
        </h1>

        {/* Section */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <div>
            <h2 className="font-semibold text-lg text-black mb-2">
              1. Information We Collect
            </h2>
            <p>
              Personal Information: Name, contact details, email, phone number,
              address, and educational details.
            </p>
            <p>
              Payment Information: We use secure payment gateways and do not
              store sensitive payment details.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-black mb-2">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To provide educational services and customer support</li>
              <li>To send updates about courses and schedules</li>
              <li>To improve our website and services</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-black mb-2">
              3. Data Sharing
            </h2>
            <p>
              We do not sell, trade, or rent your personal information. Data may
              be shared only with trusted partners for communication and
              certification purposes.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-black mb-2">
              4. Data Security
            </h2>
            <p>
              We implement strict security measures to protect your data from
              unauthorized access or disclosure.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-black mb-2">
              5. Cookies and Tracking
            </h2>
            <p>
              Our website may use cookies to enhance user experience. You can
              disable cookies in your browser settings if you prefer.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-black mb-2">
              6. Your Rights
            </h2>
            <p>
              You have the right to access, update, or request deletion of your
              personal data by contacting us.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-black mb-2">
              7. Policy Updates
            </h2>
            <p>
              This Privacy Policy may be updated from time to time. Continued
              use of our services means you accept the updated policy.
            </p>
          </div>
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
