import React from "react";
import AnimatedCounter from "./AnimatedCounter";

type Props = {};

const Section6 = (props: Props) => {
  return (
    <div className="bg-[var(--lastest)] ">
      <div className="container mx-auto py-40">
        <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
          <div className="text-center border-r-[1px] border-[var(--primary)] max-sm:border-r-[0px]">
            <AnimatedCounter
              className="text-[var(--primary)] text-[85px]"
              value={12}
            />
            <p className="text-[22px] text-[#4D5053]">Years Of Experiance</p>
          </div>
          <div className="text-center border-r-[1px] max-md:border-r-[0px] border-[var(--primary)]">
            <AnimatedCounter
              className="text-[var(--primary)] text-[85px]"
              value={85}
            />
            <p className="text-[22px] text-[#4D5053]">Success Project</p>
          </div>
          <div className="text-center border-r-[1px] border-[var(--primary)] max-sm:border-r-[0px]">
            <AnimatedCounter
              className="text-[var(--primary)] text-[85px]"
              value={15}
            />
            <p className="text-[22px] text-[#4D5053]">Active Project</p>
          </div>
          <div className="text-center ">
            <AnimatedCounter
              className="text-[var(--primary)] text-[85px]"
              value={95}
            />
            <p className="text-[22px] text-[#4D5053]">Happy CUstomers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
