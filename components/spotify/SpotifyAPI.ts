import querystring from "querystring";

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

// Assuming these are string types, but you might want to adjust based on your actual usage
const client_id: string = process.env.REACT_APP_SPOTIFY_CLIENT_ID || '';
const client_secret: string = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET || '';
const refresh_token: string = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN || '';

interface AccessTokenResponse {
    access_token: string;
    // Add other fields from the token response if needed
}

const getAccessToken = async (): Promise<AccessTokenResponse> => {
    const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
    const response = await fetch(TOKEN_ENDPOINT, {
        method: "POST",
        headers: {
            Authorization: `Basic ${basic}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: querystring.stringify({
            grant_type: "refresh_token",
            refresh_token,
        }),
    });

    return response.json();
};

export const getNowPlaying = async (
    client_id: string,
    client_secret: string,
    refresh_token: string
): Promise<Response> => {
    const { access_token } = await getAccessToken();
    return fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
};

interface NowPlayingItem {
    albumImageUrl: string;
    artist: string;
    isPlaying: boolean;
    songUrl: string;
    title: string;
    // Add other fields if needed
}

export default async function getNowPlayingItem(
    client_id: string,
    client_secret: string,
    refresh_token: string
): Promise<NowPlayingItem | false> {
    const response = await getNowPlaying(client_id, client_secret, refresh_token);
    if (response.status === 204 || response.status > 400) {
        return false;
    }
    const song = await response.json();
    const albumImageUrl = song.item.album.images[0].url;
    const artist = song.item.artists.map((_artist: any) => _artist.name).join(", ");
    const isPlaying = song.is_playing;
    const songUrl = song.item.external_urls.spotify;
    const title = song.item.name;

    return {
        albumImageUrl,
        artist,
        isPlaying,
        songUrl,
        title,
    };
}
