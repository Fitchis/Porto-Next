"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  InformationCircleIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const navLinks = [
  {
    href: "/",
    label: "Home",
    gradient: "from-blue-600 to-purple-600",
    icon: <HomeIcon className="w-5 h-5" />,
  },
  {
    href: "/about",
    label: "About",
    gradient: "from-purple-600 to-pink-600",
    icon: <InformationCircleIcon className="w-5 h-5" />,
  },
  {
    href: "/projects",
    label: "Projects",
    gradient: "from-pink-600 to-orange-600",
    icon: <BriefcaseIcon className="w-5 h-5" />,
  },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-transparent/15 backdrop-blur-md shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 md:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Andi Luthfi Home"
        >
          <span className=" md:inline-block text-xs text-gray-500 font-medium tracking-wider uppercase">
            Web Developer & Digital Marketer
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex gap-3 items-center"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 px-4 py-2 font-semibold rounded-full transition-colors duration-200
                  ${
                    isActive
                      ? `text-white bg-gradient-to-r ${link.gradient} shadow-sm`
                      : "text-black hover:text-purple-700 hover:bg-gray-100"
                  }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.icon && <span className="text-lg">{link.icon}</span>}
                <span>{link.label}</span>
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-4 flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            <EnvelopeIcon className="w-5 h-5" />
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen((v) => !v)}
          className="md:hidden flex items-center justify-center p-2 rounded-lg text-gray-700 bg-white border border-gray-200 shadow-sm hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
        >
          {isMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pb-4 bg-white/95 backdrop-blur-xl rounded-b-xl border-b border-x border-gray-200/50 shadow-lg">
          <nav className="space-y-2 pt-2" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center px-4 py-2.5 text-gray-700 rounded-lg font-semibold transition-colors duration-200
                    ${
                      isActive
                        ? `text-white bg-gradient-to-r ${link.gradient} shadow-sm`
                        : "hover:text-purple-700 hover:bg-gray-100"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.icon && (
                    <span className="mr-3 text-lg">{link.icon}</span>
                  )}
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="flex items-center justify-center px-6 py-2.5 mt-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-lg font-bold shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <EnvelopeIcon className="w-5 h-5 mr-2" />
              Contact Me
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
