import React from "react";
import rightArrow from "./right-arrow.png";

export default function Translate() {
  return (
    <div className="flex space-x-4">
      <p className="flex-auto">
        First 5,000 characters copied to clipboard! Click here to go to to DeepL
        and paste into the translator.{" "}
      </p>
      <a
        href="https://www.deepl.com/translator"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={rightArrow}
          alt="arrow that takes user to DeepL translator when clicked"
          className="h-[50%]"
        />
      </a>
    </div>
  );
}
