import { atom, selector } from "recoil";
import { ModalType } from "@/types/modal/modalTypes";
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

export const modalStatus = atom<ModalType | ''>({
  key: 'modalStatus',
  default:''
})
export const vaultStatus = atom<any>({
  key: "vaultStatus",
  default: {},
});

