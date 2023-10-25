import { Flex, Text, Link, Button } from "@chakra-ui/react";
import userGuideIcon from "@/assets/icons/userGuide.svg";
import userGuideIconHover from "@/assets/icons/UserGuide_on.svg";
import Image from "next/image";
import { useState,SetStateAction } from "react";
import { useRouter } from "next/navigation";

const SetUp = () => {
  const [hover, setHover] = useState<boolean>(false);
  const router = useRouter();

  return (
    <Flex flexDir={"column"} w="360px" mt={"21px"}>
      <Text fontSize={"16px"} mb={"18px"} color={"#9D9EA5"} lineHeight={"21px"}>
        Be specific about your project&apos;s purpose, team composition, etc.
        The more you put in, the more support you&apos;ll get
      </Text>
      <Link
        display={"flex"}
        flexDir={"row"}
        fontSize={"14px"}
        color={hover ? "#fff" : "#9d9ea5"}
        columnGap={"6px"}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        textDecor={"none"}
        _hover={{ textDecor: "none" }}
        href="https://tokamaknetwork.gitbook.io/home/02-service-guide/tonstarter"
        target="_blank">
        <Image
          src={hover ? userGuideIconHover : userGuideIcon}
          height={18}
          width={18}
          alt="user guide icon"
        />
        <Text>User Guide</Text>
      </Link>
      <Flex mt={"30px"}>
        <iframe
          width="360"
          height="202"
          src="https://www.youtube.com/embed/hxt8sJdiq7c"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ borderRadius: "10px" }}></iframe>
      </Flex>
      <Flex mt={"45px"} columnGap={'15px'}>
        <Button
          w="150px"
          h="40px"
          borderRadius={"20px"}
          fontSize={"15px"}
          bg={"#0070ED"}
          color={"#fff"}
          fontWeight={600}
          _hover={{ bg: "#0057E6" }}>
          Set up
        </Button>
        <Button   w="150px"
          h="40px"
          borderRadius={"20px"}
          fontSize={"15px"}
          border={'1px solid #353535'}
          bg={"transparent"}
          color={"#fff"}
          fontWeight={600}
          onClick={() => router.back()}
          _hover={{border:'1px solid #8A8A98'}}>Back</Button>
      </Flex>
    </Flex>
  );
};

export default SetUp;
