import Link from "next/link";
import React from "react";
import { Instagram, Github, Linkedin, Heart, Code } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-950 via-slate-900 to-black text-white border-t border-gray-800/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main content */}
        <div className="text-center space-y-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Fitchis
              </h3>
            </div>
            <p className="text-gray-400 max-w-md mx-auto">
              Crafting digital experiences with passion and precision. Let's
              build something amazing together.
            </p>
          </div>

          {/* Social links section */}
          <div className="flex justify-center space-x-4">
            <Link
              href="https://www.linkedin.com/in/andilthfi/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:scale-110"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300 relative z-10" />
            </Link>

            <Link
              href="https://github.com/Fitchis"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-gray-500/50 transition-all duration-300 hover:scale-110"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/10 to-gray-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Github className="w-5 h-5 text-gray-400 group-hover:text-gray-200 transition-colors duration-300 relative z-10" />
            </Link>

            <Link
              href="https://www.instagram.com/fitchiss/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-pink-500/50 transition-all duration-300 hover:scale-110"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Instagram className="w-5 h-5 text-gray-400 group-hover:text-pink-400 transition-colors duration-300 relative z-10" />
            </Link>
          </div>

          {/* Copyright section */}
          <div className="pt-8 border-t border-gray-800/50">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-gray-500 text-sm">
              <div className="flex items-center space-x-2">
                <span>© {currentYear} Fitchis. All rights reserved.</span>
              </div>

              <div className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>and lots of coffee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
