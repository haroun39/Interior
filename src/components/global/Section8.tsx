import Link from "next/link";
import React from "react";
import { ArrowBigRight, ArrowRight } from "lucide-react";
type Props = {};

const Section8 = (props: Props) => {
  return (
    <div className="container mx-auto rounded-3xl max-xl:rounded-none bg-[var(--secondary)] flex flex-col items-center p-10 my-40 text-center">
      <h1 className="text-[50px] text-white">Wanna join the interno?</h1>
      <p className="text-[22px] text-white">
        It is a long established fact will be distracted.
      </p>
      <Link href="" className="button-primary  mt-5">
        <div className="inline-flex gap-3">
          Contact With Us
          <ArrowRight className="inline text-[var(--secondary)]" />
        </div>
      </Link>
    </div>
  );
};

export default Section8;
