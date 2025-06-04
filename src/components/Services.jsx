import React from "react";
import { FaCouch, FaPalette, FaTruck, FaTags, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";

const smallCards = [
  { icon: <FaCouch />, text: "أثاث مودرن وكلاسيك لجميع الأذواق" },
  { icon: <FaPalette />, text: "تصاميم عصرية وخامات عالية الجودة" },
  { icon: <FaTruck />, text: "توصيل سريع وآمن داخل جدة" },
];

const bigCards = [
  {
    title: "مجموعة متنوعة من قطع الأثاث",
    text: "نوفر تشكيلة واسعة من غرف النوم، المجالس، الأرائك، طاولات الطعام والمكاتب المنزلية بتصاميم تناسب كل الأذواق.",
    icon: <FaCouch />,
  },
  {
    title: "خامات مميزة وأسعار تنافسية",
    text: "نحرص على اختيار أجود أنواع الأخشاب والقماش بأسعار مدروسة لتناسب ميزانيتك دون التنازل عن الجودة.",
    icon: <FaTags />,
  },
  {
    title: "توصيل وتركيب مجاني داخل جدة",
    text: "نقوم بتوصيل الأثاث إلى باب المنزل مع خدمة تركيب مجانية ودقيقة لجميع المشتريات داخل مدينة جدة.",
    icon: <FaTruck />,
  },
  {
    title: "خدمة ما بعد البيع وضمان الجودة",
    text: "نمنحك تجربة شراء مريحة تبدأ من الاختيار وتنتهي بدعم دائم وخدمة ما بعد البيع لحل أي مشكلة أو استفسار.",
    icon: <FaHandshake />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 sm:px-10 container mx-auto text-right" dir="rtl">
      <div className="text-center mb-10 max-w-[600px] mx-auto">
        <p data-aos="fade-up" className="text-sm text-primary">
          أفضل عروض الأثاث في جدة بجودة وضمان
        </p>
        <h1 data-aos="fade-up" className="text-3xl font-bold py-4">
          خدماتنا في بيع الأثاث
        </h1>
        <p data-aos="fade-up" className="text-xs text-gray-400 leading-6">
          نوفر أفضل أنواع الأثاث المنزلي والمكتبي بجودة عالية وخدمة عملاء ممتازة داخل مدينة جدة مع ضمان وتوصيل مجاني.
        </p>
      </div>

      {/* الكروت الصغيرة */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
        {smallCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <div className="text-3xl text-primary">{card.icon}</div>
            <p className="font-medium text-gray-600 text-sm">{card.text}</p>
          </motion.div>
        ))}
      </div>

      {/* الكروت الكبيرة */}
      <div className="grid md:grid-cols-2 gap-10 mb-5">
        {bigCards.map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-2xl shadow-lg flex flex-col gap-4"
          >
            <div className="text-4xl text-primary">{card.icon}</div>
            <h3 className="text-xl font-bold">{card.title}</h3>
            <p className="text-gray-600 text-sm leading-7">{card.text}</p>
          </motion.div>
        ))}
      </div>

      {/* زر المزيد من الخدمات */}
      <div className="text-center mt-10">
        <a
          href="https://wa.me/966566666666"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition"
        >
          تواصل معنا الآن
        </a>
      </div>
    </section>
  );
};

export default Services;
