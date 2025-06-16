"use client";
import React, { useEffect, useState } from "react";
import {
  ExternalLink,
  GitBranch,
  Star,
  Eye,
  Calendar,
  Globe,
  Code,
  Monitor,
} from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Your custom projects with images
  const customProjects = [
    {
      id: "website-1",
      name: "My Development Portfolio",
      description:
        "A modern, responsive portfolio website showcasing my development skills and projects. Built with Next.js, Tailwind CSS, and featuring smooth animations and interactive elements.",
      url: "https://portfolio-fitchis-projects.vercel.app",
      image: "/img/projects/portfolio.png",
      tech: [
        "Next.js",
        "Tailwind CSS",
        "React",
        "Vercel",
        "JavaScript",
        "Node.js",
      ],
      category: "Website",
      featured: true,
    },
    {
      id: "website-2",
      name: "KoneksiKita",
      description:
        "A comprehensive dashboard for managing online stores with real-time analytics, inventory management, and order tracking capabilities.",
      url: "https://KoneksiKita.site",
      image: "/img/projects/KoneksiKita.png",
      tech: ["Laravel", "Node.js", "MySQL", "Tailwind CSS", "PHP"],
      category: "Website",
      featured: true,
    },

    {
      id: "website-3",
      name: "OentoengSpace",
      description:
        "A comprehensive dashboard for managing online books with real-time analytics and tracking capabilities.",
      url: "https://oentoengspace.com",
      image: "/img/projects/Oentoengspace.png",
      tech: ["Laravel", "Node.js", "MySQL", "Tailwind CSS", "PHP"],
      category: "Website",
      featured: true,
    },
    {
      id: "website-4",
      name: "ZaStore",
      description:
        "A comprehensive website for online stores with real-time analytics, and tracking order.",
      url: "https://zastoregames.id",
      image: "/img/projects/Zastore.png",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      category: "Web App",
      featured: true,
    },
    {
      id: "website-5",
      name: "Ims",
      description:
        "A comprehensive dashboard for managing information with real-time analytics.",
      url: "",
      image: "/img/projects/Ims.png",
      tech: ["Laravel", "HTML", "Tailwind CSS", "JavaScript", "PHP", "MySQL"],
      category: "Website",
      featured: false,
    },
    {
      id: "website-6",
      name: "Latto",
      description: "A comprehensive Company profile for information.",
      url: "https://latto-company.vercel.app/",
      image: "/img/projects/Latto.png",
      tech: [
        "Next.js",
        "Tailwind CSS",
        "React",
        "Vercel",
        "JavaScript",
        "Node.js",
      ],
      category: "Website",
      featured: true,
    },
  ];

  useEffect(() => {
    fetch("https://api.github.com/users/Fitchis/repos?sort=updated")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      });
  }, []);

  const previewRepos = repos.slice(0, 3);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="animate-pulse space-y-12">
          {/* Custom Projects Loading */}
          <div className="space-y-8">
            <div className="h-8 bg-slate-800/50 rounded-lg w-1/3"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 space-y-4"
                >
                  <div className="h-48 bg-slate-700/50 rounded-lg"></div>
                  <div className="h-6 bg-slate-700/50 rounded w-2/3"></div>
                  <div className="h-4 bg-slate-700/40 rounded w-full"></div>
                  <div className="h-4 bg-slate-700/40 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          </div>

          {/* GitHub Repos Loading */}
          <div className="space-y-8">
            <div className="h-8 bg-slate-800/50 rounded-lg w-1/3"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 space-y-4"
                >
                  <div className="h-6 bg-slate-700/50 rounded w-2/3"></div>
                  <div className="h-4 bg-slate-700/40 rounded w-full"></div>
                  <div className="h-4 bg-slate-700/40 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-7 px-4 space-y-16">
      {/* Custom Projects Section */}
      <section>
        <div className="mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            My latest websites and applications with live previews
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {customProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-slate-900/40 backdrop-blur-md border border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              {/* Featured Badge */}
              <div className="absolute top-4 right-4 z-20">
                {project.featured ? (
                  <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
                    Featured
                  </span>
                ) : (
                  <span className="inline-block bg-gradient-to-r from-orange-500 to-orange-700 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    Development
                  </span>
                )}
              </div>

              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10"></div>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback gradient background if image fails to load
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                {/* Fallback background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 hidden items-center justify-center">
                  <Monitor className="w-16 h-16 text-slate-400" />
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 text-slate-200 text-xs font-medium px-3 py-1.5 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow space-y-4">
                <div className="flex items-start justify-between">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-2xl font-bold text-slate-200 hover:text-emerald-300 transition-colors group-hover:text-emerald-300"
                  >
                    <Globe className="w-6 h-6 text-emerald-400" />
                    <span>{project.name}</span>
                    <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-slate-800/60 border border-slate-700/50 text-slate-300 text-xs font-medium px-3 py-1.5 rounded-full hover:bg-emerald-500/10 hover:border-emerald-500/30 hover:text-emerald-300 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <div className="pt-2 mt-auto">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 border border-emerald-500/30 rounded-lg text-emerald-300 hover:bg-gradient-to-r hover:from-emerald-600/30 hover:to-cyan-600/30 hover:border-emerald-400/50 transition-all duration-200 text-sm font-medium"
                    >
                      <Globe className="w-4 h-4" />
                      View Live Project
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/60 border border-slate-700/50 rounded-lg text-slate-400 text-sm font-medium cursor-not-allowed">
                      <Globe className="w-4 h-4" />
                      Not Deployed Yet
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GitHub Projects Section */}
      <section>
        <div className="mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-3">
            GitHub Repositories
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            My latest open source contributions and code repositories
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewRepos.map((repo) => (
            <div
              key={repo.id}
              className="group relative p-6 rounded-xl bg-slate-900/40 backdrop-blur-md border border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="relative z-10">
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

                {repo.description && (
                  <p className="text-slate-300 text-sm mb-6 leading-relaxed line-clamp-3">
                    {repo.description}
                  </p>
                )}

                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    {repo.language && (
                      <span className="flex items-center gap-1.5 bg-slate-800/60 border border-slate-700/50 px-3 py-1.5 rounded-full">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                        <span className="text-slate-300 font-medium">
                          {repo.language}
                        </span>
                      </span>
                    )}

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

        {/* View All GitHub Projects Button */}
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-800/80 to-slate-900/80 border border-slate-600/50 rounded-full text-slate-200 hover:bg-gradient-to-r hover:from-slate-700/80 hover:to-slate-800/80 hover:border-slate-500/60 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 backdrop-blur-sm"
          >
            <GitBranch className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
            <span className="font-medium">View All GitHub Projects</span>
            <ExternalLink className="w-4 h-4 text-blue-400 group-hover:text-blue-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
          </Link>
        </div>
      </section>
    </div>
  );
}
