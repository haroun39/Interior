import { ArrowBigRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const HeroHeder = (props: Props) => {
  return (
    <div
      className="container mx-auto h-[84.5vh] bg-[url(/assets/hero.png)] bg-no-repeat bg-cover rounded-[70px] max-xl:rounded-none mt-6 
    flex justify-start items-center 
    "
    >
      <div className="w-[450px] max-sm:w-full">
        <h1 className="text-[60px] max-sm:text-[50px]">Let Your Home Be Unique</h1>
        <p className="text-[22px] max-sm:text-[18px] mb-12">
          There are many variations of the passages of lorem Ipsum
          fromavailable, majority.
        </p>
        <Link href="" className="button ">
          <div className="inline-flex gap-3">
            Get Started
            <ArrowRight className="inline text-[var(--primary)]" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeroHeder;
