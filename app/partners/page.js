import Image from "next/image";
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
export default function Partners() {
  return (
    <div className="pt-20 bg-[#f8f8f8]">
      <div style={bannerStyles}>
        <div className="text-3xl font-bold">Partners and Sponsors</div>
      </div>

      <section className="flex flex-col md:flex-row justify-center items-start gap-5 px-5 md:px-10 pt-10">
        <div className="hidden md:block w-full md:w-[30%] bg-white">
          <AgendaFilterBox isShadow={true} />
        </div>
        <div className="block md:hidden w-full">
          <AlertDialog className="w-full">
            <AlertDialogTrigger className="inline-flex justify-end items-center w-full">
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
                <AgendaFilterBox />
              </AlertDialogHeader>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className="w-full md:w-[70%]">
          <h1 className="text-2xl font-bold">Partners</h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
            {"abcdefghijk".split("").map((item, index) => (
              <div
                key={index}
                className="flex justify-start items-center bg-[#FFFFFF] rounded-md"
                style={{ boxShadow: "0px 4px 18px 0px rgba(0, 0, 0, 0.1)" }}
              >
                <Image
                  src="/assets/r3.png"
                  width={100}
                  height={100}
                  className="object-cover"
                />
                <div>
                  <h1 className="text-[12px] md:text-[14px] font-semibold">
                    Green Hydrogen Summit
                  </h1>
                  <p className="text-[10px]">A50</p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full h-[1px] bg-black"></div>

          <h1 className="text-2xl font-bold mt-5">Golden Partners</h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
            {"abcdefghijk".split("").map((item, index) => (
              <div
                key={index}
                className="flex justify-start items-center bg-[#FFFFFF] rounded-md"
                style={{ boxShadow: "0px 4px 18px 0px rgba(0, 0, 0, 0.1)" }}
              >
                <Image
                  src="/assets/r3.png"
                  width={100}
                  height={100}
                  className="object-cover"
                />
                <div>
                  <h1 className="text-[12px] md:text-[14px] font-semibold">
                    Green Hydrogen Summit
                  </h1>
                  <p className="text-[10px]">A50</p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full h-[1px] bg-black"></div>

          <h1 className="text-2xl font-bold mt-5">Platinum Partners</h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
            {"abcdefghijk".split("").map((item, index) => (
              <div
                key={index}
                className="flex justify-start items-center bg-[#FFFFFF] rounded-md"
                style={{ boxShadow: "0px 4px 18px 0px rgba(0, 0, 0, 0.1)" }}
              >
                <Image
                  src="/assets/r3.png"
                  width={100}
                  height={100}
                  className="object-cover"
                />
                <div>
                  <h1 className="text-[12px] md:text-[14px] font-semibold">
                    Green Hydrogen Summit
                  </h1>
                  <p className="text-[10px]">A50</p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full h-[1px] bg-black"></div>
        </div>
      </section>
    </div>
  );
}

const AgendaFilterBox = ({ isShadow }) => {
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
              <input type="checkbox" />
              <p className="text-sm text-[#555555]">Partners</p>
            </li>
            <li className="flex justify-start items-center gap-2 my-1">
              <input type="checkbox" />
              <p className="text-sm text-[#555555]">Platinum Partners</p>
            </li>
            <li className="flex justify-start items-center gap-2 my-1">
              <input type="checkbox" />
              <p className="text-sm text-[#555555]">Gold Partners</p>
            </li>
            <li className="flex justify-start items-center gap-2 my-1">
              <input type="checkbox" />
              <p className="text-sm text-[#555555]">Silver Partners</p>
            </li>
            <li className="flex justify-start items-center gap-2 my-1">
              <input type="checkbox" />
              <p className="text-sm text-[#555555]">Bronze Partners</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
