"use client";
import About from "@/components/About";
import CertificatesSection from "@/components/CertificatesSection";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import {
  Mail,
  MapIcon,
  PhoneCall,
  TrophyIcon,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Home() {
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

  const achievements = [
    {
      title: "Juara 1 Lomba Videography",
      subtitle: "Transformasi Pendidikan di Era 5.0",
      year: "2022",
      icon: "🏆",
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Juara 2 Rektor Cup eSport",
      subtitle: "Universitas Telkom Surabaya",
      year: "2023",
      icon: "🎮",
      color: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white font-sans antialiased overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-teal-400/20 to-green-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-300/40 rounded-full animate-ping animation-delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-cyan-300/30 rounded-full animate-bounce animation-delay-3000"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-pink-300/40 rounded-full animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <header
          className={`min-h-screen flex flex-col justify-center text-center transition-all duration-1000 ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          }`}
        >
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">
                Available for new opportunities
              </span>
            </div>

            <h1 className="text-2xl sm:text-6xl lg:text-6xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                Andi Luthfi
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent text-3xl sm:text-5xl lg:text-5xl">
                Mohammad Abdillah Amri
              </span>
            </h1>
            <div className="my-8 text-xl md:text-2xl text-cyan-400 h-8 flex items-center justify-center">
              <span className="mr-2">Saya adalah</span>
              <span className="font-bold">{typedText}</span>
              <span className="animate-pulse ml-1">|</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["Web Developer", "Digital Marketing", "Data Analyst"].map(
                (role, index) => (
                  <span
                    key={role}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-500 ${
                      activeSection === index
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white scale-110"
                        : "bg-white/10 backdrop-blur-sm border border-white/20 text-white/80"
                    }`}
                  >
                    {role}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-gray-300 mb-12">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
              <MapIcon className="w-4 h-4 text-purple-400" />
              <span>Surabaya, Jawa Timur</span>
            </div>
            <a
              href="mailto:andilthfi@gmail.com"
              className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <Mail className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
              <span>andilthfi@gmail.com</span>
            </a>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
              <PhoneCall className="w-4 h-4 text-cyan-400" />
              <span>085343557836</span>
            </div>
          </div>

          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </header>

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Projects />

        {/* Skills Section */}
        <Skills />

        {/* Sertifications Section */}
        <CertificatesSection />
        {/* Experience Section */}
        <Experience />
        {/* Achievements Section */}
        <section className="py-20">
          <h3 className="text-4xl lg:text-6xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Pencapaian & Prestasi
            </span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div
                      className={`text-4xl p-3 rounded-xl bg-gradient-to-r ${achievement.color} shadow-lg`}
                    >
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <TrophyIcon className="w-5 h-5 text-yellow-400" />
                        <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full text-xs font-medium">
                          {achievement.year}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {achievement.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-cyan-600/20 backdrop-blur-lg border border-white/20 rounded-3xl p-8 lg:p-16 shadow-2xl">
              <h3 className="text-4xl lg:text-6xl font-black mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Let's Create Something Amazing!
                </span>
              </h3>

              <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                Siap untuk berkolaborasi dalam proyek yang menantang? Mari
                wujudkan ide-ide inovatif melalui teknologi web modern, strategi
                digital marketing yang efektif, dan insights data yang
                actionable.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <Link
                  href="mailto:andilthfi@gmail.com"
                  className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Hubungi Saya
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* <button className="group bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-2 hover:scale-105">
                  <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Lihat Portfolio
                </button> */}
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .delay-0 {
          animation-delay: 0ms;
        }
        .delay-100 {
          animation-delay: 100ms;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
        .delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
    </div>
  );
}
