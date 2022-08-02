import React from 'react';

export default function SubmitButton ({name, handleClick}) {
  return (
  <>
    <button onClick={handleClick}>{name}</button>
  </>
  )
}