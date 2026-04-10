import React, { useEffect, useState } from 'react'
import Gainers from './Gainers'
import Losers from './Losers'
import StatsCards from './StatsCards'
import CoinTable from './CoinTable'
import { IoIosPulse } from "react-icons/io";
import { CgSpinnerTwo } from "react-icons/cg";
import { toast } from 'react-toastify/unstyled'
const Dashboard = () => {
  const [coins, setCoins] = useState([])
  const [global, setGlobal] = useState(null)
  const [loading, setLoading] = useState(false)
  const BaseUrl = import.meta.env.VITE_BASEURL
  const GlobalUrl = import.meta.env.VITE_GLOBAL
  const fetchData = async () => {
    try {
      setLoading(true)
      const resCoins = await fetch(BaseUrl)
      if (!resCoins.ok) {throw new Error("Failed to fetch coins data")}
      const data = await resCoins.json()
      const resGlobal = await fetch(GlobalUrl)
      if (!resGlobal.ok) {throw new Error("Failed to fetch global data")}
      const globalData = await resGlobal.json()
      
      setCoins(data)
      setGlobal(globalData.data)
      console.log(data, "Coins data")
      console.log(globalData.data, "Global data")
      
      
    } catch (error) {
      console.log(error.message|| "something went wrong")
       toast.error(error.message || "Something went wrong while fetching data") 
      setLoading(false)
    }finally{
      setLoading(false)
    }
  }
  useEffect(()=>{
    fetchData()
  },[])
  const tableCoins = coins
  const gainers = [...coins].sort((a,b)=>b.price_change_percentage_24h - a.price_change_percentage_24h).slice(0,4)
  const losers = [...coins].sort((a,b)=>a.price_change_percentage_24h - b.price_change_percentage_24h).slice(0,4)
  
  // if (loading) return <h2>Loading...</h2>
  return (
    <div className='min-h-screen bg-gray-900 text-white'>
      <header className='sticky z-10 top-0 border-b border-gray-700 bg-gray-900/80 backdrop-blur-md'>
            <div className='max-w-6xl mx-auto flex justify-between items-center py-4 px-4'>
          <h1 className='text-2xl font-bold flex gap-2'> <IoIosPulse className='font-bold text-3xl text-green-600' />CryptoScope</h1>
      <button onClick={fetchData} disabled={loading} className=' flex items-center gap-2 bg-gray-500 px-3 py-1.5 hover:bg-gray-700 rounded cursor-pointer'> <CgSpinnerTwo className={`  ${loading ? 'animate-spin' :""}`} />{loading ? 'Refreshing..': 'Refresh'}</button>
      
      </div>
      </header>
         <main className='  mx-w-6xl py-4 px-4 mx-auto'>
            <StatsCards coins={coins} global={global} />
             <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-5 p-4'>
          <Gainers gainers={gainers} />
      <Losers losers = {losers} />
     
      </section>
       <CoinTable coins={coins} />
         </main>
    
    </div>
  )
}

export default Dashboard
