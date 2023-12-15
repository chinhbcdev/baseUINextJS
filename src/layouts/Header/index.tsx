import { Button } from "@/app/components";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="mt-[11px] flex justify-between fixed top-0 left-0 right-0 mx-auto max-w-[1428px] z-50">
      <div className="flex items-end">
        <Image src="/logo.png" alt="logo" width={47} height={40} />
        <h1 className="text-[white] font-bold text-[22px] leading-[30px] ml-2">
          TRADINGPIT
        </h1>
      </div>
      <div className="flex items-end gap-8">
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B0B7C3] font-normal text-base"
        >
          Process
        </a>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B0B7C3] font-normal text-base"
        >
          Process
        </a>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B0B7C3] font-normal text-base"
        >
          Process
        </a>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B0B7C3] font-normal text-base"
        >
          Process
        </a>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B0B7C3] font-normal text-base"
        >
          Process
        </a>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B0B7C3] font-normal text-base"
        >
          Process
        </a>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B0B7C3] font-normal text-base"
        >
          Process
        </a>
      </div>
      <div className="flex items-end">
        {/* <Button type="primary">Primary Button</Button>
      <Button>Dashboard</Button> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <circle cx="20" cy="20" r="19.5" fill="#F1F3F8" stroke="#D6DCE7" />
        </svg>
      </div>
    </header>
  );
};

export default Header;
