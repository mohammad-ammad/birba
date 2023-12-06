'use client';
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AgendaAccordian from "@/components/AgendaAccordian";
import EventCard from "@/components/EventCard";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

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
export default function Events() {
  const [tab, setTab] = useState("11th December 2023");
  return (
    <div className="py-20 bg-[#f8f8f8]">
      <div style={bannerStyles}>
        <div className="text-3xl font-bold">Green Hydrogen Summit</div>
      </div>

      <section className="flex flex-col md:flex-row justify-center items-start gap-5 px-5 md:px-10 pt-10">
        <div className="hidden md:block w-full md:w-[30%] bg-white">
          <EventFilterBox/>
        </div>
        <div className="block md:hidden w-full">
          <AlertDialog className="w-full">
            <AlertDialogTrigger className="flex justify-between items-center w-full">
              <div className="flex justify-start items-center my-3 border border-gray-300 rounded-md p-2 w-[80%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#818C93]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="search"
                  className="ml-2 w-full px- outline-none bg-inherit"
                />
              </div>
              <div className="inline-flex justify-end items-center w-[20%]">
                <p class="text-md text-[#AE0243] cursor-pointer">Filter</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 text-[#AE0243] cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
                  />
                </svg>
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent className="w-80 p-0">
              <AlertDialogHeader>
                <AlertDialogCancel className="border-none shadow-none inline-flex justify-end items-center hover:bg-transparent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </AlertDialogCancel>
                <EventFilterBox/>
              </AlertDialogHeader>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className="w-full md:w-[70%]">
          <div>
            <div className="flex justify-between items-center px-5 py-3 rounded-md bg-[#fcfcfceb]">
              <h1 className="text-lg font-bold text-center md:text-left">
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
                <div
                  style={borderBottom}
                  className="bg-[#fcfcfceb] rounded-md px-5 py-2 hidden md:block"
                >
                  <TabsList className="w-full bg-[#fcfcfceb]">
                    <TabsTrigger
                      value="11th December 2023"
                      className="w-40 text-[10px] bg-white my-1 mx-1 font-bold py-2 data-[state=active]:border-b-2 border-black"
                    >
                      11th December 2023
                    </TabsTrigger>
                    <TabsTrigger
                      value="12th December 2023"
                      className="w-40 text-[10px] bg-white my-1 mx-1 font-bold py-2 data-[state=active]:border-b-2 border-black"
                    >
                      12th December 2023
                    </TabsTrigger>
                    <TabsTrigger
                      value="13th December 2023"
                      className="w-40 text-[10px] bg-white my-1 mx-1 font-bold py-2 data-[state=active]:border-b-2 border-black"
                    >
                      13th December 2023
                    </TabsTrigger>
                    <TabsTrigger
                      value="14th December 2023"
                      className="w-40 text-[10px] bg-white my-1 mx-1 font-bold py-2 data-[state=active]:border-b-2 border-black"
                    >
                      14th December 2023
                    </TabsTrigger>
                    <TabsTrigger
                      value="15th December 2023"
                      className="w-40 text-[10px] bg-white my-1 mx-1 font-bold py-2 data-[state=active]:border-b-2 border-black"
                    >
                      15th December 2023
                    </TabsTrigger>
                  </TabsList>
                </div>
                <div className="block md:hidden px-5">
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => setTab("11th December 2023")}
                        className={`bg-[#ffffff] text-black text-[13px] px-2 py-1 rounded-md ${tab == "11th December 2023" && 'border-b-2 border-black'}`}
                      >
                        11th December 2023
                      </button>
                      <button
                        onClick={() => setTab("12th December 2023")}
                        className={`bg-[#ffffff] text-black text-[13px] px-2 py-1 rounded-md ${tab == "12th December 2023" && 'border-b-2 border-black'}`}
                      >
                        12th December 2023
                      </button>
                      <button
                        onClick={() => setTab("13th December 2023")}
                        className={`bg-[#ffffff] text-black text-[13px] px-2 py-1 rounded-md ${tab == "13th December 2023" && 'border-b-2 border-black'}`}
                      >
                        13th December 2023
                      </button>
                      <button
                        onClick={() => setTab("14th December 2023")}
                        className={`bg-[#ffffff] text-black text-[13px] px-2 py-1 rounded-md ${tab == "14th December 2023" && 'border-b-2 border-black'} col-span-2`}
                      >
                        14th December 2023
                      </button>
                      <button
                        onClick={() => setTab("15th December 2023")}
                        className={`bg-[#ffffff] text-black text-[13px] px-2 py-1 rounded-md ${tab == "15th December 2023" && 'border-b-2 border-black'}`}
                      >
                        15th December 2023
                      </button>
                    </div>
                  </div>
                <TabsContent value="11th December 2023">
                  <EventCard />
                </TabsContent>
                <TabsContent value="12th December 2023">
                  <EventCard />
                </TabsContent>
                <TabsContent value="13th December 2023">
                  <EventCard />
                </TabsContent>
                <TabsContent value="14th December 2023">
                  <EventCard />
                </TabsContent>
                <TabsContent value="15th December 2023">
                  <EventCard />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const EventFilterBox = ({
  isShadow,
}) => {
  return (
    <div
      className="p-5"
      style={{
        boxShadow: isShadow ? "0px 4px 18px 5px rgba(0, 0, 0, 0.1)" : "",
      }}
    >
       <div className="flex justify-between items-center">
              <h1 className="text-sm font-bold">Refine the list</h1>
              <div className="flex justify-start items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 text-[#AE0243] cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 text-[#AE0243] cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-start items-center my-3 border border-gray-300 rounded-md p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#818C93]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <input
                type="text"
                placeholder="search"
                className="ml-2 w-full px- outline-none"
              />
            </div>
            <hr />
            <div className="my-2">
              <h1 className="text-sm font-bold">Filter</h1>
              <div className="flex justify-between items-center my-3">
                <h1 className="text-sm font-bold text-[#AE0243]">Location</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 text-[#AE0243] cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              <div>
                <ul>
                  <li className="flex justify-start items-center gap-2 my-1">
                    <input type="checkbox" />
                    <p className="text-sm text-[#555555]">Conference Hall A2</p>
                  </li>
                  <li className="flex justify-start items-center gap-2 my-1">
                    <input type="checkbox" />
                    <p className="text-sm text-[#555555]">Conference Hall B3</p>
                  </li>
                </ul>
              </div>
            </div>
    </div>
  );
};