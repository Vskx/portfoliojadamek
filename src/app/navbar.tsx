"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#omnie">O mnie</HoveredLink>
             <HoveredLink href="#projekty">Projekty</HoveredLink>
            <HoveredLink href="#umiejetnosci">Umiejętności</HoveredLink>
            {/* <HoveredLink href="/branding">Branding</HoveredLink> */}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projekty">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="SkyClicker"
              href="#"
              src="https://cdn.discordapp.com/attachments/1208137434689437727/1209541715015376926/LOGOTEGOUZYWAC.png?ex=65e74c81&is=65d4d781&hm=5bbecbf7b04defce84dbeab57b6f8cff3e8c40cbac7b2234993c13918e57b673&"
              description="Naciśnij aby dowiedzieć się więcej"
            />
            {/*<ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://cdn.discordapp.com/attachments/1208137434689437727/1209846286392500245/siema.png?ex=65e86828&is=65d5f328&hm=e487dabb25cba479c2a90ce0dbddcd9c7a3d0337e7beee0046dec6de935b3e75&"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://cdn.discordapp.com/attachments/1208137434689437727/1209846286392500245/siema.png?ex=65e86828&is=65d5f328&hm=e487dabb25cba479c2a90ce0dbddcd9c7a3d0337e7beee0046dec6de935b3e75&"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://cdn.discordapp.com/attachments/1208137434689437727/1209846286392500245/siema.png?ex=65e86828&is=65d5f328&hm=e487dabb25cba479c2a90ce0dbddcd9c7a3d0337e7beee0046dec6de935b3e75&"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
            */}
  </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Kontakt">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="https://discordapp.com/users/1136971751608307822">Discord</HoveredLink>
            <HoveredLink href="/individual">Mail</HoveredLink>

          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
