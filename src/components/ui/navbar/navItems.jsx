import { Link } from "react-router-dom";

export const navItems = (
  <>
    <li className="text-xs font-semibold md:text-lg">
      <Link to="">HomePage</Link>
    </li>
    <li className="text-xs font-semibold md:text-lg">
      <div className="dropdown dropdown-hover dropdown-right lg:dropdown-bottom">
        <div tabIndex={0}>Service</div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-50 w-80 p-2 shadow-sm"
        >
          <li className="text-xs font-semibold md:text-lg">
            <Link to="">Procurement & Supply Chain Consultancy</Link>
          </li>
          <li className="text-xs font-semibold md:text-lg">
            <Link to="">Business Startup & Investment Consultancy</Link>
          </li>
          <li className="text-xs font-semibold md:text-lg">
            <Link to="">Real Estate & Infrastructure Consultancy</Link>
          </li>
          <li className="text-xs font-semibold md:text-lg">
            <Link to="">Health & Wellness Consultancy</Link>
          </li>
          <li className="text-xs font-semibold md:text-lg">
            <Link to="">Garments & Textiles Consultancy</Link>
          </li>
          <li className="text-xs font-semibold md:text-lg">
            <Link to="">Agriculture & Feed Raw Materials</Link>
          </li>
          <li className="text-xs font-semibold md:text-lg">
            <Link to="">Organic Foods & Fruits</Link>
          </li>
          <li className="text-xs font-semibold md:text-lg">
            <Link to="">Transportation & Logistics Consultancy</Link>
          </li>
          <li className="text-xs font-semibold md:text-lg">
            <Link to="">Construction & Engineering Services</Link>
          </li>
          <li className="text-xs font-semibold md:text-lg">
            <Link to="">Education & Skill Development</Link>
          </li>
          <li className="text-xs font-semibold md:text-lg">
            <Link to="">Unique Wood Design (Furniture & Interior)</Link>
          </li>
          <li className="text-xs font-semibold md:text-lg">
            <Link to="">Eyewear & Optical Business</Link>
          </li>
          <li className="text-xs font-semibold md:text-lg">
            <Link to="">Photography & Event Management</Link>
          </li>
          <li className="text-xs font-semibold md:text-lg">
            <Link to="">Digital Services</Link>
          </li>
        </ul>
      </div>
    </li>
    <li className="text-xs font-semibold md:text-lg">
      <Link to="">About Us</Link>
    </li>
    <li className="text-xs font-semibold md:text-lg">
      <Link to="">Affiliate Program</Link>
    </li>
    <li className="text-xs font-semibold md:text-lg">
      <Link to="">Blog</Link>
    </li>
    <li className="text-xs font-semibold md:text-lg">
      <Link to="">Contact Us</Link>
    </li>
    <li className="text-xs font-semibold md:text-lg">
      <Link to="">Testimonial</Link>
    </li>
    <li className="text-xs font-semibold md:text-lg">
      <Link to="">FAQ</Link>
    </li>
  </>
);
