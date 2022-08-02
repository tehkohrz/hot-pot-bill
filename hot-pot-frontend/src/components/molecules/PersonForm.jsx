import React from 'react';
import { NameInput, SubmitButton } from '../atoms';

export default function PersonForm  ({personName, handleSubmit, setPersonName}) {
  const updatePerson = (e) =>{
    setPersonName(e.target.value);
  }
  return (
    <>
      <NameInput value={personName} placeHolder='Person Name' handleChange={updatePerson} />
      <SubmitButton name='Submit' handleClick={handleSubmit}/>
    </>
  )
}