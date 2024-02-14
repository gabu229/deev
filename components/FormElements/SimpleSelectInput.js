import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const SimpleSelectInput = ({ label, options = [] }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="relative">
      <select
        className="block appearance-none w-full bg-slate-900 text-gray-400 text-md border border-slate-950 hover:border-slate-900 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:border-slate-950"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="" disabled>
          {label}
        </option>

        {options.map((option, i) => (
          <option key={i} value={option}>{option}</option>
        ))}
      </select>

      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <IoMdArrowDropdown />
      </div>
    </div>
  );
};

export default SimpleSelectInput;
