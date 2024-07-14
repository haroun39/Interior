"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Section2 = (props: Props) => {
  return (
    <div className="container mx-auto my-60 py-10">
      <div className="w-full grid grid-cols-2 gap-16 max-lg:grid-cols-1 ">
        <div className="hidden max-lg:block">
          <Image
            src="/assets/section2.jpg"
            width={1000}
            height={500}
            alt="section2"
            className="rounded-tr-[60%] h-[650px] object-cover rounded-bl-[20%] 
            max-lg:rounded-bl-3xl 
            max-lg:rounded-br-3xl 
            max-lg:rounded-tl-3xl
            max-lg:rounded-tr-3xl
            "
          />
        </div>
        <motion.div
          className="pr-[50px] max-lg:pr-0"
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-[60px] max-sm:text-[40px] leading-tight">
            We Create The Art Of Stylish Living Stylishly
          </h1>
          <p className="text-[22px] max-sm:text-[18px] mt-4">
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using that it has a more-or-less normal of readable that
            using it has a more-or-less normal.
          </p>
          <div className="my-10 mb-14 flex items-center gap-5">
            <Image
              src="/assets/Call Icon.png"
              width={70}
              height={70}
              alt="section2"
            />
            <div>
              <p className="text-[16px] font-bold">012345678</p>
              <p>Call Us Anytime</p>
            </div>
          </div>
          <Link href="" className="button">
            <div className="inline-flex gap-3">
              Get Free Estimate
              <ArrowRight className="inline text-[var(--primary)]" />
            </div>
          </Link>
        </motion.div>
        <motion.div
          className="max-lg:hidden"
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <motion.img
            initial={{ borderRadius: "60% 0% 20% 0%" }}
            transition={{ duration: 1 }}
            whileInView={{ borderRadius: "0% 60% 0% 20%" }}
            src="/assets/section2.jpg"
            width={1000}
            height={500}
            alt="section2"
            className=" h-[650px] object-cover  
            max-lg:rounded-bl-3xl 
            max-lg:rounded-br-3xl 
            max-lg:rounded-tl-3xl
            max-lg:rounded-tr-3xl
            "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Section2;
