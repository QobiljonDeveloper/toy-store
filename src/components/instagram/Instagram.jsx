import React from "react";
import photo from "../../assets/photo.png";
import { Photo } from "../../static";
const Instagram = () => {
  return (
    <section className="bg-[#F8F8F8] py-28">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <p className="text-[#A5C926] text-[13px] mb-4">@ElasticThemes</p>
          <h2 className="text-[#111111] text-[31px]">We're on Instagram!</h2>
          <div className="grid grid-cols-6 gap-3.5 mt-20">
            {Photo?.map((item) => (
              <img src={item.img} alt="" key={item.id} />
            ))}
          </div>
          <button className="py-4 px-10 bg-[#A5C926] mt-20 text-white rounded-full  cursor-pointer">See More Photos</button>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
