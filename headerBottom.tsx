import React from 'react'
import Image from 'next/image'

const HeaderBottom = () => {
  return (
    <>
    <header className='bg-gray-50 border-b border-gray-200'>
        <div className='container mx-auto flex items-center justify-between py-4 px-4 md:px-10'>
            {/*logosection*/}
            <div className='flex items-center'>
        
<Image  src= "/Logo Icon.png" alt="comforty logo" width={20}  height={20}/>
<span className=" ml-3 text-xl font-bold text-gray-800">Comforty</span>
          </div>

          {/*cartsection*/}
          <div className='flex items-center'>
            <button className='relative flex items-center space-x-2  bg-white text-gray-800 px-4 py-2 rounded-lg shadow hover:bg-slate-400'>
<Image src="/cart-icon.png" alt="cart-icon" width={20} height={20} />
<span className="font-medium">Cart</span>
{/*cart item count*/}
<span className='absolute-top-2 -right-2 bg-blue-600 text-white text-x5 w-5 h-5 flex-items-center justify-center'>4</span>
            </button>

          </div>
        </div>

    </header>
    </>
  );
}

export default HeaderBottom