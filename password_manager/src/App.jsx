import { useEffect, useState } from 'react'
import { PasswordProvider, usePassword } from './contexts/passwordContext'
import './App.css'
import PasswordForm from './components/PasswordForm'


function App() {

  const [passwords,setPasswords]=useState([])

  const addPassword=(pass)=>{

    console.log(pass)
    setPasswords((prev)=>[{id:Date.now(),...pass},...prev])
  }

  const deletePassword=(id)=>{

    setPasswords((prev)=>prev.filter((prevPass)=>prevPass.id!==id))

 
  }

  useEffect(()=>{

    const passwords=JSON.parse(localStorage.getItem("passwords"))

    if(passwords && passwords.length>0)
    {
      setPasswords(passwords)
    }

    console.log(passwords)
  },[])

  useEffect(()=>{

    console.log(passwords)

    localStorage.setItem("passwords",JSON.stringify(passwords))
    
  },[passwords])


  // const editPassword=(id,newPass)=>{

  //   setPasswords((prev)=>{prev.map((prevPass)=>(prevPass.id===id ? {...prevPass}))})
  // }


  

  return (

    <PasswordProvider value={{passwords,addPassword,deletePassword}}>
    <>
    <div className="bg-[#242424] h-screen w-full text-white p-2">

    <h1 className='font-bold text-4xl text-center p-2  text-blue-500 shadow-white'>Password <span className='text-white'>Manager</span></h1>

   
    <div className='mt-5 '>
        <PasswordForm/>
    
    </div>
    <div className="p-6">

    <h2 className='text-2xl font-bold py-4 '>Your Passwords:</h2>

      <table className='table-auto rounded-md overflow-hidden w-full border border-gray-300 '  >
        <thead className="bg-blue-800  text-white " >
          <tr >
            <th className='py-2 '>Website</th>
          <th className='py-2'>Username</th>
          <th className='py-2'>Password</th>
          <th className='py-2'>Actions</th>
          </tr>
        </thead>

        <tbody className='bg-zinc-900'>
        {
          passwords.map((password)=>(
            <tr key={password.id}>
          <td className='py-2 text-center w-32 border border-white'>{password.url}</td>
          <td className='py-2 text-center w-32 border border-white'>{password.username}</td>
          <td className='py-2 text-center w-32 border border-white'>{password.password}</td>
          
          
          <td className='py-2 text-center w-32 border border-white'><div className=''>
          <button className='text-white rounded-lg  bg-red-500 px-2 py-1 text-bold text-lg' onClick={()=>deletePassword(password.id)}>delete</button>
          </div></td>
        </tr>
          ))
        }

        </tbody>
      
      </table>
    </div>
    
    </div>
     
    </>
    </PasswordProvider>
  )
}

export default App
