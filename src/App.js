import logo from './logo.svg';
import './App.css';
import data from './data/single-sample';
import TrackComponents from './components/track-component';

function App() {
  return (
<section>
      <div className="container">
        <TrackComponents image={data.album.images[0].url}
        title={data.album.name} artist={data.artists[0].name} />
      </div>
    </section>
  );
}

export default App;
