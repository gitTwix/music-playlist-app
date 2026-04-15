import './App.css';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import MusicAPI from './MusicAPI';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState('My Playlist');

  const handleSearch = (term) => {
    MusicAPI.search(term).then((results) => {
      setSearchResults(results);
    });
  };

  const addTrackToPlaylist = (track) => {
    if (!playlistTracks.find((t) => t.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  const removeTrackFromPlaylist = (track) => {
    setPlaylistTracks(playlistTracks.filter((t) => t.id !== track.id));
  };

  const savePlaylist = () => {
    const trackUris = playlistTracks.map((track) => track.uri);
    MusicAPI.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName('My Playlist');
      setPlaylistTracks([]);
    });
  };

  return (
    <div className="App">
      <h1>Music Playlist App</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="App-playlist">
        <SearchResults searchResults={searchResults} onAddTrack={addTrackToPlaylist} />
        <Playlist playlistName={playlistName} playlistTracks={playlistTracks} onRemoveTrack={removeTrackFromPlaylist} onNameChange={setPlaylistName} onSave={savePlaylist} />
      </div>
    </div>
  );
}

export default App;