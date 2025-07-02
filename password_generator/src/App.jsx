import { useEffect, useState ,useCallback,useRef} from 'react'
import './App.css'

function App() {


  const [length,setLength]=useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState("");
  const [isCopied,setIsCopied]=useState(false);

  const passwordRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass=''
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numberAllowed) str+='0123456789'
    if(charAllowed) str+='!@#$%^&*()_+={}[]:;<>,./?~'

    for(let i=1;i<=length;i++)
    {

      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)

    }

    setPassword(pass);


  },[length,charAllowed,numberAllowed,password])



  const copyPassword=useCallback(()=>{

    passwordRef.current?.select();
    

    window.navigator.clipboard.writeText(password);
  },[password])
  
  
  useEffect(()=>{

    passwordGenerator()
  },[length,charAllowed,numberAllowed])
  
  return (
    <>
<div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>


<h1 className='text-center text-2xl mb-4 p-2'>Password generator</h1>
<div className='flex shadow rounded-lg overflow-hidden mb-4 '>
  <input type="text" value={password} className='outline-none bg-white w-full py-1 px-3 ' readOnly placeholder='password' ref={passwordRef} />

  <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPassword}>Copy</button>

</div>

<div className='flex text-md capitalize gap-x-2 mb-2 p-2 '>
  
  <div className="flex items-center gap-x-1">

    <input type="range" onChange={(e)=>setLength(e.target.value)
    } min={8} max={100} value={length} className='cursor-pointer '/>
    <label htmlFor=""> length: {length}</label>



  </div>

  <div className="flex items-center gap-x-1">
    <input onChange={(e)=>{setNumberAllowed((prev)=>!prev)}} type="checkbox" defaultChecked={numberAllowed} name="" id="" />
    <label htmlFor="">number</label>

  </div>
  <div className="flex items-center gap-x-1">
    <input onChange={(e)=>{setCharAllowed((prev)=>!prev)}} type="checkbox" defaultChecked={charAllowed} name="" id="" />
    <label htmlFor="">characters</label>

  </div>
</div>
</div>

    </>
  )
}

export default App
