import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import EventDetails from "./EventDetails";
const EventCard = () => {
  return (
    <div className="bg-[#fcfcfceb] py-3 px-5 rounded-md">
      <div className="py-10">
        <h1 className="text-black text-lg font-bold">Green Hydrogen Summit</h1>
        <h2 className="text-black text-sm font-bold mt-10">Summary</h2>
        <p className="text-[12px] text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et
          tristique arcu. Proin tristique varius quam sed pharetra. Praesent
          dapibus rutrum rutrum. Sed et maximus enim. Cras aliquet finibus
          aliquet. Fusce ante augue, cursus vel euismod ut, dignissim a tortor.
          Nullam ac mollis urna. Pellentesque varius hendrerit dui. Aliquam et
          nisi felis. Sed dictum viverra leo. Morbi quis ultricies sapien.
        </p>
      </div>
      <hr />
      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex justify-start items-center gap-5 px-2">
                <div className="text-[#AE0243] font-bold text-md leading-5 pb-3">
                  <h1>10:00 AM</h1>
                  <h1>11:20 PM</h1>
                </div>
                <div>
                  <p className="text-md">
                    Session 1: Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <EventDetails/>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <div className="flex justify-start items-center gap-5 px-2">
                <div className="text-[#003756] font-bold text-md leading-5 pb-3">
                  <h1>10:00 AM</h1>
                  <h1>11:20 PM</h1>
                </div>
                <div>
                  <p className="text-md">
                    Session 1: Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
            <EventDetails/>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="bg-[#003756]">
            <AccordionTrigger>
              <div className="flex justify-start items-center gap-5 px-2">
                <div className="text-white font-bold text-md leading-5 pb-3">
                  <h1>10:00 AM</h1>
                  <h1>11:20 PM</h1>
                </div>
                <div>
                  <p className="text-md text-white text-center">Break</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
            <EventDetails/>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <div className="flex justify-start items-center gap-5 px-2">
                <div className="text-[#003756] font-bold text-md leading-5 pb-3">
                  <h1>10:00 AM</h1>
                  <h1>11:20 PM</h1>
                </div>
                <div>
                  <p className="text-md">
                    Session 1: Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
            <EventDetails/>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              <div className="flex justify-start items-center gap-5 px-2">
                <div className="text-[#003756] font-bold text-md leading-5 pb-3">
                  <h1>10:00 AM</h1>
                  <h1>11:20 PM</h1>
                </div>
                <div>
                  <p className="text-md">
                    Session 1: Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
            <EventDetails/>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default EventCard;
