import React from "react";
import { Link } from "react-router-dom";
export default function TermsConditions() {
  return (
    <div className="bg-white text-black min-h-screen px-6 py-12">
      
      <div className="max-w-4xl mx-auto">
        
        {/* Heading */}
        <h1 className="text-3xl font-bold text-blue-600 mb-6 border-b pb-3">
          Terms & Conditions
        </h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">

          {/* 1 */}
          <div>
            <h2 className="text-lg font-semibold text-black mb-2">
              1. Introduction
            </h2>
            <p>
              Welcome to <strong>INTERNATIONAL INSTITUTE OF FUTURISTIC TECHNOLOGY
</strong>. By enrolling in our courses or
              using our services, you agree to follow these Terms and Conditions.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-lg font-semibold text-black mb-2">
              2. Enrollment and Payments
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>All course fees must be paid as per the schedule</li>
              <li>Fees are generally non-refundable</li>
              <li>
                INTERNATIONAL INSTITUTE OF FUTURISTIC TECHNOLOGY
 may cancel or reschedule courses if required
              </li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-lg font-semibold text-black mb-2">
              3. Attendance and Certification
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Minimum 75% attendance required</li>
              <li>Certificate after successful completion</li>
              <li>All dues must be cleared</li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-lg font-semibold text-black mb-2">
              4. Code of Conduct
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Maintain discipline and respect</li>
              <li>Misconduct may lead to termination</li>
            </ul>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-lg font-semibold text-black mb-2">
              5. Intellectual Property
            </h2>
            <p>
              All course materials belong to <strong>INTERNATIONAL INSTITUTE OF FUTURISTIC TECHNOLOGY
</strong>. Copying or
              sharing without permission is not allowed.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-lg font-semibold text-black mb-2">
              6. Limitation of Liability
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>No responsibility for personal loss or damage</li>
              <li>No job guarantee after course completion</li>
            </ul>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-lg font-semibold text-black mb-2">
              7. Amendments
            </h2>
            <p>
              INTERNATIONAL INSTITUTE OF FUTURISTIC TECHNOLOGY
 can update these terms anytime. Continued use means you agree
              to changes.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-lg font-semibold text-black mb-2">
              8. Contact Information
            </h2>
            <p>
              For any queries, please contact us through our official website.
            </p>
          </div>

        </div>
      </div>

      {/* ── FOOTER BOTTOM ── */}
      <footer className="bg-blue-950 mt-6">
        <div className="max-w-6xl mx-auto px-4 py-6 sm:py-5">
          {/* Mobile: Stacked Layout | Desktop: Single Row */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
            {/* Copyright */}
            <p className="text-blue-300 text-xs sm:text-sm text-center sm:text-left">
              © 2026 IIOFT. All Rights Reserved.
            </p>

            {/* Contact Links */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
              <a
                href="tel:+919560307098"
                className="text-blue-400 hover:text-white text-xs sm:text-sm transition-colors"
              >
                📞 +91 9560307098
              </a>
              <a
                href="mailto:info@iioft.co.in"
                className="text-blue-400 hover:text-white text-xs sm:text-sm transition-colors break-all"
              >
                ✉️ info@iioft.co.in
              </a>
            </div>

            {/* Policy Links */}
            <div className="flex gap-4 sm:gap-3 items-center justify-center flex-wrap">
              <Link
                className="text-blue-400 hover:text-white text-xs sm:text-sm transition-colors whitespace-nowrap"
                to="/PrivacyPolicy"
              >
                Privacy Policy
              </Link>
              <span className="text-blue-600 hidden sm:inline">|</span>
              <Link
                className="text-blue-400 hover:text-white text-xs sm:text-sm transition-colors whitespace-nowrap"
                to="/TermsConditions"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}