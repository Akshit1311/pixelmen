import { useRemotePeer, useRemoteVideo } from "@huddle01/react/hooks";
import React, { useRef } from "react";

type Props = {
  peerId: string;
};

const RemoteVideo = ({ peerId }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useRemoteVideo({
    peerId,
    onPlayable: ({ track }) => {
      if (videoRef.current && track) {
        videoRef.current.srcObject = new MediaStream([track]);
      }
    },
  });

  const { metadata } = useRemotePeer<{ displayName: string }>({ peerId });

  return (
    <div className="relative">
      <div className=" h-36 aspect-square bg-slate-500/70 rounded-lg overflow-hidden">
        <video ref={videoRef} autoPlay muted className="object-cover h-full" />
      </div>
      <div className="left-1/2 -translate-x-1/2  whitespace-nowrap absolute -top-8">
        {metadata?.displayName || `Guest ${peerId.slice(7, 12)}`}
      </div>
    </div>
  );
};

export default RemoteVideo;
