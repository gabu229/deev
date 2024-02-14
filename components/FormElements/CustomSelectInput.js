import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

import { IoMdArrowDropdown } from "react-icons/io";
import { IoCheckmarkSharp } from "react-icons/io5";

export default function CustomSelectInput({
  label,
  name,
  options = [],
  selectedIndex = 0,
  onChangeEvent = () => {},
}) {
  const [selected, setSelected] = useState(options[selectedIndex]);

  useEffect(() => {
    handleChange(selected);
  }, []);

  const handleChange = (option) => {
    setSelected(option);
    onChangeEvent(option.value, name);
  };

  return (
    <div className="">
      <Listbox value={selected} onChange={handleChange}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-pointer bg-slate-900/50 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none sm:text-sm">
            <span className="flex gap-4 truncate">
              {selected.hasOwnProperty("icon") ? selected.icon : ""}

              {selected.name}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <IoMdArrowDropdown
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto bg-slate-900 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-[999]">
              {options.map((option, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 transition-colors duration-200 ${
                      active ? "bg-gray-600 text-gray-300" : "text-gray-400"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`flex truncate gap-3 ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option.hasOwnProperty("icon") ? option.icon : ""}
                        {option.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <IoCheckmarkSharp
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
