import React, { useState } from 'react';

const YesNoDropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="w-full max-w-xs">
      <label htmlFor="yesNoDropdown" className="block text-sm font-medium text-gray-700">
        Yes or No
      </label>
      <select
        id="yesNoDropdown"
        name="yesNoDropdown"
        value={selectedOption}
        onChange={handleOptionChange}
        className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
      >
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </div>
  );
};

export default YesNoDropdown;
