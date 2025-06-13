import { Briefcase, Code } from "lucide-react";
import React from "react";

function Skills() {
  const technicalSkills = [
    { name: "HTML/CSS", level: 95, color: "from-orange-400 to-red-500" },
    { name: "JavaScript", level: 88, color: "from-yellow-400 to-orange-500" },
    { name: "PHP", level: 67, color: "from-purple-400 to-indigo-500" },
    { name: "Laravel", level: 80, color: "from-red-400 to-red-500" },
    { name: "React JS", level: 63, color: "from-blue-400 to-indigo-500" },
    { name: "Next JS", level: 63, color: "from-gray-400 to-indigo-500" },
    {
      name: "Data Visualization",
      level: 85,
      color: "from-green-400 to-teal-500",
    },
    { name: "Microsoft Office", level: 92, color: "from-blue-400 to-cyan-500" },
  ];

  const marketingSkills = [
    { name: "Google Analytics", level: 67, color: "from-pink-400 to-rose-500" },
    { name: "Google Ads", level: 75, color: "from-emerald-400 to-green-500" },
    {
      name: "SEO Optimization",
      level: 79,
      color: "from-violet-400 to-purple-500",
    },
    {
      name: "Social Media Marketing",
      level: 89,
      color: "from-cyan-400 to-blue-500",
    },
    { name: "Power BI", level: 79, color: "from-amber-400 to-yellow-500" },
  ];
  return (
    <div>
      <section className="py-20">
        <h3 className="text-4xl lg:text-6xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Keahlian & Expertise
          </span>
        </h3>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-lg border border-blue-500/30 rounded-3xl p-8 group hover:scale-105 transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-blue-300">
                Technical Skills
              </h4>
            </div>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="group/skill">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${
                        skill.color
                      } rounded-full transition-all duration-1000 delay-${
                        index * 100
                      } group-hover/skill:animate-pulse`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Marketing Skills */}
          <div className="bg-gradient-to-br from-teal-900/20 to-green-900/20 backdrop-blur-lg border border-teal-500/30 rounded-3xl p-8 group hover:scale-105 transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-teal-300">
                Digital Marketing
              </h4>
            </div>
            <div className="space-y-6">
              {marketingSkills.map((skill, index) => (
                <div key={skill.name} className="group/skill">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${
                        skill.color
                      } rounded-full transition-all duration-1000 delay-${
                        index * 100
                      } group-hover/skill:animate-pulse`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
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

export default Skills;
