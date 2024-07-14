"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  descriptoin: string;
  index: number;
};

const CardSection1 = ({ title, descriptoin ,index}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 * index }}
      whileInView={{ opacity: 1, x: 0 }}
      className="flex flex-col items-center gap-5 text-center px-10"
    >
      <h1 className="text-[25px]">{title}</h1>
      <p className="text-[22px]">{descriptoin}</p>
      <Link href="" className="mt-3">
        <div className="inline-flex gap-3 ">
          <span className="font-medium text-[18px]">Read More</span>
          <ArrowRight className="inline text-[var(--primary)]" />
        </div>
      </Link>
    </motion.div>
  );
};

export default CardSection1;
