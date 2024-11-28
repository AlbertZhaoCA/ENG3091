import React from "react";
import EventList from "@/components/EventList";
import events from "@/data/events";

const EventsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="mt-24 p-4 text-center">
        <h1 className="text-2xl bold">Events And Activities</h1>
      </header>
      <main className="p-4">
        <EventList events={events} />
      </main>
    </div>
  );
};

export default EventsPage;
