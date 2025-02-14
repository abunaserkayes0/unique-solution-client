import { Link } from "react-router-dom";

export const navItems = (
  <>
    <li className="text-xs font-semibold md:text-xs">
      <Link to="">HomePage</Link>
    </li>
    <li className="text-xs font-semibold md:text-xs">
      <div className="dropdown dropdown-hover dropdown-right lg:dropdown-bottom">
        <div tabIndex={0}>Service</div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li className="text-xs font-semibold md:text-xs">
            <Link to="">Procurement & Supply Chain Consultancy</Link>
          </li>
          <li className="text-xs font-semibold md:text-xs">
            <Link to="">Business Startup & Investment Consultancy</Link>
          </li>
          <li className="text-xs font-semibold md:text-xs">
            <Link to="">Real Estate & Infrastructure Consultancy</Link>
          </li>
          <li className="text-xs font-semibold md:text-xs">
            <Link to="">Health & Wellness Consultancy</Link>
          </li>
          <li className="text-xs font-semibold md:text-xs">
            <Link to="">Garments & Textiles Consultancy</Link>
          </li>
          <li className="text-xs font-semibold md:text-xs">
            <Link to="">Agriculture & Feed Raw Materials</Link>
          </li>
          <li className="text-xs font-semibold md:text-xs">
            <Link to="">Organic Foods & Fruits</Link>
          </li>
          <li className="text-xs font-semibold md:text-xs">
            <Link to="">Transportation & Logistics Consultancy</Link>
          </li>
          <li className="text-xs font-semibold md:text-xs">
            <Link to="">Construction & Engineering Services</Link>
          </li>
          <li className="text-xs font-semibold md:text-xs">
            <Link to="">Education & Skill Development</Link>
          </li>
          <li className="text-xs font-semibold md:text-xs">
            <Link to="">Unique Wood Design (Furniture & Interior)</Link>
          </li>
          <li className="text-xs font-semibold md:text-xs">
            <Link to="">Eyewear & Optical Business</Link>
          </li>
          <li className="text-xs font-semibold md:text-xs">
            <Link to="">Photography & Event Management</Link>
          </li>
          <li className="text-xs font-semibold md:text-xs">
            <Link to="">Digital Services</Link>
          </li>
        </ul>
      </div>
    </li>
    <li className="text-xs font-semibold md:text-xs">
      <Link to="">About Us</Link>
    </li>
    <li className="text-xs font-semibold md:text-xs">
      <Link to="">Affiliate Program</Link>
    </li>
    <li className="text-xs font-semibold md:text-xs">
      <Link to="">Blog</Link>
    </li>
    <li className="text-xs font-semibold md:text-xs">
      <Link to="">Contact Us</Link>
    </li>
    <li className="text-xs font-semibold md:text-xs">
      <Link to="">Testimonial</Link>
    </li>
    <li className="text-xs font-semibold md:text-xs">
      <Link to="">FAQ</Link>
    </li>
  </>
);
