import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingWidget from "../components/BookingWidget";
import PlaceGallery from "../components/PlaceGallery";
import AddressLink from "../components/AddressLink";

function PlacePage() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/places/${id}`).then((response) => {
      setPlace(response.data);
    });
  }, [id]);


  if (!place) {
    return;
  }

  return (
    <div className="mt-6 bg-gray-50 -mx-8 px-8 py-8 shadow-inner">
      <div className="main-container">
        <h1 className="text-3xl">{place?.title}</h1>
        <AddressLink place={place} />
        <PlaceGallery place={place} />
        <div className="grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr] mt-8">
          <div>
            <div className="pb-4">
              <h2 className="font-semibold text-semibold text-2xl">
                Description
              </h2>
              {place.description}
            </div>
            <div>
              <b>Check-In:</b> {place.checkIn}
              <br />
              <b>Check-Out:</b> {place.checkOut}
              <br />
              <b>Max number of guests:</b> {place.maxGuests}
            </div>
          </div>
          <BookingWidget place={place} />
        </div>
      </div>
      <div className="bg-white -mx-8 px-8 py-8 -mb-8 mt-6 shadow-inner">
        <div className="main-container">
          <h2 className="font-semibold text-semibold text-2xl">
            Extra information
          </h2>
          {place.extraInfo}
        </div>
      </div>
    </div>
  );
}

export default PlacePage;
