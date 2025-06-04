import React from "react";
import BannerImg from "../../assets/women/istockphoto-135696880-612x612.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div
      className="min-h-[550px] flex justify-center items-center py-5  sm:py-0"
      dir="rtl"
    >
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 pt-24 py-5 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto rounded-2xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0" dir="rtl">
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-4xl font-bold text-primary"
            >
              خصومات الشتاء تصل إلى 50% على الأثاث في جدة
            </h1>

            <p
              data-aos="fade-up"
              className="text-sm text-gray-600 tracking-wide leading-6 max-w-xl"
            >
              اكتشف تشكيلتنا الواسعة من الأثاث العصري والفخم في جدة بأسعار لا
              تُنافس! استمتع بعروض خاصة لفترة محدودة تشمل غرف النوم، المعيشة،
              المكاتب وأكثر.
            </p>

            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>منتجات ذات جودة عالية ومضمونة</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>توصيل سريع وآمن داخل جدة وخارجها</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>طرق دفع مرنة وميسرة تناسب الجميع</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p>عروض وخصومات أسبوعية مستمرة</p>
              </div>
            </div>

            {/* زر العرض */}
            <div data-aos="fade-up" className="pt-4">
              <button className="px-8 py-3 bg-primary text-white rounded-full font-semibold shadow-md hover:bg-primary/90 transition-all duration-300">
                احصل على العرض الآن
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
