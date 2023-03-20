import "./App.css";
import { NostrProvider } from "nostr-react";
import { GlobalFeed } from './components/TextEvents/TextEvents';
// import SpecificUserEvents from './components/SpecificUserEvents/SpecificUserEvents';
const relayUrls = [
  // "wss://nostr-pub.wellorder.net",
  // "wss://relay.nostr.ch",
  // "wss://relay.damus.io",
  "wss://relay.nostr.band/trusted"


];

function App() {
  return (
    <NostrProvider relayUrls={relayUrls} debug={true}>

    <div className="App">
      <header >
       <div className="hero">
        <h1> Nostrami</h1>
        </div>
        <div className="feed-container">
        {/* <SpecificUserEvents/> */}
        <GlobalFeed/>
        </div>
      </header>
  
    </div>

    </NostrProvider>
  );
}

export default App;
