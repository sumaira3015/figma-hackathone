

import Link from "next/link"

function HeaderLast(){
    return(
        <>
  <div className='flex items-center justify-between py-[29.5px]'>
          <ul className='flex gap-[32px]'>
            <Link href={"/"}><li className='text-[14px] leading-[15px] font-medium hover:text-[#007580] '>Home</li></Link>
            <Link href={"/shopy"}><li className='text-[14px] leading-[15px] font-medium hover:text-[#007580] '>Shop</li></Link>
            <Link href={"/products"}><li className='text-[14px] leading-[15px] font-medium hover:text-[#007580] '>Product</li></Link>
            <Link href={"/pagesRoute"}><li className='text-[14px] leading-[15px] font-medium hover:text-[#007580] '>Pages</li></Link>
            <Link href={"/about-us"}><li className='text-[14px] leading-[15px] font-medium hover:text-[#007580] '>About</li></Link>
          </ul>

          <div className='flex gap-[8px] items-center'>
            <p className='text-[14px] leading-[15px] text-[#636270]'>Contact:</p>
            <p className='text-[14px] leading-[15px] font-medium'>(808) 555-0111</p>
          </div>
        </div>

    
        </>
    )
}
export default HeaderLast