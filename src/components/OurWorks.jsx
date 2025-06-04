import React from 'react';
import img from "../assets/ourworks/pexels-rdne-7464369.jpg"
const worksData = [
  {
    id: 1,
    title: 'بيع أثاث فاخر لفيلة بحي السلامة',
    description: 'تم بيع أثاث فاخر يتضمن غرف نوم، صالونات، ومجالس عربية مصممة خصيصًا لفيلة راقية بحي السلامة في جدة.',
    imageUrl: "../../assets/ourworks/pexels-rdne-7464369.jpg", // Replace with your image URL
  },
  {
    id: 2,
    title: 'بيع أثاث مكتبي لشركة في الخالدية',
    description: 'قمنا بتوريد وبيع مجموعة أثاث مكتبي حديث تشمل مكاتب إدارية وكراسي تنفيذية وخزائن أرشيف لشركة بخالدية.',
    imageUrl: '../../assets/ourworks/pexels-rdne-7464369.jpg', // Replace with your image URL
  },
  {
    id: 3,
    title: 'بيع أثاث شقة مفروشة في الروضة',
    description: 'تم بيع أثاث كامل لشقة مفروشة بالروضة، يشمل غرفة نوم، غرفة معيشة، وطاولة طعام بحالة ممتازة.',
    imageUrl: 'https://via.placeholder.com/400x300/cccccc/888888?text=Furniture+3',
  },
  {
    id: 4,
    title: 'بيع أثاث فندقي مستعمل في وسط جدة',
    description: 'شاركنا في بيع أثاث فندقي فاخر تم استخدامه لفترة قصيرة، شمل أسرة، كنب، ومكاتب غرف نزلاء.',
    imageUrl: 'https://via.placeholder.com/400x300/cccccc/888888?text=Furniture+4',
  },
  {
    id: 5,
    title: 'بيع أثاث عصري بحي الروضة – جدة',
    description: 'بعنا مجموعة أثاث عصري بحالة ممتازة لعائلة انتقلت حديثًا، شمل الأثاث طقم صالون وكنب مودرن وطاولة طعام.',
    imageUrl: 'https://via.placeholder.com/400x300/cccccc/888888?text=Furniture+5',
  },
];

const OurWorks = () => {
  return (
  

    <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100" dir='rtl'>
     
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 text-gray-800">
          أبرز عمليات بيع الأثاث في جدة
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {worksData.map((work) => (
            <div
              key={work.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
              src={img}
                // src={work.imageUrl}
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
