import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useNavigate } from "react-router-dom";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  const handleDelete = (id) => {
    const proceed = confirm("are you sure delete this bookings");
    if (proceed) {
      fetch(`https://car-doctor-server-ittarek.vercel.app/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const url = `https://car-doctor-server-ittarek.vercel.app/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("car-access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setBookings(data);
        } else {
          navigate("/");
        }
      });
  }, [url,navigate]);

  const handleBookingUpdate = (id) => {
    fetch(`https://car-doctor-server-ittarek.vercel.app/bookings/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter((booking) => booking._id !== id);
          const update = bookings.find((booking) => booking._id === id);
          update.status = "confirm";
          const newBookings = [update, ...remaining];
          setBookings(newBookings);
        }
      });
  };
  return (
    <div>
      {bookings.map((booking) => (
        <div key={booking._id} className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}

            <tbody>
              {/* row 1 */}
              <tr>
                <button
                  onClick={() => handleDelete(booking._id)}
                  className="btn btn-circle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <td>
                  <div className="w-32 flex  justify-canter items-center space-x-3">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={booking.img}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <p className="badge font-bold w-18  flex justify-center items-center badge-ghost badge-sm">
                    {booking.service}
                  </p>
                </td>
                <td>
                  <span className="badge w-18 flex justify-center items-center badge-ghost badge-sm">
                    {booking.price}
                  </span>
                </td>
                <td>{booking.email}</td>
                <th>
                  {booking.status === "confirm" ? (
                    <span className="font-bold text-purple-600">Confirmed</span>
                  ) : (
                    <button
                      onClick={() => handleBookingUpdate(booking._id)}
                      className="btn btn-ghost btn-xs"
                    >
                      Please Confirm
                    </button>
                  )}
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Bookings;
