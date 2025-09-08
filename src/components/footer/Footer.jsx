import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#A5C926] text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex  flex-row justify-between items-center  gap-6">
          <h2 className="text-xl font-semibold">ToyStore</h2>

          <ul className="flex gap-6 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Catalog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contacts
              </a>
            </li>
          </ul>

          <div className="flex gap-4 text-lg">
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaPinterestP />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </div>

        <hr className="border-white/30 my-6" />

        <div className="flex flex-col md:flex-row justify-between text-sm opacity-80 gap-4">
          <p>
            Created with love by
            <span className="font-medium">Elastic Themes</span>
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">
              Powered by Webflow
            </a>
            <span>•</span>
            <a href="#" className="hover:underline">
              Style Guide
            </a>
            <span>•</span>
            <a href="#" className="hover:underline">
              Licensing
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
