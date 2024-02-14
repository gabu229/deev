import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

import { IoMdArrowDropdown } from "react-icons/io";
import { IoCheckmarkSharp } from "react-icons/io5";

export default function SimpleButton({
  label = "Ok",
  icon = "",
  alignIcon = "right",
  type = "button",
  size = "md",
  onClickEvent = () => {},
}) {
  const handleClick = () => {
    onClickEvent;
  };

  return (
    <>
      <button
        type={type}
        className="inline-flex justify-center rounded-0 border border-transparent bg-slate-700 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-slate-700/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2"
        onClick={handleClick}
      >
        <span
          className={`flex justify-between align-middle gap-3 ${
            alignIcon == "right" ? "flex-row" : "flex-row-reverse"
          }`}
        >
          {label}
          {icon}
        </span>
      </button>
    </>
  );
}
