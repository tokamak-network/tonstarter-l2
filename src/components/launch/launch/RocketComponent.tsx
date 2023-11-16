import { QuestionOutlineIcon } from "@chakra-ui/icons";
import { Flex, Text, Tooltip } from "@chakra-ui/react";
import Image from "next/image";
import { useState, useMemo } from "react";
import smallRocket from "@/assets/images/small_rocket.svg";

const RocketComponent = () => {
  const TrafficLight = (props: { status: string }) => {
    const { status } = props;
    const bgColor = useMemo(() => {
      switch (status) {
        case "stop":
          return "#F7181B";
        case "go":
          return "#90CF04";
        case "halt":
          return "#FFAA19";
        case "":
          return "#353535";
      }
    }, [status]);
    return (
      <Flex
        height={"20px"}
        width={"20px"}
        borderRadius={"50%"}
        bg={bgColor}></Flex>
    );
  };
  return (
    <Flex
      flexDir={"column"}
      mt={"21px"}
      justifyContent={"center"}
      alignItems={"center"}>
      <Flex alignItems={"self-end"} mb={"3px"}>
        <Flex
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}>
          <Text color={"#D0D0DA"}>Deadline</Text>
          <Text color={"#FFFF07"}>08:04:48:41</Text>
        </Flex>
        <Flex marginLeft={"3px"} position={"relative"} top={"-3px"}>
          <Tooltip
            label={
              <>
                <div>1. WTON-TOS LP reward (2.5%)</div>
              </>
            }
            fontSize="12px"
            bg={"#1F2128"}
            color={"#fff"}
            fontWeight={400}>
            <QuestionOutlineIcon color={"#777777"} />
          </Tooltip>
        </Flex>
      </Flex>
      <Image src={smallRocket} alt="small rocket" />
      <Flex
        mt={"49px"}
        border={"2px solid #353535"}
        width={"106Px"}
        height={"32px"}
        borderRadius={"16px"}
        justifyContent={"space-around"}
        alignItems={"center"}>
        <TrafficLight status="" />
        <TrafficLight status="go" />
        <TrafficLight status="stop" />
      </Flex>
    </Flex>
  );
};

export default RocketComponent;
