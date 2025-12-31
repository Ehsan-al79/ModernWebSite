

export default function Layout({ children }) {

 
  return (
    <div className="w-full">
      
    
      <header className="flex w-full px-3 md:px-40 lg:px-60 xl:px-80">
        <div className="flex w-full justify-center md:justify-between items-center bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 p-5 rounded-2xl my-10 shadow-lg">
          <h1 className="text-white text-5xl font-bold -mt-1 text-nowrap">Crypto App</h1>
          <div className="flex justify-center items-center text-2xl gap-x-1">
            <a
              href="#"
              className="p-1 hidden md:flex text-wrap font-medium px-[6px] -mb-1 text-green-300 rounded-sm cursor-pointer hover:text-sky-400 transition-all duration-100 ease-in "
            >
              ehsanStart
            </a>
          </div>
        </div>
      </header>

    
      {children}


      <footer className="flex w-full px-3 sm:px-10 md:px-40 lg:px-60 2xl:px-80">
        <div className="flex w-full justify-center items-center bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 p-5 rounded-2xl my-10 shadow-lg">
          <p className="text-white text-2xl font-bold">
            Developed by <span className="text-sky-300">Ehsan </span><span className="text-red-600">♥</span>
          </p>
        </div>
      </footer>
      
    </div>
  );
}
