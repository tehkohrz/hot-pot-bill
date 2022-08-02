import React, {useState} from 'react';
import { ItemForm, PersonForm } from '../molecules';
import axios from 'axios';

export default function Form ({itemList, setItemList, peopleList, setPeopleList}) {
  // useState Person
  const [personName, setPersonName] = useState('');
  // useState ItemDetail
  const [itemDetails, setItemDetails] = useState({name:'',price:'',people:[]});
  const handleItemSubmit = () =>{
    // Add the new item into the list
    setItemList([...itemList,itemDetails])
    setItemDetails({name:'',price:'',people:[]})
    console.log(itemList);
  }
  const handlePersonSubmit = async () =>{
    try {
      const person = {
        name: personName,
        cost: 0,
        billId:1,
      }
      const {data} = await axios.post('http://localhost:3004/person', person);
      peopleList[data.newPerson.name] = {...data.newPerson};
      // ! Error handling
      // Add person into the peoplelist
      setPeopleList({...peopleList});
      // Reset the person form
      setPersonName('');
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <div>
        <ItemForm setItemDetails={setItemDetails} itemDetails={itemDetails} handleSubmit={handleItemSubmit}/>
      </div>
      <div>
        <PersonForm setPersonName={setPersonName} personName={personName} handleSubmit={handlePersonSubmit}/>
      </div>
    </div>
    )
};