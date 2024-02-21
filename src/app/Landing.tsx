export default function Landing() {
  
  return(
    <>
      <div id="siema" data-aos="fade-right" className="flex-1 flex flex-col items-center justify-center pt-40">
        <h1 className="text-7xl text-slate-100 text-center pt-3 font-bold header-landing">Siema Jestem <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-400">Jadamek</span></h1>
        <p className="pt-3 font-medium text-xl text-gray-200">Zapraszam Cię na moją stronę</p>

        <div className="pt-5">
          <a href="#omnie">
        <button data-aos="fade-right" data-aos-delay="100" className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-gray-200 text-[#000000] rounded-md  transition duration-200 ease-linear">
          Zaczynamy
      </button>
      </a>
      </div>
      </div>
    </>
  );
}