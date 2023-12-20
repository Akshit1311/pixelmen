import { atom, useAtom, useAtomValue } from "jotai";

const spriteSheetImgAtom = atom<HTMLImageElement | null>(null);

export const useSpriteSheetImg = () => useAtom(spriteSheetImgAtom);

export const useSpriteSheetImgValue = () => useAtomValue(spriteSheetImgAtom);
