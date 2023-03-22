import React from "react";
import { useNostrEvents } from "nostr-react";
// import EventCard from '../EventCard/EventCard';

export default function SpecificUserEvents() {

    const { events } = useNostrEvents({
        filter: {
          authors: [
            "npub1sg6plzptd64u62a878hep2kev88swjh3tw00gjsfl8f237lmu63q0uf63m",
          ],
          since: 0,
          kinds: [1],
        },
      });
    
      return (
        <>
          {events.map((event) => (
            <p key={event.id}>{event.pubkey} posted: {event.content}</p>
          ))}
        </>
      );
    };

