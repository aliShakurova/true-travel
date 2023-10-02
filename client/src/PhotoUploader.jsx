import { useState } from "react";
import axios from "axios";

function PhotoUploader({ photos, onChange }) {
  // const [photoLink, setPhotoLink] = useState("");

  //   const addPhotoByLink = async (e) => {
  //     e.preventDefault();
  //     const { data: fileName } = await axios.post("/upload-by-link", {
  //       link: photoLink,
  //     });
  //     onChange((prev) => {
  //       return [...prev, fileName];
  //     });
  //     setPhotoLink("");
  //   };

  const uploadPhoto = (e) => {
    const files = e.target.files;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("photos", files[i]);
    }
    axios
      .post("/upload", formData, {
        headers: { "Content-Type": "multipsrt/form-data" },
      })
      .then((response) => {
        const { data: fileNames } = response;
        onChange((prev) => {
          return [...prev, ...fileNames];
        });
      });
  };

  return (
    <>
      {/* <div className="flex gap-2">
        <input
          type="text"
          value={photoLink}
          onChange={(e) => setPhotoLink(e.target.value)}
          placeholder="Add link"
        />
        <button
          className="bg-gray-200 rounded-lg px-2"
          onClick={addPhotoByLink}
        >
          Add&nbsp;photo
        </button>
      </div> */}
      <div className="grid grid-col-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {photos.length > 0 &&
          photos.map((photoLink) => {
            return (
              <div key={photoLink} className="flex h-32">
                <img
                  src={"http://localhost:3000/uploads/" + photoLink}
                  alt="Photo"
                  className="rounded-2xl w-full object-cover"
                />
              </div>
            );
          })}
        <label className="flex justify-center items-center h-32 border bg-transparent rounded-2xl p-2 text-xl text-gray-500 gap-2 cursor-pointer">
          <input
            type="file"
            multiple
            className="hidden"
            onChange={uploadPhoto}
          />
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
        </label>
      </div>
    </>
  );
}

export default PhotoUploader;
