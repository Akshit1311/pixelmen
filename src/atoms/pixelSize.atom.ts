import { atom, useAtom } from "jotai";

const pixelSizeAtom = atom(1);

export const usePixelSizeAtom = () => useAtom(pixelSizeAtom);
