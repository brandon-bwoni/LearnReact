import { Outlet } from "react-router-dom";
import MainNav from "./MainNav";

function RootLayout() {
  return (
    <>
      <MainNav />
      <main >
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;