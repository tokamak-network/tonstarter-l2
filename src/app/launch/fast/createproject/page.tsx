"use client";
import PageTitle from "@/components/common/PageTitle";
import { Flex } from "@chakra-ui/react";
import ProjectSteps from "@/components/launch/ProjectSteps";
import ProjectTeam from "@/components/launch/team/ProjectTeam";
import TokenEconomy from "@/components/launch/economy/TokenEconomy";
import Launch from "@/components/launch/LaunchProject";
import { useRecoilValue } from "recoil";
import { createStatus } from "@/recoil/launch/atom";
import { useMemo } from "react";
import "font-proxima-nova/style.css";

const CreateProject = () => {
  const projectStep = useRecoilValue(createStatus);

  const getProjectStep = useMemo(() => {
    switch (projectStep) {
      case 0:
        return <ProjectTeam />;
      case 1:
        return <TokenEconomy />;
      case 2:
        return <Launch />;
    }
  }, [projectStep]);
  return (
    <Flex
      flexDir={"column"}
      color={"white"}
      alignItems={"center"}
      style={{ flex: 1 }}>
      <Flex mt={"60px"}>
        <PageTitle title="New Project"></PageTitle>
      </Flex>
      <Flex width={"100%"} mt={"100px"}>
        <ProjectSteps />
        <Flex
          w={"50%"}
          pt={"13px"}
          justifyContent={"flex-start"}
          pl={"60px"}
          fontFamily={"Proxima Nova Rg"}>
          {getProjectStep}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CreateProject;
