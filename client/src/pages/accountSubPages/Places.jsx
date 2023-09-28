import { Link, useParams } from "react-router-dom";

function Places() {
  const { action } = useParams();

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
                <h2 className="text-2xl mt-4">Title</h2>
                <p className="text-gray-400 text-sm">Short advertisment of your appartment</p>
                <input type="text" placeholder="title, example: Appartment with ocean view"/>
                <h2 className="text-2xl mt-4">Address</h2>
                <p className="text-gray-400 text-sm">Address to this place</p>
                <input type="text" placeholder="address"/>
                <h2 className="text-2xl mt-4">Photos</h2>
                <p className="text-gray-400 text-sm mb-2">Add some photos of your appartment</p>
                <div className="grid grid-col-3 md:grid-cols-4 lg:grid-cols-6">
                   <button className="border bg-transparent rounded-2xl p-6 text-2xl text-gray-500">+</button>
                </div>
                <input type="" placeholder=""/>
                <input type="" placeholder=""/>
                <input type="" placeholder=""/>
            </form>
        </div>
      )}
    </div>
  );
}

export default Places;
