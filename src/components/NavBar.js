import React, { useState } from "react";

import logo from "../img/logo.svg";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <header className=" bg-gray-900 sm:flex sm:justify-between ">
        <div className="px-4 py-3 bg-gray-900 flex items-center justify-between">
          <div>
            <img className="h-8 " src={logo} alt={logo} />
          </div>
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="block text-gray-500 hover:text-white  focus:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                {isOpen ? (
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
                  />
                ) : (
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                )}
              </svg>
            </button>
          </div>
        </div>
        <div
          className={isOpen ? "px-2 pt-2 pb-4 " : "hidden sm:block  sm:flex"}
        >
          <button
            className="px-2 py-1 block text-white font-semibold hover:bg-gray-700 rounded"
            type="button"
          >
            List your properties
          </button>
          <button
            className="mt-1 px-2 py-1 block text-white font-semibold hover:bg-gray-700 rounded sm:mt-0 sm:ml-2"
            type="button"
          >
            Trips
          </button>
          <button
            className="mt-2 px-2 py-1 block text-white font-semibold hover:bg-gray-700 rounded sm:mt-0 sm:ml-2"
            type="button"
          >
            Messages
          </button>
        </div>
      </header>
    </div>
  );
}
