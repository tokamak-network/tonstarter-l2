import { Flex, Button, Text, Stack } from "@chakra-ui/react";
import "font-proxima-nova/style.css";
import Image from "next/image";
import Tick from "@/assets/icons/Tick.svg";
import { SetStateAction, useState } from "react";

const Step1 = (props:{step2Completed:boolean, setStep2Completed:React.Dispatch<SetStateAction<boolean>>}) => {
  const {step2Completed, setStep2Completed} = props;
  const [checked, setChecked] = useState(false);

  const CheckMark = (props: { status: boolean }) => {
    const { status } = props;
    return (
      <Flex
        height={18}
        width={18}
        border={status ? "" : "1px solid #535353"}
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius={"4px"}
        cursor={"pointer"}
        bg={status ? "#2A72E5" : ""}
        onClick={() => setChecked(!status)}>
        {status && <Image src={Tick} alt="check box" height={9} width={9} />}
      </Flex>
    );
  };

  if (step2Completed)
    return (
      <Flex   lineHeight={"normal"} mt={"12px"} flexDir={"column"} fontFamily={"Proxima Nova Rg"}>
        <Text color={"#64646F"} fontSize={"16px"} fontWeight={400}>
          Deploy finished (1)
        </Text>
      </Flex>
    );

  return (
    <Flex
    mt={'12px'}
      flexDir={"column"}
      fontFamily={"Proxima Nova Rg"}
      height={"100%"}
      justifyContent={"space-between"}>
      <Flex flexDir={"column"}>
        <Text fontSize={"16px"} fontWeight={600} color={"#D0D0DA"}>
          Click and check{" "}
          <span style={{ color: "#64646F" }}>
            (<span style={{ color: "#D0D0DA" }}>1</span>/1)
          </span>
        </Text>
        <Flex rowGap={"9px"} flexDir={"column"} mt={"18px"}>
          <Flex columnGap={"9px"}>
            <CheckMark status={checked} />
            <Text
              fontSize={"13px"}
              color={!checked ? "#fff" : "#9D9EA5"}
              fontWeight={!checked ? 600 : 400}
              textShadow={!checked ? "0px 0px 6px #FFFF07;" : ""}>
              Distribute tokens
            </Text>
          </Flex>
         
        </Flex>
      </Flex>

      <Flex pl={"15px"}>
        {" "}
        <Button
          w="150px"
          h="40px"
          borderRadius={"20px"}
          fontSize={"15px"}
          bg={"#0070ED"}
          color={"#fff"}
          fontWeight={600}
          isDisabled={!checked}
          _disabled={{
            border: "2px solid #353535",
            color: "#838383",
            bg: "transparent",
          }}
          onClick={() => setStep2Completed(true)}
          _hover={!checked ? { cursor: "not-allowed" } : { bg: "#0057E6" }}>
        L2 Deposit
        </Button>
      </Flex>
    </Flex>
  );
};

export default Step1;