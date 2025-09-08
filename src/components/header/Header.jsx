import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="py-5">
      <div className="container">
        <div className="flex justify-between items-center ">
          <div className="">
            <h1 className="text-[25px] font-normal"> ToyStore</h1>
          </div>
          <ul className="flex gap-5 flex-1 ml-14">
            <li className="cursor-pointer hover:underline">
              <a href="#">Catalog</a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="#">Delivery</a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="#">About</a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="#">Contacts</a>
            </li>
          </ul>
          <div className="flex items-center gap-2.5">
            <button className="cursor-pointer">Cart</button>
            <FaShoppingCart className="cursor-pointer" />
            <div className="rounded-full size-6 bg-[#A5C926] cursor-pointer text-center text-white">
              <p>0</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
