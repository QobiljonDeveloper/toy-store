import React from "react";
import boys from "../../assets/boys.png";
const Free = () => {
  return (
    <section className="bg-[#F8F8F8] py-48">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <p className="text-[#A5C926] text-[13px]">Made for Webflow</p>
          <h2 className="text-[31px] text-[#111111] text-center mt-5">
            Simple & Colorful Ecommerce <br /> Template for Your Business
          </h2>

          <div className="flex justify-between items-center mt-20">
            <div className="w-[50%]">
              <h2 className="relative  text-[31px] text-[#111111] before:content-[''] before:absolute before:border before:top-16 before:w-[15%] before:border-[#A5C926] mb-14">
                Available for FREE!
              </h2>
              <p className="text-[#999999] text-[14px] max-w-[70%] leading-6 mb-7">
                A successful marketing plan relies heavily on the pulling-power
                of advertising copy. Writing result-oriented ad copy is
                difficult, as it must appeal to, entice, and convince consumers
                to take action. There is no magic formula to write perfect ad
                copy
              </p>
              <button className="py-3 px-7 bg-[#A5C926] text-white rounded-full cursor-pointer">
                GET IT NOW!
              </button>
            </div>
            <div className="">
              <img src={boys} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Free;
