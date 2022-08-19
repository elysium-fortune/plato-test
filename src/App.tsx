import React,{useEffect} from 'react';
import Header from './layouts/Header';
import { useDispatch } from "react-redux";

import {fetchUsers} from './store/users-slice';
import './App.css';

const App = () => {

  useEffect(() => {
    console.log('dfdsf')
  })

  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
