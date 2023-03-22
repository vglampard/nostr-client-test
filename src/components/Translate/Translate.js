import React from "react";
import rightArrow from "./right-arrow.png";

export default function Translate() {
  return (
    <div className="flex space-x-4">
      <p className="flex-auto">
        Limited feature: first 5,000 characters copied to clipboard, jump over
        to DeepL to get best translation{" "}
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
