import React, { useEffect, useState } from 'react'
import Dashboard from './Components/Dashboard'
import { CgSpinnerTwo } from "react-icons/cg";

const App = () => {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
     setTimeout(()=>{
      setLoading(false)
  },2000);
  },[])
   return (
    <div>
      {loading  ? (<h2 className='flex justify-center items-center h-screen bg-gray-900'><CgSpinnerTwo className= 'animate-spin text-5xl text-white'  /></h2>) :
      <Dashboard/>}
    </div>
  )
}

export default App
