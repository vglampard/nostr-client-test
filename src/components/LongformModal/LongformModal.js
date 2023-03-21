import React from "react";
//https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/modals/regular
import ReactMarkdown from 'react-markdown'

export default function LongformModal({event}) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
    <div className= "grid justify-items-end">
      <button
        className="bg-orange-200 text-white active:bg-slate-600 font-bold uppercase text-sm  py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 align-right w-10"
        type="button"
        onClick={() => setShowModal(true)}
      >
        +
      </button>
      </div>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative grid justify-items-center my-6 mx-auto max-w-3xl align">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none w-[90%]">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {event.tags[0][1]}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-sm leading-relaxed break-words w-[95%]">
                    <ReactMarkdown>{event.content}</ReactMarkdown>
                  </p>
                </div>
                {/*footer*/}
            
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  {/* <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}