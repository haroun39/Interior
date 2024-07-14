import React from "react";
import CardSection1 from "./CardSection1";
import { title } from "process";

type Props = {};
const cards = [
  {
    title: "Project Plan",
    description:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
  },
  {
    title: "Interior Work",
    description:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
  },
  {
    title: "Realization",
    description:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
  },
];
const Section1 = (props: Props) => {
  return (
    <div className="container mx-auto my-60">
      <div className="w-full grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10">
        {cards.map((card, index) => {
          return (
            <CardSection1
              title={card.title}
              descriptoin={card.description}
              index={index}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Section1;
