import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="bg-blackopacity-50 flex w-full justify-between">
      <Link to="/songs" className="mr-4 text-white">
        Home
      </Link>
      <Link to="/songs/new" className="text-white">
        {" "}
        New Song
      </Link>
    </div>
  );
}
