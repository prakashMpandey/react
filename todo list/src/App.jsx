import { useEffect, useRef, useState } from 'react'


function App() {


  const [task,setTask]=useState('')

  const [tasks,setTasks]=useState([])
  const [isHidden,setIsHidden]=useState(true)

  const idRef=useRef(0);


  const handleChange=(e)=>{

    setTask(e.target.value)
  }

  const addTask=()=>{


    if(task==='')
    {
      return
    }

    setTasks((prev)=>{
      
      const updatedTodos=[...(prev || []),{id:idRef.current,task:task}]
    
     localStorage.setItem("tasks",JSON.stringify(updatedTodos))

      return updatedTodos})
     
      
      idRef.current=idRef.current+1;
      setTask('')
    }


    const handleDelete=(taskId)=>{

     const updatedTasks= tasks.filter((task)=>{
        
        return taskId!=task.id
       
      })
      setTasks(updatedTasks)
      
      localStorage.setItem('tasks',JSON.stringify(updatedTasks))

    }


    const deleteAll=()=>{
      setTasks([])
      localStorage.clear()
    }


    useEffect(()=>{

      const storedTasks=JSON.parse(localStorage.getItem('tasks'))

        setTasks(storedTasks || [])
        
    },[task])


  return (
    <>
      <div className='w-full h-screen  bg-gradient-to-tr from-blue-600 via-cyan-600 to-sky-400 py-10'>
     

     <div className=" bg-white mx-auto max-w-sm rounded-xl shadow px-8 py-2 ">

    <div className="">
        <h1 className='text-black text-3xl text-center font-bold'>Todo List</h1>
    </div>

    <form onSubmit={(e)=>e.preventDefault()}>
      <div className='w-full my-2 flex items-center'>
        <input value={task} onChange={handleChange} type="text" className='w-full outline-1 outline-gray-400 p-2 rounded-lg h-[50px] '  placeholder='Add your new todo'  />
       
       <button className='text-white bg-purple-700 font-bold rounded-md text-center text-3xl   m-1 w-13 h-12 hover:bg-purple-900 duration-300 ' type='submit' onClick={addTask}>
       
       <img src="/add.svg"  alt="+" className='text-white'  />
       </button>
      </div>
    </form>

      <div className="flex flex-col gap-1 items-center">

     {
      tasks.map((task)=>{

         return <div key={task.id} className={`group flex  rounded-lg w-full mb-2 gap-0.5 ` }>
        <div className="bg-gray-200 h-[40px] w-full p-2 text-lg text-gray-700">
          <p>{task.task}</p>
        </div>
        <button   className=" hidden bg-red-500 duration-200 group-hover:flex hover:bg-red-700 px-2 py-2 h-[40px] w-[40px] text-center rounded-md   "  onClick={(e)=>{handleDelete(task.id)}}>
                <img src="/trash-solid.svg" alt=""  className=""/>
        </button>
      </div>
      })
     }
      </div>





      <div className='flex items-center justify-between'>
      <div >
        <p className='text-lg text-gray-700'>You have  {tasks.length===0 ?'no' : tasks.length} tasks pending</p>
      </div>
      <button onClick={deleteAll} className='bg-purple-600 text-center p-2 text-white font-semibold capitalize rounded-md hover:bg-purple-700'>clear all</button>
      </div>
     </div>
      </div>
    </>
  )
}

export default App
