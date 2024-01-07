"use client";

import React from "react";

import { HuddleClient, HuddleProvider } from "@huddle01/react";

const huddleClient = new HuddleClient({
  projectId: process.env.NEXT_PUBLIC_HUDDLE_PROJECT_ID || "",
  options: {
    activeSpeakers: {
      size: 8,
    },
  },
});

type Props = { children: React.ReactNode };

const HuddleWrapper = ({ children }: Props) => {
  return <HuddleProvider client={huddleClient}>{children}</HuddleProvider>;
};

export default HuddleWrapper;
