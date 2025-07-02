import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  const [color,setColor]=useState("white")

  const colors=["red","white","blue","black","yellow","green","orange","lavender"]

  const handleChange=(color)=>{

    setColor(color)
  }
  return (
    <>
   <div className={`w-full h-screen duration-300 `} style={{backgroundColor:`${color}`}}>

    <div className='flex gap-5 bg-gray-400 p-2'>

    <h1>hello</h1>
      {
        colors.map((color)=> <button onClick={()=>handleChange(color)} className='px-5 py-2 rounded-l-full rounded-r-full shadow-2xl text-gray-500 text-xl ' style={{backgroundColor:`${color}`}} key={color}>{color}</button>)
      }
    </div>
   </div>
    </>
  )
}

export default App
