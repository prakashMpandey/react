import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [time ,setTime]=useState(0)
  const [isRunning, setRunning] = useState(false)


  useEffect(() => {
    let intervalId

   if(isRunning)
   {
    intervalId=setInterval(()=>{
      setTime(prev=>prev+10)
    },10)
   }

   else
   {
    clearInterval(intervalId)
   }

   return ()=>{
    clearInterval(intervalId)
   }
  
    
  }, [isRunning])
  
 
  let ms=Math.floor((time/10)%100)
  let sec=Math.floor((time/1000)%60)
  let min=Math.floor((time/60000)%60)
  let hr=Math.floor((time/3600000))



  return (
    <>

    <h1 className='timer'>{`${String(hr).padStart(2,'0')}:${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}:${String(ms).padStart(2,'0')}`}</h1>
   
    <div>
      <button style={{margin:"30px"}} onClick={()=>{setRunning(true)}}>Start</button>
      <button style={{margin:"30px"}} onClick={()=>{setRunning(false)}} >Stop</button>
      <button style={{margin:"30px"}} onClick={()=>{
        setRunning(false)
        setTime(0)}}>Reset</button>
    
    </div>
    </>
  )
}

export default App
