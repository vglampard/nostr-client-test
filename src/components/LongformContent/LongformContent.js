import React from "react";
import { useNostrEvents, dateToUnix } from "nostr-react";
import EventCard from "../EventCard/EventCard";
import { useRef } from "react";
import { getImage, checkImage } from "../../helpers/helpers";

export default function LongformContent({ modalStates }) {

  //Get all longform events from 600000 posts ago (starting now)
  const now = useRef(new Date()); // Make sure current time isn't re-rendered
  const { events } = useNostrEvents({
    filter: {
      since: dateToUnix(now.current) - 600000,
      kinds: [30023],
    },
  });

  // Filter out any long form posts without image URLs that can be displayed (filters out file names and anything from Bucketeer)
  const imageEvents = events.filter((event) =>
    checkImage(getImage(event.tags))
  );

  return (

    // For each post, render one card with ability to pass its own info up to the modal component for display
    <div class="gap-3 columns-1 md:columns-3 lg:columns-4 md:px-5 px-2">
      {imageEvents.map((post) => (
        <EventCard post={post} modalStates={modalStates} />
      ))}
    </div>
  );
}
