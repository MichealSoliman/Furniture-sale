



import React, { useState } from "react";
import Img1 from "../assets/gallery/pexels-fotoaibe-1571453.jpg";
import Img2 from "../assets/gallery/pexels-jason-boyd-1388339-3209045.jpg";
import Img3 from "../assets/gallery/pexels-pixabay-276724.jpg";
import Img4 from "../assets/gallery/Bedrooms/pexels-pixabay-210604.jpg";
import Img5 from "../assets/gallery/Bedrooms/pexels-pixabay-262048.jpg";
import Img6 from "../assets/gallery/Bedrooms/pexels-the-ghazi-2152398165-32372040.jpg";
import Img7 from "../assets/gallery/office/pexels-fotios-photos-1957477 (1).jpg";
import Img8 from "../assets/gallery/office/pexels-kamo11235-667838.jpg";
import Img9 from "../assets/gallery/office/pexels-pixabay-37347.jpg";

const tabs = [
  { id: "all", label: "الكل", icon: "🏠" },
  { id: "bedrooms", label: "غرف النوم", icon: "🛏️" },
  { id: "livingrooms", label: "غرف المعيشة", icon: "🛋️" },
  { id: "offices", label: "مكاتب", icon: "💼" },
];

const galleryData = {
  all: [
    { src: Img1, title: "تصميم عصري", category: "livingrooms" },
    { src: Img2, title: "ديكور أنيق", category: "livingrooms" },
    { src: Img3, title: "إضاءة مميزة", category: "livingrooms" },
    { src: Img4, title: "غرفة نوم هادئة", category: "bedrooms" },
    { src: Img5, title: "تصميم كلاسيكي", category: "bedrooms" },
    { src: Img6, title: "ديكور فاخر", category: "bedrooms" },
    { src: Img7, title: "مكتب عملي", category: "offices" },
    { src: Img8, title: "بيئة عمل مريحة", category: "offices" },
    { src: Img9, title: "تصميم احترافي", category: "offices" },
  ],
  bedrooms: [
    { src: Img4, title: "غرفة نوم هادئة", category: "bedrooms" },
    { src: Img5, title: "تصميم كلاسيكي", category: "bedrooms" },
    { src: Img6, title: "ديكور فاخر", category: "bedrooms" },
  ],
  livingrooms: [
    { src: Img1, title: "تصميم عصري", category: "livingrooms" },
    { src: Img2, title: "ديكور أنيق", category: "livingrooms" },
    { src: Img3, title: "إضاءة مميزة", category: "livingrooms" },
  ],
  offices: [
    { src: Img7, title: "مكتب عملي", category: "offices" },
    { src: Img8, title: "بيئة عمل مريحة", category: "offices" },
    { src: Img9, title: "تصميم احترافي", category: "offices" },
  ],
};

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100" dir="rtl" id="gallery">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4 relative">
            معرض أعمالنا
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 -mb-3 rounded-full"></div>
          </h2>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            استكشف مجموعة متنوعة من التصاميم الداخلية المبتكرة والأنيقة
          </p>
        </div>

        {/* Enhanced Tabs */}
        <div className="flex justify-center flex-wrap gap-3 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl shadow-blue-500/25"
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg"
              }`}
            >
              <span className="flex items-center gap-3">
                <span className="text-2xl">{tab.icon}</span>
                {tab.label}
              </span>
              {activeTab === tab.id && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        {/* Masonry Grid Gallery - No gaps */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 space-y-0">
          {galleryData[activeTab].map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid mb-0 group cursor-pointer"
              onClick={() => handleImageClick(image)}
            >
              <div className="relative overflow-hidden bg-white shadow-lg hover:shadow-2xl mb-2 transition-all duration-500 transform hover:scale-[1.02]">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-auto object-cover rounded-lg  transition-transform duration-700 group-hover:scale-110"
                  style={{ display: 'block' }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                        {tabs.find(tab => tab.id === image.category)?.label}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-500/50  transition-all duration-500 "></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
            onClick={closeModal}
          >
            <div className="relative max-w-5xl max-h-[90vh] animate-scaleIn">
              <button
                onClick={closeModal}
                className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-100 transition-colors duration-300 shadow-lg z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedImage.title}</h3>
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-semibold">
                    {tabs.find(tab => tab.id === selectedImage.category)?.label}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.9);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Gallery;

