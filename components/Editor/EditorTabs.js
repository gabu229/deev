"use client";

import React, { Fragment, Suspense } from "react";
import { Tab } from "@headlessui/react";

import { useDispatch } from "react-redux";
import { openModal } from "@/providers/redux/stores/modalStates";
import Loading from "@/app/editor/loading";

const TextEditor = React.lazy(() => import("./TextEditor"));

const EditorInTabs = ({ filesToOpen = [] }) => {
  const dispatch = useDispatch();

  if (filesToOpen.length < 1) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="text-left w-full max-w-sm px-3">
          <div className="text-2xl md:text-4xl font-semibold text-[#FFD700] my-4">
            {"{ _deev }"}
          </div>
          <p className="text-sm sm:text-md text-gray-500 font-thin">
            An instant easy to use text editor.
          </p>
          <p className="text-sm sm:text-md text-gray-500 font-thin">
            Start coding by creating a new project.
          </p>
          <div className="text-end my-4">
            <button
              type="button"
              className="inline-flex justify-center rounded-0 border border-transparent bg-slate-800 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-slate-700/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2"
              onClick={() => {
                dispatch(openModal({ modalId: "createNewProject" }));
              }}
            >
              Create New Project
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <Suspense fallback={<Loading />}>
        <Tab.Group>
          <Tab.List>
            {filesToOpen.map((file, index) => (
              <Tab as={Fragment} key={index}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "editor-tab active-tab"
                        : "editor-tab inactive-tab"
                    }
                  >
                    {file._filename}
                    {file._fileExtension}
                  </button>
                )}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels>
            {filesToOpen.map((file, index) => (
              <Tab.Panel key={index}>
                {file && (
                  <TextEditor
                    languageMode={file._filetype}
                    editorContents={file._fileContents}
                    name={file._fileId}
                  />
                )}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Suspense>
    );
  }
};

export default EditorInTabs;
