import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 left-4 flex flex-col gap-4 z-50">
      {/* زر الاتصال */}
      <a
        href="tel:+966123456789"
        className="flex items-center gap-2 bg-blue-600  hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg transition"
      >
        <FaPhoneAlt className="text-lg" />
        اتصال
      </a>

      {/* زر واتساب */}
      <a
        href="https://wa.me/966123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg transition"
      >
        <FaWhatsapp className="text-lg" />
        واتساب
      </a>
    </div>
  );
};

export default FloatingButtons;
