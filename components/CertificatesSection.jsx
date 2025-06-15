import React, { useState, useEffect } from "react";
import { Award, Eye, X, ExternalLink, Calendar, Star } from "lucide-react";

const CertificatesSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: 1,
      image: "/img/certif/GAds.jpg",
      title: "Google Ads Search",
      description: "Certified by Google Ads Skillshop",
      issuer: "Google",
      date: "2024",
      level: "Professional",
      delay: 0,
      color: "from-blue-500 to-indigo-600",
      icon: "🎯",
      category: "Marketing",
    },
    {
      id: 2,
      image: "/img/certif/GDGdm.jpg",
      title: "Fundamentals of Digital Marketing",
      description: "Certified by Google Digital Garage",
      issuer: "Google",
      date: "2024",
      level: "Beginner",
      delay: 100,
      color: "from-emerald-500 to-teal-600",
      icon: "📱",
      category: "Marketing",
    },
    {
      id: 3,
      image: "/img/certif/Sem.jpg",
      title: "Semrush SEO Toolkit",
      description: "Certified by Semrush Academy",
      issuer: "Semrush",
      date: "2024",
      level: "Advanced",
      delay: 200,
      color: "from-orange-500 to-red-600",
      icon: "🔍",
      category: "SEO",
    },
    {
      id: 4,
      image: "/img/certif/Seo.jpg",
      title: "Search Engine Optimization",
      description: "Certified by HubSpot Academy",
      issuer: "HubSpot",
      date: "2024",
      level: "Intermediate",
      delay: 300,
      color: "from-purple-500 to-pink-600",
      icon: "⚡",
      category: "SEO",
    },
    {
      id: 5,
      image: "/img/certif/MSIB.jpg",
      title: "MSIB Batch 6",
      description: "Certified by Badan Pendapatan Daerah Kota Surabaya",
      issuer: "Government",
      date: "2024",
      level: "Program",
      delay: 400,
      color: "from-indigo-500 to-blue-600",
      icon: "🏆",
      category: "Internship",
    },
    {
      id: 6,
      image: "/img/certif/InfiniteLearning.png",
      title: "Infinite Learning Batch 7",
      description: "Certified by Infinite Learning",
      issuer: "Infinite Learning",
      date: "2024",
      level: "Bootcamp",
      delay: 500,
      color: "from-cyan-500 to-blue-600",
      icon: "🚀",
      category: "Training",
    },
  ];

  const openModal = (imageSrc, cert) => {
    setSelectedImage(imageSrc);
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setSelectedCert(null);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const getLevelColor = (level) => {
    switch (level) {
      case "Beginner":
        return "text-green-400 bg-green-400/10";
      case "Intermediate":
        return "text-yellow-400 bg-yellow-400/10";
      case "Advanced":
        return "text-red-400 bg-red-400/10";
      case "Professional":
        return "text-purple-400 bg-purple-400/10";
      default:
        return "text-blue-400 bg-blue-400/10";
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/3 to-purple-500/3 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <section className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-3xl blur opacity-20" />
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 sm:p-12">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl">
                  <Award className="w-8 h-8 text-white" />
                </div>
              </div>

              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  CERTIFICATES
                </span>
              </h2>

              <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-6">
                Professional certifications and achievements in digital
                marketing and web development
              </p>

              <div className="flex items-center justify-center gap-3 text-gray-400">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-bounce">
                  <Eye className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">
                  Click to explore achievements
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16">
          {[
            {
              label: "Total Certificates",
              value: certificates.length,
              icon: "🏆",
            },
            { label: "Institutions", value: "6", icon: "🏛️" },
            { label: "Categories", value: "5", icon: "📂" },
            { label: "Current Year", value: "2024", icon: "📅" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="bg-slate-900/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/50 transition-all duration-300 group"
            >
              <div className="text-center">
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="group cursor-pointer"
              onClick={() => openModal(cert.image, cert)}
              style={{
                animation: `fadeInUp 0.8s ease-out ${cert.delay}ms both`,
              }}
            >
              {/* Card with enhanced glassmorphism */}
              <div className="relative h-full bg-slate-900/70 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl overflow-hidden hover:border-slate-600/70 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2">
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-full text-xs font-medium text-gray-300">
                    {cert.category}
                  </span>
                </div>

                {/* Level badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(
                      cert.level
                    )}`}
                  >
                    {cert.level}
                  </span>
                </div>

                {/* Icon */}
                <div className="absolute top-16 right-4 z-10">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                  >
                    {cert.icon}
                  </div>
                </div>

                {/* Image */}
                <div className="relative aspect-video overflow-hidden rounded-t-3xl">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400">{cert.date}</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-sm text-gray-400">{cert.issuer}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                    {cert.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  {/* View button */}
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <button
                      className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${cert.color} text-white text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                    >
                      <Eye className="w-4 h-4" />
                      View Certificate
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-40 animate-pulse" />
                <div className="absolute bottom-8 left-8 w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60 animate-ping" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={closeModal}
          />

          <div className="relative max-w-6xl max-h-full w-full">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-6 -right-6 z-20 w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:rotate-90 transition-all duration-300 group"
            >
              <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
            </button>

            {/* Modal content */}
            <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl overflow-hidden">
              {/* Header */}
              {selectedCert && (
                <div
                  className={`p-8 bg-gradient-to-r ${selectedCert.color} relative overflow-hidden`}
                >
                  <div className="relative z-10 flex items-start gap-6">
                    <div className="text-5xl">{selectedCert.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className={`px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium`}
                        >
                          {selectedCert.category}
                        </span>
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                          {selectedCert.level}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {selectedCert.title}
                      </h3>
                      <p className="text-white/90 text-lg mb-3">
                        {selectedCert.description}
                      </p>
                      <div className="flex items-center gap-4 text-white/80">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{selectedCert.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4" />
                          <span>{selectedCert.issuer}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20" />
                </div>
              )}

              {/* Image */}
              <div className="p-8 bg-slate-800/50">
                <img
                  src={selectedImage}
                  alt="Certificate"
                  className="w-full h-auto max-h-[70vh] object-contain rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      )}

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
};

export default CertificatesSection;
