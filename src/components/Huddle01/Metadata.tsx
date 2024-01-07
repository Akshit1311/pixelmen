import { useLocalPeer, useRoom } from "@huddle01/react/hooks";
import React, { useState } from "react";

const Metadata = () => {
  const { room, state } = useRoom();
  const { updateMetadata } = useLocalPeer<{ displayName: string }>();

  const [displayName, setDisplayName] = useState("Guest");

  return (
    <div className="absolute top-2 left-2 bg-slate-500/50 p-5 rounded-md">
      <div>
        Room Id: <span className="font-bold">{room.roomId}</span>
      </div>
      <div>
        Room State: <span className="font-bold">{state}</span>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateMetadata({ displayName });
        }}
      >
        <input
          type="text"
          placeholder="Enter Display Name"
          className="px-3 py-2 rounded-md outline-none bg-slate-500/70 my-2 text-slate-200"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 h-full py-2 px-3 ml-2 rounded-md"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Metadata;
