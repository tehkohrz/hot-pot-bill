import './App.css';
import React, {useState} from 'react';
import {BillCreateForm, BillForm} from './components/templates'

function App() {
  const [itemList, setItemList] = useState([{name:'123',price:'123',people:[]},{name:'321',price:'321',people:[]}]);
  const [peopleList, setPeopleList] = useState({});
  const [appState, setAppState] = useState('CreateBill');
  return (
    <div className="App">
      {appState === 'CreateBill' && <BillCreateForm setAppState={setAppState}/>}
      {/* {appState === 'BillCreated' && <BillForm itemList={itemList} setItemList={setItemList} peopleList={peopleList} setPeopleList={setPeopleList}/>} */}
      <BillForm itemList={itemList} setItemList={setItemList} peopleList={peopleList} setPeopleList={setPeopleList}/>
    </div>
  );
}

export default App;
