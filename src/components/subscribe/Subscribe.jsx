import React from "react";
import tg from "../../assets/tg.png";
const Subscribe = () => {
  return (
    <section className="bg-[#F8F8F8]">
      <div className="container">
        <div className="flex justify-between items-center bg-white py-14 px-12 rounded-2xl">
          <div className="flex items-center gap-6">
            <div className="p-5 bg-[#A5C926]">
              <img src={tg} alt="" />
            </div>
            <p className="max-w-[48%] text-[#111111] text-[23px]">
              Subscribe to our newsletter & get{" "}
              <spa className="text-[#A5C926]">10% discount!</spa>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="text"
              className="py-4 px-28  bg-[#F8F8F8] border border-[#E5E5E5] rounded-full"
            />
            <button className="py-4 px-11 bg-[#A5C926] rounded-full text-white cursor-pointer">Send</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
