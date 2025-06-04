import React from "react";
import {
  FaTruck,
  FaShieldAlt,
  FaThumbsUp,
  FaPhoneAlt,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaTruck className="text-4xl text-white mb-3" />,
    title: "توصيل سريع وآمن",
    details: [
      "نوفر خدمة توصيل أثاثك إلى باب منزلك بأسرع وقت ممكن.",
      "نتبع معايير سلامة صارمة أثناء النقل.",
      "خدمة التتبع المباشر لشحنتك حتى تصل.",
    ],
    bgColor: "bg-blue-600",
  },
  {
    id: 2,
    icon: <FaShieldAlt className="text-4xl text-white mb-3" />,
    title: "ضمان جودة المنتجات",
    details: [
      "منتجات مصنوعة من أجود المواد وأفضل الخامات.",
      "نضمن متانة الأثاث على المدى الطويل.",
      "فحص دقيق لكل قطعة قبل التسليم.",
    ],
    bgColor: "bg-green-600",
  },
  {
    id: 3,
    icon: <FaThumbsUp className="text-4xl text-white mb-3" />,
    title: "رضا العملاء أولويتنا",
    details: [
      "خدمة عملاء متوفرة للرد على جميع الاستفسارات.",
      "تجربة شراء مخصصة تناسب احتياجاتك.",
      "نستمع لملاحظات العملاء لتحسين خدماتنا.",
    ],
    bgColor: "bg-yellow-500",
  },
  {
    id: 4,
    icon: <FaPhoneAlt className="text-4xl text-white mb-3" />,
    title: "دعم فني متواصل",
    details: [
      "فريق دعم جاهز لخدمتك على مدار الساعة.",
      "الرد السريع على كل أسئلتك ومشاكلك.",
      "مساعدة في اختيار الأثاث المناسب لمنزلك.",
    ],
    bgColor: "bg-red-600",
  },
];

const FeaturesSection = () => {
  return (
    <section className="container mx-auto py-16 px-6" dir="rtl"id="features">
      <div className="text-center mb-12 max-w-[700px] mx-auto">
        <p data-aos="fade-up" className="text-sm text-primary">
          مميزاتنا في بيع الأثاث بجدة
        </p>
        <h1 data-aos="fade-up" className="text-4xl font-bold mb-4 py-3">
          لماذا تختارنا؟
        </h1>
        <p data-aos="fade-up" className="text-gray-600 text-base leading-relaxed">
          نقدم لك أفضل تجربة في شراء الأثاث، من تصاميم عصرية وجودة عالية إلى خدمات توصيل سريعة ودعم فني متواصل. 
         
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ id, icon, title, details, bgColor }) => (
          <div
            key={id}
            data-aos="fade-up"
            className={`${bgColor} rounded-lg shadow-lg p-6 flex flex-col items-center text-center text-white`}
          >
            <div>{icon}</div>
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <div className="text-white text-sm space-y-2">
              {details.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <a
          href="tel:+0123456789"
          className="bg-blue-500 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition font-semibold flex items-center gap-3"
        >
          اتصل بنا
          <FaPhoneAlt />
        </a>
      </div>
    </section>
  );
};

export default FeaturesSection;
