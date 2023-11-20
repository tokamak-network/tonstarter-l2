import { Flex, Text } from "@chakra-ui/react";
import { useFetchProjects } from "@/hooks/participate/useFetchStarterProjects";
import ProjectCard from "./ProjectCard";
const ParticipateComponent = () => {
  const starterData = useFetchProjects();

  return (
    <Flex flexDir={"column"} justifyContent={"center"} alignItems={'center'}>
      <Text mt={"120px"} color={"#fff"} fontSize={"30px"} fontWeight={600} mb={'30px'}>
        Participate
      </Text>

      <Flex flexDir={"column"} rowGap={'60px'}>
        {starterData &&
          starterData.map((data: any, index: number) => {
            return <ProjectCard project={data} key={index} />;
          })}
      </Flex>
    </Flex>
  );
};

export default ParticipateComponent;
