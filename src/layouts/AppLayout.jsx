import { Outlet } from "react-router-dom";
import Nav from "./Navbar";

function AppLayout() {
  return (
    <div>
      <Nav />
      <main className="px-4">
        <Outlet />
      </main>
    </div>
  );
}
export default AppLayout;
