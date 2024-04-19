import React from 'react';
import logo from "../../assets/logo.png";

export default function TopBar() {
  return (
    <div className="bg-[#0D1117] relative text-white flex flex-row  justify-between items-center h-24 max-w[1240px] mx-auto px-4">
        <div className="flex flex-row">
            <img src={logo} alt="/" className="w-10 h-10" />
            <h1 className="w-full text-lg font-bold mt-2 text-[#00df9a]">Mockify.io</h1>
        </div>
        <button className="hover:bg-[#0b1514]  w-[100px] bg-[#00df9a] row-end text-white py-1 px-1 rounded-lg">Signup</button>
    </div>
  );
}
