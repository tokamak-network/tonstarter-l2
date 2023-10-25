import { atom, selector } from "recoil";
import { SupportedChainProperties } from "@/types/network/supportedNetwork";

type InNetwork = { connectedNetwork: SupportedChainProperties | null };

export const networkStatus = atom<InNetwork>({
  key: "networkStatus",
  default: {
    connectedNetwork: null,
  },
});

