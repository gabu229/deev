import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

import { IoMdArrowDropdown } from "react-icons/io";
import { IoCheckmarkSharp } from "react-icons/io5";

export default function SimpleTextField({
  label = "",
  placeholder = "",
  fieldType = "text",
  name,
  size = "md",
  onChangeEvent = () => {},
  defaultValue = "",
  autocomplete = true,
}) {
  const [inputValue, setInputValue] = useState(defaultValue);

  useEffect(() => {
    setInputValue(defaultValue);
  }, [defaultValue]);

  const handleChange = (event) => {
    const { value } = event.target;

    setInputValue(value);
    onChangeEvent(value, name);
  };

  return (
    <div className="">
      <p className="text-xs mb-1">
        <label htmlFor={name}>{label}</label>
      </p>
      <input
        type={fieldType}
        id={name}
        placeholder={placeholder}
        name={name}
        className={`w-full bg-slate-900/50 border-b border-gray-500 py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:bg-transparent focus:bg-slate-900/70 sm:text-sm`}
        onChange={handleChange}
        value={inputValue}
        autoComplete={`${autocomplete ? "on" : "off"}`}
      />
    </div>
  );
}
