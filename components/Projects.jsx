"use client";
import React, { useEffect, useState } from "react";
import { ExternalLink, GitBranch, Star, Eye, Calendar } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/Fitchis/repos?sort=updated")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      });
  }, []);

  const previewRepos = repos.slice(0, 6);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="animate-pulse space-y-8">
          <div className="h-8 bg-slate-800/50 rounded-lg w-1/3"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 space-y-4"
              >
                <div className="h-6 bg-slate-700/50 rounded w-2/3"></div>
                <div className="h-4 bg-slate-700/40 rounded w-full"></div>
                <div className="h-4 bg-slate-700/40 rounded w-3/4"></div>
                <div className="flex justify-between">
                  <div className="h-3 bg-slate-700/30 rounded w-1/4"></div>
                  <div className="h-3 bg-slate-700/30 rounded w-1/5"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-7 px-4">
      {/* Header Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-3">
          GitHub Projects
        </h2>
        <p className="text-slate-400 text-lg leading-relaxed">
          My latest repositories and contributions
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {previewRepos.map((repo) => (
          <div
            key={repo.id}
            className="group relative p-6 rounded-xl bg-slate-900/40 backdrop-blur-md border border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
          >
            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            <div className="relative z-10">
              {/* Repository Title */}
              <div className="flex items-start justify-between mb-4">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xl font-semibold text-slate-200 hover:text-blue-300 transition-colors group-hover:text-blue-300"
                >
                  <GitBranch className="w-5 h-5 text-blue-400" />
                  <span className="truncate">{repo.name}</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              {/* Description */}
              {repo.description && (
                <p className="text-slate-300 text-sm mb-6 leading-relaxed line-clamp-3">
                  {repo.description
                    ? repo.description
                    : "No description available."}
                </p>
              )}

              {/* Repository Stats */}
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  {/* Language Badge */}
                  {repo.language && (
                    <span className="flex items-center gap-1.5 bg-slate-800/60 border border-slate-700/50 px-3 py-1.5 rounded-full">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                      <span className="text-slate-300 font-medium">
                        {repo.language}
                      </span>
                    </span>
                  )}

                  {/* Stars and Watchers */}
                  <div className="flex items-center gap-3 text-slate-400">
                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center gap-1 hover:text-yellow-400 transition-colors">
                        <Star className="w-3.5 h-3.5" />
                        <span className="font-medium">
                          {repo.stargazers_count}
                        </span>
                      </span>
                    )}

                    {repo.watchers_count > 0 && (
                      <span className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                        <Eye className="w-3.5 h-3.5" />
                        <span className="font-medium">
                          {repo.watchers_count}
                        </span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Last Updated */}
                <span className="flex items-center gap-1.5 text-slate-500 bg-slate-800/30 px-2 py-1 rounded-md">
                  <Calendar className="w-3 h-3" />
                  <span className="font-medium text-xs">
                    {new Date(repo.updated_at).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="text-center animate-bounce">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-800/80 to-slate-900/80 border border-slate-600/50 rounded-full text-slate-200 hover:bg-gradient-to-r hover:from-slate-700/80 hover:to-slate-800/80 hover:border-slate-500/60 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 backdrop-blur-sm"
        >
          <GitBranch className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
          <span className="font-medium">View All Projects</span>
          <ExternalLink className="w-4 h-4 text-blue-400 group-hover:text-blue-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
        </Link>
      </div>
    </div>
  );
}
