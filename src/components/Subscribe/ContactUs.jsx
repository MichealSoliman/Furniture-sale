import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Added more icons

// Replace with your actual background image URL or keep null for gradient
const backgroundImageUrl = 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1470&q=80';

const ContactUs = () => {
  return (
    <section 
      id="contact"
      data-aos="fade-up" // Changed animation
      className="py-16 md:py-24 relative text-white dark:text-white overflow-hidden"
      style={{
  
        backgroundImage: `linear-gradient(rgba(0, 0, 50, 0.7), rgba(0, 0, 30, 0.8)), url("${backgroundImageUrl}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Parallax effect
      }}
    >
   
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center" dir="rtl">
          <h2 
            data-aos="fade-up" data-aos-delay="100"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white drop-shadow-md"
          >
            تواصل معنا اليوم!
          </h2>
          <p 
            data-aos="fade-up" data-aos-delay="200"
            className="mb-8 text-lg text-gray-200 leading-relaxed drop-shadow"
          >
            هل لديك استفسار عن منتجاتنا أو خدمات نقل الأثاث في جدة؟ فريقنا جاهز لمساعدتك. اختر طريقة التواصل المفضلة لديك أدناه.
          </p>
          
       
          <div 
            data-aos="fade-up" data-aos-delay="300"
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
          >
            <a
              href="tel:+966XXXXXXXXX" 
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold w-full sm:w-auto"
            >
              <FaPhoneAlt className="text-xl" />
              اتصل بنا هاتفياً
            </a>
            <a
              href="https://wa.me/966XXXXXXXXX" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold w-full sm:w-auto"
            >
              <FaWhatsapp className="text-xl" />
              تحدث عبر واتساب
            </a>
          </div>

          {/* Optional: Add more contact info like email or address */}
          
          <div className="mt-10 text-center text-gray-300 space-y-2">
            <div data-aos="fade-up" data-aos-delay="400" className="flex items-center justify-center gap-2">
              <FaEnvelope />
              <span>info@yourcompany.com</span> 
            </div>
            <div data-aos="fade-up" data-aos-delay="500" className="flex items-center justify-center gap-2">
              <FaMapMarkerAlt />
              <span>شارع الأمير سلطان، جدة، المملكة العربية السعودية</span> 
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
