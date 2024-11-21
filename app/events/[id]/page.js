"use client";

import React from "react";
import EventDetails from "@/components/EventDetails";
import { useParams } from "next/navigation";
import events from "@/data/events";

const EventPage = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id == Number(id));
  const related = events.filter((e) => event.club_id == Number(e.club_id));

  return (
    <div className="mt-24 container mx-auto p-4">
        {event ? <EventDetails related={related} event={event} /> : <p>Event not found</p>}
    </div>
  );
};

export default EventPage;
