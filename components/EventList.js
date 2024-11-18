import React from "react";
import Link from "next/link";
import Image from "next/image";

const EventList = ({ events }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {events.map((event) => (
        <Link
          className="block p-4 bg-white shadow-md rounded-lg hover:bg-gray-100"
          key={event.id}
          href={`/events/${event.id}`}
        >
          <h3 className="text-xl font-bold">{event.name}</h3>
          <p className="text-gray-700">{event.description}</p>
          <p className="text-gray-500">{event.date}</p>
          {event.cover && <Image width={200} height={200} />}
          <p className="text-gray-500">Hosted by: {event.club}</p>
        </Link>
      ))}
    </div>
  );
};

export default EventList;
