import { useRef } from "react";
import { useNostrEvents, dateToUnix } from "nostr-react";
import EventCard from "../EventCard/EventCard";

export const GlobalFeed = () => {
  const now = useRef(new Date()); // Make sure current time isn't re-rendered

  const { events } = useNostrEvents({
    filter: {
      since: dateToUnix(now.current), // all new events from now
      kinds: [1],
    },
  });
console.log(events)
  return (
    <>
    <div className = "text-events-container">
      {events.map((event) => (
        <EventCard key={event.id} content = {event.content}/>
      ))}
      </div>
    </>
  );
};