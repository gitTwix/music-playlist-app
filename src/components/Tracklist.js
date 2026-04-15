import Track from './Track';

function Tracklist({ tracks }) {
  return (
    <div className="Tracklist">
      {tracks.map((track) => (
        <Track key={track.id} track={track} />
      ))}
    </div>
  );
}

export default Tracklist;