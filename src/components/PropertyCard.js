import React from "react";
import "../styles/main.css";

function PropertyCard({ property }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border mt-4">
      <img src={property.imageUrl} alt={property.imageAlt} />
      <div className="p-6 ">
        <h4>{property.title}</h4>
        <div>
          {property.beds} beds &bull; {property.baths} baths
        </div>
        <div>{property.formatedPrice} / week</div>
        <div>
          {property.rating}/5 stars (based on {property.reviewCount} reviews)
        </div>
      </div>
    </div>
  );
}
export default PropertyCard;
