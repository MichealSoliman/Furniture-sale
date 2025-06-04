import React from "react";
import Img1 from "../assets/women/pexels-zvolskiy-2082090.jpg"; // Update with correct image path
import { FaStar, FaShippingFast, FaShieldAlt, FaTags, FaCheckCircle, FaInfoCircle, FaPhoneAlt, FaWhatsapp } from "react-icons/fa"; // Added more icons

// Placeholder for keywords/features cards
const featureCards = [
  {
    id: 1,
    icon: <FaStar className="text-yellow-500 text-2xl" />,
    title: "جودة عالية",
    desc: "أفضل الخامات والتصاميم.",
    aosDelay: "100",
  },
  {
    id: 2,
    icon: <FaShippingFast className="text-blue-500 text-2xl" />,
    title: "سرعة ودقة",
    desc: "التزام بالمواعيد والنقل.",
    aosDelay: "300",
  },
  {
    id: 3,
    icon: <FaShieldAlt className="text-green-500 text-2xl" />,
    title: "تغليف آمن",
    desc: "حماية كاملة لأثاثك.",
    aosDelay: "500",
  },
  {
    id: 4,
    icon: <FaTags className="text-red-500 text-2xl" />,
    title: "أسعار تنافسية",
    desc: "أفضل قيمة مقابل سعر.",
    aosDelay: "700",
  },
];

const About = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900" id="about" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left Side - Image with Animation */}
          <div className="lg:w-1/2 w-full flex justify-center order-1 lg:order-2">
            <div 
              data-aos="fade-left" // AOS animation
              data-aos-duration="1000"
              className="overflow-hidden rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105"
            >
              <img
                src={Img1} // Make sure this path is correct
                alt="شركة نقل أثاث بجدة"
                className="w-full h-auto max-h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Right Side - Text, Icons, Feature Cards, Buttons */}
          <div className="lg:w-1/2 w-full text-right order-2 lg:order-1">
            <h2 
              data-aos="fade-up"
              className="text-3xl sm:text-4xl font-bold mb-4 text-primary dark:text-secondary"
            >
              نبذة عن شركتنا لنقل الأثاث بجدة
            </h2>
            <p 
              data-aos="fade-up" data-aos-delay="100"
              className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300"
            >
              نحن نفخر بكوننا من الشركات الرائدة في مجال <strong className="text-primary dark:text-secondary">نقل الأثاث في جدة</strong>، حيث نقدم خدمات متكاملة تشمل الفك، التغليف الاحترافي، النقل الآمن، وإعادة التركيب بدقة وعناية. نستخدم أحدث المعدات وفريق عمل مدرب لضمان وصول أثاثك بأمان تام.
            </p>
            
            {/* Key Features/Info with Icons */}
            <div className="space-y-3 mb-8">
              <div data-aos="fade-up" data-aos-delay="200" className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-200">خبرة تمتد لسنوات في نقل جميع أنواع الأثاث.</span>
              </div>
              <div data-aos="fade-up" data-aos-delay="300" className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-200">فريق عمل محترف ومدرب على أعلى مستوى.</span>
              </div>
               <div data-aos="fade-up" data-aos-delay="400" className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-200">أسطول سيارات مجهز لضمان النقل الآمن.</span>
              </div>
            </div>

            {/* Four Small Horizontal Cards */}
            <div className="mb-8">
              <h3 data-aos="fade-up" data-aos-delay="500" className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">لماذا تختارنا؟</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {featureCards.map((card) => (
                  <div
                    key={card.id}
                    data-aos="zoom-in"
                    data-aos-delay={card.aosDelay}
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center flex flex-col items-center transition-shadow duration-300 hover:shadow-lg"
                  >
                    {card.icon}
                    <h4 className="font-semibold mt-2 mb-1 text-sm text-gray-800 dark:text-gray-100">{card.title}</h4>
                    {/* <p className="text-xs text-gray-500 dark:text-gray-400">{card.desc}</p> */}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Buttons */}
            <div data-aos="fade-up" data-aos-delay="600" className="flex flex-col sm:flex-row justify-start gap-4">
              <a
                href="tel:+966XXXXXXXXX" // Replace with actual phone number
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <FaPhoneAlt /> اتصل بنا الآن
              </a>
              <a
                href="https://wa.me/966XXXXXXXXX" // Replace with actual WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <FaWhatsapp /> تواصل واتساب
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

