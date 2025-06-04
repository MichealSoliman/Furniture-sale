import React from "react";

import Img1 from "../assets/women/pexels-zvolskiy-2082090.jpg";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const stats = [
  {
    id: 1,
    title: "مبيعاتنا",
    value: "10,000+",
    desc: "قطع أثاث مباعة سنوياً",
    bg: "bg-blue-500",
  },
  {
    id: 2,
    title: "عملائنا",
    value: "5,000+",
    desc: "عملاء سعداء حول العالم",
    bg: "bg-green-500",
  },
  {
    id: 3,
    title: "سنوات الخبرة",
    value: "15",
    desc: "سنوات من التميز في السوق",
    bg: "bg-yellow-500",
  },
  {
    id: 4,
    title: "جودة المنتجات",
    value: "100%",
    desc: "ضمان جودة عالية",
    bg: "bg-red-500",
  },
];

const About = () => {
  return (
    <section className="container mx-auto py-16 px-6" id="about" >
      <div className="flex flex-col md:flex-row items-center gap-10 relative">
        {/* Left Side - Single Image with natural size */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={Img1}
            alt="Furniture"
            className="rounded-lg shadow-md max-w-full h-auto opacity-90"
          />
        </div>

        {/* Right Side - Text + Buttons */}
        <div className="md:w-1/2 text-right" dir="rtl">
          <h2 className="text-4xl font-bold mb-6">من نحن</h2>
          <p className=" mb-6 leading-relaxed text-lg text-xs">
            نحن شركة رائدة في مجال بيع الأثاث الفاخر، نحرص على تقديم تصاميم مبتكرة وعصرية تناسب كافة الأذواق والمساحات.  
            نستخدم أفضل الخامات الطبيعية لضمان الجودة والمتانة، مع الاهتمام بأدق التفاصيل لنخلق لكم بيئة منزلية مريحة وأنيقة.
            <br /><br />
            فريقنا من الخبراء ملتزم بتقديم أفضل خدمة عملاء، ونوفر طرق دفع سهلة وسريعة مع توصيل آمن وسريع. نسعى دوماً لإرضاء عملائنا وتلبية جميع احتياجاتهم.
            <br /><br />
            انضم إلى عائلتنا من العملاء السعداء واستمتع بأفضل العروض والخدمات التي نقدمها.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="tel:+0123456789"
              className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              <FaPhoneAlt /> اتصل بنا
            </a>
            <a
              href="https://wa.me/0123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
            >
              <FaWhatsapp /> واتساب
            </a>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
        {stats.map(({ id, title, value, desc, bg }) => (
          <div
            key={id}
            className={`rounded-lg p-6 text-white shadow-lg ${bg} flex flex-col justify-center items-center`}
          >
            <h3 className="text-4xl font-extrabold mb-2">{value}</h3>
            <h4 className="text-xl font-semibold mb-1">{title}</h4>
            <p className="text-sm opacity-90">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
