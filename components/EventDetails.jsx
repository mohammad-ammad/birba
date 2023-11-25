import Image from "next/image";
import React from "react";

const EventDetails = () => {
  return (
    <div className="md:pl-24 md:pr-10">
      <p className="text-[12px] text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et
        tristique arcu. Proin tristique varius quam sed pharetra. Praesent
        dapibus rutrum rutrum. Sed et maximus enim. Cras aliquet finibus
        aliquet. Fusce ante augue, cursus vel euismod ut, dignissim a tortor.
        Nullam ac mollis urna. Pellentesque varius hendrerit dui. Aliquam et
        nisi felis. Sed dictum viverra leo. Morbi quis ultricies sapien.
      </p>
      <ul className="flex justify-start items-start flex-col my-5">
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
          <p>Conference Hall G4</p>
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
          <p>10:00 AM - 11:20 AM</p>
        </li>
      </ul>

      <div className="md:w-[70%]">
        <h1 className="text-[12px] font-semibold">Speakers:</h1>
        <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col md:flex-row justify-center md:justify-start items-center rounded-md p-2" style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.08)"}}>
                <div>
                    <Image src="/assets/p1.png" width={50} height={50} className="rounded-full" />
                </div>
                <div className="ml-3">
                    <h1 className="text-[12px] font-bold">Chris Jackson</h1>
                    <p className="text-[10px]">Lorem Speaker</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center md:justify-start items-center rounded-md p-2" style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.08)"}}>
                <div>
                    <Image src="/assets/p1.png" width={50} height={50} className="rounded-full" />
                </div>
                <div className="md:ml-3">
                    <h1 className="text-[12px] font-bold">Chris Jackson</h1>
                    <p className="text-[10px]">Lorem Speaker</p>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-4 my-2">
            <div className="flex flex-col md:flex-row justify-center md:justify-start items-center rounded-md p-2" style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.08)"}}>
                <div>
                    <Image src="/assets/p1.png" width={50} height={50} className="rounded-full" />
                </div>
                <div className="ml-3">
                    <h1 className="text-[12px] font-bold">Chris Jackson</h1>
                    <p className="text-[10px]">Lorem Speaker</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center md:justify-start items-center rounded-md p-2" style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.08)"}}>
                <div>
                    <Image src="/assets/p1.png" width={50} height={50} className="rounded-full" />
                </div>
                <div className="ml-3">
                    <h1 className="text-[12px] font-bold">Chris Jackson</h1>
                    <p className="text-[10px]">Lorem Speaker</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
