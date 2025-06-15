"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  Briefcase,
  Code,
  Mail,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  User2Icon,
} from "lucide-react";

const navLinks = [
  {
    href: "#home",
    label: "Home",
    gradient: "from-cyan-500 to-blue-500",
    icon: <Home className="w-4 h-4" />,
  },
  {
    href: "#about",
    label: "About",
    gradient: "from-cyan-500 to-blue-500",
    icon: <User className="w-4 h-4" />,
  },
  {
    href: "#projects",
    label: "Projects",
    gradient: "from-purple-500 to-pink-500",
    icon: <Briefcase className="w-4 h-4" />,
  },
  {
    href: "#skills",
    label: "Skills",
    gradient: "from-pink-500 to-orange-500",
    icon: <Code className="w-4 h-4" />,
  },
  {
    href: "#contact",
    label: "Contact",
    gradient: "from-orange-500 to-red-500",
    icon: <Mail className="w-4 h-4" />,
  },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleSectionInView = () => {
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleSectionInView);
    handleScroll();
    handleSectionInView();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleSectionInView);
    };
  }, []);

  const scrollToSection = (href) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                <User2Icon className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Fitchis
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`group relative px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === link.href
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {/* Active indicator */}
                  {activeSection === link.href && (
                    <div
                      className={`absolute inset-0 rounded-lg bg-gradient-to-r ${link.gradient} opacity-20`}
                    ></div>
                  )}

                  {/* Hover effect */}
                  <div
                    className={`absolute inset-0 rounded-lg bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>

                  <div className="relative flex items-center space-x-2">
                    <span
                      className={`transition-colors duration-300 ${
                        activeSection === link.href
                          ? `text-transparent bg-gradient-to-r ${link.gradient} bg-clip-text`
                          : ""
                      }`}
                    >
                      {link.icon}
                    </span>
                    <span className="font-medium">{link.label}</span>
                  </div>
                </button>
              ))}

              {/* CTA Button */}
              <button
                onClick={() => scrollToSection("#contact")}
                className="ml-4 group relative px-6 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-lg font-medium hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative flex items-center space-x-2">
                  <span>Let's Talk</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          <div className="absolute top-16 left-4 right-4 bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-800/50 shadow-2xl">
            <div className="p-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`w-full group relative p-4 rounded-xl transition-all duration-300 ${
                    activeSection === link.href
                      ? "text-white bg-gray-800/50"
                      : "text-gray-400 hover:text-white hover:bg-gray-800/30"
                  }`}
                >
                  {/* Active indicator */}
                  {activeSection === link.href && (
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-1 rounded-r bg-gradient-to-b ${link.gradient}`}
                    ></div>
                  )}

                  <div className="flex items-center space-x-3">
                    <span
                      className={`transition-colors duration-300 ${
                        activeSection === link.href
                          ? `text-transparent bg-gradient-to-r ${link.gradient} bg-clip-text`
                          : ""
                      }`}
                    >
                      {link.icon}
                    </span>
                    <span className="font-medium text-left">{link.label}</span>
                  </div>
                </button>
              ))}

              {/* Mobile CTA */}
              <button
                onClick={() => scrollToSection("#contact")}
                className="w-full mt-6 p-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-xl font-medium hover:from-cyan-500 hover:to-purple-500 transition-all duration-300"
              >
                <div className="flex items-center justify-center space-x-2">
                  <span>Let's Talk</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
