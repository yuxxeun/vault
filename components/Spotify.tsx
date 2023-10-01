import * as React from "react";
import { SiSpotify } from "react-icons/si";
import useSWR from "swr";

export interface SpotifyData {
  isPlaying: boolean;
  title: string;
  album: string;
  artist: string;
  albumImageUrl: string;
  songUrl: string;
}

export default function Spotify() {
  const { data } = useSWR<SpotifyData>("/api/spotify");

  return data?.isPlaying ? (
    <>
      <div className="flex-1">
        <p className="text-sm font-medium">{data.title}</p>
        <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">
          {data.artist}
        </p>
      </div>
      <div className="absolute bottom-1.5 right-1.5">
        <SiSpotify size={20} color="#1ED760" />
      </div>
    </>
  ) : null;
}
