import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section id="contact"
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1470&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container backdrop-blur-sm py-16 px-6 max-w-xl mx-auto  sm:text-right" dir="rtl">
        <h1 className="text-3xl sm:text-4xl text-primary text-center font-semibold mb-6">
          تواصل معنا لشراء أفضل منتجات الأثاث في جدة
        </h1>
        <p className="mb-8  ">
          لأي استفسارات أو طلبات خاصة، نحن هنا لمساعدتك. اتصل بنا أو أرسل لنا رسالة عبر واتساب وسنكون سعداء بخدمتك.
        </p>
        <div className="flex justify-center  sm:justify-center gap-6">
          <a
            href="tel:+0123456789"
            className="flex items-center gap-3 bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition font-semibold"
          >
            <FaPhoneAlt className="text-xl" />
            اتصال
          </a>
          <a
            href="https://wa.me/0123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition font-semibold"
          >
            <FaWhatsapp className="text-xl" />
            واتساب
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
