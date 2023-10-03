import axios from "axios";
import { useEffect, useState } from "react";

function IndexPage() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get('/places').then(response => {
      setPlaces(response.data);
    })
  }, []) 

  return <div className="grid grid-cols-2 md:grid-col-3 lg:grid-cols-4 mt-8 gap-x-6 gap-y-8">
    {places.length > 0 && places.map(place => (
      <div key={place.title}>
        {place.photos?.[0] && (
          <div className="bg-gray-100">
            <img src={'http://localhost:3000/uploads/' + place.photos?.[0]} className="rounded-lg aspect-square object-cover" alt="" />
          </div>
        )}
        <h2 className="font-bold truncate mt-1">{place.title}</h2>
        <h3 className="text-gray-400 text-sm leading-5">{place.address}</h3>
        <div className="leading-7"><span className="font-bold">${place.price}</span> per night</div>
      </div>
    ))}
  </div>;
}

export default IndexPage;
