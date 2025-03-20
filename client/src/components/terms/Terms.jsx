import React from "react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const TermsAndServices = () => {
  return (
    <div className="bg-gradient-to-r from-[#1a2a35] to-[#284c53] text-white px-6 py-12 mt-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-white mb-12">
          Terms and Conditions
        </h1>

        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8 space-y-12">
          <section>
            <h2 className="text-3xl font-semibold text-[#00B5D8] flex items-center">
              <FaCheckCircle className="mr-3 text-[#40A8F5]" /> Introduction
            </h2>
            <p>
              Welcome to iJobs. By accessing or using our services, you agree to
              these Terms and Conditions. If you disagree, please do not use our
              services.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-[#00B5D8] flex items-center">
              <FaCheckCircle className="mr-3 text-[#40A8F5]" /> User
              Responsibilities
            </h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6">
              <li>
                Provide accurate and complete information when using our
                services.
              </li>
              <li>Maintain the confidentiality of your account.</li>
              <li>Comply with applicable laws and regulations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-[#00B5D8] flex items-center">
              <FaExclamationCircle className="mr-3 text-red-500" /> Intellectual
              Property
            </h2>
            <p>
              All content, logos, and images on our website are owned by iJobs
              or its partners and protected by copyright and intellectual
              property laws.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-[#00B5D8] flex items-center">
              <FaCheckCircle className="mr-3 text-[#40A8F5]" /> Account
              Registration
            </h2>
            <p>By registering for an account, you agree to:</p>
            <ul className="list-disc pl-6">
              <li>Provide accurate registration details.</li>
              <li>Protect your account and password.</li>
              <li>Notify us if your account is compromised.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-[#00B5D8] flex items-center">
              <FaCheckCircle className="mr-3 text-[#40A8F5]" /> Privacy Policy
            </h2>
            <p>
              Our use of your data is governed by our{" "}
              <a
                href="/privacy-policy"
                className="text-[#00B5D8] font-semibold"
              >
                Privacy Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-[#00B5D8] flex items-center">
              <FaExclamationCircle className="mr-3 text-red-500" /> Limitation
              of Liability
            </h2>
            <p>
              iJobs is not liable for any damages arising from the use of our
              services, including any errors or omissions in content.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-[#00B5D8] flex items-center">
              <FaCheckCircle className="mr-3 text-[#40A8F5]" /> Third-Party
              Links
            </h2>
            <p>
              We are not responsible for the content or practices of any
              third-party websites linked from our platform.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-[#00B5D8] flex items-center">
              <FaExclamationCircle className="mr-3 text-red-500" /> Termination
              of Service
            </h2>
            <p>
              We may suspend or terminate your access to our services if you
              violate these Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-[#00B5D8] flex items-center">
              <FaCheckCircle className="mr-3 text-[#40A8F5]" /> Changes to Terms
            </h2>
            <p>
              We may modify these Terms at any time, and any changes will be
              posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-[#00B5D8] flex items-center">
              <FaCheckCircle className="mr-3 text-[#40A8F5]" /> Governing Law
            </h2>
            <p>
              These Terms are governed by the laws of [Your Country/State].
              Disputes will be handled in the courts of [Your City/State].
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-[#00B5D8] flex items-center">
              <FaCheckCircle className="mr-3 text-[#40A8F5]" /> Contact
              Information
            </h2>
            <p>If you have questions, contact us at:</p>
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

export default TermsAndServices;
