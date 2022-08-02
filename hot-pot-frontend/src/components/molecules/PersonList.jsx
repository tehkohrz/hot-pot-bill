import React, {useEffect} from 'react';
import { PersonEntry, SubHeader } from '../atoms';

export default function PersonList({peopleList, itemList, setPeopleList}) {
  // Calculate the amount awed for each person
  const calculateOwed = () => {
    itemList.forEach((item) => {
      const count = item.people.length;
      const priceEach = item.price/count;
      item.people.forEach((person) => {
        peopleList[person].amount += priceEach;
      })
    });
    setPeopleList({...peopleList});
  }
  // eslint-disable-next-line
  useEffect(calculateOwed, [itemList]);
  // Extract keys from the peopleList Object
  const peopleKeys = Object.keys(peopleList);
  return (
    <div>
      <SubHeader title='Amount Owed Person List'/>
      <table>
        <tbody>
          {peopleKeys.map((personKey) => {
            return (
              <PersonEntry key={peopleList[personKey]} person={peopleList[personKey]}/>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}