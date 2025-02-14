import { Outlet } from "react-router-dom";
import Navbar from "./ui/navbar/navbar";
import Footer from "./ui/footer/footer";
export default function layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
