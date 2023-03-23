import React from 'react'
import logo from "./nostrami.png"

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="fixed flex flex-wrap items-center justify-between px-2 py-3 bg-slate-100 outline outline-2 mb-3 w-[100%]">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="flex gap-2">
            <img src={logo} alt="pastrami logo" className="h-10"/>
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-slate-700"
              href="https://nostrami.netlify.app/"
            >
              NOSTRAMI
            </a>
            </div>
            <button
              className="text-slate-800 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars">{navbarOpen ? "-" : "+"}</i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-slate-700 hover:opacity-75"
                  href="https://nostr.watch/relays/find#favorite"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-slate-700 opacity-75"></i><span className="ml-2">Test client pulling 30023 events (long form content) from relay.damus.io. </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-slate-700 hover:opacity-75"
                  href="https://github.com/vglampard"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-slate-700 opacity-75"></i><span className="ml-2">More on the way</span>
                </a>
              </li>
              <li className="nav-item">
               
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
