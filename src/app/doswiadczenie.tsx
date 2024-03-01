import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHover() {
  return (
    <div id="umiejetnosci" data-aos="fade-left" className="max-w-5xl mx-auto px-8 pt-96">
        <h1 className="text-4xl text-slate-100 text-center pt-3 font-bold header-landing"> Moje umiejętności</h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [   
  {
    title: "Boty Discord",    
    description:
      "Moje umiejętności obejmują głównie GoLang, Nextcord oraz Discord.js. W trakcie mojej kariery zrealizowałem kilka innowacyjnych projektów, które pokazały moje zrozumienie funkcji i możliwości Discord API.",
    link: "#",
  },
  {
    title: "Strony Internetowe",
    description:
      "Specjalizuję się w tworzeniu stron internetowych. Moje główne narzędzia to React, Next.js i Tailwind CSS. Z pasją projektuję oraz tworzę funkcjonalne rozwiązania, które nie tylko spełniają oczekiwania użytkowników, ale także dostarczają im wyjątkowe doświadczenia.",
    link: "#",
  },
  {
    title: "Aplikacje Mobilne",
    description:
      "Moje umiejętności koncentrują się głównie na tworzeniu aplikacji z użyciem React Native. Moje projekty charakteryzują się nie tylko funkcjonalnością, ale także płynnością działania, co tworzy doskonałe doświadczenia mobilne.",
    link: "#",
  },

];
