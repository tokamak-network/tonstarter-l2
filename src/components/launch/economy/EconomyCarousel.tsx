"use client";
import { Flex, Text } from "@chakra-ui/react";
import CarouselSlide from "../CarouselSlide";
import { useMemo, useState } from "react";
import EconomyOne from "./EconomyOne";
import EconomyTwo from "./EconomyTwo";
import EconomyThree from "./EconomyThree";
import EconomyFive from "./EconomyFive";
import EconomyFour from "./EconomyFour";

const EconomyCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      question: "How much do you want to raise?",
      value: "",
      placeholder: "Select One...",
    },
    {
      question: "What’s your project token symbol?",
      value: "",
      placeholder: "8 characters or less",
    },
    {
      question: "What’s your token name?",
      value: "",
      placeholder: "8 characters or less",
    },
    {
      question: "Enter the URL of the token symbol image",
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
    } else if (newIndex) {
      newIndex >= 3;
    }
    {
      newIndex = 2;
    }
  };


  const getSlide = (index: number, item:any) => {
    switch (index) {
      case 0:
        return <EconomyOne question={item}/>;

      case 1:
        return <EconomyTwo />;
      case 2:
        return <EconomyThree />;
      case 3:
        return <EconomyFour />;
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
      justifyContent={"space-between"}>
      <Flex
        color={"white"}
        className="carousel"
        h={"600px"}
        flexDir={"column"}
        overflow={"hidden"}
        alignItems={"center"}>
        <Flex
          className="inner"
          whiteSpace={"nowrap"}
          transition={"transform 0.3s"}
          flexDir={"column"}
          style={{
            transform: `translate(0,${30 * activeIndex}px)`,
          }}>
          {items.map((item: any, index: number) => {
            return <Flex key={index}>{getSlide(index, item)}</Flex>;
          })}
        </Flex>
      </Flex>
      <Flex className="carousel-buttons">
        <Flex className="indicators" flexDir={"column"}>
          {items.map((item: any, index: number) => {
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
