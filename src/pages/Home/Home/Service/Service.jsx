import React, { useEffect, useState } from "react";
// import Service from './Service';
import ServiceCart from "./ServiceCart";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://car-doctor-server-ittarek.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center w-2/4 mx-auto">
        <h2 className="text-3xl font-bold text-[#FF3811]">Service</h2>
        <h1 className="font-bold text-5xl ">Our Service Area</h1>
        <p className="text-[ #737373] my-5">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>

      <div className="grid  grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ml-5  mx-auto">
        {services.map((service) => (
          <ServiceCart service={service} key={service._id}></ServiceCart>
        ))}
      </div>
    </div>
  );
};

export default Service;
