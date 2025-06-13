"use client";
import React, { useState, useEffect } from "react";

const CertificatesSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: 1,
      image: "/img/certif/GAds.jpg",
      title: "Google ADS Search",
      description: "Certified by Google ads skillshop",
      delay: 0,
      color: "from-blue-500 to-purple-600",
      icon: "🎯",
    },
    {
      id: 2,
      image: "/img/certif/GDGdm.jpg",
      title: "The Fundamentals of Digital Marketing",
      description: "Certified by Google Digital Garage",
      delay: 100,
      color: "from-green-500 to-teal-600",
      icon: "📱",
    },
    {
      id: 3,
      image: "/img/certif/Sem.jpg",
      title: "Semrush SEO Toolkit",
      description: "Certified by Semrush Academy",
      delay: 200,
      color: "from-orange-500 to-red-600",
      icon: "🔍",
    },
    {
      id: 4,
      image: "/img/certif/Seo.jpg",
      title: "Search Engine Optimization (SEO)",
      description: "Certified by HubSpot Academy",
      delay: 300,
      color: "from-purple-500 to-pink-600",
      icon: "⚡",
    },
    {
      id: 5,
      image: "/img/certif/MSIB.jpg",
      title: "MSIB Batch 6",
      description: "Certified by Badan Pendapatan Daerah Kota Surabaya",
      delay: 400,
      color: "from-indigo-500 to-blue-600",
      icon: "🏆",
    },
    {
      id: 6,
      image: "/img/certif/InfiniteLearning.png",
      title: "Infinite Learning Batch 7",
      description: "Certified by Infinite Learning",
      delay: 500,
      color: "from-cyan-500 to-blue-600",
      icon: "🚀",
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

  return (
    <>
      {/* Background with animated gradient */}
      <div className="certificate-section relative min-h-screen py-20 px-4 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header with glassmorphism */}
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-block p-4 sm:p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl mx-4">
              <div className="flex items-center justify-center mb-4"></div>
              <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 mb-4 tracking-wider">
                CERTIFICATES
              </h2>
              <div className="text-white/80 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg font-medium">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center animate-bounce">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                Click to explore my achievements
              </div>
            </div>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={cert.id}
                className="certificate-card group cursor-pointer animate-zoomIn"
                onClick={() => openModal(cert.image, cert)}
                style={{ animationDelay: `${cert.delay}ms` }}
              >
                {/* Card with glassmorphism and 3D effect */}
                <div className="relative h-full bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-purple-500/25">
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  ></div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>

                  {/* Icon badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                    >
                      {cert.icon}
                    </div>
                  </div>

                  {/* Image container */}
                  <div className="relative aspect-video overflow-hidden rounded-t-3xl">
                    <img
                      src={cert.image}
                      alt={`Certificate ${cert.id}`}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 relative z-10">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-pink-500 transition-all duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                      {cert.description}
                    </p>

                    {/* View button */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span
                        className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${cert.color} text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300`}
                      >
                        View Certificate
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Floating orbs */}
                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                    <div
                      className={`absolute top-4 left-4 w-2 h-2 bg-gradient-to-r ${cert.color} rounded-full opacity-60 animate-ping`}
                    ></div>
                    <div
                      className={`absolute bottom-8 right-8 w-1 h-1 bg-gradient-to-r ${cert.color} rounded-full opacity-40 animate-pulse`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeModal}
        >
          {/* Backdrop with blur */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
          </div>
          <div
            className="relative max-w-5xl max-h-full animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-6 -right-6 z-20 w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:rotate-90 transition-all duration-300 group"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {/* Modal content with glassmorphism */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
              {/* Header */}
              {selectedCert && (
                <div
                  className={`p-6 bg-gradient-to-r ${selectedCert.color} relative overflow-hidden`}
                >
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="text-4xl">{selectedCert.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {selectedCert.title}
                      </h3>
                      <p className="text-white/80">
                        {selectedCert.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                </div>
              )}

              {/* Image */}
              <div className="p-6 bg-white/5">
                <img
                  src={selectedImage}
                  alt="Certificate"
                  className="w-full h-auto max-h-[70vh] object-contain rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
          {/* Click outside to close */}
          <div className="absolute inset-0 -z-10" onClick={closeModal} />
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(50px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.7) rotate(-5deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-zoomIn {
          animation: zoomIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
};

export default CertificatesSection;
