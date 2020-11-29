//React Imports
import {useState} from "react";
//Styles
import "./styles/App.scss";
//Compontents
import Player from "./compontents/Player";
import Song from "./compontents/Song";
import Library from "./compontents/Library"
//Import Util.js Chillhop Songs
import data from "./util";

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[1]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player setIsPlaying={setIsPlaying} isPlaying={isPlaying} currentSong={currentSong} />
      <Library songs={songs} />
    </div>
  );
}

export default App;
