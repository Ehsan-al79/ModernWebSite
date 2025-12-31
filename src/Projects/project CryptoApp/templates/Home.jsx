
import { useEffect,useState } from "react";
import TableCoin from "../modules/TableCoin"
import {getCoinList} from "../services/cryptoApi";
import Loading from "./Loading";
import Pagination from "../modules/Pagination";
import SearchBox from "../modules/SearchBox";
import Chart from "../modules/Chart";


function Home() {
  // این استیت برای ست کردن مقدار ای پی ای هست
    const [coins, setCoins] = useState([]);
    // استیت لودینگ برای صفحه لودینگ
    const [loading, setLoading] = useState(true);
    // این استیت برای صفحه است که به تابع فایل ای پی ای پاس میدیم
    const [page, setPage] = useState(1);
    // استیت گرفتن نوع ارز برای پاس به پایین
    const [currency, setCurrency] = useState("usd");
    // استیت ساخت چارت برای پاس به پایین
    const [chart, setChart] = useState(null);
  
   
 
  
  useEffect(() => {
    setLoading(true)
       async function getData(){
              // مقدار صفحه باید به تابع ای پی ای پاس داده بشه
            const res=await fetch(getCoinList(page,currency));
            const json=await res.json();
            setCoins(json)
            setLoading(false)
        }
        getData();
        //برای رفرش شدن صفحه نیازه که پیج بعنوان دیپندنسی داده باشه تا باهر بار تغییر یوز افکت دوباره فعال شه
  }, [page,currency]);
return (
  // کلاس های عمومی داخل بک تیک
  <div className={`${chart ? "fixed" : "relative"}  max-xl:px-0 px-80`}>
    {loading ? (<Loading />) : (<>
    <SearchBox setCurrency={setCurrency} currency={currency}/>
    {!!chart && (<Chart  chart={chart} setChart={setChart}/>)}
    <TableCoin chart={chart}  coins={coins} currency={currency} setChart={setChart}/>
    <Pagination  page={page} setPage={setPage}/>
    </>)}
    </div>
);
}

export default Home;
