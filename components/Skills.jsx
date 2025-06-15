import { Briefcase, Code, Zap, TrendingUp } from "lucide-react";
import React from "react";

function Skills() {
  const technicalSkills = [
    {
      name: "HTML/CSS",
      level: 95,
      color: "from-orange-500 to-red-600",
      icon: "🎨",
    },
    {
      name: "JavaScript",
      level: 88,
      color: "from-yellow-500 to-orange-600",
      icon: "⚡",
    },
    {
      name: "PHP",
      level: 67,
      color: "from-purple-500 to-indigo-600",
      icon: "🐘",
    },
    {
      name: "Laravel",
      level: 80,
      color: "from-red-500 to-red-600",
      icon: "🔧",
    },
    {
      name: "React JS",
      level: 63,
      color: "from-blue-500 to-cyan-600",
      icon: "⚛️",
    },
    {
      name: "Next JS",
      level: 63,
      color: "from-gray-500 to-slate-600",
      icon: "▲",
    },
    {
      name: "Data Visualization",
      level: 85,
      color: "from-emerald-500 to-teal-600",
      icon: "📊",
    },
    {
      name: "Microsoft Office",
      level: 92,
      color: "from-blue-500 to-indigo-600",
      icon: "📋",
    },
  ];

  const marketingSkills = [
    {
      name: "Google Analytics",
      level: 67,
      color: "from-pink-500 to-rose-600",
      icon: "📈",
    },
    {
      name: "Google Ads",
      level: 75,
      color: "from-green-500 to-emerald-600",
      icon: "🎯",
    },
    {
      name: "SEO Optimization",
      level: 79,
      color: "from-violet-500 to-purple-600",
      icon: "🔍",
    },
    {
      name: "Social Media Marketing",
      level: 89,
      color: "from-cyan-500 to-blue-600",
      icon: "📱",
    },
    {
      name: "Power BI",
      level: 79,
      color: "from-amber-500 to-yellow-600",
      icon: "⚡",
    },
  ];

  const SkillBar = ({ skill, index, delay = 0 }) => (
    <div className="group/skill relative">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          <span className="text-lg">{skill.icon}</span>
          <span className="font-semibold text-gray-100 text-sm sm:text-base">
            {skill.name}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400 font-mono">
            {skill.level}%
          </span>
        </div>
      </div>

      <div className="relative">
        <div className="w-full bg-gray-800/60 rounded-full h-2 overflow-hidden border border-gray-700/50">
          <div
            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover/skill:shadow-lg group-hover/skill:shadow-current/20`}
            style={{
              width: `${skill.level}%`,
              animationDelay: `${delay + index * 150}ms`,
            }}
          />
        </div>

        {/* Glow effect */}
        <div
          className={`absolute top-0 h-2 bg-gradient-to-r ${skill.color} rounded-full opacity-0 group-hover/skill:opacity-30 transition-opacity duration-300 blur-sm`}
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <section className=" px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h3 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Keahlian &
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Kombinasi keterampilan teknis dan pemasaran digital untuk
            menciptakan solusi yang komprehensif
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Technical Skills */}
          <div className="relative group">
            {/* Background glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />

            <div className="relative bg-gradient-to-br from-slate-900/90 to-gray-900/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-500">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl">
                    <Code className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-1">
                    Technical Skills
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Development & Programming
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    index={index}
                    delay={200}
                  />
                ))}
              </div>

              {/* Footer badge */}
              <div className="mt-8 pt-6 border-t border-gray-700/50">
                <div className="flex items-center gap-2 text-blue-400">
                  <Zap className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    8 Core Technologies
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Marketing Skills */}
          <div className="relative group">
            {/* Background glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />

            <div className="relative bg-gradient-to-br from-slate-900/90 to-gray-900/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:border-emerald-500/50 transition-all duration-500">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <div className="p-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl">
                    <Briefcase className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-30" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-1">
                    Digital Marketing
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Analytics & Optimization
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-6">
                {marketingSkills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    index={index}
                    delay={600}
                  />
                ))}
              </div>

              {/* Footer badge */}
              <div className="mt-8 pt-6 border-t border-gray-700/50">
                <div className="flex items-center gap-2 text-emerald-400">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">5 Marketing Tools</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            {
              label: "Years Experience",
              value: "2+",
              color: "from-blue-400 to-purple-400",
            },
            {
              label: "Projects Completed",
              value: "15+",
              color: "from-emerald-400 to-teal-400",
            },
            {
              label: "Technologies",
              value: "13",
              color: "from-gray-400 to-red-400",
            },
            {
              label: "Avg. Skill Level",
              value: "68%",
              color: "from-yellow-400 to-orange-400",
            },
          ].map((stat, index) => (
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
