"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function ClubList({ clubs }) {
  const [currentPage, setCurrentPage] = useState(1);
  const clubsPerPage = 6;

  const indexOfLastClub = currentPage * clubsPerPage;
  const indexOfFirstClub = indexOfLastClub - clubsPerPage;
  const currentClubs = clubs.slice(indexOfFirstClub, indexOfLastClub);

  const totalPages = Math.ceil(clubs.length / clubsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <section
        id="clubs-list"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-12"
      >
        {currentClubs.map((club) => (
          <div
            key={club.name}
            className="club-item flex flex-col justify-between bg-white border border-gray-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={club.logo}
              alt={club.name}
              className="h-32 w-32 object-cover mx-auto mb-4 rounded-full"
            />
            <h2 className="text-2xl text-black font-bold mb-2">{club.name}</h2>
            <p className="text-gray-700 mb-4">{club.description}</p>
            <Link
              className="block ml-auto text-blue-500 hover:underline"
              href={`/club?name=${club.name}`}
            >
              Learn more
            </Link>
          </div>
        ))}
      </section>
      <div className="flex justify-center m-8">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handleClick(index + 1)}
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
