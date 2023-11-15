import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import SetUp from "./SetUp";
import LaunchStatusCheck from "./LaunchStatusCheck";

const Launch = () => {
  const [setup, setSetup] = useState(true);

  return (
    <Flex flexDir={"column"} width={"100%"}>
      <Text
        color={"#D0D0DA"}
        fontSize={"21px"}
        lineHeight={"21px"}
        fontWeight={600}>
        {setup?'Launch':'Launch Status Check'}
      </Text>
      {setup ? <SetUp setSetUp={setSetup} /> : <LaunchStatusCheck />}
    </Flex>
  );
};

export default Launch;
