import React from 'react'
import CoinCard from './CoinCard'
import { FaArrowTrendUp } from "react-icons/fa6";

const Gainers = ({gainers}) => {
  return (
    <div>
      <h2 className='text-xl font-bold mb-3 text-green-400 flex gap-3'><FaArrowTrendUp className='text-green-400 ' /> Gainers</h2>
      <div className='space-y-3'>
         {gainers.map((coin) => (<CoinCard key={coin.id} coin={coin} type="gainer"/>))}
      </div>
      
    </div>
  )
}

export default Gainers
