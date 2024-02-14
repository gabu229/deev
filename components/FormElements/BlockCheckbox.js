import React, { useState } from "react";

const BlockCheckbox = ({ checked = false, name, inputValue }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        name={name}
        value={inputValue}
        className="appearance-none checked:bg-blue-500 checked:border-transparent focus:outline-none"
        checked={isChecked}
        onChange={toggleCheckbox}
      />
      <div className="w-6 h-6 border rounded-lg border-gray-400 flex items-center justify-center transition-colors duration-300">
        {isChecked && (
          <svg
            className="w-3 h-3 text-white fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        )}
      </div>
      <span>Custom Checkbox</span>
    </label>
  );
};

export default BlockCheckbox;
