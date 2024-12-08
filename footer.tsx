import React from 'react'
import Image from "next/image"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Input } from './ui/input';
import { Button } from './ui/button';


function Footer() {
  return (
    <>

       <footer className='w-full flex flex-col mt-[136px]'>

      <div className='w-full flex'>
        {/* div 1 */}
        <div className='flex flex-col gap-[24px]'>

          <div className='flex items-center gap-[8px]'>
           <Image src={"/logo.png"} alt="logo" width={40} height={40}/>
            <h2 className='text-[26px] leading-[31px] font-medium'>Comforty</h2>
         </div>

         <p className='text-[16px] leading-[24px] text-[#272343]'>
            Vivamus tristique odio sit amet velit semper,<br/> eu posuere turpis interdum. <br/>
            Cras egestas purus 
         </p>

          
          <div className='flex items-center gap-[32px]'>
            <div className='w-[38px] h-[38px] flex items-center justify-center border-[1px] border-black rounded-full'><FaFacebook size={16}color='#007580'/></div>
            <FaTwitter size={16} color='#636270'/>
            <FaInstagram size={16} color='#636270'/>
            <FaPinterest size={16} color='#636270'/>
            <FaYoutube size={16} color='#636270'/>            
          </div>

        </div>


        {/* div 2 */}
         <div className='ml-[97px]'>
          <h1 className='text-[14px] leading-[110%] tracking-[6%] text-[#9A9CAA] font-medium'>Category</h1>

          <div className='flex flex-col gap-[12px] text-[16px] leading-[17px] text-[#272343] mt-[20px]'>
            <p>Armchair</p>
            <p>Wing Chair</p>
            <p className='underline text-[#007580] '>Desk Chair</p>
            <p>wooden Chair</p>
            <p>Park Bench</p>
          </div>
         </div>



           {/* div 3 */}
        <div className='ml-[119px]'>
          <h1 className='text-[14px] leading-[110%] tracking-[6%] text-[#9A9CAA] font-medium'>Support</h1>

          <div className='flex flex-col gap-[12px] text-[16px] leading-[17px] text-[#272343] mt-[20px]'>
            <p>Help & Support</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Help</p>
          </div>
        </div>



        {/* div 4 */}
        <div className='ml-[68px]'>
          <h1 className='text-[14px] leading-[110%] tracking-[6%] text-[#9A9CAA] font-medium '>Newsletter</h1>

          <div className='flex gap-[12px] mt-[20px]'>
            <Input type="email" placeholder="Your email"  className='text-[16px] leading-[16px] text-[#9A9CAA] py-[15px] px-[20px]' />
            <Button className='text-[16px] leading-[110%] font-semibold py-[14px] px-[24px] bg-[#029FAE]'>Subscribe</Button>
          </div>

          <p className='text-[15px] leading-[22px] text-[#272343] mt-[15px]'>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Nullam tincidunt erat enim.
          </p>
        </div>
    
      </div>


       <div className='flex items-center justify-between py-[24px] border-t-[1px] mt-[60px]'>
        <div className='text-[14px] leading-[21px] text-[#9A9CAA]'>@ 2021 - Blogy - Designed & Develop by <span>SUMAIRA</span></div>

        <div className='text-[#000000c2]'>
          <Image src={"/end.png"} alt="paypal" width={227} height={27}/>
        </div>
       </div>


       </footer>

    </>
  );
}

export default Footer