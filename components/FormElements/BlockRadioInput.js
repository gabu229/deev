import React, { useState } from "react";

const BlockRadioInput = ({ name = "radio_input", options = [], childClassNames = "" }) => {
  
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      {options.map((option, i) => (
        <label
          key={i}
          className={`block items-center space-x-2 cursor-pointer ${childClassNames}`}
          htmlFor={option.value}
        >
          <input
            name={name}
            type="radio"
            id={option.value}
            className="form-radio text-blue-500 appearance-none"
            value={option.value}
            checked={selectedOption == option.value}
            onChange={handleOptionChange}
          />
          <div
            className={`w-full p-4 block flex-1 ${
              selectedOption == option.value
                ? "bg-slate-900 border-gray-700 border-[1px]"
                : "bg-slate-900/50"
            }`}
          >
            <div className="my-2">
            {option.icon}
            </div>
            <p className="text-md">{option.name}</p>
            <p className="text-xs text-gray-500 py-1">{option.description}</p>
          </div>
        </label>
      ))}
    </>
  );
};

export default BlockRadioInput;
