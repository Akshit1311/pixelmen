"use client";
import useMeeting from "@/hooks/useMeeting";
import React from "react";

type Props = {
  roomId: string;
  accessToken: string;
};

const Meeting = ({ roomId, accessToken }: Props) => {
  useMeeting(roomId, accessToken);

  return null;
};

export default React.memo(Meeting);
