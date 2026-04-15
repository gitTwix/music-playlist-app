const MusicAPI = {
  search(term) {
    return fetch(`https://musicbrainz.org/ws/2/recording?query=recording:${encodeURIComponent(term)}&fmt=json&limit=10`)
      .then((response) => response.json())
      .then((data) => {
        if (!data.recordings) return [];
        return data.recordings.map((track) => ({
          id: track.id,
          name: track.title,
          artist: track['artist-credit'] ? track['artist-credit'][0].name : 'Unknown',
          album: track['releases'] ? track['releases'][0].title : 'Unknown',
          uri: track.id,
        }));
      })
      .catch((error) => {
        console.error('Search error:', error);
        return [];
      });
  },

  savePlaylist(name, trackUris) {
    // Mock save—MusicBrainz doesn't support playlist creation
    // In a real app, you'd save to a database
    console.log(`Playlist "${name}" saved with ${trackUris.length} tracks`);
    return Promise.resolve();
  },
};

export default MusicAPI;