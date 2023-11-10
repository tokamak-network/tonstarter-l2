import { Flex, Text } from "@chakra-ui/react";
import Details from "./Details";

const EconomyOne = (props: { question: any }) => {
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
           {"1. "}
        {question.question}
      </Text>
      <Details />
    </Flex>
  );
};

export default EconomyOne;
