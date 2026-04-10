import React from 'react'
import CoinCard from './CoinCard'

const Losers = ({losers}) => {
  return (
    <div >
      <h2 className='text-xl font-bold mb-3 text-red-600'>📉 Losers</h2>
      <div className='space-y-3'>
          {losers.map((coin)=>(<CoinCard key={coin.id} coin={coin} type="loser"/>))}
      </div>
     
    </div>
  )
}

export default Losers
