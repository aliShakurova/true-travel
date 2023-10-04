function BookingWidget({ place }) {
  return (
    <div>
      <div className="bg-white rounded-lg p-4 shadow-md">
        <div className="text-2xl text-center">
          Price: ${place.price} per night
        </div>
        <div className="border rounded-lg my-4">
          <div className="flex  justify-between">
            <div className="py-6 px-4">
              <label>Check-In: </label>
              <input type="date" />
            </div>
            <div className="border-l" />
            <div className="py-6 px-4">
              <label>Check-Out: </label>
              <input type="date" />
            </div>
          </div>
          <div className="py-6 px-4 border-t">
            <label>Number of guests: </label>
            <input type="number" value={1} />
          </div>
        </div>

        <button className="primary">Book this place</button>
      </div>
    </div>
  );
}

export default BookingWidget;
