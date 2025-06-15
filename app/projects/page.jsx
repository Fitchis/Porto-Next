"use client";
import React, { useEffect, useState } from "react";
import {
  ExternalLink,
  Star,
  GitFork,
  Calendar,
  Code,
  Search,
  Filter,
  GitBranch,
} from "lucide-react";

export default function ProjectsPage() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("updated");
  const [hoveredRepo, setHoveredRepo] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/Fitchis/repos?sort=${sortBy}`)
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      });
  }, [sortBy]);

  const filteredRepos = repos.filter(
    (repo) =>
      repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (repo.description &&
        repo.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-slate-700 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-300 text-lg font-medium">
            Loading amazing projects...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_49%,rgba(59,130,246,0.02)_50%,transparent_51%)] bg-[length:20px_20px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center my-16">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight">
            <span className=" bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              All Projects
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Explore my complete collection of repositories and coding adventures
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-2xl">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-600/50 rounded-xl pl-12 pr-4 py-3 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:bg-slate-800/70"
            />
          </div>

          {/* Sort */}
          <div className="relative min-w-[200px]">
            <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-600/50 rounded-xl pl-12 pr-10 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 appearance-none cursor-pointer hover:bg-slate-800/70"
            >
              <option value="updated" className="bg-slate-800">
                Recently Updated
              </option>
              <option value="created" className="bg-slate-800">
                Recently Created
              </option>
              <option value="pushed" className="bg-slate-800">
                Recently Pushed
              </option>
              <option value="full_name" className="bg-slate-800">
                Name A-Z
              </option>
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg
                className="w-4 h-4 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-slate-400 text-center text-sm">
            Showing{" "}
            <span className="text-blue-400 font-semibold">
              {filteredRepos.length}
            </span>{" "}
            of{" "}
            <span className="text-cyan-400 font-semibold">{repos.length}</span>{" "}
            repositories
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {filteredRepos.map((repo, index) => (
            <div
              key={repo.id}
              className={`group relative bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/50 hover:border-slate-600/60 hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 ${
                hoveredRepo === repo.id ? "ring-2 ring-blue-500/50" : ""
              }`}
              onMouseEnter={() => setHoveredRepo(repo.id)}
              onMouseLeave={() => setHoveredRepo(null)}
              style={{
                animationDelay: `${index * 50}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="p-2 bg-slate-800/60 rounded-lg group-hover:bg-slate-700/60 transition-colors duration-300 flex-shrink-0">
                      <GitBranch className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-lg text-slate-200 group-hover:text-blue-300 transition-colors duration-300 truncate">
                        {repo.name}
                      </h3>
                      {repo.language && (
                        <span className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-slate-800/60 border border-slate-700/50 px-2 py-1 rounded-full mt-1">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                          {repo.language}
                        </span>
                      )}
                    </div>
                  </div>

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-800/60 hover:bg-slate-700/60 rounded-lg transition-all duration-300 group-hover:scale-110 flex-shrink-0"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4 text-slate-400 hover:text-slate-200" />
                  </a>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm mb-6 line-clamp-3 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed">
                  {repo.description || "No description available"}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                  <div className="flex items-center gap-4">
                    {repo.stargazers_count > 0 && (
                      <div className="flex items-center gap-1 hover:text-yellow-400 transition-colors">
                        <Star className="w-3.5 h-3.5" />
                        <span className="font-medium">
                          {repo.stargazers_count}
                        </span>
                      </div>
                    )}
                    {repo.forks_count > 0 && (
                      <div className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                        <GitFork className="w-3.5 h-3.5" />
                        <span className="font-medium">{repo.forks_count}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-slate-500 bg-slate-800/30 px-2 py-1 rounded-md">
                    <Calendar className="w-3 h-3" />
                    <span className="font-medium">
                      {new Date(repo.updated_at).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>

                {/* Topics */}
                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="text-xs bg-slate-800/60 border border-slate-700/50 text-slate-300 px-2 py-1 rounded-full hover:bg-slate-700/60 transition-colors"
                      >
                        {topic}
                      </span>
                    ))}
                    {repo.topics.length > 3 && (
                      <span className="text-xs text-slate-500 bg-slate-800/30 px-2 py-1 rounded-full">
                        +{repo.topics.length - 3} more
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredRepos.length === 0 && !loading && (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-slate-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-300 mb-2">
              No projects found
            </h3>
            <p className="text-slate-400">
              Try adjusting your search terms or filters
            </p>
          </div>
        )}

        {/* Footer Stats */}
        <div className="mt-20">
          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {repos.length}
                </div>
                <div className="text-slate-400 font-medium">
                  Total Repositories
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  {repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)}
                </div>
                <div className="text-slate-400 font-medium">Total Stars</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {repos.reduce((acc, repo) => acc + repo.forks_count, 0)}
                </div>
                <div className="text-slate-400 font-medium">Total Forks</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Custom scrollbar for webkit browsers */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(51, 65, 85, 0.2);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(51, 65, 85, 0.5);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(51, 65, 85, 0.7);
        }
      `}</style>
    </div>
  );
}
