"use client";
import About from "@/components/About";
import CertificatesSection from "@/components/CertificatesSection";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import React from "react";
import ContactForm from "@/components/Contact";
import Hero from "@/components/Hero";
import Achievement from "@/components/Achivement";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-black text-white font-sans antialiased overflow-x-hidden">
      {/* Hero Section - Split Layout */}
      <Hero />
      {/* Content Sections */}
      <div className="relative z-10">
        {/* About Section */}
        <section
          id="about"
          className="py-12 bg-gradient-to-b from-transparent to-gray-900/50"
        >
          <About />
        </section>
        {/* Projects Section */}
        <section id="projects" className="py-16 bg-gray-900/30">
          <Projects />
        </section>
        {/* Skills Section */}
        <section
          id="skills"
          className="py-16 bg-gradient-to-b from-gray-900/30 to-transparent"
        >
          <Skills />
        </section>
        {/* Certificates Section */}
        <section className="py-12 bg-gray-900/20">
          <CertificatesSection />
        </section>
        {/* Experience Section */}
        <section className="py-12 bg-gradient-to-b from-gray-900/20 to-gray-900/50">
          <Experience />
        </section>
        {/* Achievements Section */}
        <section className="py-12 bg-gray-900/50">
          <Achievement />
        </section>
        {/* Contact Section */}
        <section
          id="contact"
          className=" bg-gradient-to-b from-gray-900/50 to-gray-900/30"
        >
          <ContactForm />
        </section>
      </div>

      {/* Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-gray-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-slate-400/30 rounded-full animate-ping animation-delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-zinc-500/20 rounded-full animate-bounce animation-delay-3000"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-gray-400/20 rounded-full animate-pulse animation-delay-2000"></div>
      </div>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
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

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #1f2937;
        }
        ::-webkit-scrollbar-thumb {
          background: #4b5563;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #6b7280;
        }
      `}</style>
    </div>
  );
}
