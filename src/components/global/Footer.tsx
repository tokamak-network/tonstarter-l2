import { Flex,Text } from "@chakra-ui/react";
import dayjs from "dayjs";
 import TopArrow from '@/assets/images/top_arrow_icon.svg'
import Image from "next/image";
import { theme } from "@/theme";
const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
    

    return (
        <Flex height={'78px'} justifyContent={'space-between'} alignItems={'center'} pl='30px' pr={'35px'}>
            <Text fontFamily={'theme.fonts.openSans'} color={'#9A9AAF'} fontSize={'16px'} fontWeight={600} > ©  {dayjs().year()}{' '}Tokamak Network</Text>
            <Flex height={'32px'} width={'20px'} onClick={scrollToTop} _hover={{ cursor: "pointer" }}>
                <Image src={TopArrow} alt="scroll to top"/>
            </Flex>
        </Flex>
    )
   
}

export default Footer