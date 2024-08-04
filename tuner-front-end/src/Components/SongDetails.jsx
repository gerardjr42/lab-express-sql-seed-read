import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

// import API
const API = import.meta.env.VITE_API_URL;

export default function SongDetails() {
  // Set up params and navigate
  let { id } = useParams();
  const navigate = useNavigate();

  // useState to hold song data
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    is_favorite: false,
    time: "",
  });

  // useEffect to fetch data
  useEffect(() => {
    fetch(`${API}/songs/${id}`)
      .then((res) => res.json())
      .then((resJSON) => setSong(resJSON))
      .catch(() => navigate("/notfound"));
  }, [id, navigate]);

  // set up delete functionality
  const handleDelete = () => {
    fetch(`${API}/songs/${id}`, {
      method: "DELETE",
    })
      .then(() => navigate(`/songs`))
      .catch((e) => console.error(e));
  };

  return (
    <>
      {/* Add Song Details here, with edit button and delete button */}
      <div>
        <h1>Name: {song.name}</h1>
        <h2>Artist: {song.artist}</h2>
        <p>Album: {song.album}</p>
        <p>Time: {song.time}</p>
        <p>Favorite: {song.is_favorite ? "✅" : "❌"}</p>
        <div>
          <Link to={`/songs/${id}/edit`}>
            <button className="mr-2 rounded-md border bg-blue-300 px-2">
              Edit
            </button>
          </Link>
          <Link>
            <button
              onClick={handleDelete}
              className="rounded-md border bg-blue-300 px-2"
            >
              Delete
            </button>
          </Link>
        </div>
      </div>
      {/* Add edit and delete button */}
    </>
  );
}
