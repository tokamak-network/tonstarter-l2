import { Flex, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import UserGuide from "@/components/common/UserGuide";
import Image from "next/image";
import UserIcon from "@/assets/images/user.svg";
import LongArrow from "@/assets/icons/LongArrow.svg";
import LongArrowClock from "@/assets/icons/LongArrowClock.svg";
import "font-proxima-nova/style.css";
import Rocket from "@/assets/images/rocket.svg";
import { useState } from "react";
import ClaimScheduleTable from "./ClaimScheduleTable";

const EconomyFive = (props: { question: any }) => {
  const { question } = props;
  const [defaultStatus, setDefaultStatus] = useState("1");

  return (
    <Flex
      flexDir={"column"}
      mt={"21px"}
      mb={"50px"}
      w={"360px"}
      fontFamily={"Proxima Nova Rg"}>
      <Text
        fontSize={"21px"}
        fontWeight={700}
        lineHeight={"normal"}
        mb={"20px"}
        whiteSpace={"break-spaces"}
        color={"#D0D0DA"}>
        {"5. "}
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
      <Flex mt={"30px"}>
        <Flex
        mt={'-90px'}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}>
          <Text color={"#9D9EA5"} fontSize={"13px"} fontWeight={700}>
            Investors
          </Text>
          <Image src={UserIcon} alt="UserIcon" />
        </Flex>
        <Flex
        mr={'30px'}
        ml={'23px'}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}>
          <Flex width={"100%"} justifyContent={"flex-start"} mt={"10px"}>
            <Text color={"#9D9EA5"} fontSize={"12px"} fontWeight={500}>
              TON
            </Text>
          </Flex>

          <Image src={LongArrow} alt="LongArrow" />
          <Flex width={"100%"} justifyContent={"flex-end"} mt={"10px"}>
            <Text
              textAlign={"right"}
              color={"#9D9EA5"}
              fontSize={"12px"}
              mr={"-7px"}
              fontWeight={500}>
              Project tokens
            </Text>
          </Flex>
          <Image src={LongArrowClock} alt="LongArrowClock" />
          <Text mt={"3px"} color={"#9D9EA5"} fontSize={"12px"} fontWeight={500}>
            Claim Schedule
          </Text>
          <RadioGroup onChange={setDefaultStatus} value={defaultStatus} mt={'42px'}>
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
        <Image src={Rocket} alt="rocket" />
      </Flex>
      <ClaimScheduleTable/>
    </Flex>
  );
};

export default EconomyFive;
