import {useEffect,  useState } from 'react'
import axios from "axios"

const baseURL = 'http://localhost:3004/dogs'

const DogCards =  ()  => {
    const [count, setCount] = useState(0);
    
      useEffect(() => {
        const getPosts = async () => {
            const { data: res } = await axios.get(baseURL);
             setCount(res.length)

          };
          getPosts();
      }, [])


    return (
        <div>
            <h1>Dogs</h1>
            <p>cards: {count} </p>
        </div>
    );
};

 export default DogCards; 

