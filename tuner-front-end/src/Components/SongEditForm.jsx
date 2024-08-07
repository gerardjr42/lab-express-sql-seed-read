import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

export default function SongEditForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  // useState to hold our song data
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    is_favorite: false,
    time: "",
    image: "",
  });

  // useEffect to fetch our song data
  useEffect(() => {
    fetch(`${API}/songs/${id}`)
      .then((response) => response.json())
      .then((resJSON) => setSong(resJSON))
      .catch((e) => console.error(e));
  }, []);

  //Update our data
  const updateSong = () => {
    fetch(`${API}/songs/${id}`, {
      method: "PUT",
      body: JSON.stringify(song),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        navigate(`/songs/${id}`);
      })
      .catch((e) => console.error("catch", e));
  };

  // Handle Text Change
  const handleTextChange = (e) => {
    setSong({
      ...song,
      [e.target.id]: e.target.value,
    });
  };

  // Handle Check Box
  const handleCheckboxChange = () => {
    setSong({
      ...song,
      is_favorite: !song.is_favorite,
    });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    updateSong();
  };

  return (
    <>
      <h2 className="my-4 text-center font-mono text-4xl text-white">
        Edit Form
      </h2>
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-8 flex w-[50%] flex-col justify-start text-center align-middle font-mono text-white"
      >
        <label htmlFor="name">
          Name:
          <input
            className="mb-4 ml-2 rounded-md bg-gray-800 pl-1"
            type="text"
            id="name"
            value={song.name}
            onChange={handleTextChange}
            placeholder="Name"
            required
          />
        </label>
        <label htmlFor="artist">
          Artist:
          <input
            className="mb-4 ml-2 rounded-md bg-gray-800 pl-1"
            type="text"
            id="artist"
            value={song.artist}
            onChange={handleTextChange}
            placeholder="Artist"
            required
          />
        </label>
        <label htmlFor="album">
          Album:
          <input
            className="mb-4 ml-2 rounded-md bg-gray-800 pl-1"
            type="text"
            id="album"
            value={song.album}
            onChange={handleTextChange}
            placeholder="Album"
            required
          />
        </label>
        <label htmlFor="time">
          Time:
          <input
            className="mb-4 ml-2 rounded-md bg-gray-800 pl-1"
            type="text"
            id="time"
            value={song.time}
            onChange={handleTextChange}
            placeholder="Time"
            required
          />
        </label>
        <label htmlFor="image">
          Image URL:
          <input
            className="mb-4 ml-2 rounded-md bg-gray-800 pl-1"
            type="text"
            id="image"
            value={song.image}
            onChange={handleTextChange}
            placeholder="Image URL"
            required
          />
        </label>
        <label htmlFor="is_favorite">
          Favorite:
          <input
            type="checkbox"
            id="is_favorite"
            value={song.is_favorite}
            onChange={handleCheckboxChange}
          />
        </label>
        <input
          type="submit"
          className="mx-auto mt-4 w-[25%] rounded-md border text-white"
          value="submit"
        />
      </form>
    </>
  );
}
