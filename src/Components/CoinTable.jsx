import React from 'react';
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const CoinTable = ({ coins }) => {
  return (
    <div className='mt-8 bg-gray-900 rounded-lg border border-gray-700 p-4 overflow-x-auto'>
      <h2 className='text-xl mb-4'>Market Data</h2>

      <table className='w-full text-sm'>
        
        <thead>
          <tr className='border-b border-gray-700 bg-gray-800 text-gray-400 text-xs'>
            <th className='py-3 px-2 text-left'>#</th>
            <th className='py-3 px-2 text-left'>Coin</th>
            <th className='py-3 px-2 text-right'>Price</th>
            <th className='py-3 px-2 text-right'>24h%</th>
            <th className='py-3 px-2 hidden text-right sm:table-cell'>7D</th>
            <th className='py-3 px-2 hidden text-right md:table-cell'>Market Cap</th>
            <th className='py-3 px-2 hidden text-right lg:table-cell'>Volume</th>
            <th className='py-3 px-2 hidden text-right lg:table-cell'>Updated</th>
          </tr>
        </thead>

        <tbody>
          {coins.map((coin) => {
            const isPositive = coin.price_change_percentage_24h >= 0;

            return (
              <tr
                key={coin.id}
                className="border-b border-gray-700 hover:bg-gray-800 transition"
              >
                
                <td className="py-3 px-2">
                  {coin.market_cap_rank}
                </td>

                <td className="py-3 px-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={coin.image}
                      alt={coin.name}
                      className="h-7 w-7 rounded-full"
                    />

                    <div>
                      <p className="font-medium">{coin.name}</p>
                      <p className="text-xs text-gray-400 uppercase">
                        {coin.symbol}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="py-3 px-2 text-right">
                  ${coin.current_price.toLocaleString()}
                </td>

                <td className="py-3 px-2 text-right">
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold ${
                      isPositive
                        ? "text-green-400 bg-green-900/30"
                        : "text-red-400 bg-red-900/30"
                    }`}
                  >
                    {isPositive ? (
                      <ArrowUpRight size={12} />
                    ) : (
                      <ArrowDownRight size={12} />
                    )}
                    {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                  </span>
                </td>

                <td className="py-3 px-2 hidden sm:table-cell text-right">
                  {coin.price_change_percentage_7d_in_currency.toFixed(2)}%
                </td>

                <td className="py-3 px-2 text-right hidden md:table-cell">
                  ${(coin.market_cap / 1e9).toFixed(2)}B
                </td>

                <td className="py-3 px-2 text-right hidden lg:table-cell">
                  ${(coin.total_volume / 1e9).toFixed(2)}B
                </td>

                <td className="py-3 px-2 text-right hidden lg:table-cell">
                  {new Date(coin.last_updated).toLocaleTimeString()}
                </td>

              </tr>
            );
          })}
        </tbody>

      </table>
    </div>
  );
};

export default CoinTable;