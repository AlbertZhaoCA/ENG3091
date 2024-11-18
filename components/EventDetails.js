import React from "react";

const EventDetails = ({ event }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">{event.name}</h2>
      <p className="text-gray-700 mb-2">{event.description}</p>
      <p className="text-gray-500 mb-2">{event.date}</p>
      <p className="text-gray-500">Hosted by: {event.club}</p>
    </div>
  );
};

export default EventDetails;
