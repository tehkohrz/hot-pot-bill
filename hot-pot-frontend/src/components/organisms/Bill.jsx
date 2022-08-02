import React from 'react';
import { Header, TotalBill } from '../atoms';
import { ItemEntry, PersonList } from '../molecules';

export default function Bill({itemList, peopleList, setItemList, setPeopleList}) {

  return (
    <div>
      <Header title='Item List'/>
      {itemList.map((item,index) => {
        return (
        <ItemEntry key={index} index={index} item={item} setItemList={setItemList} itemList={itemList} peopleList={peopleList}/>
        )
      })}
      <PersonList peopleList={peopleList} itemList={itemList} setPeopleList={setPeopleList}/>
      {/* <TotalBill itemList={itemList}/> */}
    </div>
  )
}