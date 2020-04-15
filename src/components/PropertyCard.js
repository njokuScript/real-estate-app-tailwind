/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import "../styles/main.css";

const star = [
  {
    d:
      "M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z",
    id: 1,
  },
  {
    d:
      "M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z",
    id: 2,
  },
  {
    d:
      "M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z",
    id: 3,
  },
  {
    d:
      "M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z",
    id: 4,
  },
  {
    d:
      "M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z",
    id: 5,
  },
];
function PropertyCard({ property }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border mt-4">
      <img src={property.imageUrl} alt={property.imageAlt} />
      <div className="p-6 ">
        <div className="flex">
          <span className="inline-block bg-teal-500 text-white text-sm px-2 rounded-full tracking-wide uppercase font-semibold">
            New
          </span>
          <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide ">
            {property.beds} beds &bull; {property.baths} baths
          </div>
        </div>
        <h4 className="font-semibold text-lg leading-tight truncate">
          {property.title}
        </h4>
        <div className="mt-1">
          {property.formatedPrice}{" "}
          <span className="text-gray-600 text-sm">/ wk</span>
        </div>
        <div className="mt-3 flex items-center">
          {star.map((items) => (
            <svg
              key={items.id}
              className={`{ ${"h-4 w-4 fill-current"} ${
                items <= property.rating ? "text-teal-500" : "text-gray-400"
              }}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d={items.d} />
            </svg>
          ))}{" "}
          <span className="text-gray-600 ml-2">
            {" "}
            {property.reviewCount} reviews
          </span>
        </div>
      </div>
    </div>
  );
}
export default PropertyCard;
