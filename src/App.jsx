import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/ContactUs";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import About from "./components/About";
import Features from "./components/Features";
import ContactUs from "./components/Subscribe/ContactUs";
import Gallery from "./components/Gallery";
import FloatingButtons from "./components/FloatingButtons";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Services from "./components/Services";
import { Fa0 } from "react-icons/fa6";
import QuestionS from "./components/Questions";
import Selling from "./components/Selling";
import CityMap from "./components/CityMap";
import OurWorks from "./components/OurWorks";
import LuxuryFurniture from "./components/LuxuryFurniture";


const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <About/>
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
     
      <ContactUs/>
     <LuxuryFurniture />
      <Products />
      <Features />
      <Services />
      <Selling />
      <OurWorks />
      <Testimonials /> 
      <Gallery />
      <QuestionS />
      <CityMap />
      <FloatingButtons />
      <ScrollToTopButton />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;
