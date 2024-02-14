import React from "react";
import MenuBar from "../MenuBar";

const EditorNavbar = () => {
  return (
    <>
      <div className="w-full flex bg-slate-900 text-[#FFD700] fixed top-0 p-1 px-3 z-50 gap-5">
        <div className="text-nowrap">
          {"{ _ }"}
        </div>
        <div className="">
          <MenuBar />
        </div>
      </div>
    </>
  );
};

export default EditorNavbar;
