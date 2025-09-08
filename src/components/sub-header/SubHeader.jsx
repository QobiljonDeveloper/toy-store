import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const SubHeader = () => {
  return (
    <div className="bg-[#A5C926] py-2">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 text-white">
            <p className="cursor-pointer  hover:underline">
              Call Us: +1 213 974-5898
            </p>
            <p className="cursor-pointer hover:underline">
              Email: toystore@template.com
            </p>
          </div>
          <div className="flex gap-2.5">
            <FaTwitter size={20} className="text-white"/>
            <FaFacebookSquare size={20} className="text-white"/>
            <FaInstagram size={20} className="text-white"/>
            <FaPinterest size={20} className="text-white"/>
            <IoLogoYoutube size={20} className="text-white"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
