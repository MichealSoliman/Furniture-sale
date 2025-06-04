import React from "react";
import Img1 from "../../assets/women/pexels-zvolskiy-2082090.jpg";
import Img2 from "../../assets/women/pexels-houzlook-3356416.jpg";
import Img3 from "../../assets/women/pexels-vika-glitter-392079-3315286.jpg";
import Img4 from "../../assets/women/pexels-taryn-elliott-4112598.jpg";
import Img5 from "../../assets/women/pexels-serpstat-177219-572056.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
 {
  id: 1,
  img: Img1,
  title: "كرسي مريح",
  rating: 5.0,
  color: "أبيض",
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
  color: "أسود",
  aosDelay: "800",
},

];

const Products = () => {
  return (
    <div className="mt-14 mb-12" dir="rtl" id="products">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
             أفضل منتجات الأثاث مبيعاً لك
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold py-3">
           منتجات
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
             نحن نقدم أفضل منتجات الأثاث في جدة بجودة عالية وتصاميم مميزة تناسب جميع الأذواق.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md transition-transform duration-300 ease-in-out hover:scale-110"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md hover:bg-secondary transition-colors duration-300">
                عرض الكل
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
