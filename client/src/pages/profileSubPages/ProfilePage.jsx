import { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import Places from "./PlacesPage";
import AccountNav from "../../AccountNav";

function ProfilePage() {
  const { user, isReady, setUser } = useContext(UserContext);
  const [redirectToHomePage, setRedirectToHomePage] = useState(null);
  let { subpage } = useParams();

  if (!isReady) return "Loading...";

  if (isReady && !user && !redirectToHomePage) {
    <Navigate to={"/login"} />;
  }

  if (!subpage) {
    subpage = "profile";
  }

  const handleLogout = async () => {
    await axios.post("/logout");
    setRedirectToHomePage("/");
    setUser(null);
  };

  if (redirectToHomePage) {
    return <Navigate to={redirectToHomePage} />;
  }

  return (
    <div>
      <AccountNav />
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto my-4">
          <div className="p-4">
            Logged in as {user?.name} email ({user?.email})
          </div>
          <button onClick={handleLogout} className="primary max-w-sm mt-4">
            Logout
          </button>
        </div>
      )}
      {subpage === "places" && <Places />}
    </div>
  );
}

export default ProfilePage;
