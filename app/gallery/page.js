
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




      <div className="md:w-[1026px] md:h-[68px] md:border-[0 0 1px 0] md:flex md:m-auto  md:mt-10 md:bg-[#FFFFFF]">
             <ul className="md:w-[968px] md:h-[48px] md:flex md:flex-row md:justify-between mx-auto ">
              <li className="md:w-[66px]  md:h-[36px] font-[10px] font-semibold md:cursor-pointer md:no-underline md:hover:underline md:underline-offset-8">All</li>
              <li className="md:w-[143px] md:h-[36px] font-[10px] font-semibold md:cursor-pointer md:no-underline md:hover:underline md:underline-offset-8">Caegory One</li>
              <li className="md:w-[142px] md:h-[36px] font-[10px] font-semibold md:cursor-pointer md:no-underline md:hover:underline md:underline-offset-8">Caegory Two</li>
              <li className="md:w-[142px] md:h-[36px] font-[10px] font-semibold md:cursor-pointer md:no-underline md:hover:underline md:underline-offset-8">Caegory Three</li>
              <li className="md:w-[142px] md:h-[36px] font-[10px] font-semibold md:cursor-pointer md:no-underline md:hover:underline md:underline-offset-8">Caegory Four</li>
              <li className="md:w-[142px] md:h-[36px] font-[10px] font-semibold md:cursor-pointer md:no-underline md:hover:underline md:underline-offset-8">Caegory Five</li>
              <li className="md:w-[142px] md:h-[36px] font-[10px] font-semibold md:cursor-pointer md:no-underline md:hover:underline md:underline-offset-8">Caegory Six</li>
             </ul>
      </div>


      <div className="md:w-[1026px] md:h-[622px] md:border  md:mx-auto md:flex md:flex-wrap md:relative">
        <div  style={first} className="md:w-[292px] md:h-[185px] md:ml-[10px]"></div>
        <div style={second} className="md:w-[216px] md:h-[285px] md:-ml-2"></div>
        <div style={third} className="md:w-[316px] md:h-[285px] md:-ml-[8px] "></div>
        <div style={four} className="md:w-[200px] md:h-[185px] md:-ml-[7px]"></div>
        <div style={five} className="md:w-[292px] md:h-[266px] md:-mt-28 md:ml-[10px]"></div>
        <div style={six} className="md:w-[295px] md:h-[210px] md:-ml-[8px] md:-mt-[16px]"></div>
        <div style={seven}className="md:w-[235px] md:h-[188px] md:-ml-[8px] md:-mt-[15px]"></div>
        <div style={eight}className="md:w-[204px] md:h-[266px] md:-mt-[116px] md:-ml-[9px] "></div>
        <div style={nine}className="md:w-[292px] md:h-[171px] md:-mt-[59px] md:ml-[10px]"></div>
        <div style={ten}className="md:w-[295px] md:h-[127px] md:-mt-[16px] md:-ml-[3px]"></div>
        <div style={eleven}className="md:w-[235px] md:h-[149px] md:-ml-3 md:-mt-[38px]"></div>
        <div style={twelve}className="md:w-[204px] md:h-[173px] md:-ml-[9px] md:-mt-[62px]"></div>
        <div  style={plus} className="md:absolute md:top-0 md:text-[#FFFFFF] md:mx-32 md:mt-14"></div>
      </div>
   


    </div>
  );
}
