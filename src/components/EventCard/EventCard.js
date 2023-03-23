import React from "react";
import { useState } from "react";

import ReactMarkdown from "react-markdown";
import userIcon from "./user.png";
import {
  getImage,
  getTitle,
  dateFromUnix,
  getTags,
} from "../../helpers/helpers";

export default function EventCard({ post, modalStates }) {
  let substring = post.content.substring(0, 100) + "...";
  let [seeMore, setSeeMore] = useState(false)

  let img = getImage(post.tags);
  let title = getTitle(post.tags);
  let date = dateFromUnix(post.created_at);
  let tags = getTags(post.tags);

  return (
    <div className="bg-slate-100 bg-opacity-50 rounded break-inside-avoid drop-shadow-xl text-xs flex flex-col h-auto w-full aspect-video mb-6  ">
      <h1 className="font-bold pt-1 leading-1">{title}</h1>
      <p className="text-xs">{date}</p>
   
      {img.length !== 0 && (
        <img
          src={img[0][1]}
          alt={post.tags[0][1]}
          className="w-[1oo%]"
        />
      )}

      <div className="flex gap-1 flex-wrap justify-start">
        {tags.map((tag) => {
          return <p className="bg-orange-50 rounded-lg ">#{tag[1]}</p>;
        })}
      </div>
      <button  className="bg-slate-200 bg-opacity-30 text-white active:bg-slate-600 font-bold uppercase text-sm  py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-2 mb-2 ease-linear transition-all duration-150 align-right w-9"
              onClick={() => {
                modalStates.setModalEvent(post); setSeeMore(!seeMore);
              }}
            >
              . . .
            </button>
{seeMore && <div className="bg-white bg-opacity-40 rounded-lg">
        <div className=" break-words w-[100%] items-center p-2">
          <img src={userIcon} alt="user icon" className="w-4 h-4" />
          <p className="break-words w-[100%]">{post.pubkey}</p>
          <div className="grid justify-items-end">
              <ReactMarkdown className="flex flex-wrap break-all text-xs p-2">
        {substring}
      </ReactMarkdown>
            <button
              className=""
              type="button"
              onClick={() => {
                modalStates.setShowModal(true);
              }}
            >
              Read full...
            </button>
          </div>
        </div>
      </div>}
      
    </div>
  );
}
