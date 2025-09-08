import React from "react";
import { FaArrowRight } from "react-icons/fa";
import {} from "../../static";

const Products = ({ data, title }) => {
  return (
    <section className="py-12 bg-[#F8F8F8] pb-[135px]">
      <div className="container ">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-[28px] font-normal text-[#111111]">{title}</h2>
          <p className="flex items-center gap-2 text-gray-700 hover:text-black transition cursor-pointer">
            See All Toys
            <span>
              <FaArrowRight />
            </span>
          </p>
        </div>

        <hr className="border-gray-200 mb-8" />

        <div className="grid grid-cols-4 gap-6 ">
          {data?.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm py-9 flex flex-col items-center"
            >
              <img src={item.img} alt="" className="h-40 object-contain mb-4" />
              <h3 className="text-lg font-medium mb-2">{item.title}</h3>
              <button className="bg-[#A5C926] text-white px-4 py-1 rounded-full text-sm font-medium cursor-pointer">
                {item.price}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
