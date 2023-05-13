import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const ServiceCart = ({ service }) => {
  const { _id, img, price, description, service_id, facility, title } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-xl text-orange-500">Price : $ {price}</p>
        <div className="card-actions justify-end">
          <Link to={`/checkOut/${_id}`}>
            {" "}
            <button className="btn btn-circle btn-outline">
              <HiArrowNarrowRight></HiArrowNarrowRight>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;
