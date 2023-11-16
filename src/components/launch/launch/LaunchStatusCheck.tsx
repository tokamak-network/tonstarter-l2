import {
  Flex,
  Text,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { createStatus } from "@/recoil/launch/atom";
import { useState } from "react";
import "font-proxima-nova/style.css";
import RocketComponent from "./RocketComponent";
import ProgressComponent from "./ProgressComponent";
const LaunchStatusCheck = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [projectStatus, setProjectStatus] = useRecoilState(createStatus);

  
  return (
    <Flex
      flexDir={"row"}
     
      w={"100%"}
      height={"100%"}
      fontFamily={"Proxima Nova Rg"}
      fontSize={"12px"}
      fontWeight={500}>
     <RocketComponent/>

      <ProgressComponent/>
    </Flex>
  );
};

export default LaunchStatusCheck;
