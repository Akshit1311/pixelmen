import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";

type TPeerAudioNode = {
  [key: string]: StereoPannerNode;
};

const peerAudioNodeAtom = atom<TPeerAudioNode>({});

const usePeerAudioNode = () => useAtom(peerAudioNodeAtom);
const useSetPeerAudioNode = () => useSetAtom(peerAudioNodeAtom);
const usePeerAudioNodeValue = () => useAtomValue(peerAudioNodeAtom);

export { usePeerAudioNode, useSetPeerAudioNode, usePeerAudioNodeValue };
