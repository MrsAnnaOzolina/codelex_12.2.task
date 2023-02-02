import {  useState } from 'react'
import axios from "axios"

const baseURL = 'http://localhost:3004/dogs'

const DogCards =  ()  => {
    const [count, setCount] = useState(0);
    
   axios.get(baseURL).then((res)=>{
            setCount(res.data.length)
          })
             
 

    return (
        <div>
            <h1>Dogs</h1>
            <p>cards: {count} </p>
        </div>
    );
};

 export default DogCards; 

