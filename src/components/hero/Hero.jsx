import React from "react";
import hero from "../../assets/hero.png";
const Hero = () => {
  return (
    <section
      className="w-full min-h-[640px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="container">
        <div className="flex items-center justify-center">
          <div className="text-center bg-white py-14 px-[77px] rounded-2xl">
            <p className="text-[#A5C926] text-[13px]">Say Hello to ToyStore!</p>
            <h2 className="mt-4 my-5 text-[39px] ">
              Free Ecommerce <br />
              Template for Webflow
            </h2>
            <button className="bg-[#A5C926] py-3 px-7 rounded-full text-white cursor-pointer">Open Catalog</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
