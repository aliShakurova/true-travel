import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";

function AccountPage() {
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

  const linkClasses = (type = null) => {
    let classes = "py-2 px-6";
    if (type === subpage) {
      classes += " bg-primary text-white rounded-full";
    }
    return classes;
  };

  if (redirectToHomePage) {
    return <Navigate to={redirectToHomePage} />;
  }

  return (
    <div>
      <nav className="flex w-full justify-center mt-8 gap-4">
        <Link to={"/account"} className={linkClasses("profile")}>
          My profile
        </Link>
        <Link to={"/account/bookings"} className={linkClasses("bookings")}>
          My bookings
        </Link>
        <Link to={"/account/places"} className={linkClasses("places")}>
          My accommodations
        </Link>
      </nav>
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
    </div>
  );
}

export default AccountPage;
