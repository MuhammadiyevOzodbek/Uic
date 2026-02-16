import React from 'react'
import Button from './Button'
import img1 from '../../../public/layoutImg/svgexport-12.svg';
import img2 from '../../../public/layoutImg/svgexport-13.svg';


function Footer() {
  return (
    <div className=" w-[1200px] m-auto">
      <div className=' flex justify-between items-center'>
        <ul className="flex items-center gap-5 text-gray-400 text-[16px] font-bold mt-[50px]">
          <li className=" cursor-pointer">ABOUT US</li>
          <li className=" cursor-pointer">SERVICES</li>
          <li className=" cursor-pointer">PORTFOLIO</li>
          <li className=" cursor-pointer">CAREER</li>
          <li className=" cursor-pointer">BLOG</li>
        </ul>
        <div className=' mt-[60px] flex justify-center items-center w-[50px] h-[50px] cursor-pointer rounded-full border border-[#69696b] hover:border-[#248975]'>
          <svg xmlns="http://www.w3.org/2000/svg" className=' w-8' viewBox="0 0 640 640"><path fill="rgba(105, 105, 107, 1.00)" d="M342.6 73.4C330.1 60.9 309.8 60.9 297.3 73.4L137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7C149.8 291.2 170.1 291.2 182.6 278.7L288 173.3L288 544C288 561.7 302.3 576 320 576C337.7 576 352 561.7 352 544L352 173.3L457.4 278.7C469.9 291.2 490.2 291.2 502.7 278.7C515.2 266.2 515.2 245.9 502.7 233.4L342.7 73.4z" /></svg>        </div>
      </div>
      <br />
      <div>
        <Button />
      </div>
      <div className=' mt-[20px] w-full h-[1px] bg-[#323233]'></div>
      <div className=' p-5 flex justify-between items-center text-20 text-gray-400'>
        <h1>© UIC GROUP 2026</h1>
        <div className=" gap-3 flex items-center relative group overflow-hidden w-[160px]">

          {/* 1-rasm */}
          <img
            className="cursor-pointer w-[60px] block"
            src={img1}
            alt=""
          />

          {/* 2-rasm */}
          <img
            className="
      absolute top-0 right-0
      translate-x-full
      group-hover:translate-x-0
      transition-transform duration-500 ease-in-out
      cursor-pointer 
    "
            src={img2}
            alt=""
          />

        </div>
        <a href="https://yandex.com/maps/10335/tashkent/?ll=69.276431%2C41.294968&orgpage%5Bid%5D=7858f85d-d2af-416c-a94b-45c8425899d0&utm_source=share&z=17"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="group cursor-pointer w-full max-w-[600px] flex justify-between items-center border border-[#4b4b4d] hover:border-[#248975] rounded-xl pl-4 pr-1 py-1 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className=' w-7' viewBox="0 0 640 640"><path fill="rgba(165, 165, 166, 1.00)" d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z" /></svg>
            <h1 className=' text-gray-400'>Tashkent. Shayxontoxur d. Adkham Rakhmat street - 15/1</h1>
            <button className="ml-3 px-4 py-2 bg-[#4b4b4d] group-hover:bg-[#248975]   text-white rounded-xl transition duration-200">
              Map
            </button>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Footer
