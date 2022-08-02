import React from 'react';

export default function PersonDropDown({handleChange, options}) {
  console.log(options);
  return (
  <>
  <select onChange={handleChange}>
    <option unselectable='on'>Select Person</option>
    {options.map((option) => 
      <option key={option} value={option}>{option}</option>
    )}
  </select>
  </>
  )
}