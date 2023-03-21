import React from "react";
import LongformModal from "../LongformModal/LongformModal";
import "./textCard.css";

function getImage(event) {
  let img = event.filter((tag) => tag[0] === "image");
  return img;
}

export default function EventCard({ event }) {
  let substring = event.content.substring(0, 240) + "...";
  let img = getImage(event.tags);
  return (
    <div className="textCard">
      <h1>{event.tags[1][1]}</h1>
      <p>{substring}</p>
      <LongformModal event={event} />
      {img.length !== 0 && <img src={img[0][1]} alt={event.tags[0][1]} />}
    </div>
  );
}
