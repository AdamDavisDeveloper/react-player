const LibrarySong = ({song}) => {
    return (
        <div className="library-song">
            <img src={song.cover} alt=""></img>
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
        </div>
    )
}

export default LibrarySong;