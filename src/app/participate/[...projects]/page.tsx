"use client";
import { useFetchProjects } from "@/hooks/participate/useFetchStarterProjects";
import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import activeArrow from "@/assets/icons/caret-down.png";

const ProjectPage = (props: { params: any }) => {
  const starterData = useFetchProjects();
  const [saleInfo, setSaleInfo] = useState(undefined);

  useEffect(() => {
    const rawData = starterData;

    console.log("rawData", rawData);
    console.log("props.params.projects", props.params.projects[0]);

    if (rawData) {
      const id = props.params.projects[0].replaceAll("%20", " ");
      const projectInfo = rawData.filter((data: any) => {
        console.log(data.name, id);
        return data.name === id;
      });

      return setSaleInfo(projectInfo[0]);
    }
  }, [starterData, props.params.projects]);

  return (
    <Flex
      mt={"60px"}
      flexDir={"column"}
      color={"white"}
      alignItems={"center"}
      style={{ flex: 1 }}>
      <Flex w={"1200px"} border={"1px solid red"} >
        <Flex>
          <Flex transform={"rotate(90deg)"} height={15} width={15}>
          <Image  src={activeArrow} alt="activeArrow" />
          </Flex>
        <Text>Participate</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProjectPage;
