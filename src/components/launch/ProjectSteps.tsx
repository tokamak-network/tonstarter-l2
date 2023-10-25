"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import "font-proxima-nova/style.css";
import Rocket from "@/assets/images/roket-sample.svg";
import Image from "next/image";
import Ellipse_active from "@/assets/images/Ellipse_Active.svg";
import Ellipse_inactive from "@/assets/images/Ellipse.svg";
import { useRecoilState } from "recoil";
import { createStatus } from "@/recoil/launch/atom";
const ProjectSteps = () => {
  const [projectStatus, setProjectStatus] = useRecoilState(createStatus);
  return (
    <Flex
      w="50%"
      justifyContent={"flex-end"}
      pr={"60px"}
      fontFamily={"Proxima Nova Rg"}>
      <Flex w="360px" flexDir={"column"} alignItems={"center"}>
        <Text
          color={"#fff"}
          fontWeight={700}
          fontSize={"28px"}
          lineHeight={"normal"}>
          Project name
        </Text>
        <Flex mt={"21px"} columnGap={"30px"} mb={"36px"}>
          <Text
            onClick={() => setProjectStatus(0)}
            cursor={"pointer"}
            color={projectStatus === 0 ? "#0070ED" : "#64646F"}
            fontSize={"14px"}
            fontWeight={600}
            _hover={{ textDecor: "underline" }}>
            Project & Team
          </Text>
          <Text
            onClick={() => setProjectStatus(1)}
            cursor={"pointer"}
            color={projectStatus === 1 ? "#0070ED" : "#64646F"}
            fontSize={"14px"}
            fontWeight={600}
            _hover={{ textDecor: "underline" }}>
            Token Economy
          </Text>
          <Text
            onClick={() => setProjectStatus(2)}
            cursor={"pointer"}
            color={projectStatus === 2 ? "#0070ED" : "#64646F"}
            fontSize={"14px"}
            fontWeight={600}
            _hover={{ textDecor: "underline" }}>
            Launch
          </Text>
        </Flex>
        <Flex
          w="360px"
          h="360px"
          backgroundImage={Rocket.src}
          backgroundSize={"cover"}
          backgroundRepeat={"no-repeat"}
          css={{
            backgroundPositionY: ["center"],
            backgroundPositionX: "center",
          }}
          justifyContent={"flex-start"}
          alignItems={"start"}>
          <Flex
            cursor={"pointer"}
            onClick={() => setProjectStatus(0)}
            position={"relative"}
            left={"32px"}
            top={"50px"}>
            <Image
              src={projectStatus === 0 ? Ellipse_active : Ellipse_inactive}
              alt="Ellipse_active"
            />
          </Flex>
          <Flex
            cursor={"pointer"}
            onClick={() => setProjectStatus(1)}
            position={"relative"}
            left={"180px"}
            top={"87px"}>
            <Image
              src={projectStatus === 1 ? Ellipse_active : Ellipse_inactive}
              alt="Ellipse_active"
            />
          </Flex>
          <Flex
            cursor={"pointer"}
            onClick={() => setProjectStatus(2)}
            position={"relative"}
            left={"70px"}
            top={"317px"}>
            <Image
              src={projectStatus === 2 ? Ellipse_active : Ellipse_inactive}
              alt="Ellipse_active"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProjectSteps;
