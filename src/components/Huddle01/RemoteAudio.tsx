import { useRemoteAudio } from "@huddle01/react/hooks";
import React, { useRef } from "react";

type Props = {
  peerId: string;
};

const RemoteAudio = ({ peerId }: Props) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useRemoteAudio({
    peerId,
    onPlayable: ({ track }) => {
      if (audioRef.current && track) {
        console.log("RemoteAudio.tsx: onPlayable: track: ", track);

        audioRef.current.srcObject = new MediaStream([track]);
      }
    },
  });

  // biome-ignore lint/a11y/useMediaCaption: Adding audio track when the track is playable
  return <audio ref={audioRef} autoPlay />;
};

export default RemoteAudio;
