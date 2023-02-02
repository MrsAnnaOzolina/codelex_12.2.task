import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import Dogs from './Cards'
// import axios from "axios";
import CreateNewDog from './CreateNewCard'
import Editbtn from './Editbtn'


function App() {
 
  return (
    <div>
    <h1>DOGS</h1>
    <Dogs />
    <CreateNewDog />
    </div>
  );
}


export default App