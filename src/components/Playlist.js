import Tracklist from './Tracklist';

function Playlist({ playlistName, playlistTracks }) {
  return (
    <div className="Playlist">
      <input type="text" defaultValue={playlistName} />
      <Tracklist tracks={playlistTracks} />
      <button className="Playlist-save">Save to Spotify</button>
    </div>
  );
}

export default Playlist;