import React from "react";
import logo from "./img/logo.svg";
import woman from "./img/woman.jpg";
import "./styles/main.css";

function App() {
  return (
    <div class="bg-gray-300">
      <div class="bg-gray-100 flex">
        <div class="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:w-full lg:w-1/2 lg:py-24 lg:px-12">
          <img src={logo} alt="logo" class="h-10 w-10 float-left" />
          <span class="font-bold text-gray-900 text-3xl pl-2 pt-2">Work</span>
          <span class="font-bold text-indigo-500 text-3xl">cation</span>
          <img
            class="mt-6 lg:hidden rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full h-56 w-64 sm:object-cover sm:object-center"
            src={woman}
            alt="woman working"
          />
          <h1 class="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl">
            You can work from anywhere. <br />
            <span class="text-indigo-500">Take advantage of it</span>
          </h1>
          <p class="mt-2 text-gray-600 text-xl sm:mt-4">
            Workation helps you find work-friendly rentals in beautiful
            locations so you can enjoy some nice weather even when you're not on
            vacation
          </p>
          <div class="mt-6">
            <button href="#" class="btn">
              Book your escape
            </button>
          </div>
        </div>
        <div class="hidden lg:block lg:w-1/2 lg:relative">
          <img
            class="absolute inset-0 h-full w-full object-cover object-center"
            src={woman}
            alt="woman working"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
