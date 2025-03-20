import React from "react";
import { FaHeadset, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Support = () => {
  return (
    <div className="bg-gradient-to-r from-[#1a2a35] to-[#284c53] text-white px-6 py-12 mt-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-white mb-12">
          Support
        </h1>

        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8 space-y-12">
          <section>
            <h2 className="text-3xl font-semibold text-[#00B5D8] flex items-center">
              <FaHeadset className="mr-3 text-[#40A8F5]" /> How Can We Help?
            </h2>
            <p>
              Our dedicated support team is here to assist you with any
              inquiries or issues regarding our services. We are committed to
              ensuring you have the best experience possible.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-[#00B5D8] flex items-center">
              <FaEnvelope className="mr-3 text-[#40A8F5]" /> Email Support
            </h2>
            <p>
              For detailed support or questions, please email us at{" "}
              <a
                href="mailto:ijobs@ijobs.com"
                className="text-[#00B5D8] font-semibold"
              >
                ijobs@ijobs.com
              </a>
              . We strive to respond within 24 hours.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-[#00B5D8] flex items-center">
              <FaPhone className="mr-3 text-[#40A8F5]" /> Phone Support
            </h2>
            <p>
              Need immediate assistance? Call us at{" "}
              <span className="font-semibold">+977 9800000000</span> and speak
              directly with one of our support specialists.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-[#00B5D8] flex items-center">
              <FaMapMarkerAlt className="mr-3 text-[#40A8F5]" /> Office Location
            </h2>
            <p>
              If you prefer to visit us, our office is located at{" "}
              <span className="font-semibold">Gwarko, Lalitpur</span>. We
              welcome you for in-person support.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-[#00B5D8] flex items-center">
              <FaHeadset className="mr-3 text-[#40A8F5]" /> Live Chat
            </h2>
            <p>
              For real-time assistance, use our live chat feature available on
              our website. Our support team is online during business hours.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Support;
