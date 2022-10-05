import React from "react";
import Nav from "./Nav";
import SecondNav from "./SecondNav";

export default function Navbar() {
  return (
    <div className="bg-blue-top text-white">
      <Nav />
      <SecondNav />
    </div>
  );
}
