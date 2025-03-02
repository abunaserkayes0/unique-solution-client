import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavItems() {
  const [clickedService, setClickedService] = useState(null);

  const handleLinkClick = (e) => {
    const serviceName = e.target.textContent;
    if (clickedService === serviceName) {
      setClickedService(serviceName);
    }
  };

  return (
    <ul className="flex flex-col lg:flex-row gap-4 text-xs font-semibold md:text-lg">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <div className="dropdown dropdown-hover dropdown-right lg:dropdown-bottom">
          <span tabIndex={0} className="focus:outline-none cursor-pointer">
            Service
          </span>
          <ul className="dropdown-content menu bg-base-100 rounded-box z-50 shadow-sm w-[400px]">
            <li className="dropdown dropdown-hover dropdown-right">
              <span>Consultancy & Advisory Services</span>
              <ul>
                {[
                  "Procurement & Supply Chain Consultancy",
                  "Business Establishment & Investment Advisory",
                  "Construction & Engineering Services",
                  "Textile & Apparel Industry Consultancy",
                  "Logistics & Transportation Advisory",
                ]?.map((service) => (
                  <li key={service}>
                    <Link to={`services/${service}`} onClick={handleLinkClick}>
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="dropdown dropdown-hover dropdown-right">
              <span>Business & Affiliate Ventures</span>
              <ul>
                {[
                  "Healthcare & Wellness Solutions",
                  "Education & Skill Development",
                  "Real Estate Development & Property Management",
                  "Agricultural Commodities & Feed Solutions",
                  "Organic & Specialty Food Distribution",
                  "Integrated Transportation & Logistics Solutions",
                  "Furniture Manufacturing & Interior Design Services",
                  "Optical & Vision Care Solutions",
                  "Event Planning, Photography & Tourism Services",
                  "Digital Innovation & Technology Solutions",
                ]?.map((service) => (
                  <li key={service}>
                    <Link to={`services/${service}`} onClick={handleLinkClick}>
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li>
        <Link to="/testimonial">Testimonial</Link>
      </li>
      <li>
        <Link to="/faq">FAQ</Link>
      </li>
    </ul>
  );
}
