import { Outlet } from "react-router-dom";
import Navbar from "./ui/navbar/navbar";
export default function layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
