import React from "react";
import { Link } from "react-router-dom";

export default function Song({ song, id }) {
  return (
    <>
      <Link to={`/songs/${id}`}>
        <h1>{song.name}</h1>
      </Link>
    </>
  );
}
