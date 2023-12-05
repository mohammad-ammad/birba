"use client";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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
export default function Partners() {
  const data = [
    {
      type: "Partners",
      img: "/assets/r3.png",
      title: "Green Hydrogen Summit 1",
      room: "A50",
    },
    {
      type: "Partners",
      img: "/assets/r3.png",
      title: "Green Hydrogen Summit",
      room: "A50",
    },
    {
      type: "Partners",
      img: "/assets/r3.png",
      title: "Green Hydrogen Summit",
      room: "A50",
    },
    {
      type: "Partners",
      img: "/assets/r3.png",
      title: "Green Hydrogen Summit",
      room: "A50",
    },
    {
      type: "Partners",
      img: "/assets/r3.png",
      title: "Green Hydrogen Summit",
      room: "A50",
    },
    {
      type: "Partners",
      img: "/assets/r3.png",
      title: "Green Hydrogen Summit",
      room: "A50",
    },
    {
      type: "Partners",
      img: "/assets/r3.png",
      title: "Green Hydrogen Summit",
      room: "A50",
    },
    {
      type: "Partners",
      img: "/assets/r3.png",
      title: "Green Hydrogen Summit",
      room: "A50",
    },
    {
      type: "Partners",
      img: "/assets/r3.png",
      title: "Green Hydrogen Summit",
      room: "A50",
    },
    {
      type: "Partners",
      img: "/assets/r3.png",
      title: "Green Hydrogen Summit",
      room: "A50",
    },
    {
      type: "Golden Partners",
      img: "/assets/r3.png",
      title: "Green Hydrogen Summit",
      room: "A50",
    },
    {
      type: "Golden Partners",
      img: "/assets/r3.png",
      title: "Green Hydrogen Summit",
      room: "A50",
    },
    {
      type: "Golden Partners",
      img: "/assets/r3.png",
      title: "Green Hydrogen Summit",
      room: "A50",
    },
    {
      type: "Golden Partners",
      img: "/assets/r3.png",
      title: "Green Hydrogen Summit",
      room: "A50",
    },
    {
      type: "Golden Partners",
      img: "/assets/r3.png",
      title: "Green Hydrogen Summit",
      room: "A50",
    },
    {
      type: "Golden Partners",
      img: "/assets/r3.png",
      title: "Green Hydrogen Summit",
      room: "A50",
    },
    {
      type: "Golden Partners",
      img: "/assets/r3.png",
      title: "Green Hydrogen Summit",
      room: "A50",
    },
    {
      type: "Golden Partners",
      img: "/assets/r3.png",
      title: "Green Hydrogen Summit",
      room: "A50",
    },
    {
      type: "Golden Partners",
      img: "/assets/r3.png",
      title: "Green Hydrogen Summit",
      room: "A50",
    },
    {
      type: "Golden Partners",
      img: "/assets/r3.png",
      title: "Green Hydrogen Summit",
      room: "A50",
    },
    {
      type: "Platinum Partners",
      img: "/assets/r3.png",
      title: "Green Hydrogen Summit",
      room: "A50",
    },
    {
      type: "Platinum Partners",
      img: "/assets/r3.png",
      title: "Green Hydrogen Summit",
      room: "A50",
    },
    {
      type: "Platinum Partners",
      img: "/assets/r3.png",
      title: "Green Hydrogen Summit",
      room: "A50",
    },
    {
      type: "Platinum Partners",
      img: "/assets/r3.png",
      title: "Green Hydrogen Summit",
      room: "A50",
    },
    {
      type: "Platinum Partners",
      img: "/assets/r3.png",
      title: "Green Hydrogen Summit",
      room: "A50",
    },
    {
      type: "Platinum Partners",
      img: "/assets/r3.png",
      title: "Green Hydrogen Summit",
      room: "A50",
    },
    {
      type: "Platinum Partners",
      img: "/assets/r3.png",
      title: "Green Hydrogen Summit",
      room: "A50",
    },
    {
      type: "Platinum Partners",
      img: "/assets/r3.png",
      title: "Green Hydrogen Summit",
      room: "A50",
    },
    {
      type: "Platinum Partners",
      img: "/assets/r3.png",
      title: "Green Hydrogen Summit",
      room: "A50",
    },
    {
      type: "Platinum Partners",
      img: "/assets/r3.png",
      title: "Green Hydrogen Summit",
      room: "A50",
    },
    {
      type: "Platinum Partners",
      img: "/assets/r3.png",
      title: "Green Hydrogen Summit",
      room: "A50",
    },
    {
      type: "Platinum Partners",
      img: "/assets/r3.png",
      title: "Green Hydrogen Summit",
      room: "A50",
    },
  ];

  const [partnersState, setPartnersState] = useState(data);
  const [filterValue, setFilterValue] = useState("");
  const [filterCheckBox, setFilterCheckbox] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFilter = () => {
    setLoading(true);
    let filteredData = data;

    if (filterValue) {
      filteredData = filteredData.filter((item) => item.title === filterValue);
    }

    if (filterCheckBox) {
      filteredData = filteredData.filter(
        (item) => item.type === filterCheckBox
      );
    }
    setLoading(false);
    setPartnersState(filteredData);
  };
  const onReset = () => {
    setFilterValue("");
    setFilterCheckbox("");
    setPartnersState(data);
  };
  return (
    <div className="pt-20 pb-20 bg-[#f8f8f8]">
      <div style={bannerStyles}>
        <div className="text-3xl font-bold">Partners and Sponsors</div>
      </div>

      {loading ? (
        "loading"
      ) : (
        <section className="flex flex-col md:flex-row justify-center items-start gap-5 px-5 md:px-10 pt-10">
          <div className="hidden md:block w-full md:w-[30%] bg-white">
            <AgendaFilterBox
              isShadow={true}
              setFilterValue={setFilterValue}
              filterValue={filterValue}
              filterCheckBox={filterCheckBox}
              setFilterCheckbox={setFilterCheckbox}
              handleFilter={handleFilter}
              onReset={onReset}
            />
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
                    value={filterValue}
                    onChange={(e) => setFilterValue(e.target.value)}
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
                  <AgendaFilterBox
                    setFilterValue={setFilterValue}
                    filterValue={filterValue}
                    filterCheckBox={filterCheckBox}
                    setFilterCheckbox={setFilterCheckbox}
                    handleFilter={handleFilter}
                    onReset={onReset}
                  />
                </AlertDialogHeader>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          <div className="w-full md:w-[70%]">
            {partnersState.filter((item) => item.type === "Partners").length >
              0 && (
              <>
                <h1 className="text-2xl font-bold">Partners</h1>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
                  {partnersState
                    .filter((item) => item.type === "Partners")
                    .map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col md:flex-row justify-center md:justify-start items-center bg-[#FFFFFF] rounded-md pb-5 md:pb-0"
                        style={{
                          boxShadow: "0px 4px 18px 0px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <Image
                          src={item.img}
                          width={100}
                          height={100}
                          className="object-cover"
                        />
                        <div>
                          <h1 className="text-[20px] md:text-[14px] font-semibold">
                            {item.title}
                          </h1>
                          <p className="text-[20px] md:text-[12px] text-center md:text-left">
                            {item.room}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>

                <div className="w-full h-[1px] bg-black"></div>
              </>
            )}

            {partnersState.filter((item) => item.type === "Golden Partners")
              .length > 0 && (
              <>
                <h1 className="text-2xl font-bold mt-5">Golden Partners</h1>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
                  {partnersState
                    .filter((item) => item.type === "Golden Partners")
                    .map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col md:flex-row justify-center md:justify-start items-center bg-[#FFFFFF] rounded-md pb-5 md:pb-0"
                        style={{
                          boxShadow: "0px 4px 18px 0px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <Image
                          src={item.img}
                          width={100}
                          height={100}
                          className="object-cover"
                        />
                        <div>
                          <h1 className="text-[20px] md:text-[14px] font-semibold">
                            {item.title}
                          </h1>
                          <p className="text-[20px] md:text-[12px] text-center md:text-left">
                            {item.room}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>

                <div className="w-full h-[1px] bg-black"></div>
              </>
            )}

            {partnersState.filter((item) => item.type === "Platinum Partners")
              .length > 0 && (
              <>
                <h1 className="text-2xl font-bold mt-5">Platinum Partners</h1>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
                  {partnersState
                    .filter((item) => item.type === "Platinum Partners")
                    .map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col md:flex-row justify-center md:justify-start items-center bg-[#FFFFFF] rounded-md pb-5 md:pb-0"
                        style={{
                          boxShadow: "0px 4px 18px 0px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <Image
                          src={item.img}
                          width={100}
                          height={100}
                          className="object-cover"
                        />
                        <div>
                          <h1 className="text-[20px] md:text-[14px] font-semibold">
                            {item.title}
                          </h1>
                          <p className="text-[20px] md:text-[12px] text-center md:text-left">
                            {item.room}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>

                <div className="w-full h-[1px] bg-black"></div>
              </>
            )}
          </div>
        </section>
      )}
    </div>
  );
}

const AgendaFilterBox = ({
  isShadow,
  filterValue,
  setFilterValue,
  setFilterCheckbox,
  handleFilter,
  onReset,
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
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        />
      </div>
      <hr />
      <div className="my-2">
        <h1 className="text-sm font-bold">Filter</h1>
        <div className="flex justify-between items-center my-3">
          <h1 className="text-sm font-bold text-[#AE0243]">
            Partners Category
          </h1>
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
              <input
                type="checkbox"
                value="Partners"
                onChange={(e) => setFilterCheckbox(e.target.value)}
              />
              <p className="text-sm text-[#555555]">Partners</p>
            </li>
            <li className="flex justify-start items-center gap-2 my-1">
              <input
                type="checkbox"
                value="Platinum Partners"
                onChange={(e) => setFilterCheckbox(e.target.value)}
              />
              <p className="text-sm text-[#555555]">Platinum Partners</p>
            </li>
            <li className="flex justify-start items-center gap-2 my-1">
              <input
                type="checkbox"
                value="Golden Partners"
                onChange={(e) => setFilterCheckbox(e.target.value)}
              />
              <p className="text-sm text-[#555555]">Gold Partners</p>
            </li>
            <li className="flex justify-start items-center gap-2 my-1">
              <input
                type="checkbox"
                value="Silver Partners"
                onChange={(e) => setFilterCheckbox(e.target.value)}
              />
              <p className="text-sm text-[#555555]">Silver Partners</p>
            </li>
            <li className="flex justify-start items-center gap-2 my-1">
              <input
                type="checkbox"
                value="Bronze Partners"
                onChange={(e) => setFilterCheckbox(e.target.value)}
              />
              <p className="text-sm text-[#555555]">Bronze Partners</p>
            </li>
          </ul>

          <div className="flex justify-center items-center gap-2 my-2">
            <button
              type="button"
              onClick={onReset}
              className="w-full md:w-[168px] h-[39px] text-[#6B7280] text-[12px] rounded-md"
              style={{ border: "1px solid rgba(202, 219, 220, 1)" }}
            >
              Clear All
            </button>
            <button
              type="button"
              onClick={handleFilter}
              className="w-full md:w-[168px] h-[39px] bg-[#003756] text-[12px] text-white rounded-md"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
