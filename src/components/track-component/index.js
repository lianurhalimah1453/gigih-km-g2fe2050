function TrackComponents({ image, title, artist }) {
    return <div className="song">
        <div className="song-img">
            <img src={image} className="App-logo" alt="logo" />
        </div>
        <div className="song-desc">
            <p>{title}</p>
            <p>{artist}</p>
            <button>Select</button>
        </div>
    </div>
}


export default TrackComponents;
