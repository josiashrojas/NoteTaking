export default function Home() {
  return (
    <main className="flex bg-gray-50 h-screen">
      <nav className="w-1/4 bg-orange-400">
        <h1 className="text-3xl text-white font-bold p-2 my-4">Categories</h1>
        <div className="flex flex-col">
          <h2 className="bg-white rounded p-2 text-lg mb-2 mx-2 text-gray-800 hover:text-orange-400 font-bold">Personal</h2>
          <h2 className="bg-white rounded p-2 text-lg mb-2 mx-2 text-gray-800 hover:text-orange-400 font-bold">Work</h2>
          <h2 className="bg-white rounded p-2 text-lg mb-2 mx-2 text-gray-800 hover:text-orange-400 font-bold">Ideas</h2>
          <h2 className="bg-white rounded p-2 text-lg mb-2 mx-2 text-gray-800 hover:text-orange-400 font-bold">Recipies</h2>
        </div>
      </nav>
      <section className="p-4 flex flex-1 gap-4">
        <div className="bg-white rounded-lg h-1/2 w-1/3 p-4 shadow-md flex flex-col hover:border-orange-400 border transition-colors">
          <h3 className="text-lg font-bold mb-2">Grocery List</h3>
          <p className="text-gray-500">
          1. Milk<br/>
          2. Bread<br/>
          3. Eggs<br/>
          4. Apples<br/>
          5. Chicken<br/>
          Remember to bring your reusable shopping bags!
          </p>
          <div className="flex-1 flex flex-col justify-end items-end">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </div>
        </div>
        <div className="bg-white rounded-lg h-1/2 w-1/3 p-4 shadow-md flex flex-col hover:border-orange-400 border transition-colors">
          <h3 className="text-lg font-bold mb-2">Grocery List</h3>
          <p className="text-gray-500">
          1. Milk<br/>
          2. Bread<br/>
          3. Eggs<br/>
          4. Apples<br/>
          5. Chicken<br/>
          Remember to bring your reusable shopping bags!
          </p>
          <div className="flex-1 flex flex-col justify-end items-end">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg h-1/2 w-1/3 p-4 shadow-md flex flex-col hover:border-orange-400 border border-dashed transition-colors items-center justify-center text-gray-400 hover:text-orange-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-1/2 h-1/2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
      </section>
    </main>
  )
}
