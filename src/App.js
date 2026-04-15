import './App.css';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

function App() {
  const [searchResults] = useState([
    { id: 1, name: 'Song 1', artist: 'Artist 1', album: 'Album 1' },
    { id: 2, name: 'Song 2', artist: 'Artist 2', album: 'Album 2' },
  ]);

  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState('My Playlist');

  const addTrackToPlaylist = (track) => {
    if (!playlistTracks.find((t) => t.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  const removeTrackFromPlaylist = (track) => {
    setPlaylistTracks(playlistTracks.filter((t) => t.id !== track.id));
  };

  return (
    <div className="App">
      <h1>Spotify Playlist App</h1>
      <SearchBar />
      <div className="App-playlist">
        <SearchResults searchResults={searchResults} onAddTrack={addTrackToPlaylist} />
        <Playlist playlistName={playlistName} playlistTracks={playlistTracks} onRemoveTrack={removeTrackFromPlaylist} onNameChange={setPlaylistName} />
      </div>
    </div>
  );
}

export default App;