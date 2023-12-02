"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LandingAgendaCard = ({ item }) => {
  return (
    <div className="bg-white p-5 cursor-pointer mb-5" style={{boxShadow: item.isOpen ? "0px 0px 8px 0px rgba(174, 2, 67, 0.5)" : "", borderBottom: item.isOpen ? "3px solid #AE0243" : ""}}>
      <span className={`${item.isOpen ? 'bg-[#AE0243]' : 'bg-[#638497]'} text-sm px-3 py-1 rounded-md text-white`}>{item.isOpen ? "Open" : "Comming Soon"}</span>
      <div className="flex justify-between items-start mt-3">
        <div className={`${item.isOpen ? 'text-[#AE0243]' : 'text-[#638497]'} font-bold text-lg leading-5`}>
          <h1>{item.date.slice(0, 4)}</h1>
          <h1>{item.date.slice(4, 14)}</h1>
          <h1>{item.date.slice(14, 18)}</h1>
        </div>
        <p>
          <Link
            href={item.link}
            className="text-[8px] md:text-[10px] font-semibold underline"
          >
            View more
          </Link>
        </p>
      </div>
      <div className="my-2">
        <Image src={item.image} width={100} height={80} />
      </div>
      <div className="my-3">
        <p className="text-[12px] font-bold">{item.desc}</p>
      </div>
      <ul>
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
          <p>{item.opt[0]}</p>
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
          <p>{item.opt[1]}</p>
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
          <p>{item.opt[2]}</p>
        </li>
      </ul>
    </div>
  );
};

export default LandingAgendaCard;
