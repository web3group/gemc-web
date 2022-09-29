import React from "react";

export default function Header() {
  return (
    <div className="h-20">
      <nav className="bg-white border-gray-200 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="flex flex-wrap justify-space-between items-center ml-6 mr-6">
          <a href="" className="flex items-center">
            <span className="nav-title self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              GEMC
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
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
          </button>
          <div
            className="hidden w-full md:block md:w-auto mx-auto ml-20"
            id="navbar-default"
          >
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/front-page"
                  className="nav-item block py-2 pr-4 pl-3 text-gray-700 bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white text-base"
                  aria-current="page"
                >
                  mint a gemc
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-item block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-base"
                >
                  wiki
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-item block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-base"
                >
                  community
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="nav-item block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-base"
                >
                  about gemc
                </a>
              </li>
            </ul>
          </div>
          <button
            type="button"
            className="nav_btn text-white text-lg font-bold bg-black hover:bg-black-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <span className="nav_btn_text">OpenSea</span>
          </button>
        </div>
      </nav>
    </div>
  );
}