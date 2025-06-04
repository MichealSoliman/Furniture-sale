import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // لما المستخدم ينزل، أظهر الزر
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // عند الضغط على الزر
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-4 z-50 bg-primary hover:bg-primary-dark text-white p-3 rounded-full shadow-lg transition"
        aria-label="الرجوع لأعلى"
      >
        <FaArrowUp className="text-xl" />
      </button>
    )
  );
};

export default ScrollToTopButton;
