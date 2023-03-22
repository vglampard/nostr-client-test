import React from 'react'
import rightArrow from "./right-arrow.png"

export default function Translate() {
  return (
    <div >
        <p>Limited feature: first 5,000 characters copied to clipboard, jump over to DeepL to get best translation </p>
      <a href="https://www.deepl.com/translator"><img
            src={rightArrow}
            alt="arrow that takes usesr to DeepL translator when clicked"
          /></a>

</div>
      
  )
}