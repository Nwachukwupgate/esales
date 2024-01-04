import React, {useState} from 'react'

const Header = () => {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');
  return (
    <header>
        <nav>
          <div className="flex justify-between px-12  items-center py-4">
            <div className="flex space-x-16 items-center">
              <div onClick={() => setOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 cursor-pointer text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              {/* <h1 className="text-white font-bold text-xl tracking-wide cursor-pointer">Tubemixza</h1> */}
              <div className="flex items-center max-w-md mx-auto border-b-2 border-solid border-gray-400 rounded-lg" x-data="{ search: '' }">
                <div className="w-full">
                  <input
                    type="search"
                    className="w-full px-4 py-1 text-gray-600 rounded-full focus:outline-none bg-inherit"
                    placeholder="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className={`flex items-center justify-center w-12 h-12 text-red-600 rounded-r-lg ${
                      search.length > 0 ? 'bg-purple-500' : ' cursor-not-allowed'
                    }`}
                    disabled={search.length === 0}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* <ul className="flex space-x-6">
              <li className="text-white text-lg font-semibold tracking-normal cursor-pointer">Home</li>
              <li className="text-white text-lg font-semibold tracking-normal cursor-pointer">About</li>
              <li className="text-white text-lg font-semibold tracking-normal cursor-pointer">Contact</li>
            </ul> */}
            <h1 className="text-red-600 font-bold text-xl tracking-wide cursor-pointer">Tubemixza</h1>
          </div>
        </nav>
        {open && 
          <nav className='z-99'>
            <div className="absolute top-0 w-60 bg-white p-6">
              <div className="flex space-x-6 mb-6">
                <span onClick={() => setOpen(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                <h1>Dashboard</h1>
              </div>
              <ul className="flex flex-col space-y-6 mt-14 border-t py-6">
                <li className="hover:bg-red-500 transition duration-500">Home</li>
                <li>Products</li>
                <li>About</li>
                <li>Contact</li>
                <li>Logout</li>
              </ul>
            </div>
          </nav>
        }
      </header>
  )
}

export default Header