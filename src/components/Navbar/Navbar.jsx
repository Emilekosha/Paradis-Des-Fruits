import React from 'react';


import { FaLeaf } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },

  {
    id: 2,
    title: "Products",
    link: "#",
  },

  {
    id: 3,
    title: "About",
    link: "#",
  },

  {
    id: 4,
    title: "Shop",
    link: "#",
  },

  {
    id: 5,
    title: "Contacts",
    link: "#",
  },
];

const Navbar = () => {
  const [isOpen, setisOpen] = React.useState(false);

  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-4 md:pt-4">
          {/* section logo */}
          <div
            className="flex gap-2 text-3xl items-center font-bold
         "
          >
            <p className="text-primary">Paradis</p>
            <p className="text-indigo-900">DesFruits</p>
            <FaLeaf className="text-secondary" />
          </div>
          {/* section menus */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-8 text-gray-600 font-Poppins">
              {NavbarMenu.map((menu) => (
                <li key={menu.id} className="text-xl font-semibold">
                  <a
                    href={menu.link}
                    className="inline-block py-1  hover:text-primary hover:shadow-[0_3px_0_-1px_#ef233c]"
                  >
                    {menu.title}
                  </a>
                </li>
              ))}
              <button className="text-2xl hover:bg-primary p-0.5 rounded hover:text-white">
                <MdOutlineShoppingCart />
              </button>
            </ul>
          </div>

          {/* Mobile Hamburger Menu section */}
          <div className="md:hidden" onClick={() => setisOpen(!isOpen)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>

      <ResponsiveMenu open ={isOpen} />
    </>
  );
};

export default Navbar;
