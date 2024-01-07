import { useRemoteVideo } from "@huddle01/react/hooks";
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

  return (
    <div className="h-36 aspect-square bg-slate-500/70 rounded-lg overflow-hidden">
      <video ref={videoRef} autoPlay muted className="object-cover h-full" />
    </div>
  );
};

export default RemoteVideo;
