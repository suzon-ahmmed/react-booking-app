import React from "react";
// import logo from '../../../public/favicon.ico'
import { Link } from "react-router-dom";
import Account from "./Account";
import flag from "../../assets/images/usa.png";

export default function Nav() {
  return (
    <div className="bg-blue-top text-white">
      <div className="container flex justify-between items-center h-[68px] px-2">
        <Link to="/" className="font-bold text-2xl">
          {/* <img src={logo} alt="Quiz App" /> */}
          <h1>Booking.com</h1>
        </Link>
        <div className="flex items-center space-x-4">
          <div className="font-semibold cursor-pointer rounded-sm hover:bg-blue-hover p-3">
            BDT
          </div>
          <div className="font-semibold cursor-pointer rounded-sm hover:bg-blue-hover p-3">
            <img
              src={flag}
              alt="Booking app"
              className="w-6 h-6 rounded-full object-fill"
            />
          </div>
          <Account />
        </div>
      </div>
    </div>
  );
}
