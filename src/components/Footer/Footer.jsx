
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1e293b] text-white pt-12 pb-6" dir="rtl">
      <div className="container mx-auto px-4 grid md:grid-cols-4 sm:grid-cols-2 gap-8">

        {/* Logo and About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl font-bold"> اثاث جدة</h2>
          </div>
          <p className="text-sm text-gray-300 leading-7">
            نُقدم أفضل حلول بيع الأثاث في جدة بأسعار تنافسية وجودة عالية. تشكيلات متنوعة من الأثاث المنزلي والمكتبي تناسب كل الأذواق.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">روابط مهمة</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#about" className="hover:text-white">عن الشركة</a></li>
            <li><a href="#products" className="hover:text-white">منتجاتنا</a></li>
            <li><a href="#gallery" className="hover:text-white">معرض الصور</a></li>
            <li><a href="#contact" className="hover:text-white">اتصل بنا</a></li>
          </ul>
        </div>

        {/* Furniture Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">خدمات الأثاث</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>بيع أثاث جديد بأسعار مناسبة</li>
            <li>عروض موسمية على غرف النوم والمعيشة</li>
            <li>توصيل داخل جدة خلال 24 ساعة</li>
            <li>تصميمات مودرن وكلاسيك حسب الطلب</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">تواصل معنا</h3>
          <ul className="space-y-2 text-sm text-gray-300 mb-4">
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> <span>+966 55 123 4567</span>
            </li>
            <li className="flex items-center gap-2">
              <FaWhatsapp />{" "}
              <a
                href="https://wa.me/966551234567"
                className="hover:text-white"
              >
                تواصل عبر واتساب
              </a>
            </li>
          </ul>
          <div className="flex gap-4 text-xl text-gray-300">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="https://wa.me/966551234567" className="hover:text-white"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-[#334155] p-6 rounded-2xl shadow-md text-gray-100 text-sm">
  <h3 className="text-xl font-bold mb-3">لماذا نحن الأفضل في بيع الأثاث بجدة؟</h3>
  <p className="leading-7">
    في <strong>نظرة الإبداع</strong> نقدم لك تجربة فريدة في شراء الأثاث داخل جدة، حيث تجد تشكيلة واسعة من
    التصاميم العصرية والكلاسيكية بأسعار تناسب الجميع. جميع القطع مصممة بعناية
    لتوفير الراحة والجمال لمنزلك. نوفر أيضاً خدمات التوصيل والتركيب في نفس اليوم.
  </p>
</div>

{/* Feature Cards in Footer */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-white">
  {[
    {
      title: "أثاث عالي الجودة",
      desc: "نستخدم أفضل المواد في التصنيع لضمان المتانة والرفاهية.",
    },
    {
      title: "أسعار تنافسية",
      desc: "نوفر لك أفضل الأسعار مع العروض الموسمية.",
    },
    {
      title: "توصيل سريع",
      desc: "خدمة توصيل فورية داخل جدة وخارجها.",
    },
    {
      title: "تصاميم عصرية",
      desc: "مجموعة متنوعة تناسب جميع الأذواق والمساحات.",
    },
  ].map((card, i) => (
    <div
      key={i}
      className="bg-gray-800 p-5 rounded-xl text-center shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg border border-gray-700"
    >
      <h4 className="text-lg font-bold mb-2">{card.title}</h4>
      <p className="text-sm text-gray-300">{card.desc}</p>
    </div>
  ))}
</div>


      {/* Bottom Copyright */}
      <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-600 pt-4">
        © {new Date().getFullYear()} - بيع أثاث راقٍ في جدة. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
};

export default Footer;


