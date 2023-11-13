import { Overlay_Index } from "@/types/style/overlayIndex";
import { Flex, Text, Radio, RadioGroup } from "@chakra-ui/react";
import { SetStateAction, useState } from "react";
import BlueArrow from "@/assets/icons/blue_arrow.svg";
import GrayArrow from "@/assets/icons/gray_arrow.svg";
import UserGuide from "@/components/common/UserGuide";
import Image from "next/image";
import Select from "react-select";
import DetailComponent from "./DetailComponent";
import { PhoneIcon, QuestionIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import Rocket from "@/assets/images/roket.svg";
import ArrowGroup from "@/assets/icons/arrowGroup.svg";

const EconomyFour = (props: { question: any }) => {
  const { question } = props;

  return (
    <Flex
      flexDir={"column"}
      mt={"21px"}
      w={"360px"}
      fontFamily={"Proxima Nova Rg"}>
      <Text
        fontSize={"21px"}
        fontWeight={700}
        lineHeight={"normal"}
        mb={"20px"}
        whiteSpace={"break-spaces"}
        color={"#D0D0DA"}>
        {"4. "}
        {question.question}
      </Text>
      <Text
        whiteSpace={"break-spaces"}
        fontSize={"16px"}
        fontWeight={400}
        color={"#9D9EA5"}
        lineHeight={"21px"}>
        Figuratively speaking, your project tokens are the fuel that makes your
        project fly. Depending on your specific purposes, you should assign
        tokens to specific tanks (vaults).
      </Text>
      <Flex justifyContent={"flex-start"}>
        <UserGuide />
      </Flex>
      <Flex columnGap={"17px"} alignItems={"center"}>
        <Image src={Rocket} alt="rocket" />
        <Image src={ArrowGroup} alt="arrow-group" />
        <Flex w={"140px"} mx={"3px"} border={"1px solid blue"}>
          <Flex w={"140px"} h={"140px"} border={"1px solid yellow"}></Flex>
        </Flex>
        <Flex transform={"rotate(180deg)"}>
          <Image src={ArrowGroup} alt="arrow-group" />
        </Flex>
        <Image src={Rocket} alt="rocket" />
      </Flex>
    </Flex>
  );
};

export default EconomyFour;
