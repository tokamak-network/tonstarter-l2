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

export const dualCalendarStatus = atom <any>({
  key: "dualCalendarStatus",
  default: '',
})

export const modifyVaultsStatus = atom<boolean>({
  key: "modifyVaultsStatus",
  default: false,
})

export const addVaultsStatus = atom<boolean>({
  key: "addVaultsStatus",
  default: false,
})

export const easyModificationStatus = atom<boolean>({
  key: "easyModificationStatus",
  default: false,
})