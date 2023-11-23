import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  return (
    <div className="pt-20">
      <div style={bannerStyles}>
        <div className="text-3xl font-bold">Agenda</div>
      </div>

      <section className="bg-[#f8f8f8] md:px-48 pt-10">
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
              <div style={borderBottom} className="bg-[#fcfcfceb] rounded-md px-5 py-2">
                <TabsList className="w-full bg-[#fcfcfceb]">
                  <TabsTrigger value="11th December 2023" className="w-52 bg-white mx-1 font-bold py-2 data-[state=active]:border-b-2 border-black">
                    11th December 2023
                  </TabsTrigger>
                  <TabsTrigger value="12th December 2023" className="w-52 bg-white mx-1 font-bold py-2 data-[state=active]:border-b-2 border-black">
                    12th December 2023
                  </TabsTrigger>
                  <TabsTrigger value="13th December 2023" className="w-52 bg-white mx-1 font-bold py-2 data-[state=active]:border-b-2 border-black">
                    13th December 2023
                  </TabsTrigger>
                  <TabsTrigger value="14th December 2023" className="w-52 bg-white mx-1 font-bold py-2 data-[state=active]:border-b-2 border-black">
                    14th December 2023
                  </TabsTrigger>
                  <TabsTrigger value="15th December 2023" className="w-52 bg-white mx-1 font-bold py-2 data-[state=active]:border-b-2 border-black">
                    15th December 2023
                  </TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="11th December 2023">
                Make changes to your account here.
              </TabsContent>
              <TabsContent value="12th December 2023">
                Change your password here.
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
}
