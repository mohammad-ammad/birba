"use client";
import LandingAgendaCard from "@/components/LandingAgendaCard";
import { agenda_hero_dto } from "@/lib/agenda_hero_dto";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [cardState, setCardState] = useState(0);
  const data = [
    {
      img: "/assets/r1.png",
      title: "Green Hydrogen Summit",
      desc: "The Green Hydrogen Summit Oman is the largest Hydrogen event in the MENA region. Global decision-makers in policy, ﬁnance, tech and industry will come together for discussions geared towards driving the economies of the future and advancing energy solutions that can sustainably meet the energy demands of our growing population. This year at GHSO 2023, we are expecting more than 6000+ visitors and 3000+ delegates from more than 500 companies across the globe.",
    },
    {
      img: "/assets/six.png",
      title: "Green Hydrogen Summit 2",
      desc: "The Green Hydrogen Summit Oman is the largest Hydrogen event in the MENA region. Global decision-makers in policy, ﬁnance, tech and industry will come together for discussions geared towards driving the economies of the future and advancing energy solutions that can sustainably meet the energy demands of our growing population. This year at GHSO 2023, we are expecting more than 6000+ visitors and 3000+ delegates from more than 500 companies across the globe.",
    },
    {
      img: "/assets/r1.png",
      title: "Green Hydrogen Summit 3",
      desc: "The Green Hydrogen Summit Oman is the largest Hydrogen event in the MENA region. Global decision-makers in policy, ﬁnance, tech and industry will come together for discussions geared towards driving the economies of the future and advancing energy solutions that can sustainably meet the energy demands of our growing population. This year at GHSO 2023, we are expecting more than 6000+ visitors and 3000+ delegates from more than 500 companies across the globe.",
    },
    {
      img: "/assets/six.png",
      title: "Green Hydrogen Summit 4",
      desc: "The Green Hydrogen Summit Oman is the largest Hydrogen event in the MENA region. Global decision-makers in policy, ﬁnance, tech and industry will come together for discussions geared towards driving the economies of the future and advancing energy solutions that can sustainably meet the energy demands of our growing population. This year at GHSO 2023, we are expecting more than 6000+ visitors and 3000+ delegates from more than 500 companies across the globe.",
    },
    {
      img: "/assets/r1.png",
      title: "Green Hydrogen Summit 5",
      desc: "The Green Hydrogen Summit Oman is the largest Hydrogen event in the MENA region. Global decision-makers in policy, ﬁnance, tech and industry will come together for discussions geared towards driving the economies of the future and advancing energy solutions that can sustainably meet the energy demands of our growing population. This year at GHSO 2023, we are expecting more than 6000+ visitors and 3000+ delegates from more than 500 companies across the globe.",
    },
  ];
  return (
    <div className="pt-20 pb-10 bg-[#f8f8f8]">
      <div>
        <div className="relative">
          <img src="/assets/r5.png" className="w-full h-[120px]"/>
          <img src="/assets/logo2.png" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px]"/>
        </div>
        <Image
          src="/assets/hero.png"
          alt="Hero Image"
          width={1900}
          height={500}
        />
      </div>
      <section className="bg-[#f8f8f8] px-2 md:px-10 pt-10">
        <h1 className="text-[24px] font-bold mb-5 text-left">Agenda</h1>
        <div className="overflow-x-auto">
          <div className="flex flex-nowrap space-x-2 md:space-x-4">
            {agenda_hero_dto.map((item, index) => (
              <LandingAgendaCard
                key={index}
                item={item}
                index={index}
                setCardState={setCardState}
                cardState={cardState}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f8f8] px-5 md:px-10 py-10 flex flex-col md:flex-row justify-between items-center gap-5">
        <div>
          <Image
            src={data[cardState]?.img}
            alt="r1"
            width={1900}
            height={500}
          />
        </div>
        <div>
          <h1 className="text-lg font-bold">{data[cardState]?.title}</h1>
          <p className="text-sm text-gray-500 text-justify">
            {data[cardState]?.desc}
          </p>
          <p className="my-5">
            <Link
              href="/"
              className="bg-[#AE0243] w-[100px] h-[70px] px-5 py-1 rounded-md text-sm text-white shadow-md"
            >
              Read more
            </Link>
          </p>
        </div>
      </section>

      {/* <section className="px-5 md:px-10 pt-10">
      <h1 className="text-lg font-bold mb-5 text-center md:text-left">Our Speakers</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {
          speakers_hero_dto.map((item, index) => (
            <LandingSpeakerCard key={index} item={item}/>
          ))
        }
      </div>
      </section> */}
    </div>
  );
}
