"use client";;
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval;

export const CardStack = ({
  items,
  offset,
  scaleFactor
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    (<div className="relative h-200 w-200 md:h-60 md:w-96">
      {cards.map((card, index) => {
        return (
          (<motion.div
            key={card.id}
            className="absolute bg-white w-[600px]  h-[500px] rounded-3xl p-12 shadow-xl border border-neutral-200   shadow-black/[0.1]  flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}>
            <div className="font-normal text-neutral-700 ">
              {card.content}
            </div>
            <div className="space-y-4">
              <h1 className="text-neutral-500 font-medium">
                {card.name}
              </h1>
              <p className="text-neutral-400 font-normal">
                {card.designation}
              </p>
            </div>
          </motion.div>)
        );
      })}
    </div>)
  );
};
