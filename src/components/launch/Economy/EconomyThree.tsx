import { Overlay_Index } from "@/types/style/overlayIndex";
import {
  Flex,
  Text,
  Tooltip,
  Input,
} from "@chakra-ui/react";
import UserGuide from "@/components/common/UserGuide";
import DetailComponent from "./DetailComponent";
import { QuestionOutlineIcon } from "@chakra-ui/icons";

const EconomyThree = (props: { question: any }) => {
  const { question } = props;

  return (
    <Flex
    
      flexDir={"column"}
      mt={"21px"}
      h={"375px"}
      w={"360px"}
      fontFamily={"Proxima Nova Rg"}>
      <Text
        fontSize={"21px"}
        fontWeight={700}
        lineHeight={"normal"}
        mb={"20px"}
        whiteSpace={"break-spaces"}
        color={"#D0D0DA"}>
        {"3. "}
        {question.question}
      </Text>
      <Text
        whiteSpace={"break-spaces"}
        fontSize={"16px"}
        fontWeight={400}
        color={"#9D9EA5"}
        lineHeight={"21px"}>
        {question.placeholder}{" "}
        <Tooltip label="Phone number" fontSize="md">
          <QuestionOutlineIcon />
        </Tooltip>
      </Text>

      <Flex mt={"20px"} columnGap={"24px"} alignItems={'center'}>
        <Text fontSize={"18px"} fontWeight={600} color={"#9D9EA5"}>
          1 MARS = 0.235 TON{" "}
        </Text>
        <Input
          w={"100%"}
          h={"51px"}
          bg={"#252525"}
          borderRadius={0}
          _focusVisible={{
            borderBottom: "1px solid #0070ED !important",
          }}
          textAlign={"right"}
          _hover={{ borderBottom: "1px solid #0070ED !important" }}
          placeholder={"0 TON"}
          outline={"none"}
          fontSize={"18px"}
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
      </Flex>
      <UserGuide />
      <DetailComponent />
    </Flex>
  );
};

export default EconomyThree;
