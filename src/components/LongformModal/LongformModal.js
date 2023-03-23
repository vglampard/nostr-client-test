//https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/modals/regular
import React from "react";
import ReactMarkdown from "react-markdown";
import { toast, ToastContainer } from "react-toastify";
import Translate from "../Translate/Translate";
import translateIcon from "./translate.png";
import "react-toastify/dist/ReactToastify.css";
import { getTitle } from "../../helpers/helpers";

export default function LongformModal({modalStates}) {
const event = modalStates.modalEvent
console.log("event at modal:", event);

const title = getTitle(event.tags);

// console.log("MODALSTATES at MODAL:", modalStates);


  const notification = () =>
    toast(<Translate />, {
      position: "top-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  function handleTranslationClick() {
    let limitedText = modalStates.modalEvent.content.substring(0, 4999);
    navigator.clipboard.writeText(limitedText);
    notification();
  }

  return (
    <>
    
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <div className="absolute grid justify-items-center my-6 mx-auto h-[90%] z-80 align">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg flex flex-col  bg-white outline-none focus:outline-none w-[90%]">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold">
                    {title}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-grey z-80 opacity-1 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => modalStates.setShowModal(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className=" top-0 z-80 p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-sm leading-relaxed break-words w-[95%]">
                    <ReactMarkdown>{event.content}</ReactMarkdown>
                  </p>
                </div>
                {/*footer*/}

                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => modalStates.setShowModal(false)}
                  >
                    CLOSE
                  </button>
                  <img
                    src={translateIcon}
                    onClick={(modalEvent) => handleTranslationClick(modalEvent)}
                    alt="translation button"
                    className="h-5"
                  />
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => modalStates.setShowModal(false)}
                  >
                    Save Changes
                  </button> 
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
  
    </>
  );
}
