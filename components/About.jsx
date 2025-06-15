"use client";
import React, { useState, useEffect } from "react";
import {
  Code,
  Database,
  TrendingUp,
  Mail,
  Github,
  Linkedin,
  Award,
  BookOpen,
  Coffee,
  Heart,
  ArrowRight,
  Download,
  MapPin,
  Calendar,
  GraduationCap,
  Target,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const stats = [
    {
      icon: Code,
      label: "Projects Completed",
      value: "15+",
      color: "text-blue-400",
    },
    {
      icon: Users,
      label: "Happy Clients",
      value: "10+",
      color: "text-green-400",
    },
    {
      icon: Coffee,
      label: "Cups of Coffee",
      value: "500+",
      color: "text-yellow-400",
    },
    {
      icon: Award,
      label: "Certificates",
      value: "8+",
      color: "text-purple-400",
    },
  ];

  const expertise = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Modern web applications menggunakan React, Next.js, dan teknologi terkini",
      skills: ["React", "Next.js", "TypeScript", "Node.js"],
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description:
        "Strategi pemasaran digital yang efektif untuk meningkatkan brand awareness",
      skills: ["SEO", "Social Media", "Content Marketing", "Analytics"],
    },
    {
      icon: Database,
      title: "Data Analysis",
      description:
        "Mengubah data menjadi insights yang actionable untuk business growth",
      skills: ["Python", "SQL", "Excel", "Tableau"],
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Fokus pada Hasil",
      description:
        "Setiap proyek dirancang untuk mencapai tujuan bisnis yang konkret",
    },
    {
      icon: Zap,
      title: "Inovasi Berkelanjutan",
      description:
        "Selalu mengikuti tren teknologi terbaru untuk solusi yang optimal",
    },
    {
      icon: Heart,
      title: "Passion for Quality",
      description: "Komitmen pada kualitas tinggi dalam setiap aspek pekerjaan",
    },
  ];

  return (
    <section id="about-section" className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/40 rounded-full px-4 py-2 mb-6">
            <BookOpen className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-300">About Me</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-slate-200 bg-clip-text text-transparent">
              Tentang Saya
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate digital creator yang berdedikasi untuk menciptakan solusi
            inovatif melalui teknologi dan strategi digital
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Story */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 transform translate-x-0"
                : "opacity-0 transform -translate-x-10"
            }`}
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-blue-400" />
                My Journey
              </h3>

              <p className="text-gray-300 leading-relaxed mb-6">
                Mahasiswa semester 8 jurusan{" "}
                <span className="text-blue-400 font-semibold">
                  Bisnis Digital
                </span>{" "}
                di Institut Teknologi Telkom Surabaya. Berfokus pada
                pengembangan solusi digital yang inovatif melalui kombinasi{" "}
                <span className="text-green-400 font-semibold">
                  teknologi web
                </span>
                ,{" "}
                <span className="text-purple-400 font-semibold">
                  digital marketing
                </span>
                , dan{" "}
                <span className="text-yellow-400 font-semibold">
                  analisis data
                </span>
                .
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                Berkomitmen untuk terus berkembang dan berkontribusi dalam
                transformasi digital. Saya percaya bahwa teknologi adalah alat
                yang powerful untuk menciptakan dampak positif bagi masyarakat.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>Surabaya, Indonesia</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>Available for work</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 transform translate-x-0"
                : "opacity-0 transform translate-x-10"
            }`}
          >
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 text-center"
                >
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Education</span>
                  <span className="text-white font-medium">
                    IT Telkom Surabaya
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Major</span>
                  <span className="text-white font-medium">Bisnis Digital</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Semester</span>
                  <span className="text-white font-medium">8th</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Focus</span>
                  <span className="text-white font-medium">
                    Full-Stack Development
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div
          className={`mb-16 transition-all duration-1000 delay-400 ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          }`}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            My Expertise
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:bg-gray-900/70 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-white" />
                </div>

                <h4 className="text-xl font-bold text-white mb-4">
                  {item.title}
                </h4>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-800/50 border border-gray-700/50 rounded-full text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div
          className={`mb-16 transition-all duration-1000 delay-500 ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          }`}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            My Values
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">
                  {value.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`text-center transition-all duration-1000 delay-600 ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-r from-gray-900/50 to-slate-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in working together?
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Mari diskusikan bagaimana saya dapat membantu mewujudkan visi
              digital Anda
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="mailto:andilthfi@gmail.com"
                className="group bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105"
              >
                <Mail
                  className="w-5 h-5 group-hover:rotate-12 transition-transform"
                  strokeWidth={2}
                />
                Get In Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
