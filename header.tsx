import React from 'react'
import { FaCheck } from 'react-icons/fa'

//const Header = () => {
//  return (
  //  <>
    //{/*<div className='"flex flex-row justify-between items-center p-[14px_300px] gap-[798px] w-[1920px] h-[45px] bg-[#272343] flex-none order-0 flex-grow-0">'>
       // <p className='"w-[231px] h-[14px] text-white text-[13px] leading-[110%] capitalize font-inter flex-none order-1 flex-grow-0">'>Free shipping on all orders over $50<

 function Header() {
  return (
    <div className="bg-[#272343] text-white text-sm py-2">
      <div className="container mx-auto flex justify-between items-center px-1">
        {/* Left Section */}
        <div className="flex items-center space-x-2">
          <FaCheck />
          <span className="font-semibold">Summer Sale:</span> Free Delivery on Orders Over $50!
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <select className="bg-black text-white border-none outline-none">
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
          </select>

          {/* Buttons */}
          <button className="hover:underline p-2 rounded transition duration-200">FAQs</button>
          <button className="hover:underline p-2 rounded transition duration-200">Help</button>
        </div>
      </div>
    </div>


  );
}



export default Header