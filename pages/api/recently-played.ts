import { NextApiRequest, NextApiResponse } from 'next';
import { getRecentlyPlayedTracks } from '../../spotify';

const recentlyPlayedHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const limit = parseInt(req.query.limit as string) || 20;
    const response = await getRecentlyPlayedTracks(limit);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('There was an error fetching the recently played tracks:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default recentlyPlayedHandler;
