"use client";
import { useFetchProjects } from "@/hooks/participate/useFetchStarterProjects";
import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import activeArrow from "@/assets/icons/caret-down.png";
import "font-proxima-nova/style.css";
import { useRouter } from "next/navigation";
import ProjectCard from "@/components/participate/ProjectCard";
import TimelineComponent from "@/components/participate/TimelineComponent";
import TokenEconomyComponent from "@/components/participate/TokenEconomyComponent";
import ClaimScheduleChart from "@/components/participate/ClaimScheduleChart";
const ProjectPage = (props: { params: any }) => {
  const starterData = useFetchProjects();
  const [saleInfo, setSaleInfo] = useState(undefined);
  const router = useRouter();

  useEffect(() => {
    const rawData = starterData;
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
      lineHeight={"normal"}
      style={{ flex: 1 }}
      fontFamily={"Proxima Nova Rg"}>
      <Flex w={"1200px"} flexDir={"column"}>
        <Flex
          alignItems={"center"}
          cursor={"pointer"}
          onClick={() => router.push(`/participate`)}
          mb={"60px"}>
          <Flex transform={"rotate(90deg)"} height={"15px"} width={"20px"}>
            <Image src={activeArrow} alt="activeArrow" />
          </Flex>
          <Text ml={"6px"} fontSize={"30px"} fontWeight={700} color={"#fff"}>
            Participate
          </Text>
        </Flex>
        {saleInfo !== undefined && (
          <ProjectCard project={saleInfo} isSocial={true} />
        )}

        <Flex mt={"45px"} columnGap={"70px"}>
          <Flex>
            <Text
              color={"#9D9EA5"}
              fontSize={"15px"}
              fontWeight={600}
              mr="30px">
              Token Offered (public)
            </Text>
            <Text color={"#fff"} fontSize={"15px"} fontWeight={700}>
              25,000,000 DOC
            </Text>
          </Flex>
          <Flex mr={"40px"}>
            <Text
              color={"#9D9EA5"}
              mr="30px"
              fontSize={"15px"}
              fontWeight={600}>
              Total Raise
            </Text>
            <Text color={"#fff"} fontSize={"15px"} fontWeight={700}>
              421,427.26 TON
            </Text>
          </Flex>
          <Flex mr={"40px"}>
            <Text
              color={"#9D9EA5"}
              fontSize={"15px"}
              mr="30px"
              fontWeight={600}>
              Sale Price
            </Text>
            <Text color={"#fff"} fontSize={"15px"} fontWeight={700}>
              1 DOC = 0.245 TOS
            </Text>
          </Flex>
          <Flex mr={"40px"}>
            <Text
              color={"#9D9EA5"}
              fontSize={"15px"}
              mr="30px"
              fontWeight={600}>
              Participants
            </Text>
            <Text color={"#fff"} fontSize={"15px"} fontWeight={700}>
              7
            </Text>
          </Flex>
        </Flex>
        {saleInfo !== undefined && (
          <Flex>
            <TimelineComponent project={saleInfo} />
            <TokenEconomyComponent project={saleInfo} />
          
          </Flex>

        )}
        <ClaimScheduleChart/>
      </Flex>
    </Flex>
  );
};

export default ProjectPage;
