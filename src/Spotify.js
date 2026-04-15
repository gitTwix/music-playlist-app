const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const redirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;

let accessToken = '';

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      return fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: redirectUri,
          client_id: clientId,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          accessToken = data.access_token;
          return accessToken;
        });
    } else {
      const scopes = ['playlist-modify-public', 'playlist-modify-private'];
      const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scopes.join('%20')}`;
      window.location = authUrl;
    }
  },

  search(term) {
    return this.getAccessToken().then((token) => {
      return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => response.json())
        .then((data) => {
          return data.tracks.items.map((track) => ({
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri,
          }));
        });
    });
  },

  savePlaylist(name, trackUris) {
    return this.getAccessToken().then((token) => {
      const headers = { Authorization: `Bearer ${token}` };
      return fetch('https://api.spotify.com/v1/me', { headers })
        .then((response) => response.json())
        .then((data) => {
          const userId = data.id;
          return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            method: 'POST',
            headers: { ...headers, 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name, public: true }),
          })
            .then((response) => response.json())
            .then((data) => {
              const playlistId = data.id;
              return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
                method: 'POST',
                headers: { ...headers, 'Content-Type': 'application/json' },
                body: JSON.stringify({ uris: trackUris }),
              });
            });
        });
    });
  },
};

export default Spotify;