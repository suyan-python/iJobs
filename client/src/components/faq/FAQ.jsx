import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is iJobs?",
      answer:
        "iJobs is a platform that connects job seekers with employers. We provide various job listings and allow users to apply for jobs directly through our website.",
    },
    {
      question: "How do I register for an account?",
      answer:
        "To register for an account, simply click on the 'Sign Up' button on the homepage and fill in the required details, including your name, email, and role (Student or Recruiter).",
    },
    {
      question: "How can I apply for a job?",
      answer:
        "Once you have registered and logged in, browse our job listings. When you find a job you're interested in, click on it for more details, and then click the 'Apply' button.",
    },
    {
      question: "Can I update my profile information?",
      answer:
        "Yes! After logging in, you can go to your account settings to update your profile information, including your resume, contact details, and more.",
    },
    {
      question: "Is there a fee to use iJobs?",
      answer:
        "No, iJobs is free to use for both job seekers and employers. We aim to make job searching and recruitment as easy as possible.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#1a2a35] to-[#284c53] text-white px-6 py-12 mt-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-white mb-12">
          Frequently Asked Questions
        </h1>

        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8 space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-6">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h2 className="text-2xl font-semibold text-[#00B5D8]">
                  {faq.question}
                </h2>
                <div>
                  {activeIndex === index ? (
                    <FaChevronUp className="text-[#00B5D8] text-2xl" />
                  ) : (
                    <FaChevronDown className="text-[#00B5D8] text-2xl" />
                  )}
                </div>
              </div>
              {activeIndex === index && (
                <p className="mt-4 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
