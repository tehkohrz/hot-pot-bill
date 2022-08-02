import React, {useState} from 'react';
import { PersonDropDown, SubmitButton } from '../atoms';

export default function ItemEntry({item, peopleList, index, itemList, setItemList}) {
  const [itemPerson, setItemPerson] = useState('');
  const [showPersonList, setShowPersonList] = useState(false);
  // Handle dropdown change
  const handleChange = (e) => {
    console.log('Onchange',e.target.value);
    setItemPerson(e.target.value);
  }
  // Handle add person button submit
  const handleClick = () => {
    console.log('Click',itemPerson);
    itemList[index].people.push(itemPerson);
    setItemList(itemList);
  }
  const personListClick = () => {
    setShowPersonList(!showPersonList);
  }
  const dropDownOptions = Object.keys(peopleList);
  return (
  <div>  
    <p>{item.name} - ${item.price}</p>
    <PersonDropDown handleChange={handleChange} options={dropDownOptions}/>
    <SubmitButton name='Add Person' handleClick={handleClick}/>
    <SubmitButton name='Person List' handleClick={personListClick}/>
  {/* List of people sharing the item */}
  <ol>
  {showPersonList && itemList[index].people.map((person) => {
    return (
      <li key='person'>{person}</li>
    )
  })}
  </ol>
  </div>
  )
}