import { useEffect, useState } from 'react'
import './Cards.css'
import axios from "axios"
import Editbtn from './Editbtn'

const baseURL = 'http://localhost:3004/dogs'

type Dogss = {
  id: number,
  image: string,
  title: string,
  text: string
}

let editedTitle= " "
   let editedText = " "
   let picture = " "
   let id = " "

   const Values ={
    editfield0: " ",
    editfield1: "",
    editfield2: "",
    editfield3: ""
   }

const  Dogs = () => {
   const [dog, setDog] = useState([]);
   const [editbtn, setEditBtn] = useState(false);
   const [editfile, setEditFile] = useState(Values)
   

 useEffect(()=>{
const getPosts = async () => {
  const { data : res } = await axios.get(baseURL);
  setDog(res)
};
getPosts();
  // axios.get(baseURL).then((response)=>{
  //   const allDogs = response?.data;
  //   setDog(allDogs);

  // });
 
 }, [])
 const deteleDog = async(i:number) =>{
  await axios.delete( `${baseURL}/`+i)
  setDog(dog.filter((p)=> p.id !== i));
 }
//  function deteleDog(i:number){

//     // const a:number = i+1 
//     axios.delete( `${baseURL}/`+i).then(()=>{
//     }).then(()=>{
//       // window.location.reload()
//     })
//   }

const editDogs =async (c:number) => {
  const bothvalues = axios.get(`${baseURL}/`+c).then((data)=>{
      id = data.data.id
     picture = data.data.image
     editedTitle = data.data.title
     editedText = data.data.text
   
    setEditFile({
      editfield0: id ,
      editfield1: editedTitle,
      editfield2: editedText,
      editfield3: picture
    })

  })
}
const handleInputChange = async (g:any) => {
  const target = g.target; 
  const value = target.value;
  const name:string = target.name; 

  setEditFile({
    ...editfile,
    [name]: value
    
  }); 
}

const changeData = async (r:any) => {
   axios.put(`${baseURL}/`+r, {
    title: editfile.editfield1,
    text: editfile.editfield2,
    image: editfile.editfield3

}).then(()=> {
  const getPosts = async () => {
    const { data : res } = await axios.get(baseURL);
    setDog(res)
  };
  getPosts();
})
setEditBtn(false);
setEditFile(Values);

}


return (
    <div>
    {editbtn && 
        <label><h2>Correct item</h2>
        <input type='text'  name='editfield1' 
        defaultValue={editfile.editfield1}
        onChange={(g)=> {handleInputChange(g)}}
        />
        <input type="text" name='editfield2'  defaultValue={editfile.editfield2} onChange={(g)=> {handleInputChange(g)}} />
        <button className='waves-effect waves-light btn' onClick={() => changeData(editfile.editfield0)}>Update</button></label>
     }
    
    <div className='dogs'>
      {dog.map((item:Dogss[], i:number) =>{
        return (
                <div className='dosg__card'  >
                <img src={item?.image} alt="" className='dogs__image'/>
                <h3>{item?.title}</h3>
                <p>{item?.text}</p>
                <button className='waves-effect waves-light btn' 
                onClick={() => {
                  setEditBtn(true);
                editDogs(item?.id) } } >Edit</button>
                <button className='waves-effect waves-light btn' key={i} onClick={() => deteleDog(item?.id)} >Delete</button>
                </div>
        );
        })
      }
    </div>
    </div>
   
  )
}

export default Dogs
