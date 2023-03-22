import "./App.css";
import { NostrProvider } from "nostr-react";
// import { GlobalFeed } from "./components/TextEvents/TextEvents";
import Navbar from "./components/Navbar/Navbar";
import LongformContent from "./components/LongformContent/LongformContent";

// import SpecificUserEvents from './components/SpecificUserEvents/SpecificUserEvents';
const relayUrls = [
  // "wss://nostr-pub.wellorder.net",
  // "wss://relay.nostr.ch",
  // "wss://relay.damus.io",
  // "	relay.nostr.scot",
  "wss://relay.nostr.band/trusted",
];

function App() {
  return (
    <NostrProvider relayUrls={relayUrls} debug={true}>
      <div className="bg-zinc-100">
        <header className="sticky top-0 z-50">
          <Navbar className="" />
        </header>
        <div className="pt-[100px] lg:px-[200px] ">
          {/* <SpecificUserEvents/> */}
          {/* <GlobalFeed /> */}
          <LongformContent />
        </div>
      </div>
    </NostrProvider>
  );
}

export default App;
