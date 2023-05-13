import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";

const ChackOut = () => {
  const services = useLoaderData();
  const { _id, title, img, price } = services;
  const { user } = useContext(AuthContext);

  const handleBookNow = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const price = form.price.value;
    const email = user?.email;
    const order = {
      customerName: name,
      email,
      date,
      img,
      service: title,
      service_id: _id,
      price: price,
    };
    console.log(order);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
        }
        console.log(data);
      });
  };
  return (
    <div>
      <h1 className="text-canter text-3xl font-bold flex justify-center">
        Book Service : {title}{" "}
      </h1>
      <form onSubmit={handleBookNow}>
        <div className="card-body grid lg:grid-cols-2 gap-10">
          <div className="form-control ">
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input  bg-white shadow-lg"
            />
          </div>
          <div className="form-control">
            <input
              type="date"
              placeholder="Date"
              name="date"
              className="input shadow-lg"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Amount"
              defaultValue={"$ : " + price}
              name="price"
              className="input shadow-lg"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Your Email"
              defaultValue={user?.email}
              name="email"
              className="input shadow-lg"
            />
          </div>
        </div>
        <div className="form-control mt-6 w-full flex justify-center ">
          <button className="btn btn-primary">Order Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default ChackOut;
