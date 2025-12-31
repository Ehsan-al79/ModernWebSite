import { useState, useEffect } from "react";
import { searchCoin } from "../services/cryptoApi";
import RotatingLines from "../templates/RotatingLines";


export default function SearchBox({ setCurrency, currency }) {
  // استیت مربوط گرفتن دیتا از اینپوت
  const [text, setText] = useState("");
  //  استیت به مربوط به ست کردن ای پی ای
  const [coins, setCoins] = useState([]);
  //  استیت مربوط به لودینگ
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  
    // چون مقدار اولیه رو استیت رو ""دادیم میخواهیم دفعه اول یوز افکت اجرا نشه یعنی اگر رشته خالی بود اجرا نشه
    if (!text) {
        // بعد هر بار اجرا برای زمانی که ما متن داخل اینپوت رو پاک کردیم نوشته ها هم از بین برن میگیم خالی کن و متن جدید بگیر
      setCoins([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    // تابع تاخیر درخواست در بدنه خودش تابعی که بعد مدتی اجرا میشه
    const timeout = setTimeout(() => {
      async function search() {
        const res = await fetch(searchCoin(text));
        const json = await res.json();
        // بعضی وقتا  وقتی زیاد درخواست  بدی یک ابجکت بر میگردونه که کوین داخلش نیس پس میگیم وقتی بود ست کن
        if (json.coins) setCoins(json.coins);
        setLoading(false);
      }
      search();
    }, 500);
    // ری اکت اول اینو اجرا میکنه یعنی درخواست قبلی رو پاک میکنه یعنی هر کلمه ای که میاد یوز افکت از اول اجرا میشه
    return () => clearTimeout(timeout);
  }, [text]);

  // تابع گرفتن مقدار اینپوت
  function inputValue(event) {
    setText(event.target.value);
  }
  //  تابع گرفتن مقدار بر اساس نوع ارز
  function setValue(event) {
    const value = event.target.value;
    setCurrency(value);
  }
  return (
    <div className="flex relative flex-col text-white py-5 lg:px-12 max-sm:px-6 sm:px-10">
      <div className=" flex  gap-x-5">
        <input
          value={text}
          onChange={inputValue}
          type="text"
          placeholder="search"
          className="px-4 py-2 w-[320px] flex bg-gray-700 placeholder:text-xl rounded-lg outline-none"
        />
        <select
          value={currency}
          onChange={setValue}
          className="[&>*]:bg-[#343434] p-4 rounded-xl"
        >
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="jpy">JPY</option>
        </select>
      </div>
      {/* اگر طول رشته یا لودینگ تورو باشه کل دیو به نمایش میاد و نشون دادن لودینگ بر اساس تورو و فالسه */}
      {(!!coins.length || loading) && (
        <div className="absolute w-[318px] sm:w-[320px] rounded-sm top-20 flex flex-col h-100 overflow-y-scroll scrollbar-hidden">
          {loading ? (<RotatingLines />) : (<ul className="w-full bg-[#23242e] px-2 ">
            {coins.map((item) => (
              <li
                className="flex items-center py-4 px-2 border-b-[1px] border-[rgba(255,255,255,0.5)] gap-x-1"
                key={item.id}
              >
                <img className="size-8" src={item.thumb} alt={item.name} />
                <span>{item.name}</span>
              </li>
            ))}
          </ul>)}
        
        </div>
      )}
    </div>
  );
}
