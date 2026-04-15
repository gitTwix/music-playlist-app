import Tracklist from './Tracklist';

function SearchResults({ searchResults, onAddTrack }) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
          <Tracklist tracks={searchResults} onTrackAction={onAddTrack} actionLabel="+ Add" />
    </div>
  );
}

export default SearchResults;