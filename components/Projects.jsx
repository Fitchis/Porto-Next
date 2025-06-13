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
      <div className="max-w-2xl mx-auto py-12 px-4">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-white/10 rounded-lg w-1/3"></div>
          {[...Array(6)].map((_, i) => (
            <div key={i} className="p-4 rounded-lg bg-white/5 space-y-3">
              <div className="h-6 bg-white/10 rounded w-2/3"></div>
              <div className="h-4 bg-white/10 rounded w-full"></div>
              <div className="h-3 bg-white/10 rounded w-1/4"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className=" mx-auto py-12 px-4">
      <div className="mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          GitHub Projects
        </h2>
        <p className="text-gray-400 mt-2">
          My latest repositories and contributions
        </p>
      </div>

      <div className="space-y-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {previewRepos.map((repo) => (
          <div
            key={repo.id}
            className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-start justify-between mb-3">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xl font-semibold text-blue-300 hover:text-blue-200 transition-colors group-hover:underline"
              >
                <GitBranch className="w-5 h-5" />
                {repo.name}
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {repo.description && (
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {repo.description}
              </p>
            )}

            <div className="flex items-center justify-between text-xs text-gray-400">
              <div className="flex items-center gap-4">
                {repo.language && (
                  <span className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-full">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    {repo.language}
                  </span>
                )}

                <div className="flex items-center gap-3">
                  {repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {repo.stargazers_count}
                    </span>
                  )}

                  {repo.watchers_count > 0 && (
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {repo.watchers_count}
                    </span>
                  )}
                </div>
              </div>

              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {new Date(repo.updated_at).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-300 hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 hover:scale-105 animate-bounce"
        >
          <GitBranch className="w-4 h-4" />
          View All on Projects page
          <ExternalLink className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
