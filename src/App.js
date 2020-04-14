import React from "react";
import logo from "./img/logo.svg";
import woman from "./img/woman.jpg";
import "./styles/main.css";
import DestinationCard from "./components/DestinationCard";

const popularDestination = [
  {
    city: "dubai",
    averagePrice: "120",
    propertyCount: "76",
    imageUrl: require("./img/dubai.jpg"),
  },
  {
    city: "japan",
    averagePrice: "100",
    propertyCount: "24",
    imageUrl: require("./img/japan.jpg"),
  },
  {
    city: "Amsterdam",
    averagePrice: "450",
    propertyCount: "126",
    imageUrl: require("./img/amsterdam.jpg"),
  },
  {
    city: "Venice",
    averagePrice: "200",
    propertyCount: "91",
    imageUrl: require("./img/venice.jpg"),
  },
  {
    city: "New York",
    averagePrice: "700",
    propertyCount: "172",
    imageUrl: require("./img/newyork.jpg"),
  },
];
function App() {
  return (
    <div className="bg-gray-300">
      <div className="bg-gray-100 flex">
        <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:w-full lg:w-1/2 lg:py-24 lg:px-12">
          <img src={logo} alt="logo" className="h-10 w-10 float-left" />
          <span className="font-bold text-gray-900 text-3xl pl-2 pt-2">
            Work
          </span>
          <span className="font-bold text-indigo-500 text-3xl">cation</span>
          <img
            className="mt-6 lg:hidden rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full h-56 w-64 sm:object-cover sm:object-center"
            src={woman}
            alt="woman working"
          />
          <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl">
            You can work from anywhere. <br />
            <span className="text-indigo-500">Take advantage of it</span>
          </h1>
          <p className="mt-2 text-gray-600 text-xl sm:mt-4">
            Workation helps you find work-friendly rentals in beautiful
            locations so you can enjoy some nice weather even when you're not on
            vacation
          </p>
          <div className="mt-6">
            <button href="#" className="btn">
              Book your escape
            </button>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 lg:relative">
          <img
            className="absolute inset-0 h-full w-full object-cover object-center"
            src={woman}
            alt="woman working"
          />
        </div>
      </div>
      <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
        <h2 className="text-xl text-gray-900">Popular Destinations</h2>
        <p className="text-gray-600">
          A selection of great-work friendly cities
        </p>

        <div className="flex flex-wrap -mx-4">
          {popularDestination.map((destination) => (
            <div className="mt-6 w-full px-4 lg:w-1/2 xl:w-1/3">
              <DestinationCard destination={destination} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
