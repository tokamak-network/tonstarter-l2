import { Flex, Text, Link, Button } from "@chakra-ui/react";
import UserGuide from "../../common/UserGuide";
import Image from "next/image";
import { useState, SetStateAction, Dispatch } from "react";
import { useRouter } from "next/navigation";

const SetUp = (props: {
  setSetUp: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  const { setSetUp } = props;
  return (
    <Flex flexDir={"column"} w="360px" mt={"21px"}>
      <Text fontSize={"16px"} mb={"18px"} color={"#9D9EA5"} lineHeight={"21px"}>
        Based on what you’ve set up in step 1 and 2, smart contracts are
        generated and deployed with just a few clicks.{" "}
      </Text>
      <UserGuide />
      <Flex mt={"30px"}>
        <iframe
          width="360"
          height="202"
          src="https://www.youtube.com/embed/hxt8sJdiq7c"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ borderRadius: "10px" }}></iframe>
      </Flex>
      <Flex mt={"45px"} columnGap={"15px"}>
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
          onClick={() => setSetUp(false)}>
          Set up
        </Button>
        <Button
          w="150px"
          h="40px"
          borderRadius={"20px"}
          fontSize={"15px"}
          border={"1px solid #353535"}
          bg={"transparent"}
          color={"#fff"}
          fontWeight={600}
          onClick={() => router.back()}
          _hover={{ bg: "transparent", border: "2px solid #8A8A98" }}>
          Back
        </Button>
      </Flex>
    </Flex>
  );
};

export default SetUp;
