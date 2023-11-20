import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import DooropenLogo from "@/assets/images/DOOROPEN.svg";

const ProjectCard = (props: { project: any }) => {
  const { project } = props;

  const ImageContainer = (props: { imageSrc: string }) => {
    const { imageSrc } = props;
    return (
      <Flex
        height={"270px"}
        w={"384px"}
        p={"9px"}
        flexDir={"column"}
        alignItems={"center"}
        borderRadius={"10px"}
        border={"1px solid #373737"}
        justifyContent={"center"}>
        <Flex
          justifyContent={"space-between"}
          height={"27px"}
          w={"100%"}
          position={"relative"}
          top={"-96px"}>
          <Flex columnGap={"9px"} fontSize={"15px"}>
            <Text
              width={"80px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              borderRadius={"5px"}
              bg={"#373737"}
              textAlign={"center"}
              color={"#9D9EA5"}
              fontWeight={600}>
              Finished
            </Text>
            <Text
              width={"80px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              borderRadius={"5px"}
              bg={"#373737"}
              textAlign={"center"}
              color={"#D0D0DA"}
              fontWeight={600}>
              Timeline
            </Text>
          </Flex>
          <Text
            width={"60px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"5px"}
            border={"1px solid #373737"}
            textAlign={"center"}
            color={"#9D9EA5"}
            fontWeight={600}>
            Edit
          </Text>
        </Flex>
        <Image src={DooropenLogo} alt="imageSrc" />
      </Flex>
    );
  };

  const DescriptionContainer = (props: { project: any }) => {
    const { project } = props;

    return (
      <Flex py={"9px"} flexDir={"column"} lineHeight={'normal'}>
        <Text fontSize={"24px"} fontWeight={700} >
          {project.name}
        </Text>
        <Text
          fontSize={"15px"}
          fontWeight={500}
          lineHeight={"normal"}
          color={"#9D9EA5"}
          mt={"15px"}
          w={"771px"}
          whiteSpace={"nowrap"}
          overflow={"hidden"}
          textOverflow={"ellipsis"}>
          {project.description}
        </Text>
        <Flex mt={'33px'}>
          <Flex mr={'60px'} >
            <Text color={'#9D9EA5'} fontSize={'15px'} fontWeight={600} w={'193px'}>Token Offered (public)</Text>
            <Text color={'#fff'} fontSize={'15px'} fontWeight={700} >25,000,000 DOC</Text>
          </Flex>
          <Flex>
            <Text color={'#9D9EA5'} fontSize={'15px'} fontWeight={600} w={'193px'}>Total Raise</Text>
            <Text color={'#fff'} fontSize={'15px'} fontWeight={700} >421,427.26 TON</Text>
          </Flex>
        </Flex>
        <Flex mt={'15px'}>
          <Flex mr={'60px'} >
            <Text color={'#9D9EA5'} fontSize={'15px'} fontWeight={600} w={'193px'}>Sale Price</Text>
            <Text color={'#fff'} fontSize={'15px'} fontWeight={700} >25,000,000 DOC</Text>
          </Flex>
          <Flex>
            <Text color={'#9D9EA5'} fontSize={'15px'} fontWeight={600} w={'193px'}>Participants</Text>
            <Text color={'#fff'} fontSize={'15px'} fontWeight={700} >421,427.26 TON</Text>
          </Flex>
        </Flex>
      </Flex>
    );
  };
  return (
    <Flex w={"100%"} columnGap={"45px"}>
      <Flex>
        <ImageContainer imageSrc="" />
      </Flex>
      <DescriptionContainer project={project} />
    </Flex>
  );
};

export default ProjectCard;
