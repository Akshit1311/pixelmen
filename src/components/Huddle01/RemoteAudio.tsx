import { useDataMessage, useRemoteAudio } from "@huddle01/react/hooks";
import React, { useEffect, useRef } from "react";
import { useLevelStateValue } from "@/atoms/levelState.atom";

type Props = {
  peerId: string;
  index: number;
};

const RemoteAudio = ({ peerId, index }: Props) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const levelState = useLevelStateValue();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    levelState?.createHeroPlacement(peerId);
    levelState?.updatePeerHeroPlacementPosition(peerId, index * 2, index * 2);

    return () => {
      levelState?.deleteHeroPlacement(peerId);
    };
  }, [peerId]);

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
