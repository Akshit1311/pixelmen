import React from "react";
import Sprite from "../Sprite";
import { TILES } from "@/constants";
import { useLocalPeer, useRemotePeer } from "@huddle01/react/hooks";
import { cn } from "@/utils/helpers";

type THeroProps = {
  peerId: string;
  frameCoord: string;
  yTranslate: number;
};

const RemotePeerDisplayName = ({ peerId }: { peerId: string }) => {
  const { metadata } = useRemotePeer<{ displayName: string }>({ peerId });
  return metadata?.displayName || `Guest ${peerId.slice(7, 12)}`;
};

const Hero = ({ frameCoord, yTranslate, peerId }: THeroProps) => {
  const { metadata } = useLocalPeer<{
    displayName: string;
  }>();

  return (
    <div className="relative">
      <div>
        <Sprite frameCoord={TILES.SHADOW} />
      </div>
      <div
        className="absolute -top-5 -left-2"
        style={{
          transform: `translateY(${yTranslate}px)`,
        }}
      >
        <Sprite frameCoord={frameCoord} size={32} />
      </div>

      <div
        className={cn(
          "absolute -bottom-[.3rem] text-[3.5px] font-medium left-1/2 -translate-x-1/2 w-fit whitespace-nowrap",
          peerId === "0" && "text-lime-400"
        )}
      >
        {peerId === "0" ? (
          metadata?.displayName || "Guest"
        ) : (
          <RemotePeerDisplayName peerId={peerId} />
        )}
      </div>
    </div>
  );
};

export default Hero;
