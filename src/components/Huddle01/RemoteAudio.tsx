import { useDataMessage, useRemoteAudio } from "@huddle01/react/hooks";
import React, { useEffect, useRef } from "react";
import { useLevelStateValue } from "@/atoms/levelState.atom";
import { useSetPeerAudioNode } from "@/atoms/peerAudioNode.atom";

type Props = {
  peerId: string;
  index: number;
};

const RemoteAudio = ({ peerId, index }: Props) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const levelState = useLevelStateValue();
  const setAudioNode = useSetPeerAudioNode();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    levelState?.createHeroPlacement(peerId);
    levelState?.updatePeerHeroPlacementPosition(peerId, -8 + index * 2, 0);

    return () => {
      levelState?.deleteHeroPlacement(peerId);
    };
  }, [peerId]);

  const { stream } = useRemoteAudio({
    peerId,
    onPlayable: ({ track }) => {
      if (audioRef.current && track) {
        console.log("RemoteAudio.tsx: onPlayable: track: ", track);

        audioRef.current.srcObject = new MediaStream([track]);
      }
    },
  });

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const audioElt = audioRef.current;
    if (!audioElt || !stream) return;

    audioRef.current.addEventListener("play", () => {
      // Create audio context if it doesn't already exist
      // We can do this as their has been some user interaction
      const audioCtx = new AudioContext();

      // Create a MediaElementAudioSourceNode
      // Feed the HTMLMediaElement into it
      // const source = new MediaElementAudioSourceNode(audioCtx, {
      //   mediaElement: audioElt,
      // });
      const source = audioCtx.createMediaStreamSource(stream);

      // Create a stereo panner
      const panNode = new StereoPannerNode(audioCtx);

      // Event handler function to increase panning to the right and left
      // when the slider is moved

      // panControl.oninput = () => {
      //   panNode.pan.value = panControl.value;
      //   panValue.textContent = panControl.value;
      // };

      // connect the AudioBufferSourceNode to the gainNode
      // and the gainNode to the destination, so we can play the
      // music and adjust the panning using the controls
      source.connect(panNode);
      panNode.connect(audioCtx.destination);

      setAudioNode({ [peerId]: panNode });
    });
  }, [peerId, stream]);

  // biome-ignore lint/a11y/useMediaCaption: Adding audio track when the track is playable
  return <audio ref={audioRef} autoPlay />;
};

export default RemoteAudio;
