

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
  { id: "all", label: "الكل" },
  { id: "bedrooms", label: "غرف النوم" },
  { id: "livingrooms", label: "غرف المعيشة" },
  { id: "offices", label: "مكاتب" },
];

const galleryData = {
  all: [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9],
  bedrooms: [Img4, Img5, Img6],
  livingrooms: [Img1, Img2, Img3],
  offices: [Img7, Img8, Img9],
};

// توزيع ثابت لحجم كل صورة (حسب index)
const spanConfig = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section className="py-16 px-6 text-center" dir="rtl" id="gallery">
      <h2 className="text-3xl font-bold mb-10">معرض صورنا</h2>

      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 rounded-full font-semibold border transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-primary text-white border-primary"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid Gallery with ثابت sizes */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 auto-rows-[150px]">
        {galleryData[activeTab].map((imgSrc, index) => {
          const spanClass = spanConfig[index] || "col-span-1 row-span-1";
          return (
            <div
              key={index}
              className={`${spanClass} overflow-hidden rounded-lg`}
            >
              <img
                src={imgSrc}
                alt={`صورة ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;





