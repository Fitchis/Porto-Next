import { Briefcase } from "lucide-react";
import React from "react";

function Experience() {
  const experiences = [
    {
      period: "Feb 2024 - Jul 2024",
      role: "Web Developer",
      company: "Badan Pendapatan Daerah Kota Surabaya",
      program: "Kampus Merdeka",
      description:
        "Mengembangkan aplikasi web untuk meningkatkan efisiensi sistem pendataan dan pelaporan pajak daerah.",
      tech: ["C#", "JavaScript", "MySQL", "Tailwind CSS", "Bootstrap"],
    },
    {
      period: "Jan 2024 - Dec 2024",
      role: "Web Developer",
      company: "Infinite Learning",
      program: "Bootcamp",
      description:
        "Membangun solusi web modern dengan fokus pada user experience dan performance optimization.",
      tech: ["React", "Tailwind CSS", "Node.js"],
    },
  ];
  return (
    <div>
      <section className="py-20">
        <h3 className="text-4xl lg:text-6xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Pengalaman Profesional
          </span>
        </h3>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative flex items-start gap-8 group"
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6 lg:p-8 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                        {exp.period}
                      </span>
                      <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm font-medium">
                        {exp.program}
                      </span>
                    </div>

                    <h4 className="text-xl lg:text-2xl font-bold text-white mb-2">
                      {exp.role}
                    </h4>
                    <p className="text-lg text-purple-300 font-medium mb-4">
                      {exp.company}
                    </p>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm border border-cyan-500/30"
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
        </div>
      </section>
    </div>
  );
}

export default Experience;
