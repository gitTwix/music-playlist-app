import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

function App() {
  const mockTracks = [
    { id: 1, name: 'Song 1', artist: 'Artist 1', album: 'Album 1' },
    { id: 2, name: 'Song 2', artist: 'Artist 2', album: 'Album 2' },
  ];

  return (
    <div className="App">
      <h1>Spotify Playlist App</h1>
      <SearchBar />
      <div className="App-playlist">
        <SearchResults searchResults={mockTracks} />
        <Playlist playlistName="My Playlist" playlistTracks={[]} />
      </div>
    </div>
  );
}

export default App;