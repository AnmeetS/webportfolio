import querystring from 'querystring';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });

  return response.json();
};

export const getCurrentlyPlaying = async () => {
    const { access_token } = await getAccessToken();
  
    const response = await fetch(`https://api.spotify.com/v1/me/player/currently-playing`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch currently playing track');
    }
  
    return response.json();
  };
