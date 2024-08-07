import React from "react";
import { Link } from "react-router-dom";

export default function Song({ song, id }) {
  return (
    <>
      <Link to={`/songs/${id}`}>
        <h1 className="text-white">{song.name}</h1>
        <img src={song.image} alt="song album cover" />
      </Link>
    </>
  );
}
