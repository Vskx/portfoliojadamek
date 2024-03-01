import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div id="omnie" data-aos="fade-left" className="max-w-5xl mx-auto px-8 pt-96">
        <h1 className="text-4xl text-slate-100 text-center pt-3 font-bold header-landing"> O mnie</h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [   
  {
    title: "W skrócie!",    
    description:
      "Jestem Adam i jestem młodym programistą 😂. Mam 15 lat.",
    link: "#",
  },
  {
    title: "Zainteresowania!",
    description:
      "Bardzo interesuję sie programowaniem, szczególnie stron internetowych i aplikacji, a także botów discord. Moje inne zainteresowania to Rowery, Piłka nożna i Fizyka.",
    link: "#",
  },
  {
    title: "Nad czym precuję!",
    description:
      "Aktualnie staram sie rozwijać swoje umiejętności w zakresie frontendu i tworzenia botów discord",
    link: "#",
  },

];
