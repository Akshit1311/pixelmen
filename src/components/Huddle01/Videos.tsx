import { useLocalVideo, usePeerIds } from "@huddle01/react/hooks";
import React, { useEffect, useRef } from "react";
import RemoteVideo from "./RemoteVideo";
import RemoteAudio from "./RemoteAudio";

const Video = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { peerIds } = usePeerIds();

  useLocalVideo({
    onProduceStart: ({ track }) => {
      if (videoRef.current && track) {
        videoRef.current.srcObject = new MediaStream([track]);
      }
    },
  });

  return (
    <div className="absolute z-10 bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
      <div className="h-36 aspect-square bg-slate-500/50 rounded-lg overflow-hidden">
        <video ref={videoRef} autoPlay muted className="object-cover h-full" />
      </div>

      {peerIds.map((peerId) => (
        <RemoteVideo key={peerId} peerId={peerId} />
      ))}
      {peerIds.map((peerId, i) => (
        <RemoteAudio key={peerId} peerId={peerId} index={i} />
      ))}
    </div>
  );
};

export default Video;
