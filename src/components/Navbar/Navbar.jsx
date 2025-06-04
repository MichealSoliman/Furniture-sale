import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "الرائسية",
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
    id: 3,
    name: "اتصل بنا",
    link: "/#contact",
  },
  {
    id: 3,
    name: "مميزاتنا",
    link: "/#features",
  },
  {
    id: 4,
    name: "المعرض",
    link: "/#gallery",
  },
];

const DropdownLinks = [
  
   
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white py-5  duration-200 relative z-40"dir="rtl">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              اثاث جدة
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
          

            {/* order button */}
         

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4 pt-5">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}

        </ul>
      </div>
    </div>
  );
};

export default Navbar;
