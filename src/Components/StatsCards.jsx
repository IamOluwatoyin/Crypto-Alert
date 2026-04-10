import React from 'react'
import { IoIosPulse } from "react-icons/io";
import {   FaRegChartBar } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { AiOutlineDollar } from "react-icons/ai";
const StatsCards = ({coins, global}) => {
  const topCoin = coins[0]
  const avgChange = coins.reduce((acc, coin) => acc + coin.price_change_percentage_24h, 0) / coins.length
  return (
    <div className='grid md:grid-cols-4 gap-4'>
      <div className='bg-gray-800 p-4 rounded-xl'>
        <p className='flex gap-2'> <IoIosPulse className='font-bold text-2xl' />Top Coin</p>
        <h2> {topCoin?.name} ${topCoin?.current_price?.toLocaleString()}</h2>
      </div>
      <div className='bg-gray-800 p-4 rounded-xl'>
       <p className='flex gap-2 '> <AiOutlineDollar  className=' text-2xl' />
          Market Cap</p>
       <h2>${(global?.total_market_cap.usd / 1e12).toFixed(2)}T</h2>
      </div>
      <div className='bg-gray-800 p-4 rounded-xl'>
          <p className='flex gap-2'> <FaRegChartBar className='font-bold text-2xl' /> 24h Volume </p>
          <h2>${(global?.total_volume.usd / 1e9).toFixed(2)}B</h2>
      </div>
      <div className='bg-gray-800 p-4 rounded-xl'>
         <p className='flex gap-2'> <FaArrowTrendUp className='font-bold text-2xl' />Avg Change</p>
         <h2>{avgChange?.toFixed(2)}%</h2>
      </div>
    </div>
  )
}

export default StatsCards
