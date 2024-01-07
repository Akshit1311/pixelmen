import { useLocalVideo, usePeerIds } from "@huddle01/react/hooks";
import React, { useEffect, useRef } from "react";
import RemoteVideo from "./RemoteVideo";

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
    <div className="absolute z-10 right-0 top-1/2 -translate-y-1/2 bg-blue-500 flex flex-col gap-2">
      <div className="h-36 aspect-square bg-slate-500 rounded-lg overflow-hidden">
        <video ref={videoRef} autoPlay muted className="object-cover h-full" />
      </div>

      {peerIds.map((peerId) => (
        <RemoteVideo key={peerId} peerId={peerId} />
      ))}
    </div>
  );
};

export default Video;
