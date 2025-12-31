
export default function Pagination({page,setPage}) {
   
    function increasePage(){
        if (page < 10 ){
            setPage((page)=>(page+1))
        }
    }
       function decreasePage(){
        if (page > 1){
            setPage((page)=>(page-1))
        }
    }
    function getValue(event){
        const value=Number(event.target.innerText);
        setPage(value)

    }
  return (
<div className="w-full flex justify-center">
    <div>
       <div className="flex items-center gap-x-5 text-white py-10">
        <span onClick={getValue} className={page===1 ? "bg-blue-500 size-7 rounded-md flex items-center justify-center cursor-pointer" : "border-[rgba(255,255,255,0.4)] border size-7 rounded-md flex items-center justify-center cursor-pointer"}>1</span>
        <span onClick={getValue} className={page===2 ? "bg-blue-500 size-7 rounded-md flex items-center justify-center cursor-pointer" : "border-[rgba(255,255,255,0.4)] border size-7 rounded-md flex items-center justify-center cursor-pointer"}>2</span>
        <span className="text-nowrap">. . .</span>
        {page > 2 && page < 9 && (<> <span className="bg-blue-500 size-8 flex items-center justify-center rounded-md">{page}</span>
        <span className="text-nowrap">. . .</span></>)}
        <span onClick={getValue} className={page===9 ? "bg-blue-500 size-7 rounded-md flex items-center justify-center cursor-pointer" : "border-[rgba(255,255,255,0.4)] border size-7 rounded-md flex items-center justify-center cursor-pointer"}>9</span>
        <span onClick={getValue} className={page===10 ? "bg-blue-500 size-7 rounded-md flex items-center justify-center cursor-pointer" : "border-[rgba(255,255,255,0.4)] border size-7 rounded-md flex items-center justify-center cursor-pointer"}>10</span>
        
       </div>
       <div className="text-white gap-x-5 flex justify-center items-center">
        <button onClick={decreasePage} className={page===1 ? "p-3 rounded-2xl w-24 bg-gray-700 text-gray-400 " : "bg-blue-500 p-3 rounded-2xl w-24 cursor-pointer hover:bg-blue-600"}>Previos</button>
        <button onClick={increasePage} className={page===10 ? "p-3 rounded-2xl w-24 bg-gray-700 text-gray-400 " : "bg-blue-500 p-3 rounded-2xl w-24 cursor-pointer hover:bg-blue-600"}>Next</button>
       </div>
       
    </div>
</div>
  )
}
