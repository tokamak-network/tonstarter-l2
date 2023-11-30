"use client";
import {
  Center,
  Flex,
  Text,
  MenuItem,
  useColorMode,
  MenuButton,
  Menu,
  MenuList,
  Box,
} from "@chakra-ui/react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { theme } from "@/theme";
import LightLogo from "@/assets/images/b_tonstrater_bi.svg";
import DarkLogo from "@/assets/images/w_tonstrater_BI.svg";
import HeaderArrow from "@/assets/images/header_arrow.svg";
import { ThemeSwitcher } from "./ThemeSwithcer";
import Account from "./Account";
import Network from "./Network";

const CustomMenuItemInternal = (props: { link: string; title: string}) => {
  const { link, title } = props;
  const [hover, setHover] = useState(false);
  const router = useRouter();

  return (
    <MenuItem
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
     onClick={() => router.push(link)}
      h={"32px"}
      //   marginBottom={"16px"}
     px={'15px'}
      bg="#191919"
      color={"#f3f4f1"}
      fontSize={"13px"}
      _focus={{ background: "#191919" }}
      _hover={{ bg: "none", color: "#0070ED" }}>
      <Text
        fontSize={
          '13px'
        }>
        {title}
      </Text>
    </MenuItem>
  );
}

const CustomMenuItem = (props: { link: string; title: string}) => {
  const { link, title } = props;
  const [hover, setHover] = useState(false);
  return (
    <MenuItem
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      target="_blank"
      as={"a"}
      href={link}
      h={"32px"}
      //   marginBottom={"16px"}
      padding={"0px"}
      bg="#191919"
      color={"#f3f4f1"}
      fontSize={"13px"}
      _focus={{ background: "#191919" }}
      _hover={{ bg: "none", color: "#0070ED" }}>
      <Text
        fontSize={
          title === "User Guide" || title === "Get Help" ? "14px" : "12px"
        }>
        {title}
      </Text>
    </MenuItem>
  );
};
const Header = () => {
  const [menuStates, setMenuStates] = useState([false, false, false]);
  const { colorMode } = useColorMode();
  const router = useRouter();
  const pathname = usePathname();
 
  const handleMenuToggle = (index: number) => {
    const updatedMenuStates = [...menuStates];

    if (index === 0) {
      updatedMenuStates[0] = !updatedMenuStates[0];
      updatedMenuStates[1] = false;
      updatedMenuStates[2] = false;
    } else if (index === 1) {
      updatedMenuStates[1] = !updatedMenuStates[1];
      updatedMenuStates[0] = false;
      updatedMenuStates[2] = false;
    } else {
      updatedMenuStates[2] = !updatedMenuStates[2];
      updatedMenuStates[0] = false;
      updatedMenuStates[1] = false;
    }
    setMenuStates(updatedMenuStates);
  };

  const handleClick = (index: number) => {
    const updatedMenuStates = [...menuStates];

    if (index === 0) {
      updatedMenuStates[0] = true;
      updatedMenuStates[1] = false;
      updatedMenuStates[2] = false;
    } else if (index === 1) {
      updatedMenuStates[1] = true;
      updatedMenuStates[0] = false;
      updatedMenuStates[2] = false;
    } else {
      updatedMenuStates[2] = !true;
      updatedMenuStates[0] = false;
      updatedMenuStates[1] = false;
    }
    setMenuStates(updatedMenuStates);
  };
  return (
    <Flex
      px="30px"
      height={"78px"}
      justifyContent={"space-between"}
      bg={
        colorMode === "dark"
          ? "theme.colors.background.100"
          : "theme.colors.background.200"
      }>
      <Flex onClick={() => router.push("/")} cursor={"pointer"}>
        <Image alt="logo" src={colorMode === "dark" ? LightLogo : DarkLogo} />
      </Flex>

      <Flex alignItems={"center"}>
        {/* {menuList.map((menuInfo) => (
          <HeaderMenu
            key={menuInfo.title}
            {...menuInfo}
            menuState={menuState}></HeaderMenu>
        ))} */}
        <Menu onClose={() => handleMenuToggle(0)} isOpen={menuStates[0]}>
          <MenuButton
            as={Center}
            fontSize={16}
            cursor={"pointer"}
            // onMouseEnter={handleMenuButtonhover}
            // onMouseLeave={()=> setHoverOn(false)}
            // onMouseDown={handleMenuButtonClick}
            // onClick={handleMenuButtonClick}
            onClick={() => handleClick(0)}
            onMouseOver={() => handleMenuToggle(0)}
            display={"flex"}
            flexDir={"row"}>
            <Flex mr="24px">
              <Text fontFamily={theme.fonts.openSans} fontWeight={600} color={pathname?.split("/")[1] === 'launch'?'#0070ED' :'#FFFFFF'}>
                Launch
              </Text>
              <Flex
                marginLeft={"4px"}
                height={"24px"}
                // width={"24px"}
                transform={menuStates[0] === true ? "" : "rotate(180deg)"}>
                <Image
                  src={HeaderArrow}
                  alt="icon_arrow"
                  height={20}
                  width={20}
                />
              </Flex>
            </Flex>
          </MenuButton>
          <MenuList
            onMouseLeave={() => handleMenuToggle(0)}
            bg="#191919"
            zIndex={10000}
            mt={"28px"}
            marginLeft={"-63px"}
            border={"1px solid #373737"}
            style={{
              //   height: "116px",
              minWidth: "190px",
              paddingTop: "10px",
              paddingBottom: "10px",
            
              borderRadius: '4px',
            }}>
            <CustomMenuItemInternal
              link="/launch/fast"
              title="Fast launch"
            />
            <CustomMenuItemInternal
              link="/launch/custom"
              title="Custom launch"
            />
            <Flex alignItems={'center'} justifyContent={'space-between'} h='29px'>
            <Box w={"9px"} h={"1px"} bgColor={"#373737"} />
            <Text maxW={'45px'} color={'#818181'} fontWeight={400} fontSize={11} textAlign={"center"}>
             Optional
            </Text>
            <Box w={"120px"} h={"1px"} bgColor={"#373737"} />

            </Flex>
          
            <CustomMenuItemInternal
              link="/launch/runway"
              title="Runway"
            />
          </MenuList>
        </Menu>
        <Text
          mr={"50px"}
          fontFamily={theme.fonts.openSans}
          fontWeight={600}
          cursor={"pointer"}
          color={pathname?.split("/")[1] === 'participate'?'#0070ED' :'#FFFFFF'}
          onClick={() => router.push('/participate')}>
          Participate
        </Text>
        <Text
          mr={"50px"}
          fontFamily={theme.fonts.openSans}
          fontWeight={600}
          cursor={"pointer"}
          color={"theme.colors.white.100"}>
          TOSv2
        </Text>
      
        <Menu onClose={() => handleMenuToggle(1)} isOpen={menuStates[1]}>
          <MenuButton
            as={Center}
            fontSize={16}
            cursor={"pointer"}
            // onMouseEnter={handleMenuButtonhover}
            // onMouseLeave={()=> setHoverOn(false)}
            // onMouseDown={handleMenuButtonClick}
            // onClick={handleMenuButtonClick}
            onClick={() => handleClick(1)}
            onMouseEnter={() => handleMenuToggle(1)}
            display={"flex"}
            flexDir={"row"}>
            <Flex mr="24px">
              <Text fontFamily={theme.fonts.openSans} fontWeight={600}>
                Utility
              </Text>
              <Flex
                marginLeft={"4px"}
                height={"24px"}
                // width={"24px"}
                transform={menuStates[1] === true ? "" : "rotate(180deg)"}>
                <Image
                  src={HeaderArrow}
                  alt="icon_arrow"
                  height={20}
                  width={20}
                />
              </Flex>
            </Flex>
          </MenuButton>
          <MenuList
            onMouseLeave={() => handleMenuToggle(1)}
            bg="#191919"
            mt={"28px"}
            marginLeft={"-63px"}
            border={"1px solid #373737"}
            style={{
              //   height: "116px",
              minWidth: "190px",
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingLeft: "15px",
              paddingRight: "15px",
              borderRadius: '4px'
            }}>
            <CustomMenuItem
              link="https://tokamaknetwork.gitbook.io/home/02-service-guide/tokamak-bridge"
              title="User Guide"
            />
            <CustomMenuItem
              link="https://forms.gle/GLY1PZq4BH4RqZY79"
              title="Get Help"
            />
          </MenuList>
        </Menu>
        <Menu onClose={() => handleMenuToggle(2)} isOpen={menuStates[2]}>
          <MenuButton
            as={Center}
            fontSize={16}
            cursor={"pointer"}
            // onMouseEnter={handleMenuButtonhover}
            // onMouseLeave={()=> setHoverOn(false)}
            // onMouseDown={handleMenuButtonClick}
            // onClick={handleMenuButtonClick}
            onClick={() => handleClick(2)}
            onMouseEnter={() => handleMenuToggle(2)}
            display={"flex"}
            flexDir={"row"}>
            <Flex mr="24px">
              <Text fontFamily={theme.fonts.openSans} fontWeight={600}>
                More
              </Text>
              <Flex
                marginLeft={"4px"}
                height={"24px"}
                // width={"24px"}
                transform={menuStates[2] === true ? "" : "rotate(180deg)"}>
                <Image
                  src={HeaderArrow}
                  alt="icon_arrow"
                  height={20}
                  width={20}
                />
              </Flex>
            </Flex>
          </MenuButton>
          <MenuList
            onMouseLeave={() => handleMenuToggle(2)}
            bg="#191919"
            mt={"28px"}
            marginLeft={"-63px"}
            border={"1px solid #373737"}
            style={{
              //   height: "116px",
              minWidth: "190px",
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingLeft: "15px",
              paddingRight: "15px",
              borderRadius: '4px'
            }}>
            <CustomMenuItem
              link="https://tokamaknetwork.gitbook.io/home/02-service-guide/tokamak-bridge"
              title="User Guide"
            />
            <CustomMenuItem
              link="https://forms.gle/GLY1PZq4BH4RqZY79"
              title="Get Help"
            />
          </MenuList>
        </Menu>
      </Flex>
      <Flex alignItems={"center"}>
        <Network/>
        <Account/>
        <ThemeSwitcher style={{ marginLeft: "20px" }} />
      </Flex>
    </Flex>
  );
};

export default Header;
