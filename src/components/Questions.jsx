import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaCouch, FaTruck, FaTags, FaShieldAlt } from "react-icons/fa";

const faqData = [
  {
    icon: <FaCouch />,
    question: "هل الأثاث المعروض جديد أم مستعمل؟",
    answer: "جميع قطع الأثاث التي نعرضها جديدة 100%، ونضمن جودتها وخاماتها المميزة.",
  },
  {
    icon: <FaTruck />,
    question: "هل التوصيل داخل جدة مجاني؟",
    answer: "نعم، نقدم خدمة التوصيل المجاني داخل جدة لجميع الطلبات مع تركيب احترافي.",
  },
  {
    icon: <FaTags />,
    question: "هل توجد خصومات أو عروض حالياً؟",
    answer: "نعم، نقدم عروض موسمية وخصومات تصل إلى 30% على العديد من القطع. تابع صفحتنا للحصول على آخر العروض.",
  },
  {
    icon: <FaShieldAlt />,
    question: "هل هناك ضمان على الأثاث؟",
    answer: "نمنح ضمانًا لمدة عام على جميع القطع ضد عيوب الصناعة، مع دعم فني سريع في حال وجود أي مشكلة.",
  },
];

const QuestionS = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-10 container mx-auto text-right" dir="rtl">
      <div className="text-center mb-12 max-w-xl mx-auto">
        <p className="text-sm text-primary" data-aos="fade-up">الأسئلة الشائعة</p>
        <h2 className="text-3xl font-bold mb-3 py-3" data-aos="fade-up">كل ما تريد معرفته عن بيع الأثاث في جدة</h2>
        <p className="text-xs text-gray-500 leading-6" data-aos="fade-up">
          جمعنا لك أهم الاستفسارات اللي بتتكرر من عملائنا لمساعدتك في اتخاذ القرار المناسب قبل الشراء.
        </p>
      </div>

      <div className="space-y-4 max-w-3xl mx-auto">
        {faqData.map((item, index) => {
          const isOpen = activeIndex === index;
          return (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
              className={`rounded-2xl overflow-hidden shadow-xl transition-all ${
                isOpen ? "bg-primary/5 border border-primary" : "bg-white"
              }`}
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full flex items-center justify-between gap-4 text-right px-5 py-4 text-sm font-semibold text-gray-400 hover:text-primary transition"
              >
                <div className="flex items-center gap-3">
                  <span className={`text-xl transition ${isOpen ? "text-primary" : "text-gray-400"}`}>
                    {item.icon}
                  </span>
                  {item.question}
                </div>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                 transition={{ duration: 0.15, ease: "easeOut" }}
                  className={`transition-transform text-gray-400`}
                >
                  <FaChevronDown />
                </motion.span>
              </button>
              
<AnimatePresence initial={false}>
  {isOpen && (
    <motion.div
      key="answer"
      initial={{
        opacity: 0,
        height: 0,
        overflow: "hidden",
      }}
      animate={{
        opacity: 1,
        height: "auto",
        overflow: "hidden",
      }}
      exit={{
        opacity: 0,
        height: 0,
        overflow: "hidden",
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
      className="px-5 pb-5 text-sm text-gray-600 leading-7"
    >
      {item.answer}
    </motion.div>
  )}
</AnimatePresence>



            </motion.div>
          );
        })}
      </div>
      {/* هناك أسئلة أخرى */}
<div className="mt-20 max-w-5xl mx-auto text-right px-4">
  <h3 className="text-xl font-bold text-primary mb-6 text-center">هناك أسئلة أخرى</h3>
  <div className="flex flex-wrap justify-center gap-6">
    {[
      "هل يمكن تفصيل قطع أثاث حسب الطلب؟",
      "ما طرق الدفع المتاحة؟",
      "كم يستغرق التوصيل داخل جدة؟",
      "هل يمكن إرجاع الأثاث بعد الشراء؟",
      "هل الأثاث المعروض متاح للعرض المباشر؟",
    ].map((question, index) => (
      <div
        key={index}
        className="bg-white shadow rounded-xl p-4 w-56 text-sm text-gray-700 font-medium border-r-4 border-primary hover:shadow-lg transition cursor-pointer"
      >
        {question}
      </div>
    ))}
  </div>

  {/* زر الأسئلة */}
  <div className="mt-8 text-center">
    <a
      href="https://wa.me/966566666666"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-primary text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition"
    >
      إجابات كل أسئلتك 
    </a>
  </div>
</div>

    </section>
  );
};

export default QuestionS;
