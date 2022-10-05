import React from "react";
import { Link } from "react-router-dom";

export default function Account() {
  return (
    <div className="space-x-4">
      <Link to="/signup">
        <span className="font-medium text-sm bg-white text-sky-700  px-2 py-[6px] leading-none ring-2 ring-sky-600/60 hover:bg-blue-50">
          Register
        </span>
      </Link>
      <Link to="/login">
        <span className="font-medium text-sm bg-white text-sky-700 px-2 py-[6px] leading-none ring-2 ring-sky-600/60 hover:bg-blue-50">
          Sign in
        </span>
      </Link>
    </div>
  );
}
