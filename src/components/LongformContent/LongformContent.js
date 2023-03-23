import React from "react";
import { useNostrEvents, dateToUnix } from "nostr-react";
import EventCard from "../EventCard/EventCard";
import { useRef } from "react";
import { getImage, checkImage } from "../../helpers/helpers";

export default function LongformContent() {
  const now = useRef(new Date()); // Make sure current time isn't re-rendered
  const { events } = useNostrEvents({
    filter: {
      since: dateToUnix(now.current) - 350000,
      kinds: [30023],
    },
  });

const imageEvents = events.filter((event)=>checkImage(getImage(event.tags)));
  console.log("I EVENTS:", imageEvents);
  
  return (
    // <div className="grid lg:grid-cols-3 gap-3 md:grid-cols-2 sm:cols-1 p-3 m-5">
    //   {imageEvents.map((event) => (
    //     <EventCard event={event} />
    //   ))}
    // </div>
    <div class="gap-8 columns-3">

{imageEvents.map((event) => (
        <EventCard event={event} />
      ))}

</div>
  );
}
