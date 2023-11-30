import { Flex, Text, Box, Progress } from "@chakra-ui/react";
import { theme } from "@/theme";
import { useRouter } from "next/navigation";

const NewProjectCard = () => {
  const router = useRouter();

  return (
    <Flex
      w={"270px"}
      height={"100%"}
      flexDir={"column"}
      fontFamily={"Proxima Nova Rg"}
      mt={"30px"}
      cursor={'pointer'}
      onClick={() => router.push('/launch/fast/createproject')}>
      <Flex
        w="270px"
        h={"190px"}
        borderRadius={"10px"}
        justifyContent={"center"}
        alignItems={"center"}
        bg={"#0E1728"}
        border={"1px solid #373737"}>
        <Text fontFamily={theme.fonts.openSans} fontSize={80} fontWeight={400}>
          +
        </Text>
      </Flex>
      <Flex mt={"25px"} flexDir={"column"} alignItems={"center"}>
        <Text fontSize={"16px"} fontWeight={600}>
          Project registration
        </Text>
        <Box
          mt="17px"
          color={"#0070ED"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          columnGap={"12px"}>
          <Progress
            value={0}
            borderRadius={"4px"}
            height={"6px"}
            bg={"#353D48"}
            w={"200px"}></Progress>
          <Text fontSize={"13px"} color={"#0070ED"} fontWeight={700}>
            0%
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default NewProjectCard;
