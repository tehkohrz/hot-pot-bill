import React, {useEffect, useState} from 'react';

export default function TotalBill({itemList}) {
  const [total, setTotal] = useState(0);
  const updateTotalBill = () => {
    let newTotal = 0;
    itemList.forEach((item) => {
      newTotal += Number(item.price);
    })
    setTotal(newTotal);
  }
  // Consistently update the total price
  useEffect(updateTotalBill, [itemList]);
  return (
    <>
      <h1>Total: ${total.toFixed(2)}</h1>
    </>
  )
}