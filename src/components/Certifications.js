import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Certifications = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const certifications = [
    {
      name: "LLMOps – Productionalizing Real-World Applications with LLMs and Agents",
      issuer: "Analytics Vidhya [DHS 2025]",
      year: "",
      color: "from-red-400 to-orange-600",
      image: "/images/certificates/DHS.jpeg"
    },
    {
      name: "Full Stack Development - Java",
      issuer: "Atas",
      year: "",
      color: "from-amber-500 to-orange-600",
      image: "/images/certificates/java.jpeg"
    },
    {
      name: "SQL",
      issuer: "S - Spriders",
      year: "",
      color: "from-amber-400 to-orange-500",
      image: "/images/certificates/sql.jpg"
    },
    {
      name: "Machine Learning",
      issuer: "Simpli Learn",
      year: "",
      color: "from-blue-400 to-blue-600",
      image: "/images/certificates/ml.jpg"
    },
    {
      name: "Artificial Intelligance",
      issuer: "Simpli Learn",
      year: "",
      color: "from-blue-300 to-blue-500",
      image: "/images/certificates/ai.jpg"
    },
    {
      name: "Applied Generative Al Certification",
      issuer: "Infosys Springboard",
      year: "",
      color: "from-green-400 to-green-600",
      image: "/images/certificates/genai.jpg"
    },
    {
      name: "Ethical Hacking",
      issuer: "Udemy",
      year: "",
      color: "from-green-300 to-green-500",
      image: "/images/certificates/hack.jpg"
    },
    {
      name: "Power BI",
      issuer: "Simpli Learn",
      year: "",
      color: "from-indigo-400 to-indigo-600",
      image: "/images/certificates/powerbi.jpg"
    },
    {
      name: "Data Analytics",
      issuer: "Dell Technologies",
      year: "",
      color: "from-red-400 to-red-600",
      image: "/images/certificates/da.jpg"
    },
    {
      name: "Innovation, Design and Entrepreneurship (IDE) Bootcamp",
      issuer: "National Institute of Technology Karnataka, Surathkal",
      year: "",
      color: "from-red-500 to-red-700",
      image: "/images/certificates/ide.jpg"
    },
    {
      name: "P2P: Python to Predictions",
      issuer: "Seshadripuram College, Tumakuru",
      year: "",
      color: "from-yellow-400 to-yellow-600",
      image: "/images/certificates/p2p.jpg"
    },
    {
      name: "C++",
      issuer: "Glisten Project Solutions Pvt. Ltd.",
      year: "",
      color: "from-purple-400 to-purple-600",
      image: "/images/certificates/cpp.jpg"
    },
    {
      name: "Prompt Engineering",
      issuer: "Infosys Springboard",
      year: "",
      color: "from-cyan-400 to-cyan-600",
      image: "/images/certificates/prompt.jpg"
    },
    {
      name: "Explore Generative Al with the Vertex Al Gemini API",
      issuer: "Google Cloud",
      year: "",
      color: "from-gray-400 to-gray-600",
      image: "/images/certificates/gcp1.png"
    },
    {
      name: "Inspect Rich Documents with Gemini Multimodality and Multimodal RAG",
      issuer: "Google Cloud",
      year: "",
      color: "from-purple-500 to-purple-700",
      image: "/images/certificates/gcp2.png"
    },
    {
      name: "Prompt Design in Vertex Al",
      issuer: "Google Cloud",
      year: "",
      color: "from-blue-400 to-indigo-600",
      image: "/images/certificates/gcp3.png"
    },
    {
      name: "Boost Productivity with Gemini in BigQuery",
      issuer: "Google Cloud",
      year: "",
      color: "from-cyan-400 to-blue-600",
      image: "/images/certificates/gcp4.png"
    },
    {
      name: "Work with Gemini Models in BigQuery",
      issuer: "Google Cloud",
      year: "",
      color: "from-green-500 to-green-700",
      image: "/images/certificates/gcp5.png"
    },
    {
      name: "Using BigQuery Machine Learning for inference",
      issuer: "Google Cloud",
      year: "",
      color: "from-yellow-400 to-blue-600",
      image: "/images/certificates/gcp6.png"
    },
    {
      name: "Gemini for Data Scientists and Analysts",
      issuer: "Google Cloud",
      year: "",
      color: "from-pink-400 to-purple-600",
      image: "/images/certificates/gcp7.png"
    },
    {
      name: "Data Security, Recovery and Storage Hacking",
      issuer: "Udemy",
      year: "",
      color: "from-red-400 to-orange-600",
      image: "/images/certificates/data security.jpg"
    }
  ];

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4 px-4 py-1 bg-blue-50 dark:bg-blue-900/50 rounded-full">
            Professional Credentials
          </span>
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Certifications</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${cert.color} rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition duration-500`}></div>
              
              <div className="relative h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-shadow">
                <div className={`h-1.5 w-full bg-gradient-to-r ${cert.color}`}></div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1 line-clamp-2">
                        {cert.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300 text-xs font-medium">
                      {cert.year}
                    </span>
                  </div>
                  
                  <button 
                    onClick={() => openModal(cert.image)}
                    className="mt-4 w-full py-2 text-xs font-medium rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-1"
                  >
                    View Credential
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Custom Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
          <div className="relative max-w-6xl w-full max-h-[90vh] bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-auto">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-gray-200 dark:bg-gray-700 rounded-full p-2 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-800 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <div className="p-4">
              <div className="relative w-full h-full min-h-[500px]">
                <Image
                  src={currentImage}
                  alt="Certificate"
                  fill
                  className="object-contain"
                  quality={100}
                  priority
                />
              </div>
            </div>
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex justify-end">
              <button 
                onClick={closeModal}
                className="px-4 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;