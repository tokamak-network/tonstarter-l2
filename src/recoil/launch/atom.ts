import { atom, selector } from "recoil";

export const createStatus = atom<number>({
  key: "createStatus",
  default: 0,
});

export const termsStatus = atom<boolean>({
  key: "termsStatus",
  default: false,
});

export const setUpStatus = atom<boolean>({
  key: "setUpStatus",
  default: false,
});

export const dualCalendarStatus = atom<any>({
  key: "dualCalendarStatus",
  default: "",
});

export const modifyVaultsStatus = atom<boolean>({
  key: "modifyVaultsStatus",
  default: false,
});

export const addVaultsStatus = atom<boolean>({
  key: "addVaultsStatus",
  default: false,
});

export const easyModificationStatus = atom<boolean>({
  key: "easyModificationStatus",
  default: false,
});

export const walletCheckStatus = atom<boolean>({
  key: "walletCheckStatus",
  default: false,
});

export const gasCheckStatus = atom<boolean>({
  key: "gasCheckStatus",
  default: false,
});

export const l2TokenStatus = atom<boolean>({
  key: "l2TokenStatus",
  default: false,
});

export const l1TokenStatus = atom<boolean>({
  key: "l1TokenStatus",
  default: false,
});
