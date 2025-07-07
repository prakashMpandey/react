import React, { useState } from 'react'
import {usePassword} from "../contexts/passwordContext"
function PasswordForm() {


  const [password,setPassword]=useState('')
  const [url,setUrl]=useState('')
  const [username,setUsername]=useState('')

  const {addPassword}=usePassword()

  const handleSubmit=(e)=>{

    e.preventDefault()

    if(!(username || website || url))
    {
      return ;
    }

  
    addPassword({username,password,url})

    setPassword('')
    setUrl('')
    setUsername('')
  }



  const [isVisible,setIsVisible]=useState(false)
  return (
    <form className='bg-gray-900 rounded-md px-6 max-w-4xl py-4  mx-auto h-1/2'  onSubmit={handleSubmit}>

    <h2 className='text-2xl text-center  font-bold mb-2'>Enter New Password</h2>
    <div className="px-4">
        <input type="text"  className=' bg-white rounded-md w-full  text-black h-[35px] outline-none px-4 my-3 placeholder:p-2 placeholder:capitalize focus:ring-2 focus:ring-blue-500 focus:shadow-lg ' placeholder=' website URL' value={url}  onChange={(e)=>setUrl(e.target.value)}/>
    </div>

      <div className=" flex gap-2 mt-2 px-4">
         <input type="text"  className=' bg-white rounded-md w-full text-black outline-none h-[35px] px-4 placeholder:capitalize placeholder:p-2 focus:ring-2 focus:ring-blue-500 focus:shadow-lg' value={username} placeholder='username'
          onChange={(e)=>setUsername(e.target.value)}
         />

       <div className='relative w-full'>
          <input type={isVisible?"text":"password"}  className=' bg-white rounded-md w-full  text-black px-4 h-[35px] placeholder:capitalize placeholder:p-2  outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-lg transition-all duration-200' placeholder='password' value={password}
            onChange={(e)=>setPassword(e.target.value)}
            autoComplete='false'
          />
         <p className='absolute top-0.5 p-1 right-1 text-gray-500   ' onClick={()=>{

          setIsVisible((prev)=>!prev)

         }}>{isVisible?"hide":"show"}</p>
       </div>
      </div>
      <div className="text-center mt-4">
      <button className='bg-blue-700 mt-4 px-6 h-[32px]  text-lg rounded-lg capitalize'>add password</button>

      </div>
    </form>
  )
}

export default PasswordForm
