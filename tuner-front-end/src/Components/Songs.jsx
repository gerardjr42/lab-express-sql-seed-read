import React, { useEffect, useState } from "react";
import Song from "../Components/Song";

// Import API
const API = import.meta.env.VITE_API_URL;

export default function Songs() {
  const [songs, setSongs] = useState([]);

  // UseEffect to fetch data from backend
  useEffect(() => {
    fetch(`${API}/songs`)
      .then((res) => {
        return res.json();
      })
      .then((resJSON) => {
        setSongs(resJSON);
      })
      .catch((e) => console.error(e));
  }, []);
  console.log(songs);

  return (
    // We then need to map to each specific song
    // Add key to each song as the id, Each song will then link to Song Details
    <>
      {songs.map((song) => {
        return <Song key={song.id} song={song} id={song.id} />;
      })}
    </>
  );
}
