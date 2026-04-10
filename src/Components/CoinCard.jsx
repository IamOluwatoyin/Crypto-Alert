import React from "react";

const CoinCard = ({ coin, type }) => {
  const isGainer = type === "gainer" ;
  return (
    <div className="bg-gray-800 rounded-xl p-4 w-full shadow-md hover:scale-105 transition">
      <h3 className="text-lg font-semibold flex items-center gap-2">
        {<span className="px-2 py-1 rounded-full bg-gray-700 text-white text-xs">{coin.symbol.toUpperCase()}</span>}  {coin.name}
      </h3>
        <p className="text-sm text-gray-400">Rank:{coin.market_cap_rank}</p>
      <p className="text-xl font-bold mt-2">Price: ${coin.current_price.toLocaleString()}</p>
      <p className={`mt-1 font-medium ${isGainer ? "bg-green-400": "bg-red-400"}`} >Change:{coin.price_change_percentage_24h.toFixed(2)}%</p>
    
    </div>
  );
};

export default CoinCard;
