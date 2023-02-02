import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import Dogs from './Cards'
// import axios from "axios";
import CreateNewDog from './CreateNewCard'
import DogCards from './Editbtn'



function App() {
 
  return (
    <div>
    <DogCards />
    <Dogs />
    <CreateNewDog />
    </div>
  );
}


export default App