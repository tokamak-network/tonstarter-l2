import { Flex } from "@chakra-ui/react";
import PageTitle from "@/components/common/PageTitle";
import Carousel from "@/components/launch/Carousel";
export const metadata = {
  title: "Tonstarter L2 - Launch",
  description: "tonstarter l2 - launch",
};

const Fast = () => {
  return (
    <Flex
      flexDir={"column"}
      pt="60px"
      color={"white"}
      alignItems={"center"}
      style={{ flex: 1 }}>
      <PageTitle title="Fast Launch"></PageTitle>
      <Flex w="100%">
        <Flex w="50%" height={"100%"} pl={"50px"} >
          <Carousel />
        </Flex>

        <Flex
          w="50%"
          height={"100%"}
          pl={"50px"}
          border={"1px solid yellow"}></Flex>
      </Flex>
    </Flex>
  );
};

export default Fast;
