import React, { useState, useEffect } from "react";
import { ImSpotify } from "react-icons/im";
import Link from "next/link";

interface TrackInfo {
  name: string;
  artist: string;
  album: string;
  imageUrl: string;
  songUrl: string;
}

const CurrentlyPlaying: React.FC = () => {
  const [trackInfo, setTrackInfo] = useState<TrackInfo | null>(null);

  useEffect(() => {
    const fetchCurrentlyPlaying = async () => {
      try {
        const response = await fetch("/api/currently-playing"); // Adjust this endpoint as needed
        const data = await response.json();

        if (data && data.item) {
          setTrackInfo({
            name: data.item.name,
            artist: data.item.artists
              .map((artist: any) => artist.name)
              .join(", "),
            album: data.item.album.name,
            imageUrl: data.item.album.images[0].url,
            songUrl: data.item.external_urls.spotify,
          });
        }
      } catch (error) {
        console.error("Error fetching currently playing track:", error);
      }
    };

    fetchCurrentlyPlaying();

    // Set up an interval to refresh the data every 15 seconds
    const interval = setInterval(() => {
      fetchCurrentlyPlaying();
    }, 15000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  if (!trackInfo) {
    return (
        <div className="w-48 h-16 bg-foreground border border-textLighter rounded-full flex shadow-navbarShadow">
          <div className="flex flex-row items-center">
            <div className="text-4xl text-textLighter mx-3 my-3">
              <ImSpotify />
            </div>
            <div className="flex flex-col overflow-hidden mx-1 my-2">
              {" "}
              {/* Tailwind overflow class */}
              <div className="text-xs text-copyLighter font-urbanFont">
                I&apos;m listening to
              </div>
              <div className="ticker w-24">
                {" "}
                {/* Ticker class for animation */}
                <div className="text-sm text-bold text-copyLight font-urbanFont whitespace-nowrap">
                  {" "}
                  <div className="">
                    <span>
                      Nothing :(
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }

  return (
    <Link href={trackInfo.songUrl} target="_blank">
      <div className="w-48 h-16 bg-foreground border border-textLighter rounded-full flex shadow-navbarShadow">
        <div className="flex flex-row items-center">
          <div className="text-4xl text-textLighter mx-3 my-3">
            <ImSpotify />
          </div>
          <div className="flex flex-col overflow-hidden mx-1 my-2">
            {" "}
            {/* Tailwind overflow class */}
            <div className="text-xs text-copyLighter font-urbanFont">
              I&apos;m listening to
            </div>
            <div className="ticker w-24">
              {" "}
              {/* Ticker class for animation */}
              <div className="text-sm text-bold text-copyLight font-urbanFont whitespace-nowrap">
                {" "}
                {/* Tailwind whitespace class */}
                <div className="ticker-content">
                  <span>
                    {trackInfo.name} by {trackInfo.artist}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CurrentlyPlaying;
