import React from "react";
import { useNostrEvents, dateToUnix } from "nostr-react";
import EventCard from "../EventCard/EventCard";
import { useRef } from "react";
import { getImage } from "../../helpers/helpers";

// pulling long form from a set time a while ago so it's bearable to style on
export default function LongformContent() {
  const now = useRef(new Date()); // Make sure current time isn't re-rendered

  const { events } = useNostrEvents({
    filter: {
      since: dateToUnix(now.current) - 3000000,
      kinds: [30023],
    },
  });
const imageEvents = events.filter((event)=>getImage(event.tags).length>0);

  console.log("I EVENTS:", imageEvents)
  return (
    <div className="grid z-10 lg:grid-cols-3 gap-10 md:grid-cols-2 sm:cols-1 p-3 m-5">
      {events.map((event) => (
        <EventCard event={event} />
      ))}
    </div>
  );
}
