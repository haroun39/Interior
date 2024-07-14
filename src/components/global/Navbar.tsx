import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div>
      <nav className="">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-28">
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/assets/Logo.png"
                  width={120}
                  height={120}
                  alt="logo"
                />
              </Link>
            </div>
            <div className="items-center gap-10 hidden md:block">
              <nav className="flex gap-10">
                <Link href="#" className="text-black text-[20px]">
                  Home
                </Link>
                <Link href="#" className="text-black text-[20px] ml-4">
                  Pages
                </Link>
                <Link href="#" className="text-black text-[20px] ml-4">
                  Services
                </Link>
                <Link href="#" className="text-black text-[20px] ml-4">
                  Project
                </Link>
                <Link href="#" className="text-black text-[20px] ml-4">
                  Blog
                </Link>
              </nav>
            </div>
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
