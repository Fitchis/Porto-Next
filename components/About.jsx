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
} from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <>
      {/* About Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 lg:p-12 shadow-2xl">
            <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Tentang Saya
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed text-center">
              Mahasiswa semester 8 jurusan{" "}
              <span className="text-purple-400 font-semibold">
                Bisnis Digital
              </span>{" "}
              di Institut Teknologi Telkom Surabaya. Berfokus pada pengembangan
              solusi digital yang inovatif melalui kombinasi{" "}
              <span className="text-cyan-400 font-semibold">teknologi web</span>
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
            <Link href={"/about"} className="flex justify-center animate-pulse">
              <button className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 cursor-pointer transition-all duration-300">
                Lihat Lebih Lanjut
              </button>{" "}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
