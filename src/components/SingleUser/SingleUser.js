import React from "react";
import { useProfile } from "nostr-react";
import SpecificUserEvents from "../SpecificUserEvents/SpecificUserEvents";
export default function SingleUser() {
  const pubkey =
    "82341f882b6eabcd2ba7f1ef90aad961cf074af15b9ef44a09f9d2a8fbfbe6a2";
  // const pubkey="856653c77d10e58a190776e83d9af163fd857b86921bb11c7700add1d6023521"

  const { data: userData } = useProfile({
    pubkey,
  });
  console.log("DATA FROM USER:", userData);
  return (
    <div>
      {" "}
      {userData && (
      <>
      <div className="w-[200px] ">
        <img src={userData.banner} alt="banner" className="object-contain"/>
        </div>
        <img
          src={userData.picture}
          className="rounded-full w-[100px] h-[100px]"
          alt="user"
        />
        
        <p>Name: {userData?.name || userData.display_name}</p>
        <p>Public key: {userData?.npub}</p>
        {userData.about && <p>{userData.about}</p>}
        {/* <SpecificUserEvents pubkey={pubkey} username={userData?.name} /> */}
        </>
      )}
      
    </div>
  );
}
