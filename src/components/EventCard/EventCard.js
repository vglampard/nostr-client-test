import React from 'react'
import "./textCard.css"
export default function EventCard({content}) {
  return (
    <div className="textCard">
        <p>{content}</p>
    </div>
  )
}
