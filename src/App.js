import logo from './logo.svg';
import './App.css';
import data from './data/single-sample';
function App() {
  return (
<section>
      <div className="container">
        <div className="song">
          <div className="song-img">
            <img src={data.album.images[0].url} className="App-logo" alt="logo" />
          </div>
          <div className="song-desc">
            <p>{data.album.name}</p>
            <p>{data.artists[0].name}</p>
            <button>Select</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
