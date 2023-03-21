import React from "react";
import { useNostrEvents, dateToUnix  } from "nostr-react";
import EventCard from '../EventCard/EventCard';
import { useRef } from "react";

// pulling long form from a set time a while ago so it's bearable to style on
export default function LongformContent() {
    const now = useRef(new Date()); // Make sure current time isn't re-rendered

    const { events } = useNostrEvents({
        filter: {
          since: dateToUnix(now.current)-1000,
          kinds: [30023],
        },
      });
 
    console.log("LF EVENTS:", events)
      return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 p-3">
          {events.map((event) => (
            <EventCard event={event}/>
          ))}
        </div>
      );
    };

