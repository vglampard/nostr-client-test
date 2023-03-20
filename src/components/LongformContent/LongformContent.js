import React from "react";
import { useNostrEvents } from "nostr-react";
import EventCard from '../EventCard/EventCard';

export default function LongformContent() {

    const { events } = useNostrEvents({
        filter: {
          since: 0,
        //   kinds: [30023],
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

