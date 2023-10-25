import { Text, Flex } from "@chakra-ui/react";
import TeamCarousel from "./TeamCarousel";
import { useState } from "react";
import SetUp from "./SetUp";

const ProjectTeam = () => {
  const [setup, setSetup] = useState(false);
  return (
    <Flex flexDir={"column"}>
      <Text
        color={"#D0D0DA"}
        fontSize={"21px"}
        lineHeight={"21px"}
        fontWeight={600}>
        Project & Team
      </Text>
      {setup ? <TeamCarousel /> : <SetUp />}
    </Flex>
  );
};

export default ProjectTeam;
