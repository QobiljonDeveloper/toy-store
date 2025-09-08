import React from "react";
import tedy from "../../assets/tedy.png";
import wood from "../../assets/wood.png";
const Category = () => {
  return (
    <section className="py-40 bg-[#F8F8F8]">
      <div className="container">
        <div className="flex items-center justify-between gap-8">
          <div className="bg-[#FFC12C] gap-10 flex items-center justify-start w-[50%] rounded-2xl">
            <div className="flex">
              <img src={tedy} alt="" className="-translate-y-12" />
            </div>
            <div className="py-11">
              <p className="text-[28px] text-white mb-4">Stuffed Animals</p>
              <button className="py-2 px-5 rounded-full bg-white cursor-pointer">
                Shop Now
              </button>
            </div>
          </div>
          <div className="bg-[#FB416B]  gap-10 flex items-center justify-end w-[50%] rounded-2xl">
            <div className="py-11 flex flex-col items-end ">
              <p className="text-[28px] text-white mb-4">Wooden Toys</p>
              <button className="py-2 px-5 rounded-full bg-white cursor-pointer">
                Shop Now
              </button>
            </div>
            <div className="flex">
              <img src={wood} alt="" className="-translate-y-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
