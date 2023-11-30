import {
    Flex,
    Radio,
    RadioGroup,
    Stack,
    Input,
    Text,
    Tooltip,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
  } from "@chakra-ui/react";
  import UserGuide from "@/components/common/UserGuide";
  import Image from "next/image";
  import "font-proxima-nova/style.css";
  import RocketFin from "@/assets/images/Rocket_Fin.svg";
  import { useState } from "react";
  import ArrowActive from "@/assets/icons/Forward_inactive.svg";
  import ArrowInactive from "@/assets/icons/Forward.svg";
  import { useRecoilState } from "recoil";
  import { QuestionOutlineIcon } from "@chakra-ui/icons";
  
  const EconomyCarouselSeven = (props: { question: any }) => {
    const { question } = props;
  
    const styles = `
   
    .css-1kv3fcf {
      background-color: #191919 !important;
      right: -2px
    }`;
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
          {"7. "}
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
        <Flex
          mt={"30px"}
          width={"100%"}
          justifyContent={"center"}
          flexDir={"column"}
          alignItems={"center"}>
          <Image src={RocketFin} alt="RocketFin" height={230} width={280} />
  
          <Input
            w={"330px"}
            h={"51px"}
            mt={"30px"}
            bg={"#252525"}
            borderRadius={0}
            _focusVisible={{
              borderBottom: "1px solid #0070ED !important",
            }}
            textAlign={"left"}
            _hover={{
              borderBottom: "1px solid #0070ED !important",
            }}
            placeholder={"0"}
            outline={"none"}
            fontSize={"13px"}
            fontWeight={600}
            border={"transparent"}
            pl={"20px"}
            _placeholder={{
              opacity: 1,
              color: "#818181",
              fontsize: "18px",
              lineHeight: "normal",
            }}
          />
          <Text
            mt={"12px"}
            color={"#9D9EA5"}
            fontSize={"13px"}
            cursor={"pointer"}
            fontWeight={400}
            letterSpacing={"0.26px"}>
            Minimum fundraising amount{" "}
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
              <QuestionOutlineIcon />
            </Tooltip>
          </Text>
          <Flex
            mx={"15px"}
            mt={"30px"}
            w={"330px"}
            justifyContent={"space-between"} 
            alignItems={'center'}>
            <Text
              w="162px"
              color={"#9D9EA5"}
              fontSize={"16px"}
              cursor={"pointer"}
              whiteSpace={"break-spaces"}
              fontWeight={400}
              letterSpacing={"0.26px"}>
              Token Allocation for Liquidity Pool (5~50%)
            </Text>
            <Flex>
              <style>{styles}</style>
              <NumberInput
                maxH={"42px"}
                maxW={"90px"}
                defaultValue={5}
                colorScheme={"gray"}
                max={50}
                min={5}
                display={"flex"}
                alignItems={"center"}
                mr={"10px"}
                // onChange={(value) => {
                //   setHours(parseInt(value));
                // }}
                bg={'transparent'}
                borderColor={"transparent"}
                _focus={{
                  borderColor: "transparent",
                }}
                _active={{
                  borderColor: "transparent",
                }}
                _hover={{
                  borderColor: "transparent",
                }}
                focusBorderColor="transparent">
                <NumberInputField
                  fontSize="15px"
                  fontWeight={400}
                  pl={"0px"}
                  maxH={"42px"}
                  maxW={"90px"}
                  borderRadius={0}
                  pr={"34px"}
                  textAlign={"right"}
                  _hover={{
                    borderColor: "transparent",
                  }}
                />
                <NumberInputStepper
                
                  borderColor={"transparent"}
                  rowGap={"0px"}
                  width={"16px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  display={"flex"}>
                  <NumberIncrementStepper
                    borderColor={"transparent"}
                    _active={{ bg: "transparent" }}>
                    {/* <Image src={ArrowInactive} alt="arrowActive" /> */}
                  </NumberIncrementStepper>
                  <NumberDecrementStepper
                  //   marginLeft={"2px"}
                    borderColor={"transparent"}
                  //   transform={"rotate(180deg)"}
                    _active={{ bg: "transparent" }}>
                    {/* <Image src={ArrowInactive} alt="arrowActive" /> */}
                  </NumberDecrementStepper>
                </NumberInputStepper>
              </NumberInput>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    );
  };
  
  export default EconomyCarouselSeven;
  
  