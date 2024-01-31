import { NextApiRequest, NextApiResponse } from 'next';
import { getCurrentlyPlaying } from '../../spotify';

const currentlyPlayingHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await getCurrentlyPlaying();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching currently playing track:', error);
    res.status(500).json({ error: 'Internal Server Error' });
    console.log(error);
  }
};

export default currentlyPlayingHandler;