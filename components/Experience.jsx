import { Briefcase, Calendar, MapPin } from "lucide-react";
import React from "react";

function Experience() {
  const experiences = [
    {
      period: "Feb 2024 - Jul 2024",
      role: "Web Developer",
      company: "Badan Pendapatan Daerah Kota Surabaya",
      program: "Kampus Merdeka",
      description:
        "Developed a web application to improve the efficiency of regional tax data collection and reporting systems.",
      tech: ["C#", "JavaScript", "MySQL", "Tailwind CSS", "Bootstrap"],
      type: "Internship",
    },
    {
      period: "Jan 2024 - Dec 2024",
      role: "Web Developer",
      company: "Infinite Learning",
      program: "Bootcamp",
      description:
        "Built modern web solutions with a focus on user experience and performance optimization.",
      tech: ["React", "Tailwind CSS", "Node.js"],
      type: "Training & internship",
    },
  ];

  return (
    <div className="py-12 px-4">
      <section className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            My journey through different roles and learning experiences
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-500/50 via-cyan-500/50 to-purple-500/50"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative flex items-start gap-8 group"
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animation: "fadeInLeft 0.8s ease-out forwards",
                  }}
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-slate-900/60 backdrop-blur-md border-2 border-blue-500/50 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-blue-400 transition-all duration-300">
                      <Briefcase className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 lg:p-8 shadow-xl hover:bg-slate-800/50 hover:border-slate-600/60 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
                    {/* Header badges */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 text-slate-300 px-3 py-1.5 rounded-full text-sm font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="bg-blue-500/20 border border-blue-500/30 text-blue-300 px-3 py-1.5 rounded-full text-sm font-medium">
                        {exp.program}
                      </span>
                      <span className="bg-slate-800/40 border border-slate-600/40 text-slate-400 px-3 py-1.5 rounded-full text-xs">
                        {exp.type}
                      </span>
                    </div>

                    {/* Role and Company */}
                    <div className="mb-6">
                      <h3 className="text-2xl lg:text-3xl font-bold text-slate-200 mb-2 group-hover:text-blue-300 transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-lg text-slate-300 font-medium">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        {exp.company}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 mb-8 leading-relaxed text-base lg:text-lg">
                      {exp.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, techIndex) => (
                          <span
                            key={tech}
                            className="bg-slate-800/60 border border-slate-700/50 text-slate-300 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-slate-700/60 hover:border-slate-600/60 hover:text-slate-200 transition-all duration-200 cursor-default"
                            style={{
                              animationDelay: `${
                                index * 200 + techIndex * 50
                              }ms`,
                              animation: "fadeInUp 0.6s ease-out forwards",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline end indicator */}
            <div className="relative flex items-center justify-center mt-12">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <div className="absolute inset-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm opacity-50"></div>
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-20">
          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {experiences.length}
                </div>
                <div className="text-slate-400 font-medium">
                  Professional Roles
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {new Set(experiences.flatMap((exp) => exp.tech)).size}
                </div>
                <div className="text-slate-400 font-medium">
                  Technologies Used
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  12
                </div>
                <div className="text-slate-400 font-medium">
                  Months Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Experience;
