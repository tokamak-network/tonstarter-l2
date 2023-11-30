import { Flex, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import UserGuide from "@/components/common/UserGuide";
import Image from "next/image";
import RocketBody from "@/assets/images/rocket-body.svg";
import LongArrowClock from "@/assets/icons/LongArrowClockLR.svg";
import "font-proxima-nova/style.css";
import Rocket from "@/assets/images/rocket.svg";
import { useState } from "react";
import { useRecoilState } from "recoil";
import VestingTable from "./VestingTable";
import { modalStatus } from "@/recoil/launch/atom";

const EconomyCarouselSix = (props: { question: any }) => {
  const { question } = props;
  const [defaultStatus, setDefaultStatus] = useState("1");

  const [modalType, setModalType] = useRecoilState(modalStatus)

  return (
    <Flex
      flexDir={"column"}
      mt={"21px"}
      mb={"50px"}
      w={"360px"}
      height={'780px'}
      fontFamily={"Proxima Nova Rg"}>
      <Text
        fontSize={"21px"}
        fontWeight={700}
        lineHeight={"normal"}
        mb={"20px"}
        whiteSpace={"break-spaces"}
        color={"#D0D0DA"}>
        {"6. "}
        {question.question}
      </Text>
      <Text
        whiteSpace={"break-spaces"}
        fontSize={"16px"}
        fontWeight={400}
        letterSpacing={"0.32px"}
        color={"#9D9EA5"}
        lineHeight={"21px"}>
        {question.placeholder}
      </Text>
      <Flex justifyContent={"flex-start"}>
        <UserGuide />
      </Flex>
      <Flex mt={"30px"} mb={defaultStatus === "2" ? "0px" : "30px"}>
        <Flex
          flexDir={"column"}
         >
          <Image src={Rocket} alt="rocket" />
        </Flex>
        <Flex
         
          ml={"23px"}
          mr={'-15px'}
          flexDir={"column"}
          >
          <Flex width={"100%"} justifyContent={"space-between"} mt={'70px'}>
            <Text color={"#9D9EA5"} fontSize={"12px"} fontWeight={500}>
              TON
            </Text>
            <Text color={"#9D9EA5"} fontSize={"12px"} fontWeight={500}>
              TON
            </Text>
          </Flex>

          
          <Image src={LongArrowClock} alt="LongArrowClock"  width={180} height={24}/>
          <Text mt={"3px"} color={"#9D9EA5"} textAlign={'center'} fontSize={"12px"} fontWeight={500}>
            Vesting Schedule
          </Text>
          <RadioGroup
           
            onChange={setDefaultStatus}
            value={defaultStatus}
            mt={"78px"}>
            <Stack
              direction="row"
              fontFamily={"Proxima Nova Rg"}
              fontSize={"14px"}
              fontWeight={400}
              color={"#fff"}>
              <Radio colorScheme={"blue"} value="1">
                Default
              </Radio>
              <Radio value="2">Modify</Radio>
            </Stack>
          </RadioGroup>
        </Flex>
        <Image src={RocketBody} alt="rocket" />
      </Flex>
      {defaultStatus === "2" && (
        <Flex mt={"20px"} mb={"12px"}>
          <Flex
            fontSize={"13px"}
            fontWeight={400}
            letterSpacing={"0.26px"}
            columnGap={"6px"}>
            <Text color={"#9D9EA5"}>Easy Modification</Text>
            <Text
              color={"#0070ED"}
              onClick={() => setModalType('EasyModification')}
              cursor={"pointer"}>
              Click
            </Text>
          </Flex>
        </Flex>
      )}
      <VestingTable edit={defaultStatus === "2"} />
    </Flex>
  );
};

export default EconomyCarouselSix;

