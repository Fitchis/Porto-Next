"use client";
import { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import {
  Mail,
  MapIcon,
  PhoneCall,
  ArrowRight,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import Link from "next/link";
function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const texts = [
    "Web Developer",
    "Frontend Specialist",
    "Streamer",
    "Backend Engineer",
    "Digital Marketer",
    "Data Analyst",
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Typing animation effect
  useEffect(() => {
    const currentText = texts[currentTextIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && typedText.length < currentText.length) {
        setTypedText(currentText.slice(0, typedText.length + 1));
      } else if (isDeleting && typedText.length > 0) {
        setTypedText(currentText.slice(0, typedText.length - 1));
      } else if (!isDeleting && typedText.length === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && typedText.length === 0) {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentTextIndex, texts]);
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Side - Hero Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-10"
            }`}
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-800/50 to-slate-800/50 backdrop-blur-sm border border-gray-700/40 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-300">
                Available for work
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-4xl font-black leading-tight">
                <span className="block text-white">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-white via-gray-200 to-slate-200 bg-clip-text text-transparent">
                  Andi Luthfi
                  <br />
                  <span className="lg:text-3xl sm:text-2xl text-gray-400">
                    Mohammad Abdillah Amri
                  </span>
                </span>
              </h1>

              {/* Animated Role */}
              <div className="text-xl sm:text-2xl text-gray-400 flex items-center gap-2">
                <span>I'm a</span>
                <span className="text-white font-semibold min-w-[200px]">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              A Full-Stack Developer with a strategic mindset shaped by
              experience in digital marketing and data analysis.
            </p>

            {/* Role Tags */}
            <div className="flex flex-wrap gap-3">
              {["Web Developer", "Digital Marketing", "Data Analyst"].map(
                (role, index) => (
                  <span
                    key={role}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 ${
                      activeSection === index
                        ? "bg-white text-gray-900 scale-105"
                        : "bg-gray-800/50 text-gray-300 border border-gray-700/50"
                    }`}
                  >
                    {role}
                  </span>
                )
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <MapIcon className="w-4 h-4" />
                <span>Surabaya, Jawa Timur</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-4 h-4" strokeWidth={2} />
                <Link
                  href="mailto:andilthfi@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  andilthfi@gmail.com
                </Link>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <PhoneCall className="w-4 h-4" />
                <span>085343557836</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-pulse">
              <Link
                href="mailto:andilthfi@gmail.com"
                className="group bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
              >
                <Mail
                  className="w-5 h-5 group-hover:rotate-12 transition-transform"
                  strokeWidth={2}
                />
                Get In Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/CV_AndiLuthfi.pdf"
                download
                className="group bg-gray-800/50 hover:bg-gray-800 border border-gray-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
              >
                Download CV
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <Link
                href="https://github.com/Fitchis"
                className="w-12 h-12 bg-gray-800/50 hover:bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" strokeWidth={2} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/andilthfi/"
                className="w-12 h-12 bg-gray-800/50 hover:bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href=" https://www.instagram.com/fitchiss/"
                className="w-12 h-12 bg-gray-800/50 hover:bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Side - Spline */}
          <div className="relative h-[350px] sm:h-[400px] md:h-[500px] lg:h-[700px] w-full max-w-xs sm:max-w-none mx-auto hidden sm:block sm:ml-auto pl-10 lg:pl-20">
            <div className="absolute z-20 pointer-events-none"></div>
            <Spline
              scene="https://prod.spline.design/iqKEeiqYiQoa30nT/scene.splinecode"
              // scene="https://prod.spline.design/EX8ThThmhJgw9hH4/scene.splinecode"
              className="w-48 h-48 "
              strokeWidth={2}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
