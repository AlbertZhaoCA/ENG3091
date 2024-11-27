"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import clubs from "@/data/clubs";

export function Card({ event }) {
  const club = clubs.find((club) => club?.id === event.club_id);
  let cover =
    "https://www.wku.edu.cn/sites/main.prod.dpmgr.wku.edu.cn/files/2024-09/20230831162808_0.png";
  if (event.cover) {
    cover = event.cover;
  }

  return (
    <div className=" w-full group/card">
      <div
        style={{ backgroundImage: `url(${cover})` }}
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto backgroundImage flex flex-col justify-between p-4",
          "bg-cover",
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 bg-black  group-hover/card:opacity-20 opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <Image
            height="100"
            width="100"
            alt="Avatar"
            src={club?.logo}
            className="h-10 w-10 rounded-full border-2 object-cover"
          />

          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              {event.club}
            </p>
            <p className="text-sm text-gray-400">{event.date}</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {event.name}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {event.description}
          </p>
        </div>
      </div>
    </div>
  );
}
