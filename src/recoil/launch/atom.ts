import { atom, selector } from "recoil";

export const createStatus = atom<number>({
    key:'createStatus',
    default: 0
})