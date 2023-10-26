import { Flex, Text, Link } from "@chakra-ui/react";
import Image from "next/image";
import "font-proxima-nova/style.css";
import UserGuide from "../common/UserGuide";
import { useState } from "react";
const CarouselSlide = (props: {
  title: string;
  subtitle: string;
  description: string;
  currentIndex: number;
  cardIndex: number;
}) => {
  const { title, subtitle, description, currentIndex, cardIndex } = props;
  const [hover, setHover] = useState<boolean>(false);
  if (currentIndex === cardIndex) {
    return (
      <Flex
     
        flexDir={"column"}
        alignItems={"flex-end"}
        justifyContent={"center"}
        display={"inline-flex"}
        height={"300px"}
        pr={"60px"}
        fontFamily={"Proxima Nova Rg"}
   >
        <Text fontSize={"15px"} color={"#9D9EA5"} fontWeight={600}>
          {subtitle}
        </Text>
        <Text fontSize={"80px"} fontWeight={700} lineHeight={"1"} mt={"-25px"}>
          {title}
        </Text>

        <Text
          whiteSpace={'pre'}
          fontSize={"16px"}
          color={"#9d9ea5"}
          letterSpacing={"0.32px"}
          mt={"30px"}
          w={"450px"}
          lineHeight={1.31}
          textAlign={"right"}>
          {description}
        </Text>

   <UserGuide/>
      </Flex>
    );
  }
  return (
    <Flex
      flexDir={"column"}
      my={'60px'}
      alignItems={"flex-end"}
      justifyContent={"center"}
      display={"inline-flex"}
      pr={"60px"}
      w={'100%'}
    cursor={'pointer'}
      fontFamily={"Proxima Nova Rg"}>
      <Text textAlign={"right"} fontSize={'21px'} fontWeight={500} color={'#353535'}>
        {title}
      </Text>
    </Flex>
  );
};

export default CarouselSlide;
