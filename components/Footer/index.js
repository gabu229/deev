"use client";
import React from "react";
import { useSelector } from "react-redux";

const EditorFooter = () => {
  const projectName = useSelector(
    (state) => state.editorProject.project.projectName
  );

  return (
    <>
      <div className="w-full md:h-[25px] bg-slate-900 text-white fixed bottom-0 flex justify-between z-50">
        <div className="bg-slate-800 text-gray-400 px-3 text-center">
          <p className="text-xs py-1">{projectName}</p>
        </div>

        <div className="bg-slate-800 text-gray-400 px-3 text-center">
          <p className="text-xs py-1">Connect Github</p>
        </div>
      </div>
    </>
  );
};

export default EditorFooter;
