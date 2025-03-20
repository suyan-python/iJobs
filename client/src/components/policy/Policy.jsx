import React from "react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gradient-to-r from-[#1a2a35] to-[#284c53] text-white px-6 py-12 mt-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-white mb-12">
          Privacy Policy
        </h1>

        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8 space-y-12">
          <section>
            <h2 className="text-3xl font-semibold text-[#00B5D8] flex items-center">
              <FaCheckCircle className="mr-3 text-[#40A8F5]" /> Introduction
            </h2>
            <p>
              Welcome to iJobs. This Privacy Policy outlines how we collect,
              use, and protect your personal information when you use our
              services.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-[#00B5D8] flex items-center">
              <FaCheckCircle className="mr-3 text-[#40A8F5]" /> Information
              Collection
            </h2>
            <p>We collect the following types of information:</p>
            <ul className="list-disc pl-6">
              <li>Personal identification details (name, email, etc.)</li>
              <li>Usage data (how you interact with our services)</li>
              <li>Cookies and tracking data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-[#00B5D8] flex items-center">
              <FaExclamationCircle className="mr-3 text-red-500" /> Data Usage
            </h2>
            <p>
              We use your information to provide and improve our services, as
              well as for communication purposes related to your account.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-[#00B5D8] flex items-center">
              <FaCheckCircle className="mr-3 text-[#40A8F5]" /> Data Protection
            </h2>
            <p>
              We implement appropriate security measures to protect your
              personal information from unauthorized access, alteration, or
              destruction.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-[#00B5D8] flex items-center">
              <FaCheckCircle className="mr-3 text-[#40A8F5]" /> Third-Party
              Sharing
            </h2>
            <p>
              We do not sell or share your personal information with third
              parties, except when required by law or to provide our services.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-[#00B5D8] flex items-center">
              <FaExclamationCircle className="mr-3 text-red-500" /> Cookies and
              Tracking Technologies
            </h2>
            <p>
              We use cookies to enhance your experience on our site. You can
              control the use of cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-[#00B5D8] flex items-center">
              <FaCheckCircle className="mr-3 text-[#40A8F5]" /> Your Rights
            </h2>
            <p>
              You have the right to access, correct, or delete your personal
              information. You can also object to or restrict its processing
              under certain conditions.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-[#00B5D8] flex items-center">
              <FaCheckCircle className="mr-3 text-[#40A8F5]" /> Changes to the
              Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time, and the
              changes will be posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-[#00B5D8] flex items-center">
              <FaExclamationCircle className="mr-3 text-red-500" /> Contact
              Information
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <ul className="list-disc pl-6">
              <li>Email: ijobs@ijobs.com</li>
              <li>Phone: +977 9800000000</li>
              <li>Address: Gwarko, Lalitpur</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
