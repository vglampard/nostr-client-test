import React from "react";
import LongformModal from "../LongformModal/LongformModal";
import ReactMarkdown from "react-markdown";
import userIcon from "./user.png"
import { getImage, getTitle, dateFromUnix, getTags } from "../../helpers/helpers";

export default function EventCard({ event }) {
  let substring = event.content.substring(0, 500) + "...";
  let img = getImage(event.tags);
  let title = getTitle(event.tags)[0][1];
  let date = dateFromUnix(event.created_at);
  let tags = getTags(event.tags);

  return (
    <div className="bg-slate-100 rounded-lg drop-shadow max-w-[80vw] p-3 text-xs flex flex-col">
      <h1 className="font-bold text-base">{title}</h1>
      <p>{date}</p>
      <ReactMarkdown className="flex flex-wrap break-all text-xs p-2">
        {substring}
      </ReactMarkdown>
      {img.length !== 0 && (
        <img
          src={img[0][1]}
          alt={event.tags[0][1]}
          className="rounded text-center m-2 max-w-[1oovw]"
        />
      )}
      
      <div className="flex gap-1">
        {tags.map((tag) => {
          return <p className="bg-orange-50 rounded-lg ">#{tag[1]}</p>;
        })}
      </div>
      <div className="flex break-words w-[100%] items-center p-2">
        <img src={userIcon} alt="user icon" className="w-4 h-4"/>
      <p className="break-words w-[100%]">{event.pubkey}</p>
      </div>
      <LongformModal textEvent={event} title={title} />
    </div>
  );
}
