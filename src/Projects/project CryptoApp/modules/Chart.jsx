import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { convertData } from "../services/convertData";
import { useState } from "react";


export default function Chart({ chart, setChart }) {
  // استیت برای تعیین نوع چارت چیزی که در ای پی ای هم وجود داره
  const [type, setType] = useState("prices");
  const[number,setNumber]=useState(1)

 function setter(name){
  switch(name){
    case 1:
      setType("prices")
      setNumber(1)
      return;
    case 2:
      setType("market_caps")
      setNumber(2)
      return;
    case 3:
      setType("total_volumes")
      setNumber(3)
      return;
  }
  
 }

  return (

    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex justify-center items-center z-50 ">
  {/* Modal Container */}
  <div className="relative w-11/12 max-w-4xl bg-[#18181ce6] rounded-xl p-6 shadow-2xl">
    
    {/* Close Button */}
    <button
      className="absolute top-4 right-4 bg-red-500 px-3 py-1 font-medium text-white rounded-xl cursor-pointer hover:scale-105 transition-transform duration-150 shadow-lg"
      onClick={() => setChart(false)}
    >
      X
    </button>

    {/* Header */}
    <div className="flex items-center gap-3 mb-6 text-white">
      <img src={chart.coins.image} className="w-8 h-8" alt="logo" />
      <span className="text-xl font-semibold">{chart.coins.symbol.toUpperCase()}</span>
    </div>

    {/* Chart Container */}
    <div className="w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={convertData(chart, type)}>
          <Line type="monotone" dataKey={type} stroke="#3874ff" strokeWidth={2} />
          <CartesianGrid stroke="#404042" />
          <YAxis dataKey={type} domain={['auto', 'auto']} />
          <XAxis dataKey="data" hide />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>

    {/* Chart Type Buttons */}
    <div className="flex gap-4 mt-4">
      <button
        onClick={() => setter(1)}
        className={`px-4 py-1 rounded cursor-pointer ${number === 1 ? "bg-red-600 text-white" : "bg-gray-700 text-gray-300"}`}
      >
        Prices
      </button>
      <button
        onClick={() => setter(2)}
        className={`px-4 py-1 rounded cursor-pointer ${number === 2 ? "bg-red-600 text-white" : "bg-gray-700 text-gray-300"}`}
      >
        Market Caps
      </button>
      <button
        onClick={() => setter(3)}
        className={`px-4 py-1 rounded cursor-pointer ${number === 3 ? "bg-red-600 text-white" : "bg-gray-700 text-gray-300"}`}
      >
        Total Volume
      </button>
    </div>

    {/* Coin Info */}
    <div className="grid grid-cols-3 gap-6 mt-6 text-white text-center">
      <div>
        <p className="text-sm text-gray-400">Price</p>
        <span className="font-medium">${chart.coins.current_price}</span>
      </div>
      <div>
        <p className="text-sm text-gray-400">ATH</p>
        <span className="font-medium">${chart.coins.ath}</span>
      </div>
      <div>
        <p className="text-sm text-gray-400">Market Cap</p>
        <span className="font-medium">${chart.coins.market_cap}</span>
      </div>
    </div>

  </div>
</div>

  );
}
