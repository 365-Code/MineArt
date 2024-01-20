import React, { useEffect } from "react";

const Modal = ({
  compo,
  showModal,
  setShowModal,
}: {
  compo: any;
  showModal: boolean;
  setShowModal: any;
}) => {
  // useEffect(()=>{
  //     if(showModal){
  //         window.scrollTo(0,0)
  //     }
  // }, [showModal, setShowModal])

  return (
    <>
      {
      showModal &&
        <div
          className={`${showModal? "h-screen p-8" : "h-0 bg-white"} w-screen overflow-hidden fixed left-0 top-0 z-[20] flex flex-col justify-center bg-black/30 transition-all backdrop:blur-sm`}
        >
          <div className={`h-full max-w-full w-[800px] mx-auto relative bg-white p-8`}>
            {compo}
            <i
              onClick={() => setShowModal(false)}
              className="fi fi-rs-cross text-xs cursor-pointer absolute right-2 top-2 border border-slate-900 p-2 hover:bg-slate-900 hover:text-white rounded-full"
            />
          </div>
        </div>
      
      }
    </>
  );
};

export default Modal;
