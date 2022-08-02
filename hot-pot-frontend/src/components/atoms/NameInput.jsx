import React from 'react';

export default function NameInput({placeHolder, handleChange, value}) {
  return (
  <>
    <input placeholder={placeHolder} onChange={handleChange} value={value}></input>
  </>
  )
}