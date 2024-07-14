"use client";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

const Section5 = (props: Props) => {
  return (
    <div className="container mx-auto mt-40">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-[50px]"
        >
          Follow Our Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-[22px]"
        >
          It is a long established fact that a reader will be distracted by the
          of readable <br></br> content of page lookings at its layouts points.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  py-36">
        <div className="overflow-hidden  p-10">
          <img
            src="/assets/section5.png"
            alt=""
            className="w-full rounded-tr-[15%]"
          />
          <div className="flex items-center justify-between py-5">
            <div>
              <h1 className="text-[25px]">Modern Kitchan</h1>
              <p className="text-[22px]">Decor / Artchitecture</p>
            </div>
            <img src="/assets/_.png" />
          </div>
        </div>
        <div className="overflow-hidden  p-10">
          <img
            src="/assets/section52.png"
            alt=""
            className="w-full rounded-tl-[15%]"
          />
          <div className="flex items-center justify-between py-5">
            <div>
              <h1 className="text-[25px]">Modern Kitchan</h1>
              <p className="text-[22px]">Decor / Artchitecture</p>
            </div>
            <img src="/assets/_.png" />
          </div>
        </div>
        <div className="overflow-hidden  p-10">
          <img
            src="/assets/section53.png"
            alt=""
            className="w-full rounded-br-[15%]"
          />
          <div className="flex items-center justify-between py-5">
            <div>
              <h1 className="text-[25px]">Modern Kitchan</h1>
              <p className="text-[22px]">Decor / Artchitecture</p>
            </div>
            <img src="/assets/_.png" />
          </div>
        </div>
        <div className="overflow-hidden  p-10">
          <img
            src="/assets/section54.png"
            alt=""
            className="w-full rounded-bl-[15%]"
          />
          <div className="flex items-center justify-between py-5">
            <div>
              <h1 className="text-[25px]">Modern Kitchan</h1>
              <p className="text-[22px]">Decor / Artchitecture</p>
            </div>
            <img src="/assets/_.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
