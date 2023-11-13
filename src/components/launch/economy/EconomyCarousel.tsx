"use client";
import { Flex, Text, Button } from "@chakra-ui/react";
import CarouselSlide from "../CarouselSlide";
import { useMemo, useState } from "react";
import EconomyOne from "./EconomyOne";
import EconomyTwo from "./EconomyTwo";
import EconomyThree from "./EconomyThree";
import EconomyFive from "./EconomyFive";
import EconomyFour from "./EconomyFour";
import Image from "next/image";
import activeArrow from "@/assets/icons/caret-down.png";
import inactiveArrow from "@/assets/icons/caret-up.png";
import { useRecoilState } from "recoil";
import { createStatus } from "@/recoil/launch/atom";
import * as d3 from "d3";

const EconomyCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [projectStatus, setProjectStatus] = useRecoilState(createStatus);

  const questions = [
    {
      question: "How much do you want to raise?",
      value: "",
      placeholder: "Select One...",
    },
    {
      question: "Select your Total Supply & Token Funding Price",
      value: "",
      placeholder: "Select One...",
    },
    {
      question: "Set the exchange rate",
      value: "",
      placeholder: "8 characters or less",
    },
    {
      question: "Vault set up",
      value: "",
      placeholder: "Enter the URL here",
      optional: true,
    },
    {
      question: "Describe what your project is all about.",
      value: "",
      placeholder: "Enter your project description here",
    },
    { question: "Schedule your project", value: "", placeholder: "" },
  ];

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= questions.length) {
      newIndex = questions.length - 1;
    }

    setActiveIndex(newIndex);
  };
  

  const getSlide = (index: number, item: any) => {
    switch (index) {
      case 0:
        return <EconomyOne question={item} />;

      case 1:
        return <EconomyTwo question={item}/>;
      case 2:
        return <EconomyThree question={item}/>;
      case 3:
        return <EconomyFour question={item}/>;
      case 4:
        return <EconomyFive />;
      case 5:
    }
  };
  return (
    <Flex
      flexDir={"row"}
      alignItems={"center"}
      w={"100%"}
      height={"100%"}
      justifyContent={"space-between"}>
      <Flex flexDir={"column"} height={"100%"}>
        <Flex
          color={"white"}
          className="carousel"
          h={"100%"}
          flexDir={"column"}
          overflow={"hidden"}
          alignItems={"center"}>
          <Flex 
            h={activeIndex === 3? '615px': "400px"}
            className="inner"
            whiteSpace={"nowrap"}
            transition={"transform 0.3s"}
            flexDir={"column"}
            style={{
              transform: `translate(0,${-400 * activeIndex}px)`,
            }}>
            {questions.map((item: any, index: number) => {
              return <Flex  key={index}>{getSlide(index, item)}</Flex>;
            })}
          </Flex>
        </Flex>
        <Flex columnGap={"130px"} mt={"10px"}>
          <Flex zIndex={1}>
            <Button
              bg={"transparent"}
              _focus={{ bg: "transparent" }}
              _hover={{ bg: "transparent", border: "1px solid #353535" }}
              w={"40px"}
              h={"32px"}
              _active={{ bg: "transparent" }}
              border={"1px solid #353535"}
              borderLeftRadius={"20px"}
              onClick={() => {
                updateIndex(activeIndex - 1);
              }}
              padding={"0px"}
              borderRightRadius={"0px"}>
              <Image
                src={activeArrow}
                alt="activeArrow"
                height={7}
                width={13}
              />
            </Button>
            <Button
              bg={"transparent"}
              _focus={{ bg: "transparent" }}
              _hover={{ bg: "transparent", border: "1px solid #353535" }}
              w={"40px"}
              h={"32px"}
              padding={"0px"}
              _active={{ bg: "transparent" }}
              border={"1px solid #353535"}
              borderRightRadius={"20px"}
              onClick={() => {
                updateIndex(activeIndex + 1);
              }}
              borderLeftRadius={"0px"}>
              <Image
                src={inactiveArrow}
                alt="activeArrow"
                height={7}
                width={13}
              />
            </Button>
          </Flex>
          <Button
            w="150px"
            h="40px"
            borderRadius={"20px"}
            fontSize={"15px"}
            bg={"#0070ED"}
            color={"#fff"}
            fontWeight={600}
            _disabled={{ bg: "#353535", color: "#838383" }}
            _hover={{ bg: "#0057E6" }}
            onClick={() => setProjectStatus(1)}>
            Finish
          </Button>
        </Flex>
      </Flex>

      <Flex className="carousel-buttons" mr={"70px"}>
        <Flex className="indicators" flexDir={"column"}>
          {questions.map((item: any, index: number) => {
            return (
              <Flex
                key={index}
                w={"7px"}
                h={"7px"}
                borderRadius={"50%"}
                bg={"#fff"}
                cursor={"pointer"}
                opacity={activeIndex === index ? 1 : 0.25}
                mb={"46px"}
                onClick={() => setActiveIndex(index)}></Flex>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default EconomyCarousel;
