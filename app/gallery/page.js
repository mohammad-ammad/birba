
const bannerStyles = {
    backgroundImage: "url('/assets/r2.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    textAlign: "center",
    padding: "50px 10px",
    width: "100%",
};
const first ={backgroundImage: "url('/assets/Firstbg.png')", backgroundSize: "cover",backgroundPosition: "center",}
const second ={backgroundImage: "url('/assets/second.png')", backgroundSize: "cover",backgroundPosition: "center",}
const third={backgroundImage: "url('/assets/third.png')", backgroundSize: "cover",backgroundPosition: "center",}
const four ={backgroundImage: "url('/assets/four.png')", backgroundSize: "cover",backgroundPosition: "center",}
const five ={backgroundImage: "url('/assets/five.png')", backgroundSize: "cover",backgroundPosition: "center",}
const six ={backgroundImage: "url('/assets/six.png')", backgroundSize: "cover",backgroundPosition: "center",}
const seven ={backgroundImage: "url('/assets/seven.png')", backgroundSize: "cover",backgroundPosition: "center",}
const eight ={backgroundImage: "url('/assets/eight.png')", backgroundSize: "cover",backgroundPosition: "center",}
const nine ={backgroundImage: "url('/assets/nine.png')", backgroundSize: "cover",backgroundPosition: "center",}
const ten ={backgroundImage: "url('/assets/ten.png')", backgroundSize: "cover",backgroundPosition: "center",}
const eleven ={backgroundImage: "url('/assets/eleven.png')", backgroundSize: "cover",backgroundPosition: "center",}
const twelve ={backgroundImage: "url('/assets/twelve.png')", backgroundSize: "cover",backgroundPosition: "center",}
const plus ={width:"45px", height:"45px",  backgroundImage:"url('/assets/first.png')", backgroundSize:"cover",backgroundPosition:"center" };
export default function Gallery() {
  return (
    <div className="pt-20 w-[100%]">
      <div style={bannerStyles}>
        <div className="text-3xl font-bold">Gallery</div>
      </div>




      <div className="w-[383px] h-[77px]  mx-auto  mt-9   md:w-[1026px] md:h-[68px] md:border-[0 0 1px 0] md:flex md:mx-auto  md:mt-10 md:bg-[#FFFFFF]">
             <ul className="w-[363px] h-[70px] flex flex-wrap  justify-around p-[10px]  gap-0    md:w-[968px] md:h-[48px]  md:flex md:flex-row md:justify-center md:mx-auto ">
              <li className=" w-[66px] h-[27px] md:w-[66px] md:h-[36px]     md:cursor-pointer md:no-underline md:hover:underline md:underline-offset-8 text-[10px] font-bold">All</li>
              <li className=" w-[97px] h-[27px] md:w-[143px] md:h-[36px]    md:cursor-pointer md:no-underline md:hover:underline md:underline-offset-8 text-[10px] font-bold">Caegory One</li>
              <li className=" w-[90px] h-[27px] md:w-[142px] md:h-[36px]    md:cursor-pointer md:no-underline md:hover:underline md:underline-offset-8 text-[10px] font-bold">Caegory Two</li>
              <li className=" w-[90px] h-[27px] md:w-[142px] md:h-[36px]    md:cursor-pointer md:no-underline md:hover:underline md:underline-offset-8 text-[10px] font-bold">Caegory Three</li>
              <li className=" w-[90px] h-[27px] md:w-[142px] md:h-[36px]    md:cursor-pointer md:no-underline md:hover:underline md:underline-offset-8 text-[10px] font-bold">Caegory Four</li>
              <li className=" w-[96px] h-[27px] md:w-[142px] md:h-[36px]    md:cursor-pointer md:no-underline md:hover:underline md:underline-offset-8 text-[10px] font-bold">Caegory Five</li>
              <li className=" w-[96px] h-[27px] md:w-[142px] md:h-[36px]    md:cursor-pointer md:no-underline md:hover:underline md:underline-offset-8 text-[10px] font-bold">Caegory Six</li>
             </ul>
      </div>


    <div className="w-[383px] h-[540px] flex flex-wrap mx-auto  
    md:w-[1026px] md:h-[622px] md:border   md:mx-auto md:flex md:flex-wrap md:relative">
      <div  style={first} className="                       md:w-[292px] md:h-[185px] md:ml-[10px]"></div>
      <div style={second} className="w-[159px] h-[114px]    md:w-[214px] md:h-[285px] md:-ml-2"></div>
      <div style={third} className="w-[195px] h-[269px]     md:w-[316px] md:h-[285px] md:-ml-[8px] "></div>
      <div style={four} className="  w-[159px] h-[154px] -mt-[158px]   md:w-[200px] md:h-[185px] md:-ml-[7px] md:mt-0"></div>
      <div style={five} className="w-[196px] h-[140px] -mt-[14px]   md:w-[292px] md:h-[266px] md:-mt-32 md:ml-[10px]"></div>
      <div style={six} className=" w-[159px] h-[144px] -mt-[139px]  md:w-[295px] md:h-[144px] md:-ml-[8px] md:-mt-[29px]"></div>
      <div style={seven}className=" w-[356px] h-[128px] -mt-[5px]    md:w-[235px] md:h-[188px] md:-ml-[8px] md:-mt-[29px]"></div>
      <div style={eight}className="   md:w-[202px] md:h-[266px] md:-ml-[8px] md:-mt-[127px]  "></div>
      <div style={nine}className="    md:w-[288px] md:h-[171px] md:-mt-[59px] md:ml-[10px]"></div>
      <div style={ten}className="     md:w-[295px] md:h-[177px] md:-mt-[66px] "></div>
      <div style={eleven}className="  md:w-[235px] md:h-[149px] md:-ml-3 md:-mt-[38px]"></div>
      <div style={twelve}className="  md:w-[204px] md:h-[173px] md:-ml-[9px] md:-mt-[62px]"></div>
      <div  style={plus} className="  md:absolute md:top-0 md:left-0 md:ml-32 md:text-[#FFFFFF]  md:mt-14 "></div>
    </div>
   


    </div>
  );
}
