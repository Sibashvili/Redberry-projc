import React from "react";
import Redb from "../assets/LOGO-02 3.jpg";
import Redber from "../assets/LOGO-02 3.png";
export default function Header() {
  return (
    <div className=" flex justify-between ml-[76px] mr-[76px] mt-7 bg-white">
      <img src={Redber} alt="" />
      <button className=" bg-[#5D37F3] text-white p-3 text-[14px] rounded-lg">
        შესვლა
      </button>
    </div>
  );
}
