import './App.css';
import { NostrProvider } from "nostr-react";
import { GlobalFeed } from './components/TextEvents/TextEvents';
import SpecificUserEvents from './components/SpecificUserEvents/SpecificUserEvents';
const relayUrls = [
  "wss://nostr-pub.wellorder.net",
  "wss://relay.nostr.ch",
  "wss://relay.damus.io"
];

function App() {
  return (
    <NostrProvider relayUrls={relayUrls} debug={true}>
    <div className="App">
      <header className="App-header">
        <p> nostr</p>
        <GlobalFeed/>
      </header>
   
    </div>
    </NostrProvider>
  );
}

export default App;
