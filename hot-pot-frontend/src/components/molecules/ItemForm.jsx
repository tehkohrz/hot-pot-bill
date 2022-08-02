import React from 'react';
import { Header, NameInput, SubmitButton } from '../atoms';

export default function ItemForm  ({handleSubmit, setItemDetails, itemDetails}) {
  const updateItemName = (e) =>{
    const newItem = {...itemDetails, name:e.target.value};
    setItemDetails(newItem);
  }
  const updateItemPrice = (e) => {
    const newItem = {...itemDetails, price:e.target.value};
    setItemDetails(newItem);
  }
  return (
    <>
      <Header title={itemDetails.name}/>
      <NameInput value={itemDetails.name} placeHolder='Item Name' handleChange={updateItemName} />
      <NameInput value={itemDetails.price} placeHolder='Price' handleChange={updateItemPrice} />
      <SubmitButton name='Submit' handleClick={handleSubmit}/>
    </>
  )
}