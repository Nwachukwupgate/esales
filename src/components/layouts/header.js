import {useState} from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [nav, setNav] = useState(false)

    const primaryColors = {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554'
    };

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://sidorluxury.com/assets/images/logo/logo.png"
              className="mr-3 h-9 md:h-16"
              alt="Sidorluxury Logo"
            />
            {/* <span className="self-center text-xl font-semibold whitespace-nowrap ">
              Sidorluxury
            </span> */}
          </Link>
          <div className="flex items-center lg:order-2">
            <Link to="/product">
              <p
                className="text-[#c4a76d] hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none "
              >
                Product
              </p>
            </Link>
            
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={() => setNav(!nav)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${nav ? 'z-50' : 'hidden'} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {/* Apply primary color for the "Home" link */}
              <li>
                <Link to="/">
                  <p
                    className={`block py-2 pr-4 pl-3 text-white rounded bg-${primaryColors[500]} lg:bg-transparent lg:text-${primaryColors[500]} lg:p-0 `}
                    aria-current="page"
                  >
                    Home
                  </p>
                </Link>
              </li>
              <li>
                <Link to="/project">
                  <p
                    className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-${primaryColors[500]} lg:p-0 text-xl`}
                  >
                    Project
                  </p>
                </Link>
              </li>
              {/* Apply primary color for the "Company" link */}
              <li>
                <Link to="/about">
                  <p
                    className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-${primaryColors[500]} lg:p-0 text-xl`}
                  >
                    About
                  </p>
                </Link>
              </li>
              {/* Apply primary color for the "Marketplace" link */}
              <li>
                <Link to="/work">
                  <p
                    className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-${primaryColors[500]} lg:p-0 text-xl`}
                  >
                    Work
                  </p>
                </Link>
              </li>
              {/* Apply primary color for the "Features" link */}
              <li>
                <Link to="/process">
                  <p
                    className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-${primaryColors[500]} lg:p-0 text-xl`}
                  >
                    Process
                  </p>
                </Link>
              </li>
              {/* Apply primary color for the "Team" link */}
              <li>
                <Link to="/contact">
                  <p
                    className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-${primaryColors[500]} lg:p-0 text-xl`}
                  >
                    Contact
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header