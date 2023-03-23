import React from "react";
import { useNostrEvents, dateToUnix } from "nostr-react";
import EventCard from "../EventCard/EventCard";
import { useRef } from "react";
import { getImage, checkImage } from "../../helpers/helpers";

export default function LongformContent({modalStates}) {
  const now = useRef(new Date()); // Make sure current time isn't re-rendered
  const { events } = useNostrEvents({
    filter: {
      since: dateToUnix(now.current) - 350000,
      kinds: [30023],
    },
  });

const imageEvents = events.filter((event)=>checkImage(getImage(event.tags)));
  
  return (
    <div class="gap-3 columns-1 md:columns-3 lg:columns-4%">

{imageEvents.map((post) => (
        <EventCard post={post} modalStates={modalStates} />
      ))}

</div>
  );
}
