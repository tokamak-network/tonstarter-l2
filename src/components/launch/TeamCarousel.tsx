"use client";
import { Flex, Text } from "@chakra-ui/react";
import CarouselSlide from "./CarouselSlide";
import { useState } from "react";
const TeamCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "Runway",
      subtitle: "Optional",
      description:
        "Instead of jumping straight into the launch phase, it's a good \nidea to start with the runway phase. This will help you attract \nmore potential investors for your next launch phase by \nshowing how much preparation you've done",
    },
    {
      title: "Launch",
      subtitle: "",
      description:
        "On the Titan Network, \nLaunch faster and easier with lower fees!",
    },
    {
      title: "Fly",
      subtitle: "",
      description:
        "Lorem ipsum dolor sit amet, \nconsectetur adipiscing elit, sed do eiusmod  \ntempor incididunt ut labore et dolore magna aliqua. \nUt enim ad minim veniam, ",
    },
    {
        title: "Runway",
        subtitle: "Optional",
        description:
          "Instead of jumping straight into the launch phase, it's a good \nidea to start with the runway phase. This will help you attract \nmore potential investors for your next launch phase by \nshowing how much preparation you've done",
      },
      {
        title: "Launch",
        subtitle: "",
        description:
          "On the Titan Network, \nLaunch faster and easier with lower fees!",
      },
      {
        title: "Fly",
        subtitle: "",
        description:
          "Lorem ipsum dolor sit amet, \nconsectetur adipiscing elit, sed do eiusmod  \ntempor incididunt ut labore et dolore magna aliqua. \nUt enim ad minim veniam, ",
      },
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
            transform:
            `translate(0,${30*activeIndex}px)`
          }}>
          {items.map((item: any, index: number) => {
            return (
              <Flex key={index} onClick={() => setActiveIndex(index)}>
                {index}
              </Flex>
            );
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

export default TeamCarousel;

