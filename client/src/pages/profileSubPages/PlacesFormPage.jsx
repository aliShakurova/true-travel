import { useState } from "react";
import PhotoUploader from "../../PhotoUploader";
import Perks from "../../../Perks";
import axios from "axios";
import AccountNav from "../../AccountNav";
import { Navigate } from "react-router-dom";

function PlacesFormPage() {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [photos, setPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState("");
  const [redirect, setRedirect] = useState(false);

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
    };
    await axios.post("/places", placeData);

    setRedirect(true);
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
          <div className="grid sm:grid-cols-3 gap-2">
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
