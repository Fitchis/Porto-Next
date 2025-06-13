import Link from "next/link";
import React from "react";
import { Instagram, Github, Linkedin } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>

      {/* Floating orbs for visual interest */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-20 right-10 w-16 h-16 bg-pink-500/20 rounded-full blur-lg animate-pulse delay-500"></div>

      <div className="relative max-w-6xl mx-auto px-6 py-2">
        {/* Main content */}
        <div className="text-center space-y-8">
          {/* Social links section */}
          <div className="flex justify-center space-x-6 pt-6">
            <Link
              href="https://www.linkedin.com/in/andilthfi/"
              className="group p-3 bg-white/10 backdrop-blur-lg rounded-full hover:bg-blue-600/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin
                className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors duration-300"
                viewBox="0 0 24 24"
              />
            </Link>
            <Link
              href="https://github.com/Fitchis"
              className="group p-3 bg-white/10 backdrop-blur-lg rounded-full hover:bg-gray-700/20 transition-all duration-300 hover:scale-110"
            >
              <Github
                className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300"
                viewBox="0 0 24 24"
              />
            </Link>
            <Link
              href=" https://www.instagram.com/fitchiss/"
              className="group p-3 bg-white/10 backdrop-blur-lg rounded-full hover:bg-pink-500/20 transition-all duration-300 hover:scale-110"
            >
              <Instagram
                className="w-6 h-6 text-pink-400 group-hover:text-white transition-colors duration-300"
                viewBox="0 0 24 24"
              />
            </Link>
          </div>

          {/* Copyright with modern styling */}
          <div className="pt-2 border-t border-gray-700/50">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-gray-400">
              <p className="flex items-center space-x-2">
                <span className="text-lg">©</span>
                <span className="font-medium">{currentYear}</span>
                <span>All rights reserved</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
