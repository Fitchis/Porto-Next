import React, { useState, useEffect } from "react";
import { Award, Eye, X, Calendar } from "lucide-react";

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
        return "bg-green-900/30 text-green-400 border-green-700/50";
      case "Intermediate":
        return "bg-yellow-900/30 text-yellow-400 border-yellow-700/50";
      case "Advanced":
        return "bg-red-900/30 text-red-400 border-red-700/50";
      case "Professional":
        return "bg-purple-900/30 text-purple-400 border-purple-700/50";
      default:
        return "bg-blue-900/30 text-blue-400 border-blue-700/50";
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-6">
            <Award className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Certificates & Achievements
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Professional certifications in digital marketing and web development
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center bg-gray-800/50 rounded-lg py-6 border border-gray-700/50">
            <div className="text-3xl font-bold text-blue-400 mb-1">
              {certificates.length}
            </div>
            <div className="text-gray-400">Certificates</div>
          </div>
          <div className="text-center bg-gray-800/50 rounded-lg py-6 border border-gray-700/50">
            <div className="text-3xl font-bold text-blue-400 mb-1">6</div>
            <div className="text-gray-400">Institutions</div>
          </div>
          <div className="text-center bg-gray-800/50 rounded-lg py-6 border border-gray-700/50">
            <div className="text-3xl font-bold text-blue-400 mb-1">5</div>
            <div className="text-gray-400">Categories</div>
          </div>
          <div className="text-center bg-gray-800/50 rounded-lg py-6 border border-gray-700/50">
            <div className="text-3xl font-bold text-blue-400 mb-1">2024</div>
            <div className="text-gray-400">Latest Year</div>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:border-blue-500/50 hover:bg-gray-800/70 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden cursor-pointer group hover:-translate-y-2 hover:scale-[1.02]"
              onClick={() => openModal(cert.image, cert)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 100}ms both`,
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />

              {/* Floating indicator */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300 z-10" />

              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Floating view button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="bg-blue-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center gap-2 font-medium shadow-lg">
                    <Eye className="w-4 h-4" />
                    <span>View Certificate</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full border border-gray-600/50 group-hover:bg-blue-900/30 group-hover:border-blue-600/50 group-hover:text-blue-300 transition-all duration-300">
                    {cert.category}
                  </span>
                  <span
                    className={`text-xs px-3 py-1 rounded-full border transition-all duration-300 group-hover:scale-105 ${getLevelColor(
                      cert.level
                    )}`}
                  >
                    {cert.level}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {cert.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {cert.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                    <Calendar className="w-4 h-4 group-hover:text-blue-400 transition-colors duration-300" />
                    <span>{cert.date}</span>
                    <span className="mx-2">•</span>
                    <span className="font-medium">{cert.issuer}</span>
                  </div>
                </div>

                {/* Interactive bottom border */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 ease-out" />
              </div>

              {/* Shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-4xl max-h-full w-full bg-gray-800/95 backdrop-blur-lg border border-gray-700/50 rounded-lg overflow-hidden">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-700 text-gray-300 rounded-full flex items-center justify-center hover:bg-gray-600 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal content */}
            {selectedCert && (
              <div>
                {/* Header */}
                <div className="bg-gray-900/80 border-b border-gray-700/50 text-white p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-white">
                        {selectedCert.title}
                      </h3>
                      <p className="text-gray-300 mb-2">
                        {selectedCert.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span>{selectedCert.issuer}</span>
                        <span>•</span>
                        <span>{selectedCert.date}</span>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded text-sm border ${getLevelColor(
                        selectedCert.level
                      )}`}
                    >
                      {selectedCert.level}
                    </span>
                  </div>
                </div>

                {/* Image */}
                <div className="p-6 bg-gray-900/50">
                  <img
                    src={selectedImage}
                    alt="Certificate"
                    className="w-full h-auto max-h-96 object-contain rounded-lg border border-gray-700/30"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificatesSection;
