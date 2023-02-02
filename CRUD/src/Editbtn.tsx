import {  useState } from 'react'
import axios from "axios"
type EditBtn =  {
    a:string,
    b:string
}
const Editbtn =  (a:string, b:string)  => {
    return (
        <label><h2>Correct item</h2>
        <input type='text'  name='inputTitle' 
        defaultValue={a} 
        />
        <input type="text" name='inputText'  defaultValue={b} />
        <button className='waves-effect waves-light btn'>Update</button></label>
    );
};

export default Editbtn; 

