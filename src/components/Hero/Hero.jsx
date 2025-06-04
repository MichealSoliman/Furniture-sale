

import React from "react";
import Image1 from "../../assets/hero/pexels-chaitaastic-1918291.jpg"; // Replace with actual path
import Image2 from "../../assets/hero/pexels-pixabay-271624.jpg"; // Replace with actual path
import Image3 from "../../assets/hero/sale.png"; // Replace with actual path

import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image2,
    title: "خصم حتى 50% على جميع غرف النوم",
    description:
      "أفضل التصاميم الحديثة لغرف النوم بأثاث عالي الجودة يناسب جميع الأذواق والمساحات في جدة.",
  },
  {
    id: 2,
    img: Image1,
    title: "خصم 30% على غرف المعيشة",
    description:
      "استمتع بأثاث غرف المعيشة العصري والمريح مع عروض خاصة وأسعار تنافسية لجميع عملائنا في جدة.",
  },
  {
    id: 3,
    img: Image3,
    title: "خصم 70% على كافة قطع الأثاث المختارة",
    description:
      "عرض خاص لفترة محدودة على قطع أثاث مختارة من أجود الخامات لتجديد منزلك بأفضل الأسعار في جدة.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  // Slider settings - enhanced easing for smoother transitions
  var settings = {
    dots: true, // Enable dots for better navigation
    arrows: false,
    infinite: true,
    speed: 1000, // Slightly slower speed for smoother effect
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)", // Smoother easing function
    pauseOnHover: false,
    pauseOnFocus: true,
    dotsClass: "slick-dots slick-thumb", // Optional: for custom dot styling
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-950 dark:to-gray-900 flex justify-center items-center dark:text-white duration-200">
      {/* Subtle background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/20 absolute -top-1/4 right-0 rounded-full rotate-45 -z-10 blur-3xl"></div>
      {/* Hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id} className="focus:outline-none"> {/* Added key and focus outline removal */}
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* Text content section - improved spacing and typography */}
                <div className="flex flex-col justify-center gap-5 sm:gap-6 pt-12 sm:pt-0 text-center sm:text-right order-2 sm:order-1 relative z-10 mr-6 sm:mr-0">
                  <h1
                    data-aos="fade-right" // Changed animation
                    data-aos-duration="700"
                    data-aos-once="true"
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-right"
                    data-aos-duration="700"
                    data-aos-delay="200"
                    className="text-sm leading-relaxed text-gray-600 dark:text-gray-400"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-right"
                    data-aos-duration="700"
                    data-aos-delay="400"
                  >
                    <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform duration-300 text-white py-2.5 px-6 rounded-full shadow-md hover:shadow-lg"
                    >
                      اطلب الآن
                    </button>
                  </div>
                </div>
                {/* Image section - enhanced styling */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="fade-left" // Changed animation
                    data-aos-once="true"
                    data-aos-duration="700"
                    className="relative z-10 flex justify-center items-center"
                  >
                    <img
                      src={data.img}
                      alt={data.title} // Added alt text
                      className="w-[300px] h-[300px] sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px] object-cover mx-auto rounded-3xl shadow-xl transition-all duration-500 ease-in-out transform group-hover:scale-105" // Softer rounding, shadow, object-cover
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;

