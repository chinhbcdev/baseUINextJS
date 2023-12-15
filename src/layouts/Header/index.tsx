import { Button } from "@/app/components";
import Image from "next/image";
import React from "react";

const Header = () => {
  const data = [
    { name: "Process", path: "#" },
    { name: "Challenges", path: "#" },
    { name: "Community", path: "#" },
    { name: "Insights", path: "#" },
    { name: "FAQs", path: "#" },
    { name: "About", path: "#" },
    { name: "Contact", path: "#" },
  ];
  return (
    <header className="mt-[11px] flex justify-between fixed top-0 left-0 right-0 mx-auto max-w-[1428px] z-50">
      <div className="flex items-end">
        <Image src="/logo.png" alt="logo" width={47} height={40} />
        <h1 className="text-[white] font-bold text-[22px] leading-[30px] ml-2">
          TRADINGPIT
        </h1>
      </div>
      <div className="flex items-end gap-8">
        {data.map((item, index) => (
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B0B7C3] font-normal text-base"
            key={index}
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="flex items-end gap-4">
         <Button type="primary">Primary Button</Button>
      <Button>Dashboard</Button> 
        
        <img src="/header/ukFlag.png" alt="" />
      </div>
    </header>
  );
};

export default Header;
