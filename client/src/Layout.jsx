import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen py-4 px-8">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
