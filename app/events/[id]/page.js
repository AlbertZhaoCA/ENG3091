"use client";

import React from "react";
import EventDetails from "@/components/EventDetails";
import { useParams } from "next/navigation";
import events from "@/data/events";

const EventPage = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);

  return (
    <div className="mt-24 container mx-auto p-4">
      <main className="p-4">
        {event ? <EventDetails event={event} /> : <p>Event not found</p>}
      </main>
    </div>
  );
};

export default EventPage;
