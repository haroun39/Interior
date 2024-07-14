"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
type Props = {
  name: string;
  location: string;
  content: string;
  image: string;
  index: number;
};

const CardSection3 = ({ name, location, content, image, index }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 * index }}
      whileInView={{ opacity: 1, x: 0 }}
      className="flex flex-col items-start gap-5 bg-white p-10 rounded-3xl"
    >
      <div className="flex items-center gap-5">
        <Image
          src={image}
          width={100}
          height={100}
          alt="Content"
          className="w-[80px] h-[80px] max-lg:w-[50px] max-lg:h-[50px] rounded-full bg-[var(--primary)] object-cover"
        />
        <div>
          <h1 className="text-[25px] max-lg:text-[15px]">{name}</h1>
          <span>{location}</span>
        </div>
      </div>
      <p className="text-[22px] ">{content}</p>
    </motion.div>
  );
};

export default CardSection3;
