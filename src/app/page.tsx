"use client"
import { NavbarDemo } from "./navbar";
import Landing from "./Landing";
import AOS from "aos";  
import { CardHoverEffectDemo } from "./kimjestem";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ThreeDCardDemo } from "./projekty";
import { CardHover } from "./doswiadczenie";
import Kontakt from "./kontakt";
import Footer from "./footer";







export default function Home() {
  useEffect(() => {
    document.title = 'Joł siema hej czesc';
    AOS.init()
  },[])

  return (
    <main >
      <NavbarDemo />
      <Landing/>
      <CardHoverEffectDemo />
      <ThreeDCardDemo />
      <CardHover />
      <Kontakt />
      <Footer />
      





    </main>

  );
}
