import React from "react";

export default function SearchBar() {
  return (
    <div className="bg-blue-top text-white">
      <div className="container h-[260px]">
        <div className="py-6 sm:py-16">
          <div className="text-2xl sm:text-5xl font-bold">
            Find your next stay
          </div>
          <div className="pt-4 text-2xl">
            Search deals on hotels, homes, and much more...
          </div>
        </div>

        <div className="grid grid-cols-9 border-2 rounded-sm bg-white text-gray-700 shadow mt-5 border-yellow-500">
          <div className="col-span-3">
            <input type="text" className="p-4 outline-none w-full hover:outline-1 " placeholder="Search" />
          </div>
          <div className="col-span-2">
            <input type="text" className="p-4 outline-none w-full hover:outline-1 " placeholder="Search" />
          </div>
          <div className="col-span-3">
            <input type="text" className="p-4 outline-none w-full hover:outline-1 " placeholder="Search" />
          </div>
          <div className="col-span-1">
            <button className="p-4"> Search </button>
          </div>
        </div>
      </div>
    </div>
  );
}
