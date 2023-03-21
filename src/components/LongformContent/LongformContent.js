import React from "react";
import { useNostrEvents, dateToUnix  } from "nostr-react";
import EventCard from '../EventCard/EventCard';
import { useRef } from "react";

// pulling long form from a set time a while ago so it's bearable to style on
export default function LongformContent() {
    const now = useRef(new Date()); // Make sure current time isn't re-rendered

    const { events } = useNostrEvents({
        filter: {
          since: dateToUnix(now.current)-10000,
          kinds: [30023],
        },
      });
 
    console.log("LF EVENTS:", events)
      return (
        <>
          {events.map((event) => (
            <EventCard event={event}/>
          ))}
        </>
      );
    };

