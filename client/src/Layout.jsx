import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen p-4">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
