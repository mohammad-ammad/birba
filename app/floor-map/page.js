const bannerStyles = {
    backgroundImage: "url('/assets/r2.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    textAlign: "center",
    padding: "50px 10px",
    width: "100%",
};
export default function FloorMap() {
  return (
    <div className="pt-20 bg-[#f8f8f8]">
      <div style={bannerStyles}>
        <div className="text-3xl font-bold">Floor Map</div>
      </div>
      <div className=" md:w-[100%] flex flex-col justify-around  md:flex md:flex-row md:justify-around md:pr-14">
          <div className="w-[300px] h-[184px] p-[10px] px-14 mx-auto border border-inherit  mt-7 md:w-[257px] md:h-[184px] md:ml-14  md:mt-[100px] md:left-[96px] md:p-[5px] md:gap-[5px] md:bg-[#FFFFFF]  md:drop-shadow-2xl md:shadow-[#000000] md:border md:border-3 md:flex md:flex-col">
            <div className="  md:w-[257px] md:h-[32px] md:top-[282px] md:left-[96px]  md:p-[10px] md:gap-[5px] md:flex md:justify-around ">
               <p className="flex justify-around p-[10px]  text-[#AE0243] font-bold md:w-[130px] md:h-[20px] md:font-[Poppins] md:font-[600] md:text-[13px] md:text-[#AE0243] ">Floor Map Sections</p>           
            </div>

            
            <div className="flex flex-row justify-between md:w-[237px] md:h-[36px] md:gap-[10px]  md:flex md:flex-row md:justify-between">
                   <p className=" md:w-[175px] md:h-[20px] md:text-[13px] md:font-[500] md:leading-[20px]">Area One</p>
                   <p className=" md:w-[65px] md:h-[20px] md:text-[13px] md:font-[500] md:leading-[20px]">G1 - G5</p>
            </div>
            <div className="flex flex-row justify-between md:w-[237px] md:h-[36px] md:gap-[5px] md:flex md:flex-row md:justify-between">
                   <p className="  md:w-[175px] md:h-[20px] md:text-[13px] md:font-[500] md:leading-[20px]">Area Two</p>
                   <p className=" md:w-[65px] md:h-[20px] md:text-[13px] md:font-[500] md:leading-[20px]">A1 - A5</p>
            </div>
            <div className="flex flex-row justify-between md:w-[237px] md:h-[36px] md:gap-[5px] md:flex md:flex-row md:justify-between">
                   <p className=" md:w-[175px] md:h-[20px] md:text-[13px] md:font-[500] md:leading-[20px]">Area Two</p>
                   <p className=" md:w-[65px] md:h-[20px] md:text-[13px] md:font-[500] md:leading-[20px]">A1 - A5</p>
            </div>
            <div className="flex flex-row justify-between md:w-[237px] md:h-[36px] md:gap-[5px] md:flex md:flex-row md:justify-between">
                   <p className=" md:w-[175px] md:h-[20px] md:text-[13px] md:font-[500] md:leading-[20px]">Area Two</p>
                   <p className=" md:w-[65px] md:h-[20px] md:text-[13px] md:font-[500] md:leading-[20px]">A1 - A5</p>
            </div>
          </div>

      <div className="w-[300px] h-[361px] mx-auto mt-7  flex flex-wrap justify-between md:w-[913px] md:h-[617px] md:mt-[100px] md:p-[10px] md:bg-[#FFFFFF] md:flex md:flex-wrap md:justify-between">
            <div className="w-[35px] h-[26px] md:w-[112px] md:h-[56px] bg-[#40D09A]"></div>
            <div className="w-[35px] h-[26px] md:w-[112px] md:h-[56px] bg-[#40D09A]"></div>
            <div className="w-[105px] h-[26px] md:w-[280px] md:h-[56px] bg-[#40D09A]"></div>
            <div className="w-[35px] h-[26px] md:w-[112px] md:h-[56px] bg-[#FF6D9880]"></div>
            <div className="w-[35px] h-[26px] md:w-[112px] md:h-[56px] bg-[#FF6D9880]"></div>
            <div className="w-[35px] h-[26px] md:w-[112px] md:h-[56px] bg-[#FF6D9880]"></div>


            <div className="w-[38px] h-[26px] md:w-[112px] md:h-[56px] bg-[#00BAF080]"></div>
            <div className="w-[38px] h-[26px] md:w-[112px] md:h-[56px] bg-[#00BAF080]"></div>
            <div className="w-[38px] h-[26px] md:w-[112px] md:h-[56px] bg-[#00BAF080]"></div>
            <div className="w-[38px] h-[26px] md:w-[112px] md:h-[56px] bg-[#FFA30080]"></div>
            <div className="w-[38px] h-[26px] md:w-[112px] md:h-[56px] bg-[#FFA30080]"></div>
            <div className="w-[38px] h-[26px] md:w-[112px] md:h-[56px] bg-[#FFA30080]"></div>
            <div className="w-[38px] h-[26px] md:w-[112px] md:h-[56px] bg-[#FF2660]"></div>


            <div className="w-[38px] h-[26px] md:w-[112px] md:h-[56px] bg-[#00BAF080]"></div>
            <div className="w-[38px] h-[26px] md:w-[112px] md:h-[56px] bg-[#00BAF080]"></div>          
             <div className="w-[38px] h-[26px] md:w-[112px] md:h-[56px] bg-[#00BAF080]"></div>        
             <div className="w-[38px] h-[26px] md:w-[112px] md:h-[56px] bg-[#FFA30080]"></div>
            <div className="w-[38px] h-[26px] md:w-[112px] md:h-[56px] bg-[#FFA30080]"></div>
            <div className="w-[38px] h-[26px] md:w-[112px] md:h-[56px] bg-[#FFA30080]"></div>
            <div className="w-[38px] h-[26px] md:w-[112px] md:h-[56px] bg-[#FF2660]"></div>

            <div className="w-[39px] h-[35px] md:w-[112px] md:h-[77px] bg-[#9AD15D]"></div>
            <div className="w-[38px] h-[35px] md:w-[112px] md:h-[77px] bg-[#9AD15D]"></div>
            <div className="w-[38px] h-[35px] md:w-[112px] md:h-[77px] bg-[#9AD15D]"></div>
            <div className="w-[38px] h-[36px] md:w-[112px] md:h-[77px] bg-[#FFA300]"></div>
            <div className="w-[38px] h-[36px] md:w-[112px] md:h-[77px] bg-[#FFA300]"></div>
            <div className="w-[38px] h-[36px] md:w-[112px] md:h-[77px] bg-[#FFA300]"></div>
            <div className="w-[38px] h-[26px] md:w-[112px] md:h-[56px] bg-[#FF2660]"></div>



            <div className="w-[38px] h-[36px] md:w-[112px] md:h-[77px] bg-[#9AD15D]"></div>
            <div className="w-[38px] h-[36px] md:w-[112px] md:h-[77px] bg-[#9AD15D]"></div>
            <div className="w-[39px] h-[36px] md:w-[112px] md:h-[77px] bg-[#9AD15D]"></div>
            <div className="w-[38px] h-[36px] md:w-[112px] md:h-[77px] bg-[#FFA300]"></div>
            <div className="w-[38px] h-[36px] md:w-[112px] md:h-[77px] bg-[#FFA300]"></div>
            <div className="w-[38px] h-[36px] md:w-[112px] md:h-[77px] bg-[#FFA300]"></div>
            <div className="w-[38px] h-[26px] md:w-[112px] md:h-[56px] bg-[#FF2660]"></div>


            <div className="w-[38px] h-[45px] md:w-[112px] md:h-[77px] bg-[#00AE9E]"></div>
            <div className="w-[38px] h-[45px] md:w-[112px] md:h-[77px] bg-[#00AE9E]"></div>
            <div className="w-[38px] h-[45px] md:w-[112px] md:h-[77px] bg-[#00AE9E]"></div>
            <div className="w-[38px] h-[26px] md:w-[112px] md:h-[56px] bg-[#FFA300]"></div>
            <div className="w-[39px] h-[26px] md:w-[112px] md:h-[56px] bg-[#FFA300]"></div>
            <div className="w-[38px] h-[26px] md:w-[112px] md:h-[56px] bg-[#FFA300]"></div>
            <div className="w-[38px] h-[26px] md:w-[112px] md:h-[56px] bg-[#FF2660]"></div>


            <div className="w-[48px] h-[26px] md:w-[112px] md:h-[77px] bg-[#00AE9E]"></div>
            <div className="w-[48px] h-[26px] md:w-[112px] md:h-[77px] bg-[#00AE9E]"></div>
            <div className="w-[48px] h-[26px] md:w-[112px] md:h-[77px] bg-[#FFA300]"></div>
            <div className="w-[48px] h-[26px] md:w-[112px] md:h-[56px] bg-[#FF2660]"></div>




   </div>
 </div>
</div>
  );
}
