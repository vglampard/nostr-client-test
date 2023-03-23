import "./App.css";
import React from "react";
import { NostrProvider } from "nostr-react";
// import { GlobalFeed } from "./components/TextEvents/TextEvents";
import Navbar from "./components/Navbar/Navbar";
import LongformContent from "./components/LongformContent/LongformContent";
import LongformModal from "./components/LongformModal/LongformModal";
// import SpecificUserEvents from './components/SpecificUserEvents/SpecificUserEvents';
const relayUrls = [
  // "wss://nostr-pub.wellorder.net",
  // "wss://relay.nostr.ch",
  // "wss://relay.damus.io",
  // "	relay.nostr.scot",
  "wss://relay.nostr.band/trusted",
];

function App() {
  const [showModal, setShowModal] = React.useState(false);
  const [modalEvent, setModalEvent] = React.useState({});
  const MODAL_STATES = { setShowModal, showModal, modalEvent, setModalEvent };

  console.log("MODAL STATES AT APP TO BEGIN:", MODAL_STATES);
//  bg-[url('./bg.jpg')]
  return (
    <NostrProvider relayUrls={relayUrls} debug={true}>
      <div className="bg-zinc-200">
        <header className="sticky top-0 z-50">
          <Navbar className="" />
        </header>
        <div className="pt-[100px] lg:px-[200px] bg-slate-300 bg-fixed bg-cover">
          {/* <SpecificUserEvents/> */}
          {/* <GlobalFeed /> */}
          {showModal && <LongformModal modalStates={MODAL_STATES} />}
          <LongformContent modalStates={MODAL_STATES} />
        </div>
      </div>
    </NostrProvider>
  );
}

export default App;
