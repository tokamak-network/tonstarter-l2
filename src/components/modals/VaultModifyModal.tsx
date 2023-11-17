import {
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import "font-proxima-nova/style.css";
import { modalStatus } from "@/recoil/launch/atom";
import { useRecoilState } from "recoil";
import closeIcon from "@/assets/icons/modal_close.svg";
import FuelTop from "@/assets/images/fuel-top.svg";
import FuelLine from "@/assets/images/fuel-line.svg";
import FuelContents from "@/assets/images/fuel-contents.svg";
import FuelBottom from "@/assets/images/fuel-bottom.svg";

const VaultModifyModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalType, setModalType] = useRecoilState(modalStatus)

  const vaultInfo = [
    {
      vaultName: "Public",
      tokenAllocation: 30000000000,
      portion: 30,
    },
    {
      vaultName: "Initial Liquidity",
      tokenAllocation: 1200000000,
      portion: 6,
    },
    {
      vaultName: "WTON_TOS LP",
      tokenAllocation: 300340000000,
      portion: 6,
    },
    {
      vaultName: "Initial Liquidity",
      tokenAllocation: 1200000000,
      portion: 6,
    },
    {
      vaultName: "WTON_TOS LP",
      tokenAllocation: 300340000000,
      portion: 6,
    },
  ];

  const closeModal = () => {
    setModalType('');
    onClose;
  };
  return (
    <Modal isOpen={modalType==='ModifyVault' || modalType==='AddVault'} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent
        height={"540px"}
        maxW="340px"
        bg={"#121318"}
        border={"1px solid #313442"}
        fontFamily={"Proxima Nova Rg"}>
        <Flex w={"100%"} flexDir={"column"} alignItems={"center"}>
          <Flex
            alignItems={"center"}
            w={"100%"}
            py={"30px"}
            px={"20px"}
            justifyContent={"flex-end"}>
            <Text
              fontSize={"20px"}
              textAlign={"center"}
              fontWeight={600}
              height={"24px"}
              mr={"69px"}>
              Modify Vaults
            </Text>
            <Flex
              w={"16px"}
              onClick={closeModal}
              _hover={{ cursor: "pointer" }}>
              <Image src={closeIcon} alt="close_icon" />
            </Flex>
          </Flex>
          <Flex
            columnGap={"16px"}
            color={"#9D9EA5"}
            fontSize={"14px"}
            lineHeight={"normal"}>
            <Text>Total: 1,000,000</Text>
            <Text>Remain: 1,000,000</Text>
          </Flex>
          <Text
            color={"#0070ED"}
            fontSize={"15px"}
            lineHeight={"normal"}
            fontWeight={600}
            mt={"9px"}
            cursor={"pointer"}
            onClick={() => setModalType('AddVault')}>
            + Add a vault
          </Text>

          <Flex
            height={"381px"}
            overflowY={"scroll"}
            mt={"30px"}
            flexDir={"column"}
            alignItems={"center"}
            css={{
              "&::-webkit-scrollbar": {
                width: "6px",
              },
              "::-webkit-scrollbar-track": {
                background: "transparent",
                borderRadius: "4px",
              },
              "::-webkit-scrollbar-thumb": {
                background: "transparent",
                borderRadius: "3px",
              },
            }}>
            <Flex flexDir={"column"}>
              <Flex
                height={"299px"}
                w={"200px"}
                backgroundImage={FuelTop.src}
                backgroundSize={"cover"}
                css={{
                  backgroundPositionY: ["center"],
                  backgroundPositionX: "center",
                }}
                flexDir={"column"}
                backgroundRepeat={"no-repeat"}
                alignItems={"center"}>
                <Text mt={"65px"} fontWeight={700} fontSize={"21px"} h="26px">
                  {" "}
                  {vaultInfo[0].vaultName}
                </Text>
                <Text
                  mt={"15px"}
                  fontWeight={400}
                  fontSize={"13px"}
                  opacity={0.65}>
                  {" "}
                  Token Allocation
                </Text>
                <Text mt={"3px"} fontWeight={700} fontSize={"16px"} h={"19px"}>
                  {" "}
                  {vaultInfo[0].tokenAllocation}
                </Text>
                <Text
                  height={"16px"}
                  mt={"12px"}
                  fontWeight={400}
                  fontSize={"13px"}
                  opacity={0.65}>
                  {" "}
                  Portion
                </Text>
                <Text mt={"3px"} fontWeight={700} fontSize={"16px"}>
                  {" "}
                  {vaultInfo[0].portion} {"%"}
                </Text>
                <Flex mt={"18px"} opacity={0.65} fontSize={"11px"}>
                  <Text>Edit | </Text>
                  <Text ml={"3px"}> Delete</Text>
                </Flex>
              </Flex>
              {vaultInfo.slice(1).map((vault: any, index: number) => {
                return (
                  <Flex key={index} flexDir={"column"}>
                    <Flex
                      w={"200px"}
                      height={"16px"}
                      backgroundImage={FuelLine.src}
                      backgroundSize={"cover"}
                      css={{
                        backgroundPositionY: ["center"],
                        backgroundPositionX: "center",
                      }}
                      flexDir={"column"}
                      backgroundRepeat={"no-repeat"}></Flex>
                    <Flex
                      w={"200px"}
                      height={"216px"}
                      backgroundImage={FuelContents.src}
                      backgroundSize={"cover"}
                      css={{
                        backgroundPositionY: ["center"],
                        backgroundPositionX: "center",
                      }}
                      flexDir={"column"}
                      backgroundRepeat={"no-repeat"}
                      alignItems={"center"}>
                      <Text
                        mt={"10px"}
                        fontWeight={700}
                        fontSize={"21px"}
                        h="26px">
                        {" "}
                        {vault.vaultName}
                      </Text>
                      <Text
                        mt={"15px"}
                        fontWeight={400}
                        fontSize={"13px"}
                        opacity={0.65}>
                        {" "}
                        Token Allocation
                      </Text>
                      <Text
                        mt={"3px"}
                        fontWeight={700}
                        fontSize={"16px"}
                        h={"19px"}>
                        {" "}
                        {vault.tokenAllocation}
                      </Text>
                      <Text
                        height={"16px"}
                        mt={"12px"}
                        fontWeight={400}
                        fontSize={"13px"}
                        opacity={0.65}>
                        {" "}
                        Portion
                      </Text>
                      <Text mt={"3px"} fontWeight={700} fontSize={"16px"}>
                        {" "}
                        {vault.portion}
                        {"%"}
                      </Text>
                      <Flex mt={"18px"} opacity={0.65} fontSize={"11px"}>
                        <Text>Edit | </Text>
                        <Text ml={"3px"}> Delete</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                );
              })}

              <Flex
                w={"200px"}
                height={"16px"}
                backgroundImage={FuelLine.src}
                backgroundSize={"cover"}
                css={{
                  backgroundPositionY: ["center"],
                  backgroundPositionX: "center",
                }}
                flexDir={"column"}
                backgroundRepeat={"no-repeat"}></Flex>
              <Flex
                w={"200px"}
                height={"65px"}
                backgroundImage={FuelBottom.src}
                backgroundSize={"cover"}
                css={{
                  backgroundPositionY: ["center"],
                  backgroundPositionX: "center",
                }}
                flexDir={"column"}
                backgroundRepeat={"no-repeat"}></Flex>
            </Flex>
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default VaultModifyModal;
