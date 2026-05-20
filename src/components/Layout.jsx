import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => (
  <div className="min-h-screen bg-cocoa-950 text-cocoa-100">
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
