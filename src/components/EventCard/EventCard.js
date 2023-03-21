import React from "react";
import LongformModal from "../LongformModal/LongformModal";
import ReactMarkdown from 'react-markdown'

function getImage(event) {
  let img = event.filter((tag) => tag[0] === "image");
  return img;
}
function getByTitle(event){
  let title = event.filter((tag) => tag[0] === "title");
  return title;
}

function dateFromUnix(unix){
  return new Date(unix*1000).toLocaleString();
}

export default function EventCard({ event }) {
  let substring = event.content.substring(0, 350) + "...";
  let img = getImage(event.tags);
  let title = getByTitle(event.tags)[0][1]
let date = dateFromUnix(event.created_at)
  return (
    <div className="bg-orange-50 rounded-s drop-shadow max-w-[90%] p-3 text-xs">
      <h1 className="font-bold text-lg">{title}</h1>
      <p>{date}</p>
      <ReactMarkdown className ="flex flex-wrap break-all">{substring}</ReactMarkdown>
      {img.length !== 0 && <img src={img[0][1]} alt={event.tags[0][1]} className="w-[95%]  rounded-md text-center m-2" />}
      <LongformModal event={event} className="w-100"/>
     
    </div>
  );
}
