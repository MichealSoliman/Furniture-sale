import React from "react";
import { motion } from "framer-motion";
import FurnitureImg from "../assets/hero/pexels-steve-923192.jpg"; // ضع صورة جذابة هنا

const Selling = () => {
  return (
    <section
      id="selling-furniture"
      className="relative overflow-hidden py-20 px-6 md:px-16 text-white bg-gradient-to-br from-[#2b2b2b] via-[#3d3d3d] to-[#1a1a1a]"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 leading-relaxed">
            أثاث فاخر للبيع في جدة بأسعار لا تُنافس!
          </h2>
          <p className="mb-6 text-gray-300 leading-8">
            تصفح مجموعتنا المميزة من غرف النوم، غرف المعيشة، والمكاتب بأفضل جودة وتصاميم عصرية. تسوق الآن واحصل على خدمة توصيل سريعة داخل جدة.
          </p>

          <ul className="space-y-3 text-gray-200">
            <li className="flex items-center gap-2">
              <span className="text-green-400 text-xl">✔</span>
              جودة عالية وأسعار منافسة
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400 text-xl">✔</span>
              تشكيلات تناسب كل الأذواق
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400 text-xl">✔</span>
              خدمة توصيل وتركيب داخل جدة
            </li>
          </ul>

          <motion.a
            href="tel:966512345678"
            className="mt-8 inline-block bg-green-500 hover:bg-green-600 transition-colors text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            تواصل معنا الآن
          </motion.a>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={FurnitureImg}
            alt="أثاث للبيع"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Selling;
