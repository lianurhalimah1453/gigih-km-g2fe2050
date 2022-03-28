import logo from './logo.svg';
import './App.css';
import data from './data/all-sample';
import TrackComponents from './components/track-component';

function App() {
  return (
<section>
      <div className="container">
        {data.map((dt)=>{
          return <TrackComponents image={dt.album.images[0].url}
          title={dt.album.name} artist={dt.artists[0].name} />
        })}

      </div>
    </section>
  );
}

export default App;
