import {
  Flex,
  NumberInput,
  Text,
  NumberInputField,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import "font-proxima-nova/style.css";
import UserGuide from "../common/UserGuide";
const TeamCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
            transform: `translate(0,${-200 * activeIndex}px)`,
          }}>
          {questions.map((question: any, index: number) => {
            console.log("index", index);

            return (
              <Flex
                w={"360px"}
                key={index}
                fontFamily={"Proxima Nova Rg"}
                flexDir={"column"}
                mr={"20px"}
                mb={"60px"}>
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
                {/* {index === 4 ? (
                  <Input
                    variant="flushed"
                    w={"360px"}
                    h={"151px"}
                    _hover={{}}
                    bg={"#252525"}
                    borderRadius={0}
                    _focusVisible={{
                      borderBottom: "1px solid #0070ED !important",
                    }}
                    as={"textarea"}
                    placeholder={question.placeholder}
                    outline={"none"}
                    fontSize={"18px"}
                    fontWeight={600}
                    border={"transparent"}
                    pl={"20px"}
                    pt={'15px'}
                    _placeholder={{ opacity: 1, color: "#818181" }}
                  />
                ) : (
                  <Input
                    variant="flushed"
                    w={"360px"}
                    h={"51px"}
                    _hover={{}}
                    bg={"#252525"}
                    borderRadius={0}
                    _focusVisible={{
                      borderBottom: "1px solid #0070ED !important",
                    }}
                    placeholder={question.placeholder}
                    outline={"none"}
                    fontSize={"18px"}
                    fontWeight={600}
                    border={"transparent"}
                    pl={"20px"}
                    _placeholder={{ opacity: 1, color: "#818181" }}
                  />
                )} */}
                 <Input
                    variant="flushed"
                    w={"360px"}
                    h={index === 4 ?"151px":'51px'}
                    _hover={{}}
                    bg={"#252525"}
                    borderRadius={0}
                    _focusVisible={{
                      borderBottom: "1px solid #0070ED !important",
                    }}
                    as={index === 4 ?"textarea":'input'}
                    placeholder={question.placeholder}
                    outline={"none"}
                    fontSize={"18px"}
                    fontWeight={600}
                    border={"transparent"}
                    pl={"20px"}
                    
                    pt={index === 4 ?'15px':''}
                    _placeholder={{ opacity: 1, color: "#818181", fontsize:'18px', lineHeight:'normal' }}
                  />
             
                <UserGuide />
              </Flex>
            );
          })}
        </Flex>
      </Flex>
      <Flex className="carousel-buttons">
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
