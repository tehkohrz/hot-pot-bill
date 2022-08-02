import React from 'react';
import { Header, NameInput, SubmitButton } from '../atoms';

export default function BillForm ({setBillName, handleSubmit}) {
  const updateBillName = (e) =>{
    setBillName(e.target.value);
  }
  return (
    <>
      <Header title='Create Bill'/>
      <NameInput placeHolder='Bill Name' handleChange={updateBillName} />
      <SubmitButton name='Submit' handleClick={handleSubmit}/>
    </>
  )
}