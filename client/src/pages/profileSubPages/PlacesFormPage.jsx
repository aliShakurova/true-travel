import { useEffect, useState } from "react";
import PhotoUploader from "../../PhotoUploader";
import Perks from "../../../Perks";
import axios from "axios";
import AccountNav from "../../AccountNav";
import { Navigate, useParams } from "react-router-dom";

function PlacesFormPage() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [photos, setPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState("");
  const [price, setPrice] = useState(100);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    } else {
      axios.get("/places/" + id).then((response) => {
        const { data } = response;
        setTitle(data.title);
        setAddress(data.address);
        setPhotos(data.photos);
        setDescription(data.description);
        setPerks(data.perks);
        setExtraInfo(data.extraInfo);
        setCheckIn(data.checkIn);
        setCheckOut(data.checkOut);
        setMaxGuests(data.maxGuests);
        setPrice(data.price);
      });
    }
  }, [id]);

  const inputTitle = (text) => <h2 className="text-2xl mt-4">{text}</h2>;

  const inputDescription = (text) => (
    <p className="text-gray-400 text-sm">{text}</p>
  );

  const preInput = (title, subtitle) => {
    return (
      <>
        {inputTitle(title)}
        {inputDescription(subtitle)}
      </>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const placeData = {
      title,
      address,
      photos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
      price
    };
    if (id) {
      await axios.put("/places", { id, ...placeData });
      setRedirect(true);
    } else {
      await axios.post("/places", placeData);
      setRedirect(true);
    }
  };

  if (redirect) {
    return <Navigate to={"/account/places"} />;
  }

  return (
    <div>
      <AccountNav />
      <form onSubmit={handleSubmit}>
        {preInput("Title", "Short advertisment of your appartment")}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title, example: Appartment with ocean view"
        />
        {preInput("Address", "Address to this place")}
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="address"
        />
        {preInput("Photos", "Address to this place")}
        <PhotoUploader photos={photos} onChange={setPhotos} />
        {preInput("Description", "Description of the place")}
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {preInput("Perks", "Select all the perks of your place")}
        <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-col-4">
          <Perks selected={perks} onChange={setPerks} />
        </div>
        <div>
          {preInput(
            "Check-In & Check-Out times, max guests",
            "Add Check-In & Check-Out times and max guests"
          )}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <div>
              <h3>Check-In time</h3>
              <input
                type="text"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                placeholder="14"
              />
            </div>
            <div>
              <h3>Check-Out time</h3>
              <input
                type="text"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                placeholder="12"
              />
            </div>
            <div>
              <h3>Max guests</h3>
              <input
                type="number"
                value={maxGuests}
                onChange={(e) => setMaxGuests(e.target.value)}
                placeholder="Nmber"
              />
            </div>
            <div>
              <h3 className="flex gap-Z">
                Price per night{" "}
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
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </h3>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Nmber"
              />
            </div>
          </div>
        </div>
        <div>
          {preInput("Extra information", "House rules")}
          <textarea
            value={extraInfo}
            onChange={(e) => setExtraInfo(e.target.value)}
          />
        </div>
        <button className="primary my-4">Save</button>
      </form>
    </div>
  );
}

export default PlacesFormPage;
