import LandingAgendaCard from "@/components/LandingAgendaCard";
import LandingSpeakerCard from "@/components/LandingSpeakerCard";
import { agenda_hero_dto } from "@/lib/agenda_hero_dto";
import { speakers_hero_dto } from "@/lib/speakers_hero_dto";
import Image from "next/image";
import FloorMap from "./floor-map/page";
import Gallery from "./gallery/page";
export default function Home() {
  return (
    <div className="pt-20">
      <div>
        <Image src="/assets/hero.png" alt="Hero Image" width={1900} height={500} />
      </div>
      <section className="bg-[#f8f8f8] md:px-10 pt-10">
        <h1 className="text-lg font-bold mb-5 text-center md:text-left">Agenda</h1>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {
            agenda_hero_dto.map((item,index) => (
              <LandingAgendaCard key={index} item={item}/>
            ))
          }
        </div>
      </section>

      <section className="bg-[#f8f8f8] px-5 md:px-10 py-10 flex flex-col md:flex-row justify-between items-center gap-5">
        <div>
          <Image src="/assets/r1.png" alt="r1" width={1900} height={500} />
        </div>
        <div>
          <h1 className="text-lg font-bold">Green Hydrogen Summit</h1>
          <p className="text-sm text-gray-500 text-justify">
            The Green Hydrogen Summit Oman is the largest Hydrogen event in the MENA region. Global decision-makers in policy, ﬁnance, tech and industry will come together for discussions geared towards driving the economies of the future and advancing energy solutions that can sustainably meet the energy demands of our growing population. This year at GHSO 2023, we are expecting more than 6000+ visitors and 3000+ delegates from more than 500 companies across the globe.
          </p>
        </div>
      </section>

      <section className="px-5 md:px-10 pt-10">
      <h1 className="text-lg font-bold mb-5 text-center md:text-left">Our Speakers</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {
          speakers_hero_dto.map((item, index) => (
            <LandingSpeakerCard key={index} item={item}/>
          ))
        }
      </div>
      </section>
      
    </div>
  )
}
