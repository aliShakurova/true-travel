import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddressLink from "../components/AddressLink";
import PlaceGallery from "../components/PlaceGallery";
import differenceInCalendarDays from "date-fns/differenceInCalendarDays/index";
import BookingDates from "../components/BookingDates";
import Perks from "../../Perks";

function BookingPage() {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  const [numberOfGuests, setNumberOfGuests] = useState(null);
  const [isEditGuestsDisabled, setIsEditGuestsDisabled] = useState(true);
  useEffect(() => {
    if (id) {
      axios.get("/bookings").then((response) => {
        const foundBooking = response.data.find(({ _id }) => _id === id);
        if (foundBooking) {
          setBooking(foundBooking);
          setNumberOfGuests(foundBooking.numberOfGuests);
        }
      });
    }
  }, [id]);

  if (!booking) {
    return null;
  }

  const changeNumberOfGuests = async (e) => {
    e.preventDefault();
    if (isEditGuestsDisabled) {
      setIsEditGuestsDisabled(false);
    } else {
      if (numberOfGuests > booking.place.maxGuests) {
        alert(
          `Error! Max number of guests is ${booking.place.maxGuests}, we cannot place ${numberOfGuests} guests in this place`
        );
      } else if (id) {
        await axios.put("/bookings", {
          id,
          numberOfGuests,
          place: booking.place,
          checkIn: booking.checkIn,
          checkOut: booking.checkOut,
          name: booking.name,
          phone: booking.phone,
          price: booking.price,
        });
        setIsEditGuestsDisabled(true);
      }
    }
  };

  return (
    <div className="main-container py-8">
      <h1 className="text-3xl">{booking.place?.title}</h1>
      <AddressLink className="my-2" place={booking.place} />
      <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg mb-4">
        <div>
          <h2 className="text-2xl">Your booking information:</h2>
          <div className="flex gap-1 py-1 text-lg items-center">
            <BookingDates booking={booking} className="text-black py-2" /> |
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
            {differenceInCalendarDays(
              new Date(booking.checkOut),
              new Date(booking.checkIn)
            )}{" "}
            nights
          </div>
          <div className="flex gap-1 text-lg items-center">
            Number of guests:{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            <input
              type="number"
              className="numberOfGuests"
              onChange={(e) => setNumberOfGuests(e.target.value)}
              value={numberOfGuests}
              disabled={isEditGuestsDisabled}
            ></input>
            <button
              className="px-3 py-1 rounded-lg hover:bg-gray-200"
              onClick={changeNumberOfGuests}
            >
              {isEditGuestsDisabled ? "Edit" : "Save"}
            </button>
            {!isEditGuestsDisabled &&
              `Max number of guests is ${booking.place.maxGuests}`}
          </div>
          {booking.place?.checkIn && booking.place?.checkOut && (
            <div className="text-lg">
              <div className="flex gap-1 items-center">
                Check-In time:{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {booking.place?.checkIn}{" "}
              </div>
              <div className="flex gap-1 items-center">
                {" "}
                Check-Out time:{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {booking.place?.checkOut}{" "}
              </div>
            </div>
          )}
        </div>
        <div className="bg-primary py-4 px-6 rounded-xl text-white">
          <div className="text-xl">Total price</div>
          <div className="text-3xl">$ {booking.price}</div>
        </div>
      </div>
      <PlaceGallery place={booking.place} />
      <div className="my-4">
        <div>
          <h2 className="text-2xl font-semibold py-2">Description</h2>
          <div className="text-lg">{booking.place?.description}</div>
        </div>
        <div className="">
          <h2 className="text-2xl font-semibold py-2">Extra Info</h2>
          <div className="text-lg"> {booking.place?.extraInfo}</div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold py-2">Perks</h2>
          <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-col-4 py-2">
            <Perks selected={booking.place?.perks} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;
