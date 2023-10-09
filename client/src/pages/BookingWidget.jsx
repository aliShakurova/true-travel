import axios from "axios";
import { differenceInCalendarDays } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

function BookingWidget({ place }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      setName(user.userName);
    }
  }, [user]);

  let numberOfNights = 0;

  if (checkIn && checkOut) {
    numberOfNights = differenceInCalendarDays(
      new Date(checkOut),
      new Date(checkIn)
    );
  }

  const bookPlace = async () => {
    const data = {
      place: place._id,
      price: numberOfNights * place.price,
      checkIn,
      checkOut,
      numberOfGuests,
      name,
      phone,
    };
    const response = await axios.post("/bookings", data);
    const bookingId = response.data._id;
    setRedirect(`/account/bookings/${bookingId}`);
  };

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div>
      <div className="bg-white rounded-lg p-4 shadow-md">
        <div className="text-2xl text-center">
          Price: ${place.price} per night
        </div>
        <div className="border rounded-lg my-4">
          <div className="flex  justify-between">
            <div className="py-6 px-4">
              <label>Check-In: </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>
            <div className="border-l" />
            <div className="py-6 px-4">
              <label>Check-Out: </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
          </div>
          <div className="py-6 px-4 border-t">
            <label>Number of guests: </label>
            <input
              type="number"
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(e.target.value)}
            />
          </div>
          {numberOfNights > 0 && (
            <div className="py-6 px-4 border-t">
              <label>Your full name: </label>
              <input
                type="text"
                placeholder="Your Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>Phone: </label>
              <input
                type="tel"
                placeholder=""
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          )}
        </div>
        <button className="primary" onClick={bookPlace}>
          Book this place
          {numberOfNights > 0 && <span> ${numberOfNights * place.price}</span>}
        </button>
      </div>
    </div>
  );
}

export default BookingWidget;
