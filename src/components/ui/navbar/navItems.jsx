import { Link } from "react-router-dom";

export const navItems = (
  <ul className="flex flex-col lg:flex-row gap-4 text-xs font-semibold md:text-lg">
    <li>
      <Link to="/">HomePage</Link>
    </li>
    <li>
      <div className="dropdown dropdown-hover dropdown-right lg:dropdown-bottom">
        <span tabIndex={0} className="focus:outline-none cursor-pointer">
          Service
        </span>
        <ul className="dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-2 shadow-sm">
          <li className="relative group">
            <Link>Consultancy & Advisory Services</Link>
            <ul className="absolute left-full top-0 hidden group-hover:block bg-base-100 rounded-box z-50 w-96 p-2 shadow-sm">
              <li>
                <Link to="/services/consultancy/business">
                  Procurement & Supply Chain Consultancy
                </Link>
              </li>
              <li>
                <Link to="/services/consultancy/technology">
                  Business Establishment & Investment Advisory
                </Link>
              </li>
              <li>
                <Link to="/services/consultancy/finance">
                  Real Estate & Infrastructure Advisory
                </Link>
              </li>
              <li>
                <Link to="/services/consultancy/finance">
                  Textile & Apparel Industry Consultancy
                </Link>
              </li>
              <li>
                <Link to="/services/consultancy/finance">
                  Logistics & Transportation Advisory
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <Link>Business & Affiliate Ventures</Link>
            <ul className="absolute left-full top-0 hidden group-hover:block bg-base-100 rounded-box z-50 w-96 p-2 shadow-sm">
              <li>
                <Link to="/services/consultancy/business">
                  Healthcare & Wellness Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/consultancy/technology">
                  Education & Skill Development
                </Link>
              </li>
              <li>
                <Link to="/services/consultancy/finance">
                  Real Estate Development & Property Management
                </Link>
              </li>
              <li>
                <Link to="/services/consultancy/finance">
                  Agricultural Commodities & Feed Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/consultancy/finance">
                  Organic & Specialty Food Distribution
                </Link>
              </li>
              <li>
                <Link to="/services/consultancy/technology">
                  Integrated Transportation & Logistics Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/consultancy/finance">
                  Furniture Manufacturing & Interior Design Services
                </Link>
              </li>
              <li>
                <Link to="/services/consultancy/finance">
                  Optical & Vision Care Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/consultancy/technology">
                  Event Planning, Photography & Tourism Services
                </Link>
              </li>
              <li>
                <Link to="/services/consultancy/finance">
                  Digital Innovation & Technology Solutions
                </Link>
              </li>
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
