"use client";
import { Flex, Text, Button } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import EconomyCarouselOne from "./EconomyCarouselOne";
import EconomyCarouselTwo from "./EconomyCarouselTwo";
import EconomyCarouselThree from "./EconomyCarouselThree";
import EconomyCarouselFive from "./EconomyCarouselFive";
import EconomyCarouselFour from "./EconomyCarouselFour";
import EconomyCarouselSix from "./EconomyCarouselSix"; 
import EconomyCarouselSeven from "./EconomyCarouselSeven";
import Image from "next/image";
import activeArrow from "@/assets/icons/caret-down.png";
import inactiveArrow from "@/assets/icons/caret-up.png";
import { useRecoilState } from "recoil";
import { createStatus } from "@/recoil/launch/atom";

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
      placeholder:
        "In order to list on a DEX, set the exchange rate between your project token and TOS.",
    },
    {
      question: "Vault set up",
      value: "",
      placeholder:
        "Figuratively speaking, your project tokens are the fuel that makes your project fly. Depending on your specific purposes, you should assign tokens to specific tanks (vaults).",
      optional: true,
    },
    {
      question: "Claim Schedule.",
      value: "",
      placeholder:
        "Investors invests in your project with TON tokens, which will be exchanged for project tokens in the public vault. However, the investors will not receive the project tokens at once, but will need to claim them periodically. You can modify the settings related to this.",
    },
    {
      question: "Vesting Schedule",
      value: "",
      placeholder:
        "Project tokens in the public vault will be exchanged for TON tokens from investors. These TON tokens can be spent on the project when periodically being claimed to your project wallet",
    },
    {
      question: "Minimum Launching Conditions",
      value: "",
      placeholder:
        "Project tokens in the public vault will be exchanged for TON tokens from investors. These TON tokens can be spent on the project when periodically being claimed to your project wallet.",
    },
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
        return <EconomyCarouselOne question={item} />;
      case 1:
        return <EconomyCarouselTwo question={item} />;
      case 2:
        return <EconomyCarouselThree question={item} />;
      case 3:
        return <EconomyCarouselFour question={item} />;
      case 4:
        return <EconomyCarouselFive question={item} />;
      case 5:
        return <EconomyCarouselSix question={item} />;
        case 6: 
        return <EconomyCarouselSeven question={item}/>
    }
  };

  const getTransition = useMemo(() => {
    switch (activeIndex) {
      case 0:
        return 0;
      case 1:
        return -400;
      case 2:
        return -800;
      case 3:
        return -1200;
      case 4:
        return -1840;
      case 5:
        return -2800;
      case 6:
        return -3650;
       
    }
  }, [activeIndex]);

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
            h={
              activeIndex === 3
                ? "615px"
                : activeIndex === 4 ?'960px': activeIndex === 6
                ? "690px" : activeIndex === 5 ?'800px'
                : "400px"
            }
            className="inner"
            whiteSpace={"nowrap"}
            transition={"transform 0.3s"}
            flexDir={"column"}
            style={{
              transform: `translate(0,${getTransition}px)`,
            }}>
            {questions.map((item: any, index: number) => {
              
              return <Flex key={index}   >{getSlide(index, item)}</Flex>;
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
