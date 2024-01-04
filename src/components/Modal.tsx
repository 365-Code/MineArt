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
    //   showModal &&
        <div
          className={`${showModal? "h-screen container1" : "h-0"} w-screen overflow-hidden fixed left-0 top-0 z-[20] flex flex-col justify-center bg-black/30 transition-all backdrop:blur-sm`}
        >
          <div className={`h-full relative bg-white px-4 py-8`}>
            {compo}
            <i
              onClick={() => setShowModal(false)}
              className="fi fi-rr-rectangle-xmark icons absolute right-4 top-4"
            />
          </div>
        </div>
      
      }
    </>
  );
};

export default Modal;
