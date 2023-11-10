import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import SetUp from "./SetUp";
import EconomyCarousel from "./EconomyCarousel";

const TokenEconomy = () => {
  const [setup, setSetup] = useState(true);
  return (
    <Flex flexDir={"column"} width={"100%"}>
      <Text
        color={"#D0D0DA"}
        fontSize={"21px"}
        lineHeight={"21px"}
        fontWeight={600}>
        Token Economy
      </Text>
      {setup ? <SetUp setSetUp={setSetup} /> : <EconomyCarousel />}
    </Flex>
  );
};

export default TokenEconomy;
