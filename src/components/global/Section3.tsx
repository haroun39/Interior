import Image from "next/image";
import React from "react";
import CardSection3 from "./CardSection3";

type Props = {};
const cards = [
  {
    image: "/assets/user1.jpg",
    name: "Nattasha Mith",
    location: "Sydney, USA",
    content: `Lorem Ipsum is simply dummy 
text of the typesetting industry. 
Ipsum has been.`,
  },
  {
    image: "/assets/user2.jpg",
    name: "Nattasha Mith",
    location: "Sydney, USA",
    content: `Lorem Ipsum is simply dummy 
text of the typesetting industry. 
Ipsum has been scrambled it 
to make a type book.`,
  },
  {
    image: "/assets/user3.jpg",
    name: "Nattasha Mith",
    location: "Sydney, USA",
    content: `Lorem Ipsum is simply dummy 
text of the typesetting industry. 
Ipsum has been scrambled.`,
  },
];
const Section3 = (props: Props) => {
  return (
    <div className="container mx-auto rounded-t-[100px] rounded-b-[50px] bg-[var(--lastest)] p-20 mt-60 max-sm:p-10 max-xl:rounded-none">
      <h1 className="text-[50px] text-center max-sm:text-[30px]">
        What the People Thinks <br></br>About Us
      </h1>
      <div className="w-full grid grid-cols-3 gap-5 mt-5 max-lg:grid-cols-2 max-sm:grid-cols-1 ">
        {cards.map((card, index) => {
          return (
            <CardSection3
              name={card.name}
              location={card.location}
              content={card.content}
              image={card.image}
              index={index}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Section3;
