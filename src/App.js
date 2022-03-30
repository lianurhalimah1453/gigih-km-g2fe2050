import logo from './logo.svg';
import './App.css';
import data from './data/all-sample';
import TrackComponents from './components/track-component';
import Home from "./pages/home/home.component";

function App() {
  return (
<section>
      <div className="container">
      {data.map((x) => {
          return <TrackComponent key={x.album.id} image={x.album.images[0].url} title={x.album.name} artist={x.artists[0].name} />;
        })}
        <Home />
      </div>
    </section>
  );
}

export default App;
