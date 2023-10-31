import { Text, Flex } from "@chakra-ui/react";
import EconomyCarousel from "./EconomyCarousel";
import TeamCarousel from "./TeamCarousel";
import { useState } from "react";
import SetUp from "./SetUp";
import { setUpStatus } from "@/recoil/launch/atom";
import { useRecoilValue } from "recoil";
const ProjectTeam = () => {
  const setup = useRecoilValue(setUpStatus);
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
