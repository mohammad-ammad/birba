"use client";

import Image from "next/image";
import { useState } from "react";

const bannerStyles = {
  backgroundImage: "url('/assets/r2.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white",
  textAlign: "center",
  padding: "50px 10px",
  width: "100%",
};
const first = {
  backgroundImage: "url('/assets/nine.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  cursor: "pointer",
};
const second = {
  backgroundImage: "url('/assets/second.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  cursor: "pointer",
};
const third = {
  backgroundImage: "url('/assets/third.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  cursor: "pointer",
};
const four = {
  backgroundImage: "url('/assets/four.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  cursor: "pointer",
};
const five = {
  backgroundImage: "url('/assets/five.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  cursor: "pointer",
};
const six = {
  backgroundImage: "url('/assets/six.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  cursor: "pointer",
};
const seven = {
  backgroundImage: "url('/assets/seven.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  cursor: "pointer",
};
const eight = {
  backgroundImage: "url('/assets/eight.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  cursor: "pointer",
};
const nine = {
  backgroundImage: "url('/assets/nine.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  cursor: "pointer",
};
const ten = {
  backgroundImage: "url('/assets/ten.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  cursor: "pointer",
};
const eleven = {
  backgroundImage: "url('/assets/eleven.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  cursor: "pointer",
};
const twelve = {
  backgroundImage: "url('/assets/twelve.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  cursor: "pointer",
};
// const plus ={width:"45px", height:"45px",  backgroundImage:"url('/assets/first.png')", backgroundSize:"cover",backgroundPosition:"center" };
export default function Gallery() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="pt-20 w-[100%] bg-[#f8f8f8]">
        <div style={bannerStyles}>
          <div className="text-3xl font-bold">Gallery</div>
        </div>

        <div className="w-[383px] h-[77px]  mx-auto  mt-9   md:w-[1026px] md:h-[68px] md:border-[0 0 1px 0] md:flex md:mx-auto  md:mt-10 md:bg-[#f8f8f8]">
          <ul className="w-[363px] h-[70px] flex flex-wrap  justify-around p-[10px]  gap-0    md:w-[968px] md:h-[48px]  md:flex md:flex-row md:justify-center md:mx-auto ">
            <li className=" w-[66px] h-[27px] md:w-[66px] md:h-[36px]     md:cursor-pointer md:no-underline md:hover:underline md:underline-offset-8 text-[10px] font-bold">
              All
            </li>
            <li className=" w-[97px] h-[27px] md:w-[143px] md:h-[36px]    md:cursor-pointer md:no-underline md:hover:underline md:underline-offset-8 text-[10px] font-bold">
              Caegory One
            </li>
            <li className=" w-[90px] h-[27px] md:w-[142px] md:h-[36px]    md:cursor-pointer md:no-underline md:hover:underline md:underline-offset-8 text-[10px] font-bold">
              Caegory Two
            </li>
            <li className=" w-[90px] h-[27px] md:w-[142px] md:h-[36px]    md:cursor-pointer md:no-underline md:hover:underline md:underline-offset-8 text-[10px] font-bold">
              Caegory Three
            </li>
            <li className=" w-[90px] h-[27px] md:w-[142px] md:h-[36px]    md:cursor-pointer md:no-underline md:hover:underline md:underline-offset-8 text-[10px] font-bold">
              Caegory Four
            </li>
            <li className=" w-[96px] h-[27px] md:w-[142px] md:h-[36px]    md:cursor-pointer md:no-underline md:hover:underline md:underline-offset-8 text-[10px] font-bold">
              Caegory Five
            </li>
            <li className=" w-[96px] h-[27px] md:w-[142px] md:h-[36px]    md:cursor-pointer md:no-underline md:hover:underline md:underline-offset-8 text-[10px] font-bold">
              Caegory Six
            </li>
          </ul>
        </div>

        <div
          className="w-[383px] h-[540px] flex flex-wrap mx-auto  
    md:w-[1026px] md:h-[622px] md:border   md:mx-auto md:flex md:flex-wrap md:relative"
    onClick={() => setOpen(true)}
        >
          <div
            style={first}
            
            className="md:w-[292px] md:h-[185px] md:ml-[10px]"
          ></div>
          <div
            style={second}
            className="w-[159px] h-[114px]    md:w-[214px] md:h-[285px] md:-ml-2"
          ></div>
          <div
            style={third}
            className="w-[195px] h-[269px]     md:w-[316px] md:h-[285px] md:-ml-[8px] "
          ></div>
          <div
            style={four}
            className="  w-[159px] h-[154px] -mt-[158px]   md:w-[200px] md:h-[185px] md:-ml-[7px] md:mt-0"
          ></div>
          <div
            style={five}
            className="w-[196px] h-[140px] -mt-[14px]   md:w-[292px] md:h-[266px] md:-mt-32 md:ml-[10px]"
          ></div>
          <div
            style={six}
            className=" w-[159px] h-[144px] -mt-[139px]  md:w-[295px] md:h-[144px] md:-ml-[8px] md:-mt-[29px]"
          ></div>
          <div
            style={seven}
            className=" w-[356px] h-[128px] -mt-[5px]    md:w-[235px] md:h-[188px] md:-ml-[8px] md:-mt-[29px]"
          ></div>
          <div
            style={eight}
            className="   md:w-[202px] md:h-[266px] md:-ml-[8px] md:-mt-[127px]  "
          ></div>
          <div
            style={nine}
            className="    md:w-[288px] md:h-[171px] md:-mt-[59px] md:ml-[10px]"
          ></div>
          <div
            style={ten}
            className="     md:w-[295px] md:h-[177px] md:-mt-[66px] "
          ></div>
          <div
            style={eleven}
            className="  md:w-[235px] md:h-[149px] md:-ml-3 md:-mt-[38px]"
          ></div>
          <div
            style={twelve}
            className="  md:w-[204px] md:h-[173px] md:-ml-[9px] md:-mt-[62px]"
          ></div>
          {/* <div  style={plus} className="  md:absolute md:top-0 md:left-0 md:ml-32 md:text-[#FFFFFF]  md:mt-14 "></div> */}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => setOpen(false)}
          ></div>
          <div className="z-50 rounded-lg relative">
            <Image
              src="/assets/five.png"
              width={500}
              height={500}
              className="object-contain"
            />
            <div className="absolute top-3 right-5 flex justify-end items-center gap-1">
              <button className="bg-white px-2 py-1 font-bold text-sm rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                  />
                </svg>
              </button>
              <button className="bg-white px-2 py-1 font-bold text-sm rounded-md inline-flex justify-start items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                Download
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
