"use client";

import Accordion from "@/components/Accordion";
import { useState } from "react";

export default function Home() {
  const accordionData = [
    {
      title: "South Africa VS Sri Lanka",
    },
    { title: "bangladesh vs sri lanka" },
    // Add more accordion data as needed
  ];

  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  return (
    <main className="">
      <div className="w-1/2 mx-auto flex justify-center items-center flex-col">
        {accordionData.map((accordion, index) => (
          <Accordion
            key={index}
            title={accordion.title}
            isOpen={index === openAccordionIndex}
            onToggle={() => handleAccordionToggle(index)}
          />
        ))}
      </div>
      {/* <iframe
        className="w-1/2 h-[60vh]"
        src="https://embedstreams.me/cricket-world-cup/south-africa-vs-sri-lanka-stream-1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe> */}
    </main>
  );
}
