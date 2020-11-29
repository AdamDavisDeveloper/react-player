// import {useState} from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ libraryStatus, isPlaying, songs, setCurrentSong, audioRef, setSongs }) => {
    return (
        <div className={`library ${libraryStatus ? 'active-library' : ""}`} >
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song => (
                    <LibrarySong setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} song={song} songs={songs} setCurrentSong={setCurrentSong} id={song.id} key={song.id} />
                ))}
            </div>
        </div>
    )
}

export default Library;