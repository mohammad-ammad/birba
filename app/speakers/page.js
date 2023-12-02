import Image from "next/image";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const bannerStyles = {
  backgroundImage: "url('/assets/r2.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white",
  textAlign: "center",
  padding: "50px 10px",
  width: "100%",
};
export default function Speakers() {
  return (
    <div className="pt-20 bg-[#f8f8f8]">
      <div style={bannerStyles}>
        <div className="text-3xl font-bold">Speakers</div>
      </div>

      <section className="flex flex-col md:flex-row justify-center items-start gap-5 px-5 md:px-10 pt-10">
        <div className="hidden md:block w-full md:w-[30%] bg-white">
          <SpeakerFilterBox isShadow={true} />
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
                <SpeakerFilterBox />
              </AlertDialogHeader>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className="w-full md:w-[70%]">
          {/* <div className="flex justify-between items-center py-2">
            <h1 className="text-md md:text-xl font-bold">Green Hydrogen Summit</h1>
            <p>
              <Link href="" className="text-[10px] font-semibold underline">
                View Event Details →
              </Link>
            </p>
          </div> */}
          {/* <hr /> */}
          <div className="my-5 flex justify-center items-center flex-col">
            {/* <Image src="/assets/a2.png" width={100} height={100} /> */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 my-2">
              {"a".split("").map((item, index) => (
                <Dialog>
                  <DialogTrigger>
                    <div
                      className="flex justify-start items-center gap-2 rounded-md my-2 p-5"
                      style={{
                        boxShadow: "0px 4px 18px 0px rgba(0, 0, 0, 0.1)",
                      }}
                      key={index}
                    >
                      <div>
                        <Image
                          src={`/assets/p${index + 1}.png`}
                          alt="profile"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold">Speaker</p>
                        <h1 className="text-[14px] font-bold">
                          Johnathan N. Killip
                        </h1>
                        <p className="text-[9px] font-semibold">
                          Economy Scientist - Infulencer
                        </p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogDescription>
                        <DialogBox />
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              ))}
            </div>

            <div className="w-full h-[1px] bg-[#8B8B8B] my-5"></div>

            <Image src="/assets/a1.png" width={100} height={100} />
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 my-2">
              {"ab".split("").map((item, index) => (
                <Dialog>
                  <DialogTrigger>
                    <div
                      className="flex justify-start items-center gap-2 rounded-md my-2 p-5 "
                      style={{
                        boxShadow: "0px 4px 18px 0px rgba(0, 0, 0, 0.1)",
                      }}
                      key={index}
                    >
                      <div>
                        <Image
                          src={`/assets/p${index + 1}.png`}
                          alt="profile"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold">Speaker</p>
                        <h1 className="text-[14px] font-bold">
                          Johnathan N. Killip
                        </h1>
                        <p className="text-[9px] font-semibold">
                          Economy Scientist - Infulencer
                        </p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogDescription>
                        <DialogBox />
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              ))}
            </div>

            <div className="w-full h-[1px] bg-[#8B8B8B] my-5"></div>

            <Image src="/assets/a3.png" width={100} height={100} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-2">
              {"abcdef".split("").map((item, index) => (
                <Dialog>
                  <DialogTrigger>
                    <div
                      className="flex justify-start items-center gap-2 rounded-md my-2 p-5"
                      style={{
                        boxShadow: "0px 4px 18px 0px rgba(0, 0, 0, 0.1)",
                      }}
                      key={index}
                    >
                      <div>
                        <Image
                          src={`/assets/p${index + 1}.png`}
                          alt="profile"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold">Speaker</p>
                        <h1 className="text-[14px] font-bold">
                          Johnathan N. Killip
                        </h1>
                        <p className="text-[9px] font-semibold">
                          Economy Scientist - Infulencer
                        </p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogDescription>
                        <DialogBox />
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              ))}
            </div>

            <div className="w-full h-[1px] bg-[#8B8B8B] my-5"></div>

            <Image src="/assets/a4.png" width={100} height={100} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-2">
              {"abc".split("").map((item, index) => (
                <Dialog>
                  <DialogTrigger>
                    <div
                      className="flex justify-start items-center gap-2 rounded-md my-2 p-5"
                      style={{
                        boxShadow: "0px 4px 18px 0px rgba(0, 0, 0, 0.1)",
                      }}
                      key={index}
                    >
                      <div>
                        <Image
                          src={`/assets/p${index + 1}.png`}
                          alt="profile"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold">Speaker</p>
                        <h1 className="text-[14px] font-bold">
                          Johnathan N. Killip
                        </h1>
                        <p className="text-[9px] font-semibold">
                          Economy Scientist - Infulencer
                        </p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogDescription>
                        <DialogBox />
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              ))}
            </div>

            <div className="w-full h-[1px] bg-[#8B8B8B] my-5"></div>

            <Image src="/assets/a2.png" width={100} height={100} />
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 my-2">
              {"ab".split("").map((item, index) => (
                <Dialog>
                  <DialogTrigger>
                    <div
                      className="flex justify-start items-center gap-2 rounded-md my-2 p-5"
                      style={{
                        boxShadow: "0px 4px 18px 0px rgba(0, 0, 0, 0.1)",
                      }}
                      key={index}
                    >
                      <div>
                        <Image
                          src={`/assets/p${index + 1}.png`}
                          alt="profile"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold">Speaker</p>
                        <h1 className="text-[14px] font-bold">
                          Johnathan N. Killip
                        </h1>
                        <p className="text-[9px] font-semibold">
                          Economy Scientist - Infulencer
                        </p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogDescription>
                        <DialogBox />
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              ))}
            </div>

            <div className="w-full h-[1px] bg-[#8B8B8B]"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

const SpeakerFilterBox = ({ isShadow }) => {
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
          <h1 className="text-sm font-bold text-[#AE0243]">Speaker Category</h1>
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
              <p className="text-sm text-[#555555]">Ministerial Speakers</p>
            </li>
            <li className="flex justify-start items-center gap-2 my-1">
              <input type="checkbox" />
              <p className="text-sm text-[#555555]">
                Strategic Conference Speakers
              </p>
            </li>
            <li className="flex justify-start items-center gap-2 my-1">
              <input type="checkbox" />
              <p className="text-sm text-[#555555]">
                Hydrogen Strategic Speakers
              </p>
            </li>
            <li className="flex justify-start items-center gap-2 my-1">
              <input type="checkbox" />
              <p className="text-sm text-[#555555]">
                Decarbonisation Conference Speakers
              </p>
            </li>
            <li className="flex justify-start items-center gap-2 my-1">
              <input type="checkbox" />
              <p className="text-sm text-[#555555]">
                Technical Conference Speakers
              </p>
            </li>
            <li className="flex justify-start items-center gap-2 my-1">
              <input type="checkbox" />
              <p className="text-sm text-[#555555]">
                ADNOC Trading Forum Speakers
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const DialogBox = () => {
  return (
    <div className="flex justify-start items-start gap-5">
      <div>
        <Image src="/assets/p1.png" width={100} height={100} />
        <Image src="/assets/a1.png" width={100} height={100} className="my-3" />
      </div>
      <div className="w-full inline-flex justify-start items-start flex-col">
        <div>
          <p className="text-[10px] font-semibold text-black text-left">Speaker</p>
          <h1 className="text-[14px] font-bold text-black">
            Johnathan N. Killip
          </h1>
          <p className="text-[9px] font-semibold text-black">
            Economy Scientist - Infulencer
          </p>
        </div>
        <hr />
        <p className="text-[10px] font-bold">Is speaking at</p>
        <p className="text-[14px] font-bold text-[#003756]">The event and session name</p>
        <ul className="flex justify-start items-start flex-col">
          <li className="text-[10px] text-gray-600 inline-flex justify-start items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <p>Muscat Exhibition, Ghala, Muscat, Oman</p>
          </li>
          <li className="text-[10px] text-gray-600 inline-flex justify-start items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
              />
            </svg>
            <p>Closing on December 11, 2023</p>
          </li>
          <li className="text-[10px] text-gray-600 inline-flex justify-start items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p>10:30AM - 11:30AM GMT</p>
          </li>
        </ul>
        <p className="text-[14px] font-bold text-[#003756]">The event and session name</p>
        <ul className="flex justify-start items-start flex-col">
          <li className="text-[10px] text-gray-600 inline-flex justify-start items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <p>Muscat Exhibition, Ghala, Muscat, Oman</p>
          </li>
          <li className="text-[10px] text-gray-600 inline-flex justify-start items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
              />
            </svg>
            <p>Closing on December 11, 2023</p>
          </li>
          <li className="text-[10px] text-gray-600 inline-flex justify-start items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p>10:30AM - 11:30AM GMT</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
