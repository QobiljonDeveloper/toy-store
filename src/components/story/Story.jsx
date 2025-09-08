import React from "react";
import story from "../../assets/story.png";
import player from "../../assets/player.png";
const Story = () => {
  return (
    <section
      className="w-full min-h-[456px] bg-cover bg-center flex items-center justify-center "
      style={{ backgroundImage: `url(${story})` }}
    >
      <div className="container">
        <div className="flex items-center justify-center   ">
          <div className="text-center bg-gradient-to-b from-[rgba(132,65,18,0.75)] from-[95%] to-[rgba(132,65,18,0.75)] to-[100%] py-14 px-10 rounded-2xl shadow-lg">
            <p className="text-white text-sm">About The Shop</p>
            <h3 className="text-4xl text-white mt-4">Watch Our Story</h3>
            <p className="mt-4 mb-5 text-sm max-w-[90%] mx-auto text-white">
              There is no magic formula to write perfect ad copy. It is based on
              a number of factors, including ad placement, demographic, even the
              consumer’s mood.
            </p>
            <button className="bg-[#A5C926] py-6 px-7  text-white cursor-pointer hover:bg-[#8BBE20] transition">
              <img src={player} alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
