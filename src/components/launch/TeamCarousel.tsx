import {
  Flex,
  NumberInput,
  Text,
  NumberInputField,
  Input,
  Button,
} from "@chakra-ui/react";
import { useMemo, useState } from "react";
import "font-proxima-nova/style.css";
import UserGuide from "../common/UserGuide";
import activeArrow from "@/assets/icons/caret-down.png";
import inactiveArrow from "@/assets/icons/caret-up.png";
import Image from "next/image";
import QuestionSix from "./team/QuestionSix";
import { useRecoilState } from "recoil";
import { createStatus } from "@/recoil/launch/atom";

const TeamCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [projectStatus, setProjectStatus] = useRecoilState(createStatus);

  const questions = [
    {
      question: "What’s your project name?",
      value: "",
      placeholder: "20 characters or less",
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

  const getTransition = useMemo(() => {
    switch (activeIndex) {
      case 0:
        return 100;

      case 1:
        return 0;
        case 2:
          return -20;
          case 3:
          return -40;
          case 4:
            return -160;
            case 5:
              return -280;
    }
  }, [activeIndex]);


  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= questions.length) {
      newIndex = questions.length - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <Flex
      flexDir={"row"}
      alignItems={"center"}
      w={"100%"}
      mt={"27px"}
      height={"100%"}
      justifyContent={"space-between"}>
      <Flex height={"100%"} flexDir={"column"}>
        <Flex
          color={"white"}
          flexDir={"column"}
          overflow={"hidden"}
          height={"100%"}
          alignItems={"center"}>
          <Flex
            h={activeIndex === 0 ? "200px" : "379px"}
            className="inner"
            whiteSpace={"nowrap"}
            transition={"transform 0.3s"}
            flexDir={"column"}
            style={{
              transform: `translate(0,${
               getTransition 
              }px)`,
            }}>
            {questions.map((question: any, index: number) => {
              if (activeIndex === index) {
                if (index === 5) {
                  return <QuestionSix key={index} question={question} />;
                }
                return (
                  <Flex
                    w={"360px"}
                    key={index}
                    fontFamily={"Proxima Nova Rg"}
                    flexDir={"column"}
                    mr={"20px"}
                    mb={activeIndex=== 4? '30px': "60px"}>
                    <Text
                      fontSize={"21px"}
                      fontWeight={700}
                      lineHeight={"normal"}
                      mb={"20px"}
                      whiteSpace={"break-spaces"}
                      color={"#D0D0DA"}>
                      {index + 1}
                      {". "}

                      {question.question}
                    </Text>

                    <Input
                      variant="flushed"
                      w={"360px"}
                      h={index === 4 ? "141px" : "51px"}
                      _hover={{}}
                      bg={"#252525"}
                      borderRadius={0}
                      _focusVisible={{
                        borderBottom: "1px solid #0070ED !important",
                      }}
                      as={index === 4 ? "textarea" : "input"}
                      placeholder={question.placeholder}
                      outline={"none"}
                      fontSize={"18px"}
                      fontWeight={600}
                      border={"transparent"}
                      pl={"20px"}
                      pt={index === 4 ? "15px" : ""}
                      _placeholder={{
                        opacity: 1,
                        color: "#818181",
                        fontsize: "18px",
                        lineHeight: "normal",
                      }}
                    />

                    <UserGuide />
                  </Flex>
                );
              }

              return (
                <Flex key={index} mb={activeIndex === 4? '30px':activeIndex === 5? '48px': index === activeIndex-1? '90px':index === activeIndex+1? '66px':'0px'}>
                  <Text color={"#353535"} fontWeight={700} fontSize={"15px"}>
                    {index + 1} {". "} {question.question}
                  </Text>
                </Flex>
              );
            })}
          </Flex>

          {/* buttons  */}
        </Flex>
        <Flex columnGap={"130px"} mt={'10px'}>
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
            onClick={() => setProjectStatus(1)}
            >
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

export default TeamCarousel;
