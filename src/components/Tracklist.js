import Track from './Track';

function Tracklist({ tracks, onTrackAction, actionLabel }) {
  return (
    <div className="Tracklist">
      {tracks.map((track) => (
        <Track key={track.id} track={track} onAction={() => onTrackAction(track)} actionLabel={actionLabel} />
      ))}
    </div>
  );
}

export default Tracklist;