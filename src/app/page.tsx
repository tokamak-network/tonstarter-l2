"use client";

import { Flex, Button, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import MainBG from '@/assets/images/mainBG.svg'
export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
    height={'811px'}
    width={'100%'}
      backgroundImage={MainBG.src}
      backgroundSize={"cover"}
      css={{
        backgroundPositionY: ["center"],
        backgroundPositionX: "center",
      }}
      flexDir={"column"}
      backgroundRepeat={"no-repeat"}>
      {/* <Image src={MainBg} alt="background image" /> */}
      {/* <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button> */}
    </Flex>
  );
}
