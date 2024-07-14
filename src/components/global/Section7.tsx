"use client";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

const Section7 = (props: Props) => {
  return (
    <div className="container mx-auto mt-40">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-[50px]"
        >
          Articles & News
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-[22px]"
        >
          It is a long established fact that a reader will be distracted by the
          of readable content
          <br></br> of a page when lookings at its layouts the points of using.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-10">
        <div className="border rounded-[15%] hover:bg-[var(--lastest)] transition-all ">
          <div className="p-5">
            <div className="relative">
              <img
                src="/assets/section71.png"
                alt=""
                className="rounded-t-[15%] w-full"
              />
              <span className="bg-white rounded-lg rounded-bl-none absolute bottom-4 left-4 p-2">
                Kitchan Design
              </span>
            </div>
            <div>
              <h1 className="text-[25px] py-3">
                Let’s Get Solution For Building Construction Work
              </h1>
              <div className="flex items-center justify-between py-5">
                <div>
                  <p className="text-[16px] text-[#4D5053]">
                    26 December,2022{" "}
                  </p>
                </div>
                <img src="/assets/_.png" className="w-[60px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="border rounded-[15%] hover:bg-[var(--lastest)] transition-all">
          <div className="p-5">
            <div className="relative">
              <img
                src="/assets/section71.png"
                alt=""
                className="rounded-t-[15%] w-full"
              />
              <span className="bg-white rounded-lg rounded-bl-none absolute bottom-4 left-4 p-2">
                Living Design
              </span>
            </div>
            <div>
              <h1 className="text-[25px] py-3">
                Low Cost Latest Invented Interior Designing Ideas.
              </h1>
              <div className="flex items-center justify-between py-5">
                <div>
                  <p className="text-[16px] text-[#4D5053]">
                    26 December,2022{" "}
                  </p>
                </div>
                <img src="/assets/_.png" className="w-[60px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="border rounded-[15%] hover:bg-[var(--lastest)] transition-all">
          <div className="p-5">
            <div className="relative">
              <img
                src="/assets/section71.png"
                alt=""
                className="rounded-t-[15%] w-full"
              />
              <span className="bg-white rounded-lg rounded-bl-none absolute bottom-4 left-4 p-2">
                Interior Design
              </span>
            </div>
            <div>
              <h1 className="text-[25px] py-3">
                Best For Any Office & Business Interior Solution
              </h1>
              <div className="flex items-center justify-between py-5">
                <div>
                  <p className="text-[16px] text-[#4D5053]">
                    26 December,2022{" "}
                  </p>
                </div>
                <img src="/assets/_.png" className="w-[60px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
