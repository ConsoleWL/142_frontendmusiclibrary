import "./App.css";
import Header from "./Components/Header/Header";
import SearchBar from "./Components/SearchBar/SearchBar";
import MusicTable from "./Components/MusicTable/Musictable";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [songs, setSongs] = useState([]);

  const fetchSongs = async () => {
    try {
      const response = await axios.get("https://localhost:7043/api/Song/");
      // console.log(response);
      setSongs(response.data);
    } catch (error) {
      console.warn("Error in fetch songs: ", error);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div className="App">
      <Header />
      <div>
        <button onClick={fetchSongs}>Get Songs</button>
        <SearchBar />
        <MusicTable songs={songs} />
      </div>
    </div>
  );
}

export default App;
