import React from 'react'
import LongformModal from '../LongformModal/LongformModal'

import "./textCard.css"
export default function EventCard({event}) {
  let substring = event.content.substring(0,240)+"..."
  console.log("SUBSTRING:", substring)
  return (
    <div className="textCard">
        <p>{substring}</p>
        <LongformModal event={event}/>
        {event.tags[5] && <img src={event.tags[5][1]} alt={event.tags[0][1]}/>}
    </div>
  )
}
