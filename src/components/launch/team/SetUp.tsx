import { Flex, Text, Link, Button } from "@chakra-ui/react";
import UserGuide from "../../common/UserGuide";
import Image from "next/image";
import { useState, SetStateAction, Dispatch } from "react";
import { useRouter } from "next/navigation";
import { useTermsModal } from "@/hooks/modals/useTermsModal";

const SetUp = () => {
  const router = useRouter();
  const { onOpenTerms, onClose } = useTermsModal();
  return (
    <Flex flexDir={"column"} w="360px" mt={"21px"}>
      <Text fontSize={"16px"} mb={"18px"} color={"#9D9EA5"} lineHeight={"21px"}>
        Be specific about your project&apos;s purpose, team composition, etc.
        The more you put in, the more support you&apos;ll get
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
          onClick={() => onOpenTerms()}>
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
