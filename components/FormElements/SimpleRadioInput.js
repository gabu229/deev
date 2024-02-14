import React, { useState } from 'react';

const SimpleRadio = () => {
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <label className="inline-flex items-center space-x-2 cursor-pointer">
        <input
          type="radio"
          className="form-radio text-blue-500"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
        />
        <span>Option 1</span>
      </label>
      <label className="inline-flex items-center space-x-2 cursor-pointer">
        <input
          type="radio"
          className="form-radio text-blue-500"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
        />
        <span>Option 2</span>
      </label>
      <label className="inline-flex items-center space-x-2 cursor-pointer">
        <input
          type="radio"
          className="form-radio text-blue-500"
          value="option3"
          checked={selectedOption === 'option3'}
          onChange={handleOptionChange}
        />
        <span>Option 3</span>
      </label>
    </div>
  );
};

export default SimpleRadio;
