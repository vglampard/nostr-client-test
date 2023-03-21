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

export default function EventCard({ event }) {
  let substring = event.content.substring(0, 240) + "...";
  let img = getImage(event.tags);
  let title = getByTitle(event.tags)[0][1]

  return (
    <div className="bg-yellow-50 rounded-s drop-shadow max-w-[100%] p-3">
      <h1 className="font-bold text-lg">{title}</h1>
      <ReactMarkdown>{substring}</ReactMarkdown>
      <LongformModal event={event} />
      {img.length !== 0 && <img src={img[0][1]} alt={event.tags[0][1]} className="max-w-[95%] rounded-md text-center m-2" />}
    </div>
  );
}
