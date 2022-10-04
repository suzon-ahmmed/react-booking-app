import React from "react";
// import logo from '../../../public/favicon.ico'
import { Link } from "react-router-dom";
import Account from "./Account";
import Nav from "./Nav";

export default function Navbar() {
  return (
    <div className="bg-blue-top">
      <div className="container flex justify-between items-center h-[52px] ">
        <Link to="/" className="brand">
          {/* <img src={logo} alt="Quiz App" /> */}
          <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-600">
            Booking
          </h1>
        </Link>
        <Account />
      </div>
      <Nav />
    </div>
  );
}
