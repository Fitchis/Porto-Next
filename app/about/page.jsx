"use client";
import { useState, useEffect } from "react";
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
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
function AboutPage() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const texts = [
    "Web Developer",
    "Frontend Specialist",
    "Backend Engineer",
    "Digital Marketer",
    "Data Analyst",
  ];

  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Mengembangkan aplikasi web modern dengan teknologi terkini",
      color: "from-blue-500 to-cyan-500",
      technologies: ["React", "Next.js", "Node.js", "TypeScript"],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description: "Membangun API dan sistem backend yang scalable",
      color: "from-purple-500 to-pink-500",
      technologies: ["Express.js", "MongoDB", "PostgreSQL", "Redis"],
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Strategi pemasaran digital dan analisis performa",
      color: "from-green-500 to-emerald-500",
      technologies: [
        "SEO",
        "Google Analytics",
        "Social Media",
        "Content Strategy",
      ],
    },
  ];

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

  // Generate random particles for animated background
  useEffect(() => {
    const arr = Array.from({ length: 50 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${2 + Math.random() * 2}s`,
    }));
    setParticles(arr);
  }, []);

  // Mouse tracking for interactive background
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated background particles */}

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((style, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
              style={style}
            />
          ))}
        </div>
        {/* Interactive mouse trail */}
        <div
          className="absolute w-96 h-96 bg-gradient-radial from-purple-500/20 to-transparent rounded-full pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center py-12 px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 max-w-4xl">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-4xl font-bold text-purple-600 hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/img/profile.jpg"
                    alt="Profile"
                    width={128}
                    height={128}
                    className="rounded-full w-full h-full object-cover z-10"
                  />
                </div>
              </div>
              <p className="text-2xl md:text-3xl text-purple-300 mb-6">
                Andi Luthfi Mohammad Abdillah Amri
              </p>
              <div className="text-xl md:text-2xl text-cyan-400 h-8 flex items-center justify-center">
                <span className="mr-2">Saya adalah</span>
                <span className="font-bold">{typedText}</span>
                <span className="animate-pulse ml-1">|</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border mb-2 border-white/20 rounded-3xl p-8 lg:p-12 shadow-2xl">
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed text-center">
                Mahasiswa semester 8 jurusan{" "}
                <span className="text-purple-400 font-semibold">
                  Bisnis Digital
                </span>{" "}
                di Institut Teknologi Telkom Surabaya. Berfokus pada
                pengembangan solusi digital yang inovatif melalui kombinasi{" "}
                <span className="text-cyan-400 font-semibold">
                  teknologi web
                </span>
                ,
                <span className="text-pink-400 font-semibold">
                  {" "}
                  digital marketing
                </span>
                , dan
                <span className="text-green-400 font-semibold">
                  {" "}
                  analisis data
                </span>
                . Berkomitmen untuk terus berkembang dan berkontribusi dalam
                transformasi digital.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                {
                  icon: <Award className="w-6 h-6" />,
                  label: "Projects",
                  value: "15+",
                },
                {
                  icon: <BookOpen className="w-6 h-6" />,
                  label: "Skills",
                  value: "7+",
                },
                {
                  icon: <Coffee className="w-6 h-6" />,
                  label: "Coffee Cups",
                  value: "∞",
                },
                {
                  icon: <Heart className="w-6 h-6" />,
                  label: "Passion",
                  value: "100%",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-purple-400 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="w-full max-w-6xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Keahlian & Spesialisasi
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-white/20 ${
                    activeSkill === index ? "ring-2 ring-purple-400" : ""
                  }`}
                  onClick={() =>
                    setActiveSkill(activeSkill === index ? null : index)
                  }
                  onMouseEnter={() => setActiveSkill(index)}
                  onMouseLeave={() => setActiveSkill(null)}
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white mb-6 group-hover:rotate-12 transition-transform duration-300`}
                  >
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {skill.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{skill.description}</p>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      activeSkill === index
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-sm hover:bg-purple-500/50 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Mari Berkolaborasi!
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl">
              Tertarik untuk berdiskusi tentang proyek atau peluang kolaborasi?
              Saya selalu terbuka untuk ide-ide baru dan tantangan menarik.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                {
                  icon: <Mail className="w-5 h-5" />,
                  label: "Email",
                  color: "from-red-500 to-orange-500",
                  href: "mailto: andilthfi@gmail",
                },
                {
                  icon: <Github className="w-5 h-5" />,
                  label: "Github",
                  color: "from-gray-600 to-gray-800",
                  href: "https://github.com/Fitchis",
                },
                {
                  icon: <Linkedin className="w-5 h-5" />,
                  label: "LinkedIn",
                  color: "from-blue-600 to-blue-800",
                  href: "https://www.linkedin.com/in/andilthfi/",
                },
              ].map((contact, index) => (
                <Link
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${contact.color} text-white rounded-full hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25`}
                >
                  <span className="group-hover:rotate-12 transition-transform duration-300">
                    {contact.icon}
                  </span>
                  <span className="font-medium">{contact.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutPage;
