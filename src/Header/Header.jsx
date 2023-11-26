import React from "react";
import Image from "../../public/Icons/Icon.png";

export default function Header() {
  return (
    <>
      <div className="flex-col">
        <div className="flex  justify-between items-center ">
          <h1 className="c-red fs-30px text-[30px] font-bold heading">
            Magnabox Private limited
          </h1>
          <img src={Image} alt="icon" className="icon" />
        </div>
        <div className="flex font-bold justify-between mt-8 text-[24px] heading">
          <h2>Add new lead form</h2>
          <button
            className="hover:bg-gray-100 text-red-500 font-bold px-4 rounded-lg 
border border-gray-500"
          >
            Cancle
          </button>
        </div>
      </div>
    </>
  );
}
