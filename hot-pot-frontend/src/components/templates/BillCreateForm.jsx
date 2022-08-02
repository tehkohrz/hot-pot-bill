import React, {useState} from 'react';
import { BillForm } from '../molecules';
import axios from 'axios';

export default function BillCreateForm({setAppState}) {
  const [billName, setBillName] = useState('');
  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:3004/bill', {name: billName});
      // ! error handling
      setAppState('BillCreated');
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <BillForm setBillName={setBillName} handleSubmit={handleSubmit}/>
    </>
  )
}