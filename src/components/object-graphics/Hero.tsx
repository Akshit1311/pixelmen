import React, { useEffect, useState } from "react";
import Sprite from "../Sprite";
import { TILES } from "@/constants";
import { useLocalPeer, useRemotePeer } from "@huddle01/react/hooks";
import { cn } from "@/utils/helpers";
import { ArrowBigRight, ArrowBigLeft } from "lucide-react";
import {
  usePeerAudioNodeValue,
  useSetPeerAudioNode,
} from "@/atoms/peerAudioNode.atom";

type THeroProps = {
  peerId: string;
  frameCoord: string;
  yTranslate: number;
};

const RemotePeerDisplayName = ({ peerId }: { peerId: string }) => {
  const { metadata } = useRemotePeer<{ displayName: string }>({ peerId });
  const peerAudioNode = usePeerAudioNodeValue();

  const [nodeValue, setNodeValue] = useState(
    peerAudioNode[peerId]?.pan.value || 0
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setNodeValue(peerAudioNode[peerId]?.pan.value || 0);
  }, [peerAudioNode[peerId]?.pan.value]);

  return (
    <>
      <div
        className={cn(
          "absolute -top-[.85rem] text-[3.5px] font-medium left-1/2 -translate-x-1/2 w-fit whitespace-nowrap"
        )}
      >
        {metadata?.displayName || `Guest ${peerId.slice(7, 12)}`} -{" "}
        {nodeValue.toFixed(1)}
      </div>
      <div className=" hidden absolute left-1/2 -translate-x-1/2 ">
        <button
          type="button"
          className={cn(
            "aspect-square  p-1 rounded-lg  bg-slate-800 grid place-items-center cursor-pointer outline-none"
          )}
          onClick={() => {
            console.log({ peerAudioNode, peerId });

            if (peerAudioNode[peerId]?.pan.value > -1)
              peerAudioNode[peerId].pan.value -= 0.1;
          }}
        >
          <ArrowBigLeft size={"5"} />
        </button>
        <button
          type="button"
          className={cn(
            "aspect-square  p-1 rounded-lg  bg-slate-800 grid place-items-center cursor-pointer outline-none"
          )}
          onClick={() => {
            console.log({ peerAudioNode });

            if (peerAudioNode[peerId]?.pan.value < 1)
              peerAudioNode[peerId].pan.value += 0.1;
          }}
        >
          <ArrowBigRight size={"5"} />
        </button>
      </div>
    </>
  );
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

      {peerId === "0" ? (
        <div
          className={cn(
            "absolute -top-[.85rem] text-[3.5px] font-medium left-1/2 -translate-x-1/2 w-fit whitespace-nowrap",
            peerId === "0" && "text-lime-400"
          )}
        >
          {metadata?.displayName || "Guest"}
        </div>
      ) : (
        <RemotePeerDisplayName peerId={peerId} />
      )}
    </div>
  );
};

export default Hero;
