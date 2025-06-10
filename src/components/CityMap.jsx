// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import MapImage from "../assets/hero/محافظات-مدينة-جدة-1024x585.webp"; // ضع هنا صورة خريطة جدة

// const cities = [
//   { id: "balad", name: "البلد", position: { top: "60%", left: "40%" } },
//   { id: "safa", name: "الصفا", position: { top: "30%", left: "70%" } },
//   { id: "rawdah", name: "الروضة", position: { top: "40%", left: "50%" } },
//   { id: "hamra", name: "الحمراء", position: { top: "70%", left: "60%" } },
// ];

// const CityMap = () => {
//   const [activeCity, setActiveCity] = useState(null);

//   return (
// <section className="flex flex-col md:flex-row items-center justify-center py-16 px-6 gap-10" dir="rtl">
//   {/* Cards Right Side */}
//   <div className="flex flex-col gap-4 md:w-1/3 w-full text-right bg-gray-100/80 p-6 rounded-xl shadow-md">
//     <h2 className="text-3xl font-bold mb-4 text-center md:text-right">المدن التي نخدمها</h2>
//     {cities.map((city) => (
//       <motion.button
//         key={city.id}
//         onClick={() => setActiveCity(city.id)}
//         whileTap={{ scale: 0.95 }}
//         className={`px-6 py-4 rounded-lg shadow-md border text-lg font-semibold transition-all duration-300 ${
//           activeCity === city.id ? "bg-primary text-white border-primary" : "bg-white text-gray-700 border-gray-300"
//         }`}
//       >
//         {city.name}
//       </motion.button>
//     ))}
//   </div>

//   {/* Map Left Side */}
//   <div className="relative w-full md:w-2/3 h-[400px] overflow-hidden rounded-4xl shadow-lg hidden md:block">
//   <img
//   src={MapImage}
//   alt="خريطة جدة"
//   className=" object-contain rounded-3xl "
// />

//     {cities.map((city) => (
//       <motion.div
//         key={city.id}
//         initial={{ opacity: 0 }}
//         animate={{
//           opacity: activeCity === city.id ? 1 : 0,
//           scale: activeCity === city.id ? 1.3 : 1,
//         }}
//         transition={{ duration: 0.5 }}
//         className="absolute w-12 h-12 rounded-full bg-primary/80 border-4 border-white shadow-lg"
//         style={{ top: city.position.top, left: city.position.left }}
//       />
//     ))}
//   </div>
// </section>

//   );
// };

// export default CityMap;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/city/pexels-home-decor-interiors-634144-1827054.jpg"; // Placeholder for map image
import img2 from "../assets/city/pexels-fotoaibe-1643383.jpg"; // Placeholder for map image
import img3 from "../assets/city/pexels-donaldtong94-189333.jpg"; // Placeholder for map image
import img4 from "../assets/city/pexels-pixabay-534151.jpg"; // Placeholder for map image
// بيانات المدن
const cities = [
  {
    id: "balad",
    name: "البلد",
    image: img1,
    description: "نخدم منطقة البلد بخدماتنا المتميزة في نقل الأثاث بجودة واحترافية.",
  },
  {
    id: "safa",
    name: "الصفا",
    image: img2,
    description: "خدماتنا تصل إلى حي الصفا بسرعة واهتمام بأدق التفاصيل.",
  },
  {
    id: "rawdah",
    name: "الروضة",
    image: img3,
    description: "في حي الروضة نقدم حلول متكاملة لنقل وتغليف الأثاث بأمان.",
  },
  {
    id: "hamra",
    name: "الحمراء",
    image: img4,
    description: "نخدم منطقة الحمراء بأحدث المعدات والكوادر المدربة.",
  },
];

const CityMap = () => {
  const [activeCity, setActiveCity] = useState(cities[0]);

  return (
    <section className="flex flex-col md:flex-row gap-10 items-start justify-center px-6 py-16" dir="rtl">
      {/* القسم الأيمن - الأزرار */}
      <div className="md:w-1/3 w-full space-y-4">
        <h2 className="text-3xl font-bold mb-4 text-center md:text-right">المدن التي نخدمها</h2>
        {cities.map((city) => (
          <motion.button
            key={city.id}
            onClick={() => setActiveCity(city)}
            whileTap={{ scale: 0.95 }}
            className={`w-full px-5 py-4 text-lg font-semibold rounded-xl shadow border transition-all duration-300 ${
              activeCity?.id === city.id
                ? "bg-primary text-white border-primary"
                : "bg-white text-gray-700 border-gray-300 hover:bg-primary/10"
            }`}
          >
            {city.name}
          </motion.button>
        ))}
      </div>

      {/* القسم الأيسر - عرض معلومات المدينة */}
      <div className="md:w-2/3 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCity?.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4 }}
            className="bg-white shadow-lg rounded-3xl overflow-hidden border"
          >
            <img
              src={activeCity.image}
              alt={activeCity.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-primary mb-2">{activeCity.name}</h3>
              <p className="text-gray-700 leading-loose">{activeCity.description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CityMap;
