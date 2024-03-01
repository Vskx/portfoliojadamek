"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <div  id="projekty" className="pt-96">
    <h1 data-aos="fade-right" className="text-4xl text-slate-100 text-center pt-3 font-bold header-landing"> Projekty</h1>
    <p data-aos="fade-right" className="pt-3 font-medium text-xl text-gray-200 text-center">Tutaj znajdują się projekty, w których brałem udział</p>
    <div>
    <CardContainer data-aos="fade-right" className="inter-var ">
        
        
      <CardBody data-aos="fade-right" className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-grey-700/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          SkyClicker.PL
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Możliwość współpracy ze SkyClickerem była przyjemnością. W projekcie miałem za zadanie Stworzyć Bota i Stronę. Niestety projekty SkyClicker się zakończył
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://cdn.discordapp.com/attachments/1208137434689437727/1209541715015376926/LOGOTEGOUZYWAC.png?ex=65e74c81&is=65d4d781&hm=5bbecbf7b04defce84dbeab57b6f8cff3e8c40cbac7b2234993c13918e57b673&"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sprawdź
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    </div>
    </div>
  );
}
