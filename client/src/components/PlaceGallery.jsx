import { useState } from "react";

function PlaceGallery({ place }) {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

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

  return (
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
  );
}

export default PlaceGallery;
