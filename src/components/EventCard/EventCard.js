import React from "react";
import LongformModal from "../LongformModal/LongformModal";
import "./textCard.css";
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
    <div className="textCard">
      <h1 className="font-bold">{title}</h1>
      <ReactMarkdown>{substring}</ReactMarkdown>
      <LongformModal event={event} />
      {img.length !== 0 && <img src={img[0][1]} alt={event.tags[0][1]} />}
    </div>
  );
}
