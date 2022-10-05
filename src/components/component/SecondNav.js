import React from "react";
import { IoBedOutline, IoCarSportOutline } from "react-icons/io5";
import { TbPlaneInflight } from "react-icons/tb";
import { MdOutlineAttractions } from "react-icons/md";
import { RiTaxiLine } from "react-icons/ri";

export default function Nav() {
  return (
    <div className="container">
      <ul className="pb-2 flex space-x-2">
        <li className="flex space-x-2 items-center cursor-pointer bg-blue-hover ring-1 ring-white px-4 py-2 rounded-full">
          <IoBedOutline className="text-2xl" />
          <span className="text-sm font-medium">Stays</span>
        </li>
        <li className="flex space-x-2 items-center cursor-pointer hover:bg-blue-hover px-4 py-2 rounded-full">
          <TbPlaneInflight className="text-2xl" />
          <span className="text-sm font-medium">Flights</span>
        </li>
        <li className="flex space-x-2 items-center cursor-pointer hover:bg-blue-hover px-4 py-2 rounded-full">
          <IoCarSportOutline className="text-2xl" />
          <span className="text-sm font-medium">Car rentals</span>
        </li>
        <li className="flex space-x-2 items-center cursor-pointer hover:bg-blue-hover px-4 py-2 rounded-full">
          <MdOutlineAttractions className="text-2xl" />
          <span className="text-sm font-medium">Attrections</span>
        </li>
        <li className="flex space-x-2 items-center cursor-pointer hover:bg-blue-hover px-4 py-2 rounded-full">
          <RiTaxiLine className="text-2xl" />
          <span className="text-sm font-medium">Airport Taxis</span>
        </li>
      </ul>
    </div>
  );
}
