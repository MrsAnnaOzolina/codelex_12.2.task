import { useState } from 'react'
import axios from "axios"
import Dogs from './Cards'

const baseURL = 'http://localhost:3004/dogs'

type Values ={
    inputTitle:string,
    inputText:string
}
const inputValues:Values = {
    inputTitle: "",
    inputText: ""
}
const  CreateNewDog = () => {
const [values, setInput] = useState(inputValues)

    const createPost = async (a: string, b: string) => {
        if (!a && !b ) {
            alert("Enter an item ! ");
            return
          }
        const newPost = {image:"./src/assets/images/dog.jpg", title:a, text:b }
       await  axios.post(baseURL, newPost); 
       window.location.reload()
    //   const newDogs =  Dogs() => {.setDog([...dog, newPost]);}
      //  setDog([...dog, newPost])
        // setInput(inputValues)
    }

    function handleChange(evt) {
        const value = evt.target.value;
        setInput({
          ...values,
          [evt.target.name]: value
        });
      }

  return (
    <div className='addDog'>
        <label>
         <h2>Add New Item</h2>
        <input 
        type='text' 
        placeholder='Title' 
        name='inputTitle'
        value={values.inputTitle}
         onChange={handleChange}
        />
        <input 
        type="text" 
        placeholder="Text" 
        name='inputText'
        value={values.inputText} 
        onChange={handleChange}
        // onChange={(e) => setInput(values.e.target.value)}
        />
        <button onClick={() => createPost(values.inputTitle, values.inputText)} className='waves-effect waves-light btn'>Add</button>
        </label>
    </div>
   
  )
}

export default CreateNewDog
