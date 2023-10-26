import userGuideIcon from "@/assets/icons/userGuide.svg";
import userGuideIconHover from "@/assets/icons/UserGuide_on.svg";
import { Flex, Text, Link } from "@chakra-ui/react";
import { useState } from "react";
import Image from "next/image";
const UserGuide = () => {
    const [hover, setHover] = useState<boolean>(false);

    return (
        <Link
        display={"flex"}
        flexDir={"row"}
        fontSize={"14px"}
        justifyContent={'flex-end'}
        color={hover ? "#fff" : "#9d9ea5"}
        columnGap={"6px"}
        mt={"18px"}
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
    )
}

export default UserGuide
