function Track({ track, onAction, actionLabel }) {
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>{track.artist} | {track.album}</p>
      </div>
      <button className="Track-action" onClick={onAction}>{actionLabel}</button>
    </div>
  );
}

export default Track;