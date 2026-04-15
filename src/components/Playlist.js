import Tracklist from './Tracklist';

function Playlist({ playlistName, playlistTracks, onRemoveTrack, onNameChange }) {
  return (
    <div className="Playlist">
      <input type="text" value={playlistName} onChange={(e) => onNameChange(e.target.value)} />
      <Tracklist tracks={playlistTracks} onTrackAction={onRemoveTrack} actionLabel="- Remove" />
      <button className="Playlist-save">Save to Spotify</button>
    </div>
  );
}

export default Playlist;