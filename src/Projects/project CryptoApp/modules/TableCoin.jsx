import chartUp from "../assets/chart-up.svg";
import chartdown from "../assets/chart-down.svg";
import { marketChart } from "../services/cryptoApi";
import { useEffect, useState } from "react";

export default function TableCoin({ chart, coins, currency, setChart }) {
  // استیت برای اینکه روی ایتمی که قراره چارتشو ببینم کلیک کردم پشت زمینه قرمز بمونه
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    if (!chart) {
      setSelectedId(null);
    }
  }, [chart]);

  // تابعی که از کلیک روی ایکون نوع ارز میاد و  برای ست کردن استیت چارت و گرفتن ای پی ای
  async function chartData(id) {
    try {
      const res = await fetch(marketChart(id));
      const json = await res.json();
      // راه حل: همیشه یک آبجکت مشخص از کوین انتخاب شده را داخل state قرار بده، نه کل آرایه.
      const selectedCoin = coins.find((coin) => coin.id === id);
      setSelectedId(id);
      // این فایل جیسون از نوع ابجکت است
      // اینجا تمام کلیدهای جیسون مستقیما به ابجکت چارت منتقل میشن نه درون یک کلید به اسم جیسون  و کوین هم اضافه میشه
      // اگر بجای سه نقطه جیسون جیسون خالی بزاری یک کلید واژه جدید میسازه پس باید مقدار قبلیو بدیم
      setChart({ ...json, coins: selectedCoin });
    } catch (error) {
      console.log(error);
      setChart(null);
    }
  }

  // تابع بر اساس نوع کارنسی تعیین شده که چه مدل علامت ارز برگردونه
  function setSign() {
    switch (currency) {
      case "usd":
        return "$";
      case "eur":
        return "€";
      case "jpy":
        return "¥";
    }
  }

  return (
    <>
      <table className="text-white flex flex-col w-full">
        <thead>
          <tr className="max:md:-ml-4 grid grid-cols-5 md:grid-cols-6 max-xl:py-5 py-10 text-xl max-sm:mx-1 border-b-2 [*>&]:text-nowrap">
            <th>Coin</th>
            <th className=" hidden md:flex ml-5">Name</th>
            <th>Price</th>
            <th>24h</th>
            <th>Total Volume</th>
            <th className="hidden md:flex "></th>
          </tr>
        </thead>
        <tbody className="flex flex-col items-center justify-center w-full">
          {coins.map((item) => (
            <tr
              className="justify-between [&>*]:w-36 flex py-5 w-full items-center lg:px-10  [&>*]:text-center border-b-1 border-[rgba(255,255,255,0.1)]"
              key={item.id}
            >
              <td>
                <div
                  // وقتی میخوای مقادیر پاس بدی حتما بصورت ارو فانکشن که داخل لوپ بینهایت گیر نکنه
                  onClick={() => chartData(item.id)}
                  className={`${selectedId === item.id ? "bg-red-500 ":"bg-transparent "} flex text-transparent items-center  py-3 px-1 hover:outline-1 hover:outline-sky-500 hover:[&>*]:text-sky-400   rounded-2xl gap-x-0.5 md:gap-x-2 justify-center cursor-pointer transition-all duration-400 ease-in-out`}
                >
                  <img src={item.image} className="w-8 h-8" alt="svg" />
                  {/* toUpperCase تمام کلمات بزرگ میشن */}
                  <span className="text-white transition-all duration-300 ease-in">
                    {item.symbol.toUpperCase()}
                  </span>
                </div>
              </td>
              <td className="hidden md:flex">{item.name}</td>
              {/* tolocal string سه تا سه تا اعداد جدا میکنه  */}
              <td>
                {setSign()}
                {item.current_price.toLocaleString()}
              </td>
              {/* toFixed(2) تا دو رقم اعشار گرد میکنه */}
              <td
                className={
                  item.price_change_percentage_24h > 0
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {item.price_change_percentage_24h.toFixed(2)}
              </td>
              <td>{item.total_volume.toLocaleString()}</td>
              <td>
                <img className="max-sm:w-14 max-sm:h-10 max-sm:ml-2"
                  src={
                    item.price_change_percentage_24h > 0 ? chartUp : chartdown
                  }
                  alt={item.name}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
