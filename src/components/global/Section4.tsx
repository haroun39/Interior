import Image from "next/image";
import React from "react";
import "./crousel.css";
import Slider from "./Slider";
type Props = {};
const slider1Images = [
  { src: "/assets/01.svg", alt: "Slide 1" },
  { src: "/assets/02.svg", alt: "Slide 2" },
  { src: "/assets/03.svg", alt: "Slide 3" },
  { src: "/assets/04.svg", alt: "Slide 4" },
  { src: "/assets/05.svg", alt: "Slide 5" },
];
const Section4 = (props: Props) => {
  return (
    <div className="container mx-auto my-40">
      <Slider images={slider1Images} width="100px" height="100px" quantity={5} />
    </div>
  );
};

export default Section4;
