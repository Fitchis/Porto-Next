import { Trophy, Award, Star, Calendar, Medal, Target } from "lucide-react";
import React from "react";

function Achievement() {
  const achievements = [
    {
      id: 1,
      title: "1st Place Videography Competition",
      subtitle: "Transformation of Education in Era 5.0",
      year: "2022",
      icon: "🏆",
      category: "Creative Competition",
      level: "1st Place",
      participants: "50+ Teams",
      color: "from-yellow-400 to-orange-500",
      borderColor: "border-yellow-500/30",
      glowColor: "shadow-yellow-500/20",
      description:
        "Won first place in a national videography competition focusing on educational transformation in the digital era.",
    },
    {
      id: 2,
      title: "2nd Place Rector's Cup eSport",
      subtitle: "Telkom University Surabaya",
      year: "2023",
      icon: "🎮",
      category: "Gaming Tournament",
      level: "2nd Place",
      participants: "100+ Players",
      color: "from-purple-400 to-pink-500",
      borderColor: "border-purple-500/30",
      glowColor: "shadow-purple-500/20",
      description:
        "Achieved second place in a university-level esports tournament representing competitive gaming excellence.",
    },
  ];

  const stats = [
    { label: "Total Awards", value: achievements.length, icon: Trophy },
    { label: "Years Active", value: "2022-2023", icon: Calendar },
    { label: "Categories", value: "2", icon: Target },
    { label: "Achievement Rate", value: "100%", icon: Star },
  ];

  return (
    <div className="min-h-screen  relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/3 to-pink-500/3 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <section className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <div className="absolute -inset-2 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-3xl blur opacity-20" />
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 sm:p-12">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl">
                  <Award className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-6">
                <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Achievements &
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Awards
                </span>
              </h3>

              <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
                A collection of achievements and awards in various competitions and
                tournaments
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-slate-900/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/50 transition-all duration-300 group"
            >
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className="group"
              style={{
                animation: `fadeInUp 0.8s ease-out ${index * 200}ms both`,
              }}
            >
              {/* Card with enhanced design */}
              <div className="relative h-full">
                {/* Glow effect */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${achievement.color} rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200`}
                />

                <div
                  className={`relative bg-slate-900/90 backdrop-blur-xl border ${achievement.borderColor} rounded-3xl p-8 hover:border-opacity-70 transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2 ${achievement.glowColor} group-hover:shadow-2xl`}
                >
                  {/* Header section */}
                  <div className="flex items-start gap-6 mb-6">
                    {/* Icon */}
                    <div className="relative">
                      <div
                        className={`text-5xl p-4 rounded-2xl bg-gradient-to-r ${achievement.color} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                      >
                        {achievement.icon}
                      </div>
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r ${achievement.color} rounded-2xl blur opacity-30`}
                      />
                    </div>

                    {/* Achievement info */}
                    <div className="flex-1">
                      {/* Badges */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span
                          className={`inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r ${achievement.color} bg-opacity-20 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/20`}
                        >
                          <Trophy className="w-3 h-3" />
                          {achievement.level}
                        </span>
                        <span className="px-3 py-1 bg-slate-800/60 backdrop-blur-sm border border-slate-600/50 rounded-full text-xs font-medium text-gray-300">
                          {achievement.year}
                        </span>
                        <span className="px-3 py-1 bg-slate-800/60 backdrop-blur-sm border border-slate-600/50 rounded-full text-xs font-medium text-gray-300">
                          {achievement.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-400 transition-all duration-300">
                        {achievement.title}
                      </h4>

                      {/* Subtitle */}
                      <p className="text-gray-300 text-lg font-medium mb-3">
                        {achievement.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <p className="text-gray-400 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>

                  {/* Footer with details */}
                  <div className="flex items-center justify-between pt-6 border-t border-slate-700/50">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{achievement.year}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Medal className="w-4 h-4" />
                        <span className="text-sm">
                          {achievement.participants}
                        </span>
                      </div>
                    </div>

                    {/* Achievement rank indicator */}
                    <div className="flex items-center gap-1">
                      {[...Array(3)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < (achievement.level === "1st Place" ? 3 : 2)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-40 animate-pulse" />
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full opacity-60 animate-ping" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-slate-900/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl">
            <h4 className="text-xl font-bold text-white mb-2">
              More Achievements Coming Soon
            </h4>
            <p className="text-gray-400">
              Always striving for excellence in every competition and challenge
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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

export default Achievement;
