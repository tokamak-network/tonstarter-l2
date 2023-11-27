import { Flex } from "@chakra-ui/react";
import PageTitle from "@/components/common/PageTitle";
import Carousel from "@/components/launch/Carousel";
import RightCarousel from "@/components/launch/RightCarousel";
import { dummyProjects } from "@/utils/dummydata";

export const metadata = {
  title: "Tonstarter L2 - Launch",
  description: "tonstarter l2 - launch",
};

export default function Fast ()  {
  return (
    <Flex
      flexDir={"column"}
   
      color={"white"}
      alignItems={"center"}
      style={{ flex: 1 }}>
        <Flex left={dummyProjects.length>2? '-150px':0} position={'relative'} mt={'60px'} >
        <PageTitle title="Fast Launch"></PageTitle>
        </Flex>
      <Flex w="100%">
        <Flex w="50%" height={"100%"} pl={"50px"}>
          <Carousel />
        </Flex>

        <Flex
          w="50%"
          justifyContent={'flex-end'}
          height={"100%"}>
            <RightCarousel/>
          </Flex>
      </Flex>
    </Flex>
  );
};


