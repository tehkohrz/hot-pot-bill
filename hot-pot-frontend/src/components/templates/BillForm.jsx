import React from 'react';
import {Form, Bill} from '../organisms'

export default function BillForm({itemList, setItemList, peopleList, setPeopleList}) {
  console.log(itemList, peopleList);
  return (
    <>
    <Form itemList={itemList} setItemList={setItemList} peopleList={peopleList} setPeopleList={setPeopleList}/>
    <Bill itemList={itemList} setItemList={setItemList} peopleList={peopleList} setPeopleList={setPeopleList}/>
    </>
  )
}