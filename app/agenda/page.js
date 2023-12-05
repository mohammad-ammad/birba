'use client';
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AgendaAccordian from "@/components/AgendaAccordian";
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

const borderBottom = {
  borderBottom: "3px solid #AE0243",
};
export default function Agenda() {
  const [tab, setTab] = useState("11th December 2023");
  return (
    <div className="pt-20">
      <div style={bannerStyles}>
        <div className="text-3xl font-bold">Agenda</div>
      </div>

      <section className="bg-[#f8f8f8] px-0 md:px-40 pt-10">
        <div>
          <div className="flex justify-between items-center px-5 py-3 rounded-md bg-[#fcfcfceb]">
            <h1 className="text-lg font-bold mb-5 text-center md:text-left">
              Event Schedule
            </h1>
            <p>
              <Link href="/" className="text-[10px] font-semibold underline">
                View Agenda
              </Link>
            </p>
          </div>

          <div className="w-full">
            <Tabs defaultValue="11th December 2023" className="w-full">
              <div style={borderBottom} className="bg-[#fcfcfceb] rounded-md px-5 py-2 hidden md:block">
                <TabsList className="w-full bg-[#fcfcfceb]">
                  <TabsTrigger value="11th December 2023" className="w-52 bg-white my-1 mx-1 font-bold py-2 data-[state=active]:border-b-2 border-black">
                    GHSO23 Workshop
                  </TabsTrigger>
                  <TabsTrigger value="12th December 2023" className="w-52 bg-white my-1 mx-1 font-bold py-2 data-[state=active]:border-b-2 border-black">
                    EEC 2023 
                  </TabsTrigger>
                  <TabsTrigger value="13th December 2023" className="w-52 bg-white my-1 mx-1 font-bold py-2 data-[state=active]:border-b-2 border-black">
                    TecH2 Talks
                  </TabsTrigger>
                  <TabsTrigger value="14th December 2023" className="w-52 bg-white my-1 mx-1 font-bold py-2 data-[state=active]:border-b-2 border-black">
                    Future Energy Leaders
                  </TabsTrigger>
                  <TabsTrigger value="15th December 2023" className="w-52 bg-white my-1 mx-1 font-bold py-2 data-[state=active]:border-b-2 border-black">
                    Women in Future Energies
                  </TabsTrigger>
                  <TabsTrigger value="15th December 2023" className="w-52 bg-white my-1 mx-1 font-bold py-2 data-[state=active]:border-b-2 border-black">
                    EU-GCC GHSO
                  </TabsTrigger>
                </TabsList>
                <TabsList className="w-full bg-[#fcfcfceb] my-3">
                  <TabsTrigger value="11th December 2023" className="w-52 bg-white my-1 mx-1 font-bold py-2 data-[state=active]:border-b-2 border-black">
                    11th December 2023
                  </TabsTrigger>
                  <TabsTrigger value="12th December 2023" className="w-52 bg-white my-1 mx-1 font-bold py-2 data-[state=active]:border-b-2 border-black">
                    12th December 2023
                  </TabsTrigger>
                  <TabsTrigger value="13th December 2023" className="w-52 bg-white my-1 mx-1 font-bold py-2 data-[state=active]:border-b-2 border-black">
                    13th December 2023
                  </TabsTrigger>
                  <TabsTrigger value="14th December 2023" className="w-52 bg-white my-1 mx-1 font-bold py-2 data-[state=active]:border-b-2 border-black">
                    14th December 2023
                  </TabsTrigger>
                  <TabsTrigger value="15th December 2023" className="w-52 bg-white my-1 mx-1 font-bold py-2 data-[state=active]:border-b-2 border-black">
                    15th December 2023
                  </TabsTrigger>
                </TabsList>
              </div>
              <div className="block md:hidden px-5">
              <div className="grid grid-cols-3 gap-2 my-2">
                  <button className="bg-[#ffffff] text-black text-[13px] px-2 py-1 rounded-md border-b-2 border-black">GHSO23 Workshop</button>
                  <button className="bg-[#ffffff] text-black text-[13px] px-2 py-1 rounded-md">EEC 2023</button>
                  <button className="bg-[#ffffff] text-black text-[13px] px-2 py-1 rounded-md">TecH2 Talks</button>
                  <button className="bg-[#ffffff] text-black text-[13px] px-2 py-1 rounded-md">Future Energy Leaders</button>
                  <button className="bg-[#ffffff] text-black text-[13px] px-2 py-1 rounded-md">Women in Future Energies</button>
                  <button className="bg-[#ffffff] text-black text-[13px] px-2 py-1 rounded-md">EU-GCC GHSO</button>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <button onClick={()=>setTab("11th December 2023")} className={`bg-[#ffffff] text-black text-[13px] px-2 py-1 rounded-md ${tab == "11th December 2023" && 'border-b-2 border-black'}`}>11th December 2023</button>
                  <button onClick={()=>setTab("12th December 2023")} className={`bg-[#ffffff] text-black text-[13px] px-2 py-1 rounded-md ${tab == "12th December 2023" && 'border-b-2 border-black'}`}>12th December 2023</button>
                  <button onClick={()=>setTab("13th December 2023")} className={`bg-[#ffffff] text-black text-[13px] px-2 py-1 rounded-md ${tab == "13th December 2023" && 'border-b-2 border-black'}`}>13th December 2023</button>
                  <button onClick={()=>setTab("14th December 2023")} className={`bg-[#ffffff] text-black text-[13px] px-2 py-1 rounded-md ${tab == "14th December 2023" && 'border-b-2 border-black'}`}>14th December 2023</button>
                  <button onClick={()=>setTab("15th December 2023")} className={`bg-[#ffffff] text-black text-[13px] px-2 py-1 rounded-md ${tab == "15th December 2023" && 'border-b-2 border-black'}`}>15th December 2023</button>
                </div>
              </div>

              <TabsContent value="11th December 2023">
                <AgendaAccordian key={"11th December 2023"} date={tab}/>
              </TabsContent>
              <TabsContent value="12th December 2023">
                <AgendaAccordian key={"12th December 2023"} date="12th December 2023"/>
              </TabsContent>
              <TabsContent value="13th December 2023">
                <AgendaAccordian key={"13th December 2023"} date="13th December 2023"/>
              </TabsContent>
              <TabsContent value="14th December 2023">
                <AgendaAccordian key={"14th December 2023"} date="14th December 2023"/>
              </TabsContent>
              <TabsContent value="15th December 2023">
                <AgendaAccordian key={"15th December 2023"} date="15th December 2023"/>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
}
