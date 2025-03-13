import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import info from "../../assets/pictures/info.svg";
import logo from "../../assets/logo/white.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo or Info */}
          <div className="space-y-4 text-center lg:text-left">
            <img src={info} alt="Info" className="mx-auto lg:mx-0" />
          </div>

          {/* Company Info */}
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="text-xl font-semibold text-white">iJobs</h2>
            <p className="text-gray-400">
              Connecting job seekers and recruiters with ease. Helping you find
              the perfect job or candidate.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="text-gray-400 hover:text-[#1877F2] transition duration-150" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="text-gray-400 hover:text-[#1DA1F2] transition duration-150" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="text-gray-400 hover:text-[#C13584] transition duration-150" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="text-gray-400 hover:text-[#0077B5] transition duration-150" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="text-xl font-semibold text-white">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition duration-150"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/jobs"
                  className="hover:text-white transition duration-150"
                >
                  Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition duration-150"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition duration-150"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="text-xl font-semibold text-white">Resources</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/faq"
                  className="hover:text-white transition duration-150"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-white transition duration-150"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-white transition duration-150"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="hover:text-white transition duration-150"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <img src={logo} alt="" />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} iJobs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
