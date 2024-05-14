
import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';


function App() {
  const [message,setMessage]=useState("")
useEffect(()=>{
  fetch("http://localhost:4000/home")
  .then((res)=>res.json())
  .then((data)=>setMessage(data))
},[])
  return (
   <>
   
   </>
  );
}

export default App;
