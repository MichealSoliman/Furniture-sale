import React from "react";
import Img1 from "../../assets/shirt/pexels-pixabay-279746.jpg";
import Img2 from "../../assets/shirt/pexels-pixabay-269262.jpg";
import Img3 from "../../assets/shirt/pexels-bohlemedia-1884581.jpg";
import { FaStar } from "react-icons/fa";

const ProductsData = [

{
  id: 1,
  img: Img1,
  title: "سرير نوم مريح",
  description:
    "سرير مصنوع من خشب طبيعي مع تصميم عصري يوفر راحة وأناقة مثالية لغرفة النوم.",
},
{
  id: 2,
  img: Img2,
  title: "طاولة سفره خشبية",
  description:
    "طاولة سفره مصنوعة من خشب الزان الصلب، تصميمها عملي وجميل يناسب تجمعات العائلة والضيوف بأناقة.",
},
{
  id: 3,
  img: Img3,
  title: "خزانة ملابس واسعة",
  description:
    "خزانة ملابس بتصميم عملي مع مساحة تخزين كبيرة وأبواب انزلاقية، مثالية لتنظيم ملابسك.",
},
];
const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-center py-5 pb-5 mb-24" dir="rtl">
          <p data-aos="fade-up" className="text-sm text-primary">
            أفضل المنتجات تقييمًا لك
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            أفضل المنتجات
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            نقدم لك أجود قطع الأثاث المختارة بعناية لتضفي لمسة فخمة على منزلك.
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[250px] block mx-auto transform -translate-y-20 group-hover:scale-105 rounded duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  اطلب الآن
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
