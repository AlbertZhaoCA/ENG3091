"use client";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";
import clubs from "@/data/clubs";
import Link from "next/link";


const shuffledClubs = clubs.slice(0,5);

export default function ClubCardStack() {
  return (
    (<div className="flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>)
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className
}) => {
  return (
    (<span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 px-1 py-0.5",
        className
      )}>
      {children}
    </span>)
  );
};
const CARDS = shuffledClubs.map((club, index) => ({
    id: index,
    name: <Highlight>{club.name}</Highlight>,
    designation: (
      <Link
        className="text-blue-500 hover:underline text-lg block ml-auto"
        href={club.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn more
      </Link>
    ),
    content: (
      <>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          {club.description}
        </p>
        <img
          className="block mx-auto rounded-lg shadow-lg my-8"
          width={200}
          height={200}
          src={club.logo}
          alt={`${club.name} logo`}
        />
      </>
    ),
  }));
  