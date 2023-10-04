import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingWidget from "./BookingWidget";

function PlacePage() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/places/${id}`).then((response) => {
      setPlace(response.data);
    });
  }, [id]);

  const handleShowMorePhotos = () => setShowAllPhotos((prev) => !prev);

  if (showAllPhotos) {
    return (
      <div className="absolute inset-0 bg-white">
        <div className="main-container grid gap-4 p-8">
          <h2 className="text-2xl">Photos of {place.title}</h2>
          <button
            onClick={handleShowMorePhotos}
            className="fixed right-4 top-4 bg-black text-white opacity-60 rounded-full p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {place?.photos?.length > 0 &&
            place.photos.map((photo) => (
              <div key={photo}>
                <img
                  src={"http://localhost:3000/uploads/" + photo}
                  className="aspect-square object-cover"
                  alt=""
                />
              </div>
            ))}
        </div>
      </div>
    );
  }

  if (!place) {
    return;
  }

  return (
    <div className="mt-6 bg-gray-50 -mx-8 px-8 py-8 shadow-inner">
      <div className="main-container">
        <h1 className="text-3xl">{place?.title}</h1>
        <a
          target="_blank"
          rel="noreferrer"
          href={"https://maps.google.com/?q=" + place?.address}
          className="flex gap-1 block font-semibold underline hover:text-gray-600 my-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mt-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          {place?.address}
        </a>
        <div className="relative">
          <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-lg overflow-hidden">
            <div>
              {place?.photos?.[0] && (
                <div>
                  <img
                    src={"http://localhost:3000/uploads/" + place.photos?.[0]}
                    className="aspect-square object-cover cursor-pointer"
                    onClick={handleShowMorePhotos}
                    alt=""
                  />
                </div>
              )}
            </div>
            <div className="grid">
              {place?.photos?.[1] && (
                <div>
                  <img
                    src={"http://localhost:3000/uploads/" + place.photos?.[1]}
                    className="aspect-square object-cover cursor-pointer"
                    onClick={handleShowMorePhotos}
                    alt=""
                  />
                </div>
              )}
              <div>
                {place?.photos?.[2] && (
                  <div className="overflow-hidden">
                    <img
                      src={"http://localhost:3000/uploads/" + place.photos?.[2]}
                      className="aspect-square object-cover relative top-2  cursor-pointer"
                      onClick={handleShowMorePhotos}
                      alt=""
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <button
            onClick={handleShowMorePhotos}
            className="absolute flex gap-1 bottom-1 right-1 p-2 bg-white rounded-xl opacity-80"
          >
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
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            Show more photos
          </button>
        </div>
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
