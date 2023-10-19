import { networkStatus } from "@/recoil/global/atom";
import { SupportedChainId } from "@/types/network/supportedNetwork";
import { supportedChain } from "@/types/network/supportedNetwork";
import { getKeyByValue } from "@/utils/ts/getKeyByValue";
import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { useNetwork } from "wagmi";

export function useInOutNetwork() {
  const { connectedNetwork } = useRecoilValue(networkStatus);

  return {
    connectedNetwork
  };
}

export default function useConnectedNetwork() {
  // const network = useRecoilValue(networkStatus);
  const { chain } = useNetwork();

  const { connectedNetwork } = useInOutNetwork();

  const chainInfo = useMemo(() => {
    //connected wallet
    if (chain?.id) {
      const chainName = getKeyByValue(SupportedChainId, chain.id);

      return {
        connectedChainId: chain.id,
        isSupportedChain: Object.values(SupportedChainId).includes(chain.id),
        chainName,
        layer:
          supportedChain.filter((e) => e.chainId === chain.id)[0]?.layer ??
          null,
        isConnectedToMainNetwork:
          chain.id === SupportedChainId["MAINNET"] ||
          chain.id === SupportedChainId["TITAN"],
        blockExplorer: chain.blockExplorers?.default.url,
      };
    }
    //not connected wallet but select a network
    if (connectedNetwork) {
      return {
        connectedChainId: connectedNetwork.chainId,
        isSupportedChain: Object.values(SupportedChainId).includes(
            connectedNetwork.chainId
        ),
        chainName: connectedNetwork.chainName,
        layer:
          supportedChain.filter((e) => e.chainId === connectedNetwork.chainId)[0]
            ?.layer ?? null,
        isConnectedToMainNetwork:
        connectedNetwork.chainId === SupportedChainId["MAINNET"] ||
        connectedNetwork.chainId === SupportedChainId["TITAN"],
        blockExplorer: "",
      };
    }
    return { chainName: "MAINNET" as keyof typeof SupportedChainId };
  }, [chain, connectedNetwork]);

  // console.log("inNetwork");
  // console.log(inNetwork);

  const otherLayerChainInfo = useMemo(() => {
    if (chainInfo) {
      if (chainInfo.layer === "L1" && chainInfo.isConnectedToMainNetwork)
        return supportedChain[2];
      if (chainInfo.layer === "L1" && !chainInfo.isConnectedToMainNetwork)
        return supportedChain[3];
      if (chainInfo.layer === "L2" && chainInfo.isConnectedToMainNetwork)
        return supportedChain[0];

      if (chainInfo.layer === "L2" && !chainInfo.isConnectedToMainNetwork)
        return supportedChain[1];
    }
  }, [chainInfo]);

  return { ...chainInfo, otherLayerChainInfo };
}
