// import React from "react";
// import Logo from "../../assets/logo.png";
// import { IoMdSearch } from "react-icons/io";
// import { FaCartShopping } from "react-icons/fa6";
// import { FaCaretDown } from "react-icons/fa";
// import DarkMode from "./DarkMode";

// const Menu = [
//   {
//     id: 1,
//     name: "الرائسية",
//     link: "/#",
//   },
//   {
//     id: 2,
//     name: "خدماتنا",
//     link: "/#services",
//   },
//   {
//     id: 3,
//     name: "عننا",
//     link: "/#about",
//   },
//   {
//     id: 3,
//     name: "اتصل بنا",
//     link: "/#contact",
//   },
//   {
//     id: 3,
//     name: "مميزاتنا",
//     link: "/#features",
//   },
//   {
//     id: 4,
//     name: "المعرض",
//     link: "/#gallery",
//   },
// ];

// const DropdownLinks = [
  
   
// ];

// const Navbar = ({ handleOrderPopup }) => {
//   return (
//     <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white py-5  duration-200 relative z-40"dir="rtl">
//       {/* upper Navbar */}
//       <div className="bg-primary/40 py-2">
//         <div className="container flex justify-between items-center">
//           <div>
//             <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
//               <img src={Logo} alt="Logo" className="w-10" />
//               اثاث جدة
//             </a>
//           </div>

//           {/* search bar */}
//           <div className="flex justify-between items-center gap-4">
          

//             {/* order button */}
         

//             {/* Darkmode Switch */}
//             <div>
//               <DarkMode />
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* lower Navbar */}
//       <div data-aos="zoom-in" className="flex justify-center">
//         <ul className="sm:flex hidden items-center gap-4 pt-5">
//           {Menu.map((data) => (
//             <li key={data.id}>
//               <a
//                 href={data.link}
//                 className="inline-block px-4 hover:text-primary duration-200"
//               >
//                 {data.name}
//               </a>
//             </li>
//           ))}
//           {/* Simple Dropdown and Links */}

//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.png"; // Update with correct path
import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
import DarkMode from "./DarkMode"; // Assuming DarkMode component exists

const Menu = [
  {
    id: 1,
    name: "الرئيسية",
    link: "/#",
  },
  {
    id: 2,
    name: "خدماتنا",
    link: "/#services",
  },
  {
    id: 3,
    name: "عننا",
    link: "/#about",
  },
  {
    id: 4, // Corrected ID
    name: "اتصل بنا",
    link: "/#contact",
  },
  {
    id: 5, // Corrected ID
    name: "مميزاتنا",
    link: "/#features",
  },
  {
    id: 6, // Corrected ID
    name: "المعرض",
    link: "/#gallery",
  },
];


const DropdownLinks = [
  // { id: 1, name: "أثاث غرف النوم", link: "/#bedroom-furniture" },
  // { id: 2, name: "أثاث غرف المعيشة", link: "/#livingroom-furniture" },
];

const Navbar = ({ handleOrderPopup }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu on link click (optional, good UX)
  const handleLinkClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  // Close mobile menu on window resize (optional)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);


  return (
    <nav 
      data-aos="fade-down" // Optional AOS animation
      className="shadow-lg bg-white dark:bg-gray-900 dark:text-white duration-300 fixed top-0 left-0 right-0 z-50" 
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand Name */}
          <div>
            <a href="/#" className="font-bold text-2xl sm:text-3xl flex items-center gap-2 group">
              <img src={Logo} alt="Logo" className="w-8 sm:w-10 transition-transform duration-300 group-hover:rotate-[360deg]" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">أثاث جدة</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center m-auto gap-4">
            <ul className="flex items-center gap-4">
              {Menu.map((data) => (
                <li key={data.id}>
                  <a
                    href={data.link}
                    onClick={handleLinkClick} // Close mobile menu if open (though hidden here)
                    className="inline-block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-secondary duration-200 font-medium relative group"
                  >
                    {data.name}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary dark:bg-secondary group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
                    <span className="absolute bottom-0 right-1/2 w-0 h-0.5 bg-primary dark:bg-secondary group-hover:w-1/2 group-hover:right-1/4 transition-all duration-300"></span>
                  </a>
                </li>
              ))}
              {/* Optional Dropdown */} 
              {DropdownLinks.length > 0 && (
                 <li className="group relative cursor-pointer">
                  <a href="/#" className="flex items-center gap-1 px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-secondary duration-200 font-medium">
                    أقسام أخرى
                    <span><FaCaretDown className="transition-transform duration-300 group-hover:rotate-180" /></span>
                  </a>
                  <div className="absolute z-[9999] hidden group-hover:block w-[180px] rounded-md bg-white dark:bg-gray-800 p-2 text-black dark:text-white shadow-lg border dark:border-gray-700">
                    <ul>
                      {DropdownLinks.map((data) => (
                        <li key={data.id}>
                          <a 
                            href={data.link} 
                            onClick={handleLinkClick}
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20 dark:hover:bg-secondary/20"
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              )}
            </ul>
            <div className="ml-4">
              <DarkMode />
            </div>
          </div>

          {/* Mobile Menu Button and DarkMode */}
          <div className="md:hidden flex items-center gap-4">
             <div>
              <DarkMode />
            </div>
            <button onClick={toggleMobileMenu} className="text-gray-700 dark:text-gray-200 text-2xl">
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-screen opacity-100 py-4 visible" : "max-h-0 opacity-0 py-0 invisible"} overflow-hidden`}
      >
        <ul className="flex flex-col items-center gap-4 px-4">
          {Menu.map((data) => (
            <li key={data.id} className="w-full text-center">
              <a
                href={data.link}
                onClick={handleLinkClick} // Close menu on click
                className="inline-block w-full py-2 px-4 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-secondary hover:bg-primary/10 dark:hover:bg-secondary/10 rounded-md duration-200 font-medium"
              >
                {data.name}
              </a>
            </li>
          ))}
           {/* Optional Dropdown Links for Mobile */} 
           {DropdownLinks.length > 0 && (
             <li className="w-full text-center pt-2 border-t border-gray-200 dark:border-gray-700">
                <span className="font-semibold text-gray-500 dark:text-gray-400 mb-2 block">أقسام أخرى</span>
                 <ul>
                  {DropdownLinks.map((data) => (
                    <li key={data.id} className="w-full">
                      <a 
                        href={data.link} 
                        onClick={handleLinkClick}
                        className="inline-block w-full py-2 px-4 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-secondary hover:bg-primary/10 dark:hover:bg-secondary/10 rounded-md duration-200"
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
             </li>
           )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


