"use client";
import useMeeting from "@/hooks/useMeeting";
import React from "react";
import {
  VideoIcon,
  VideoOffIcon,
  MicOffIcon,
  MicIcon,
  ArrowBigDown,
} from "lucide-react";
import { useLocalAudio, useLocalVideo } from "@huddle01/react/hooks";
import { cn } from "@/utils/helpers";
import Videos from "./Videos";
import { useLevelStateValue } from "@/atoms/levelState.atom";

type Props = {
  roomId: string;
  accessToken: string;
};

const Meeting = ({ roomId, accessToken }: Props) => {
  const { state } = useMeeting(roomId, accessToken);
  const { isVideoOn, enableVideo, disableVideo } = useLocalVideo();
  const { isAudioOn, enableAudio, disableAudio } = useLocalAudio();
  const levelState = useLevelStateValue();

  if (state !== "connected") return null;

  return (
    <>
      <div className="absolute bg-slate-500/70 p-2 rounded-lg z-10 top-6 left-1/2 -translate-x-1/2 flex gap-2 ">
        <button
          type="button"
          className={cn(
            "aspect-square h-10  p-2 rounded-lg grid place-items-center cursor-pointer outline-none",
            isVideoOn ? "bg-slate-800" : "bg-red-600"
          )}
          onClick={() => {
            isVideoOn ? disableVideo() : enableVideo();
          }}
        >
          {isVideoOn ? <VideoIcon size={"20"} /> : <VideoOffIcon size={"20"} />}
        </button>
        <button
          type="button"
          className={cn(
            "aspect-square  p-2 rounded-lg h-10 grid place-items-center cursor-pointer outline-none",
            isAudioOn ? "bg-slate-800" : "bg-red-600"
          )}
          onClick={() => {
            isAudioOn ? disableAudio() : enableAudio();
          }}
        >
          {isAudioOn ? <MicIcon size={"20"} /> : <MicOffIcon size={"20"} />}
        </button>
        <button
          type="button"
          className={cn(
            "aspect-square  p-2 rounded-lg h-10 bg-slate-800 grid place-items-center cursor-pointer outline-none"
          )}
          onClick={() => levelState?.updatePeerHeroPlacementPosition("0", 5, 5)}
        >
          <ArrowBigDown size={"20"} />
        </button>
      </div>
      <Videos />
    </>
  );
};

export default React.memo(Meeting);
