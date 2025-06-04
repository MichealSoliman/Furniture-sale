import React from "react";
import Img1 from "../../assets/women/pexels-zvolskiy-2082090.jpg"; // Update path
import Img2 from "../../assets/women/pexels-houzlook-3356416.jpg"; // Update path
import Img3 from "../../assets/women/pexels-vika-glitter-392079-3315286.jpg"; // Update path
import Img4 from "../../assets/women/pexels-taryn-elliott-4112598.jpg"; // Update path
import Img5 from "../../assets/women/pexels-serpstat-177219-572056.jpg"; // Update path
import { FaStar } from "react-icons/fa6";

const ProductsData = [
 {
  id: 1,
  img: Img1,
  title: "كرسي مريح",
  rating: 5.0,
  color: "رمادي غامق",
  aosDelay: "0",
},
{
  id: 2,
  img: Img2,
  title: "طاولة طعام خشبية",
  rating: 4.5,
  color: "بني غامق",
  aosDelay: "200",
},
{
  id: 3,
  img: Img3,
  title: "خزانة ملابس",
  rating: 4.7,
  color: "بني فاتح",
  aosDelay: "400",
},
{
  id: 4,
  img: Img4,
  title: "كنبة زاوية",
  rating: 4.4,
  color: "رمادي",
  aosDelay: "600",
},
{
  id: 5,
  img: Img5,
  title: "طاولة مكتب",
  rating: 4.5,
  color: "ابيض",
  aosDelay: "800",
},

];

const Products = () => {
  return (
    <div className=" py-5 bg-gray-50 dark:bg-gray-950" dir="rtl" id="products">
      <div className="container mx-auto px-4">
        {/* Header section - Enhanced */}
        <div className="text-center mb-12 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary dark:text-secondary font-semibold tracking-wide uppercase">
             الأكثر مبيعاً
          </p>
          <h1 data-aos="fade-up" data-aos-delay="100" className="text-3xl md:text-4xl font-bold py-2 text-gray-800 dark:text-white">
           منتجاتنا المميزة
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
             اكتشف تشكيلتنا الواسعة من الأثاث عالي الجودة المصمم ليناسب أسلوبك وميزانيتك في جدة.
          </p>
        </div>
        
        {/* Body section - Redesigned Cards */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
            {/* Card section - Improved Styling */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 flex flex-col"
              >
                <div className="overflow-hidden">
                  <img
                    src={data.img} // Ensure path is correct
                    alt={data.title}
                    className="h-[250px] w-full object-cover rounded-t-lg transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-semibold text-lg mb-1 text-gray-800 dark:text-white truncate">{data.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">اللون: {data.color}</p>
                  <div className="flex items-center gap-1 mt-auto pt-2 border-t border-gray-200 dark:border-gray-700">
                    <FaStar className="text-yellow-400" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{data.rating}</span>
                    {/* Optional: Add a price or quick view button here */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* View all button - Enhanced */}
          <div className="flex justify-center mt-12">
            <button 
              data-aos="fade-up"
              className="text-center cursor-pointer bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white py-2.5 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
                عرض كل المنتجات
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

