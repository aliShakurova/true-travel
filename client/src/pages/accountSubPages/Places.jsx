import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Perks from "../../../Perks";
import axios from "axios";

function Places() {
  const { action } = useParams();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [photos, setPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState("");
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState("");

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

  const addPhotoByLink = async (e) => {
     e.preventDefault();
     const {data: fileName} =  await axios.post('/upload-by-link', { link: photoLink});
     setPhotos(prev => {
      return [...prev, fileName]
     })
     setPhotoLink('')
  }

  return (
    <div>
      {action !== "new" && (
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
      )}
      {action === "new" && (
        <div>
          <form>
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
            <div className="flex gap-2">
              <input
                type="text"
                value={photoLink}
                onChange={(e) => setPhotoLink(e.target.value)}
                placeholder="Add link"
              />
              <button className="bg-gray-200 rounded-lg px-2" onClick={addPhotoByLink}>
                Add&nbsp;photo
              </button>
            </div>
            <div className="grid grid-col-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {photos.length > 0 && photos.map((photoLink) => {
                return (
                  <div key={photoLink} >
                    <img src={'http://localhost:3000/uploads/' + photoLink} alt='Photo' className="rounded-2xl" />
                  </div>
                )
              })}
              <button className="flex justify-center items-center border bg-transparent rounded-2xl p-2 text-xl text-gray-500 gap-2">
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
                    d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
                  />
                </svg>
                Upload
              </button>
            </div>
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
                    placeholder="14:00"
                  />
                </div>
                <div>
                  <h3>Check-Out time</h3>
                  <input
                    type="text"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    placeholder="12:00"
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
      )}
    </div>
  );
}

export default Places;
