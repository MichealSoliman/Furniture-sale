import React from 'react';

import img1 from "../assets/ourworks/pexels-rdne-7464369.jpg"; // Replace with your image URL
import img2 from "../assets/ourworks/pexels-pixabay-159839.jpg"; // Replace with your image URL
import img3 from "../assets/ourworks/pexels-charlotte-may-5824520.jpg"; // Replace with your image URL
import img4 from "../assets/ourworks/pexels-olly-3768095.jpg"; // Replace with your image URL
import img5 from "../assets/ourworks/istockphoto-1293762741-612x612.jpg"; // Replace with your image URL
const worksData = [
  {
    id: 1,
    title: 'بيع أثاث فاخر لفيلة بحي السلامة',
    description: 'تم بيع أثاث فاخر يتضمن غرف نوم، صالونات، ومجالس عربية مصممة خصيصًا لفيلة راقية بحي السلامة في جدة.',
    imageUrl: img1, // Replace with your image URL
  },
  {
    id: 2,
    title: 'بيع أثاث مكتبي لشركة في الخالدية',
    description: 'قمنا بتوريد وبيع مجموعة أثاث مكتبي حديث تشمل مكاتب إدارية وكراسي تنفيذية وخزائن أرشيف لشركة بخالدية.',
    imageUrl:img2 , 
  },
  {
    id: 3,
    title: 'بيع أثاث شقة مفروشة في الروضة',
    description: 'تم بيع أثاث كامل لشقة مفروشة بالروضة، يشمل غرفة نوم، غرفة معيشة، وطاولة طعام بحالة ممتازة.',
    imageUrl: img3,
  },
  {
    id: 4,
    title: 'بيع أثاث فندقي مستعمل في وسط جدة',
    description: 'شاركنا في بيع أثاث فندقي فاخر تم استخدامه لفترة قصيرة، شمل أسرة، كنب، ومكاتب غرف نزلاء.',
    imageUrl: img4,
  },
  {
    id: 5,
    title: 'بيع أثاث عصري بحي الروضة – جدة',
    description: 'بعنا مجموعة أثاث عصري بحالة ممتازة لعائلة انتقلت حديثًا، شمل الأثاث طقم صالون وكنب مودرن وطاولة طعام.',
    imageUrl: img5, 
  },
];

const OurWorks = () => {
  return (
  
// bg-gradient-to-br from-blue-50 via-white to-blue-100
    <section className="py-12 md:py-20 " dir='rtl'>
     
      <div className="container mx-auto px-4">
      <div className="text-center mb-12 max-w-[700px] mx-auto">
  <p data-aos="fade-up" className="text-sm text-primary">
    أعمالنا في بيع الأثاث بجدة
  </p>
  <h1 data-aos="fade-up" className="text-4xl font-bold mb-4 py-3">
    نظرة على ما نقدمه
  </h1>
  <p data-aos="fade-up" className="text-gray-600 text-base leading-relaxed">
    في شركتنا، نتميز بتوفير مجموعة واسعة من قطع الأثاث التي تجمع بين الأناقة والوظيفة. نقدم تصاميم فريدة تناسب جميع الأذواق، مع خدمات تغليف وتوصيل احترافية داخل جدة. .
  </p>
</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {worksData.map((work) => (
            <div
              key={work.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
              
                src={work.imageUrl}
                alt={work.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-700">{work.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            شاهد المزيد من الأثاث المعروض أو اطلب استشارة الآن
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
