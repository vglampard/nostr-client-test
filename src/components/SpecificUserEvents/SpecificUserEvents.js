import React from "react";
import { useNostrEvents } from "nostr-react";
import { dateFromUnix } from "../../helpers/helpers";
// import EventCard from '../EventCard/EventCard';

export default function SpecificUserEvents({pubkey, username}) {

    const { events } = useNostrEvents({
        filter: {
          authors: [
            pubkey,
          ],
          since: 3000,
          kinds: [1],
        },
      });

    console.log("EVENTSs:", events);
    // filter out all evnts that have an e tag
    const posts = events.filter((event)=>{
      let tags = event.tags.filter((tag)=>tag.includes("e"));
      return tags.length===0
    })
    console.log("POSTS:", posts)

    return (
        <>
        {username} Events:
          {posts.map((event) => (
            <div className=" flex flex-col ">
            <p key={event.id} className="text-lg"> {event.content}</p>
            <p className="text-right"> at {dateFromUnix(event.created_at)}</p>
            </div>
          ))}
        </>
      );
    };

