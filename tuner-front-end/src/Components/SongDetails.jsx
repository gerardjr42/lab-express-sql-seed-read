import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// import API
const API = import.meta.env.VITE_API_URL;

export default function SongDetails() {
  // Set up params and navigate
  let { id } = useParams();
  const navigate = useNavigate();

  // useState to hold song data
  const [song, setSong] = useState({
    name: "",
    artis: "",
    album: "",
    is_favorite: false,
    time: "",
  });

  // useEffect to fetch data
  useEffect(() => {
    fetch(`${API}/songs/${id}`)
      .then((res) => {
        res.json();
      })
      .then((resJSON) => {
        setSong(resJSON);
      })
      .catch((e) => {
        navigate = "/notfound";
      });
  }, [id, navigate]);

  // set up delete functionality
  const handleDelete = () => {
    fetch(`${API}/songs/${id}`, {
      method: "DELETE",
    })
      .then(() => navigate(`/songs`))
      .catch((e) => console.error(e));
  };

  return <>{/* Add Song Details here, with edit button and delete button */}</>;
}
