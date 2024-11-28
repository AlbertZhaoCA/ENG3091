import React from "react";
import Link from "next/link";
import { FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa6";
import { useState, useEffect } from "react";
import getHtml from "@/actions/getHtml";
import Plugin from "@/components/ContentPlugin";

const EventDetails = ({ event, related }) => {
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href);
    }
  }, []);

  return (
    <div className="min-h-screen justify-between mx-auto  bg-gradient-to-b from-white to-gray-100 shadow-lg rounded-lg flex flex-col lg:flex-row">
      {!event.url && (
        <div className="p-8 max-w-4xl bg-white rounded-lg shadow-md flex-grow">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6 border-b-2 pb-2 border-gray-200">
            {event.name}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {event.description}
          </p>
          <div className="flex items-center justify-between text-gray-500 text-sm mt-4">
            <p>
              <span className="font-semibold">Date:</span> {event.date}
            </p>
            <p>
              <span className="font-semibold">Hosted by:</span> {event.club}
            </p>
          </div>
          <div className="prose prose-lg mt-6">
            <p>{event.content}</p>
          </div>
          {event.url && (
            <Link
              className="ml-auto text-blue-500 hover:underline block w-fit"
              href={event.url}
            >
              Learn more
            </Link>
          )}
        </div>
      )}
      {event.url && <Plugin type={event?.type} path={event.url} />}
      <div className="lg:mt-0 lg:w-1/4 bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-bold text-gray-800 ">Share the moments</h3>
        <div className="flex items-center justify-around space-x-4 w-3/4 mt-4">
          <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            className="flex items-center space-x-2"
          >
            <FaFacebook className="text-6xl text-blue-600 hover:text-blue-800" />
          </Link>
          <Link
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(event.name)}`}
            target="_blank"
            className="flex items-center space-x-2"
          >
            <FaTwitter className="text-6xl text-blue-400 hover:text-blue-600" />
          </Link>
          <Link
            href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&description=${encodeURIComponent(event.name)}`}
            target="_blank"
            className="flex items-center space-x-2"
          >
            <FaPinterest className="text-6xl text-red-600 hover:text-red-800" />
          </Link>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Related Events
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {related.map((event) => (
              <li key={event.id}>
                <Link
                  href={`/events/${event.id}`}
                  className="text-blue-600 hover:underline"
                >
                  {event.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
