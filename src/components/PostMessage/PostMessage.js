import React from "react";
import { useNostr, dateToUnix } from "nostr-react";
import { getEventHash, getPublicKey, signEvent } from "nostr-tools";

export default function PostMessage() {
  const { publish } = useNostr();
  const onPost = async () => {
    const privKey = prompt("Paste your private key:");

    if (!privKey) {
      alert("no private key provided");
      return;
    }

    const message = prompt("Enter the message you want to send:");

    if (!message) {
      alert("no message provided");
      return;
    }

    const event = {
      content: message,
      kind: 1,
      tags: [],
      created_at: dateToUnix(),
      pubkey: getPublicKey(privKey),
    };

    event.id = getEventHash(event);
    event.sig = signEvent(event, privKey);

    publish(event);
  };

  return (
    <div className="w-full flex justify-center bg-slate-200">
      <button onClick={onPost} className="mx-auto bg-yellow-100 m-2 p-1 rounded-sm">Post a message!</button>
    </div>
  );
}
