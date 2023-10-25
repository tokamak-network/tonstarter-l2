import { Flex, Text, Progress, Box } from "@chakra-ui/react";
import { format } from "date-fns";
import "font-proxima-nova/style.css";
import Image from "next/image";

const RightCarouselSlide = (props: { project: any }) => {
  const { project } = props;
  return (
    <Flex
      w={"270px"}
      height={"100%"}
      flexDir={"column"}
      fontFamily={"Proxima Nova Rg"}>
      <Flex
        w="270px"
        h={"190px"}
        borderRadius={"10px"}
        justifyContent={"center"}
        alignItems={"center"}
        border={"1px solid #373737"}>
        <Image src={project.logo} alt="project logo" />
      </Flex>
      <Flex mt={"25px"} flexDir={"column"}>
        <Text fontSize={"16px"} fontWeight={600}>
          {project.name} / {format(project.date * 1000, "MMM dd, yyyy")}
        </Text>

        <Box
          mt="17px"
          color={"#0070ED"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          columnGap={"12px"}>
          <Progress
            value={project.progress}
            borderRadius={"4px"}
            height={"6px"}
            bg={"#353D48"}
            w={"200px"}></Progress>
          <Text fontSize={"13px"} color={"#0070ED"} fontWeight={700}>
            {project.progress}%
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default RightCarouselSlide;
