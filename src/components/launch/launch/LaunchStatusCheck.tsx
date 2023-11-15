import { Flex, Text, Button, Checkbox, CheckboxGroup } from "@chakra-ui/react";
import Image from "next/image";
import activeArrow from "@/assets/icons/caret-down.png";
import inactiveArrow from "@/assets/icons/caret-up.png";
import { useRecoilState } from "recoil";
import { createStatus } from "@/recoil/launch/atom";
import { useState, useMemo } from "react";
import smallRocket from "@/assets/images/small_rocket.svg";
const LaunchStatusCheck = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [projectStatus, setProjectStatus] = useRecoilState(createStatus);

  return (
    <Flex flexDir={"row"} alignItems={"center"} w={"100%"} height={"100%"}>
      <Flex flexDir={'column'}>
        <Text>Deadline</Text>
        <Text>08:04:48:41</Text>
      </Flex>
      <Flex></Flex>
    </Flex>
  );
};

export default LaunchStatusCheck;
