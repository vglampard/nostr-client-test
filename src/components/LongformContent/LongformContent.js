import React from "react";
import { useNostrEvents, dateToUnix  } from "nostr-react";
import EventCard from '../EventCard/EventCard';
import { useRef } from "react";

// pulling long form from a set time a while ago so it's bearable to style on
export default function LongformContent() {
    const now = useRef(new Date()); // Make sure current time isn't re-rendered

    const { events } = useNostrEvents({
        filter: {
          since: dateToUnix(now.current)-100000,
          kinds: [30023],
          authors:["8f69ac99b96f7c4ad58b98cc38fe5d35ce02daefae7d1609c797ce3b4f92f5fd"]
        },
      });
 
    console.log("LF EVENTS:", events)
      return (
        <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:cols-1 p-3">
          {events.map((event) => (
            <EventCard event={event}/>
          ))}
        </div>
      );
    };

