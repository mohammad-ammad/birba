import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import EventDetails from "./EventDetails";

const AgendaAccordian = ({ date }) => {
  return (
    <div className="bg-[#fcfcfceb] py-3 px-5 rounded-md">
      <div className="text-[#AE0243] font-bold text-2xl leading-5 pb-3">
        <h1>{date.slice(0, 4)}</h1>
        <h1>{date.slice(4, 14)}</h1>
        <h1>{date.slice(14, 18)}</h1>
      </div>
      <hr />
      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex flex-col md:flex-row justify-between items-center gap-5 px-2 w-full">
                <div className="flex justify-start items-center gap-5">
                  <div className="text-[#AE0243] font-bold text-md leading-5 pb-3 min-w-[80px]">
                    <h1>10:00 AM</h1>
                    <h1>11:20 PM</h1>
                  </div>
                  <div>
                    <p className="text-md text-left">
                      Session 1: Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit
                    </p>
                  </div>
                </div>
                <div>
                  <button className="bg-[#AE0243] text-white px-2 py-1 rounded-md">Give Feedback</button>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <EventDetails />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
          <AccordionTrigger>
              <div className="flex flex-col md:flex-row justify-between items-center gap-5 px-2 w-full">
                <div className="flex justify-start items-center gap-5">
                  <div className="text-[#AE0243] font-bold text-md leading-5 pb-3 min-w-[80px]">
                    <h1>10:00 AM</h1>
                    <h1>11:20 PM</h1>
                  </div>
                  <div>
                    <p className="text-md text-left">
                      Session 1: Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit
                    </p>
                  </div>
                </div>
                <div>
                  <button className="bg-[#DA8AA8] text-white px-2 py-1 rounded-md">Give Feedback</button>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <EventDetails />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="bg-[#003756]">
            <AccordionTrigger isIcon={false}>
              <div className="flex justify-start items-center gap-5 px-5">
                <div className="text-white font-bold text-md leading-5 pb-3 min-w-[80px] text-left">
                  <h1>10:00 AM</h1>
                  <h1>11:20 PM</h1>
                </div>
                <div>
                  <p className="text-md text-white text-center">Break</p>
                </div>
              </div>
            </AccordionTrigger>
          </AccordionItem>
          <AccordionItem value="item-4">
          <AccordionTrigger>
              <div className="flex flex-col md:flex-row justify-between items-center gap-5 px-2 w-full">
                <div className="flex justify-start items-center gap-5">
                  <div className="text-[#AE0243] font-bold text-md leading-5 pb-3 min-w-[80px]">
                    <h1>10:00 AM</h1>
                    <h1>11:20 PM</h1>
                  </div>
                  <div>
                    <p className="text-md text-left">
                      Session 1: Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit
                    </p>
                  </div>
                </div>
                <div>
                  <button className="bg-[#DA8AA8] text-white px-2 py-1 rounded-md">Give Feedback</button>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <EventDetails />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
          <AccordionTrigger>
              <div className="flex flex-col md:flex-row justify-between items-center gap-5 px-2 w-full">
                <div className="flex justify-start items-center gap-5">
                  <div className="text-[#AE0243] font-bold text-md leading-5 pb-3 min-w-[80px]">
                    <h1>10:00 AM</h1>
                    <h1>11:20 PM</h1>
                  </div>
                  <div>
                    <p className="text-md text-left">
                      Session 1: Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit
                    </p>
                  </div>
                </div>
                <div>
                  <button className="bg-[#DA8AA8] text-white px-2 py-1 rounded-md">Give Feedback</button>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <EventDetails />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default AgendaAccordian;
