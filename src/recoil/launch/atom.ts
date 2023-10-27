import { atom, selector } from "recoil";

export const createStatus = atom<number>({
  key: "createStatus",
  default: 0,
});

export const termsStatus = atom<boolean>({
  key: "termsStatus",
  default: false,
});