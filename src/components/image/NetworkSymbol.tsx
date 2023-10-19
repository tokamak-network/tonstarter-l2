import { ImageFileType } from "@/types/style/imageFileType";
import { Box, Flex } from "@chakra-ui/layout";
import Image from "next/image";
import SYMBOL_ETHEREUM from "@/assets/icons/network/eth.svg";
import SYMBOL_TITAN from "@/assets/icons/network/titan.svg";


import { SupportedChainId } from "@/types/network/supportedNetwork";
import { CSSProperties } from "react";

export default function ImageSymbol(props: {
  ImgFile: ImageFileType;
  w?: number;
  h?: number;
  style?: {};
}) {
  return (
    <Flex w={`${props.w ?? 20}px`} h={`${props.h ?? 20}px`}>
      <Image
        src={props.ImgFile}
        alt={"img"}
        style={{ width: "100%", height: "100%" }}
        {...props.style}
      />
    </Flex>
  );
}

export function NetworkSymbol(props: {
  network: SupportedChainId | undefined;
  w?: number;
  h?: number;
  style?: CSSProperties;
  isCircle?: boolean;
}) {
  const { network, isCircle } = props;
  switch (network) {
    case 1:
      return (
        <ImageSymbol
          ImgFile={SYMBOL_ETHEREUM}
          {...props}
        />
      );
    case 5:
      return (
        <ImageSymbol
          ImgFile={SYMBOL_ETHEREUM}
          {...props}
        />
      );
    case 55004:
      return (
        <ImageSymbol
          ImgFile={ SYMBOL_TITAN}
          {...props}
        />
      );
    case 5050:
      return (
        <ImageSymbol
          ImgFile={ SYMBOL_TITAN}
          {...props}
        />
      );
    default:
      return <ImageSymbol ImgFile={SYMBOL_ETHEREUM} {...props} />;
  }
}
