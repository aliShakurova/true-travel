import { Link } from "react-router-dom";
import AccountNav from "../../AccountNav";
import { useEffect, useState } from "react";
import axios from "axios";

function PlacesPage() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get("/places").then(({ data }) => {
      setPlaces(data);
    });
  }, []);

  console.log(places.length > 0);

  return (
    <div>
      <AccountNav />
      <div className="text-center">
        <Link
          className="inline-flex bg-primary text-white rounded-full py-2 px-6 gap-1 mt-8"
          to={"/account/places/new"}
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add new place
        </Link>
      </div>
      <div className="mt-4">
        {places.length > 0 &&
          places.map((place) => (
            <Link
              to={"/account/places/" + place._id}
              key={place.title}
              className="flex cursor-pointer gap-4 bg-gray-100 p-4 rounded-lg"
            >
              <div className="flex w-42 h-32 grow shrink-0">
                {place.photos.length > 0 && (
                  <img
                    src={"http://localhost:3000/uploads/" + place.photos[0]}
                    alt=""
                    className="object-cover rounded-lg"
                  />
                )}
              </div>
              <div className="grow-0 shrink">
                <h2 className="text-xl">{place.title}</h2>
                <p className="text-sm mt-2">{place.description}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default PlacesPage;
