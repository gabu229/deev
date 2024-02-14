import React, { useState } from "react";

import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoMdCheckboxOutline } from "react-icons/io";

const SimpleCheckbox = ({
  name,
  inputValue,
  label,
  checked = false,
  onChangeEvent = () => {},
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const toggleCheckbox = () => {
    onChangeEvent(!isChecked, name);
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label
        className={`flex items-center justify-start space-x-3 text-sm cursor-pointer ${
          isChecked ? "text-gray-300" : "text-gray-500"
        }`}
      >
        <input
          type="checkbox"
          name={name}
          value={inputValue}
          className="appearance-none checked:bg-blue-500 checked:border-transparent focus:outline-none"
          checked={isChecked}
          onChange={toggleCheckbox}
        />
        {/* <div className="w-6 h-6 border rounded-lg border-gray-400 flex items-center justify-center transition-colors duration-300"></div> */}
        {isChecked ? (
          <IoMdCheckboxOutline size={25} />
        ) : (
          <MdCheckBoxOutlineBlank size={25} />
        )}
        <span>{label}</span>
      </label>
    </>
  );
};

export default SimpleCheckbox;
