import Image from "next/image";

const bannerStyles = {
  backgroundImage: "url('/assets/r2.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white",
  textAlign: "center",
  padding: "50px 10px",
  width: "100%",
};
export default function Exhibitors() {
  return (
    <div className="pt-20">
      <div style={bannerStyles}>
        <div className="text-3xl font-bold">Exhibitors</div>
      </div>

      <section className="flex flex-col md:flex-row justify-center items-start gap-5 px-5 md:px-10 pt-10">
        <div className="w-full md:w-[30%]">
          <div
            className="p-5"
            style={{ boxShadow: "0px 4px 18px 5px rgba(0, 0, 0, 0.1)" }}
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
                  Product Category
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
              <div></div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[70%]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-5">
            {"abcdefghijklmnopqrstuvwxqqq".split("").map((item, index) => (
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
        </div>
      </section>
    </div>
  );
}
