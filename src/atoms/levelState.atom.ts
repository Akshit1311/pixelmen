import LevelState from "@/classes/LevelState";
import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";

const levelStateAtom = atom<LevelState | null>(null);

const useLevelState = () => useAtom(levelStateAtom);
const useLevelStateValue = () => useAtomValue(levelStateAtom);
const useSetLevelState = () => useSetAtom(levelStateAtom);

export { useLevelState, useLevelStateValue, useSetLevelState };
