import Tracklist from './Tracklist';

function Playlist({ playlistName, playlistTracks, onRemoveTrack, onNameChange, onSave }) {
  return (
    <div className="Playlist">
      <input type="text" value={playlistName} onChange={(e) => onNameChange(e.target.value)} />
      <Tracklist tracks={playlistTracks} onTrackAction={onRemoveTrack} actionLabel="- Remove" />
      <button className="Playlist-save" onClick={onSave}>Save Playlist</button>
    </div>
  );
}

export default Playlist;