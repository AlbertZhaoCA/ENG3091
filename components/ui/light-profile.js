"use client";

import { StaticImageData } from "next/image";
import React from "react";


export default function LightProfile({
  avatar,
  person,
  onChildClick,
}) {
  return (
    <div className="dark:bg-slate-800 m-4 gap-6 flex items-center justify-center">
      <div className="bg-gray-100 dark:bg-gray-700 relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform">
        <div className="flex items-center gap-4">
          <img
            src={avatar.src}
            alt="Angela"
            className="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
          />
          <div className="w-fit transition-all transform duration-500">
            <h1 className="text-gray-600 dark:text-gray-200 font-bold">
              {person.name}
            </h1>
            <p className="text-gray-400">{person.intro} </p>
            <a className="text-xs text-gray-500 dark:text-gray-200 group-hover:opacity-100 opacity-0 transform transition-all delay-300 duration-500">
              {person.contact ?? "暂无联系方式"}
            </a>
          </div>
        </div>
        <div className="absolute group-hover:bottom-1 delay-300 -bottom-16 transition-all duration-500 bg-gray-100 dark:bg-gray-100 right-1 rounded-lg">
          <div className="flex justify-evenly items-center gap-2 p-1 text-2xl text-white dark:text-gray-600">
            {person.media?.map((MediaComponent, index) => (
              <div
                key={index}
                onClick={() => onChildClick && onChildClick[index]()}
              >
                <MediaComponent key={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
