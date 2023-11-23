import { Flex, Text } from "@chakra-ui/react";
import { useFetchProjects } from "@/hooks/participate/useFetchStarterProjects";
import ProjectCard from "./ProjectCard";
import { useEffect, useMemo, useState } from "react";
const ParticipateComponent = () => {
  const starterData = useFetchProjects();
  const [numData, setNumData] = useState(2);

  const getPaginationData = useMemo(() => {
    const startIndex = 0;
    const endIndex = startIndex + numData;
    return  starterData !== undefined? starterData.slice(startIndex, endIndex):[];
  }, [numData, starterData]);

  return (
    <Flex flexDir={"column"} justifyContent={"center"} alignItems={'center'}>
      <Text mt={"120px"} color={"#fff"} fontSize={"30px"} fontWeight={600} mb={'30px'}>
        Participate
      </Text>

      <Flex flexDir={"column"} rowGap={'60px'} >
        {getPaginationData &&
          getPaginationData.map((data: any, index: number) => {
            return <ProjectCard project={data} key={index} isSocial={false}/>;
          })}
      </Flex>
      { starterData && getPaginationData.length < starterData.length &&  <Text mt={'90px'} onClick={() => setNumData(numData + 2)}>See more</Text> }
     
    </Flex>
  );
};

export default ParticipateComponent;
