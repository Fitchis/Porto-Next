import { Briefcase, Code, Zap, TrendingUp, Users, Award } from "lucide-react";
import React from "react";

// --- REFACTORED SKILLS COMPONENT ---

function Skills() {
  // Data: Simplified to just list the skills. No more 'level' or 'color'.
  const coreTechnologies = [
    "React",
    "Next.js",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "PHP",
    "Laravel",
  ];

  const secondarySkills = [
    "Data Visualization",
    "Microsoft Office",
    "Google Analytics",
    "Google Ads",
    "SEO Optimization",
    "Power BI",
    "Social Media Marketing",
  ];

  // A new component for the skill "pills"
  const SkillPill = ({ name }) => (
    <div className="bg-slate-800/80 border border-slate-700/50 text-gray-300 text-sm font-medium px-4 py-2 rounded-full hover:bg-slate-800 transition-colors">
      {name}
    </div>
  );

  return (
    <div className="min-h-screen">
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header: English version for consistency, with a stronger subtitle */}
        <div className="text-center mb-20">
          <h3 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Skills &
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A full-stack developer with a strategic mindset, using technology
            and digital strategy to build impactful solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* --- CARD 1: CORE TECHNOLOGIES --- */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />
            <div className="relative bg-gradient-to-br from-slate-900/90 to-gray-900/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-500 h-full">
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl">
                    <Code className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-1">
                    Core Technologies
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Development & Programming
                  </p>
                </div>
              </div>

              {/* Context Paragraph */}
              <p className="text-gray-400 mb-8">
                I focus on building responsive, high-performance web
                applications from front-to-back using a modern technology stack.
              </p>

              {/* NEW: Skill Pills container */}
              <div className="flex flex-wrap gap-3">
                {coreTechnologies.map((skill) => (
                  <SkillPill key={skill} name={skill} />
                ))}
              </div>
            </div>
          </div>

          {/* --- CARD 2: ADDITIONAL STRENGTHS --- */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />
            <div className="relative bg-gradient-to-br from-slate-900/90 to-gray-900/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:border-emerald-500/50 transition-all duration-500 h-full">
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="p-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl">
                    <Briefcase className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-30" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-1">
                    Additional Strengths
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Marketing, Data & Analytics
                  </p>
                </div>
              </div>

              {/* Context Paragraph */}
              <p className="text-gray-400 mb-8">
                My skills in digital marketing and data analysis allow me to
                build products that are not only functional but also
                discoverable and data-informed.
              </p>

              {/* NEW: Skill Pills container */}
              <div className="flex flex-wrap gap-3">
                {secondarySkills.map((skill) => (
                  <SkillPill key={skill} name={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- REVISED BOTTOM STATS --- */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            {
              label: "Years Experience",
              value: "2+",
              color: "from-blue-400 to-purple-400",
              icon: <Zap className="w-5 h-5 mx-auto mb-2" />,
            },
            {
              label: "Projects Completed",
              value: "15+",
              color: "from-emerald-400 to-teal-400",
              icon: <Code className="w-5 h-5 mx-auto mb-2" />,
            },
            {
              label: "Happy Clients",
              value: "10+",
              color: "from-pink-400 to-red-400",
              icon: <Users className="w-5 h-5 mx-auto mb-2" />,
            },
            {
              label: "Certifications",
              value: "5+", // Example value
              color: "from-yellow-400 to-orange-400",
              icon: <Award className="w-5 h-5 mx-auto mb-2" />,
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-slate-900/50 rounded-2xl border border-gray-700/30 hover:border-gray-600/50 transition-colors duration-300"
            >
              <div
                className={`text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
              >
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skills;
