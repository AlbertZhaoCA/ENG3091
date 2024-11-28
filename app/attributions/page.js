'use client';

import React from "react";
import events from "@/data/events";
import clubs from "@/data/clubs";

export default function AttributionPage() {
  const generateAPA = (name, url, date) => {
    if (name === "Unknown") {
      return (
        <>
          "Vintage Camera" (n.d.). Retrieved from{" "}
          <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            {url}
          </a>
          . Public domain.
        </>
      );
    } else {
      return (
        <>
          "{name}" by {name}, {date}. Retrieved from{" "}
          <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            {url}
          </a>
          . Licensed under CC BY 4.0.
        </>
      );
    }
  };

  return (
    <div className="min-h-screen py-24 px-10">
      <h1 className="text-4xl font-bold mb-8">Attribution</h1>
      <div className="space-y-6">
        <ul className="list-disc pl-5 space-y-2">
          {clubs.map((club, index) => (
            <li key={index}>
              {generateAPA(club.name, club.logo, club.date)}
            </li>
          ))}
        </ul>
        <ul className="list-disc pl-5 space-y-2">
          {events.map((event, index) => (
            <li key={index}>
              {generateAPA(event.name, event.club, event.date)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
