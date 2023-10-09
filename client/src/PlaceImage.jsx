function PlaceImage({ place, index = 0, className }) {
  if (!place?.photos?.length) {
    return null;
  }

  if (!className) {
    className = "object-cover rounded-lg";
  }
  return (
    <img
      src={"http://localhost:3000/uploads/" + place.photos[index]}
      alt=""
      className={className}
      style={{ width: "200px" }}
    />
  );
}

export default PlaceImage;
