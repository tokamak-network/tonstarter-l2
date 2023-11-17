import {
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Button,
  Tooltip,
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
import GasIcon from "@/assets/icons/gas-graphic.svg";
import { useAccount } from "wagmi";
import { trimAddress } from "@/utils";
import { TokenInfo, supportedTokens } from "@/types/tokens/supportedToken";
import useTokenBalance from "@/hooks/balance/useTokenBalance";
import { QuestionOutlineIcon } from "@chakra-ui/icons";

const GasCheckModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isConnected, address } = useAccount();
  const [modalType, setModalType] = useRecoilState(modalStatus)

  const closeModal = () => {
    setModalType('');
    onClose;
  };

  const tokenData = useTokenBalance(supportedTokens[0]);
  const recommended = 1.11;

  return (
    <Modal isOpen={modalType==='GasCheck'} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent
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
              Gas check
            </Text>
            <Flex
              w={"16px"}
              onClick={closeModal}
              _hover={{ cursor: "pointer" }}>
              <Image src={closeIcon} alt="close_icon" />
            </Flex>
          </Flex>
          <Text
            mb={"45px"}
            lineHeight={"normal"}
            px={"25px"}
            color={"#D0D0DA"}
            textAlign={"center"}
            fontSize={"13px"}>
            You need to have enough gas to complete all of the launch
            procedures.
          </Text>
          <Image src={GasIcon} alt="WalletIcon" />
          <Flex
            w={"100%"}
            px={"25px"}
            mt={"45px"}
            rowGap={"27px"}
            flexDir={"column"}>
            <Flex w={"100%"} fontSize={"14px"} justifyContent={"space-between"}>
              <Text lineHeight={"normal"} color={"#9D9EA5"} fontWeight={400}>
                Recommended{" "}
                <Tooltip
                  label={
                    <>
                      <div>1. WTON-TOS LP reward (2.5%)</div>
                    </>
                  }
                  fontSize="12px"
                  bg={"#1F2128"}
                  color={"#fff"}
                  fontWeight={400}>
                  <QuestionOutlineIcon color={"#777777"} />
                </Tooltip>
              </Text>
              <Text lineHeight={"normal"} fontWeight={500} color={"#fff"}>
                {recommended.toLocaleString()} ETH
              </Text>
            </Flex>
            <Flex w={"100%"} fontSize={"14px"} justifyContent={"space-between"}>
              <Text lineHeight={"normal"} color={"#9D9EA5"} fontWeight={400}>
                You have
              </Text>
              <Text
                lineHeight={"normal"}
                fontWeight={500}
                color={
                  recommended >
                  Number(tokenData?.data.parsedBalanceWithoutCommafied)
                    ? "#FF0420"
                    : "#fff"
                }>
                {tokenData?.data.parsedBalance.toLocaleString()} ETH
              </Text>
            </Flex>
          </Flex>
          {recommended >
            Number(tokenData?.data.parsedBalanceWithoutCommafied) && (
            <Flex mt={"36px"} flexDir={"column"} alignItems={'center'}>
              <Text lineHeight={'normal'} fontWeight={600} color={'#FF0420'} fontSize={'15px'}>Warning</Text>
              <Text mt={'9px'} w={'190px'} fontSize={'13px'} color={'#D0D0DA'} lineHeight={'normal'} textAlign={'center'}  whiteSpace={"break-spaces"}>Your ETH balance is less than the recommended amount.</Text>
            </Flex>
          )}
          <Button
            w="150px"
            h="40px"
            borderRadius={"20px"}
            fontSize={"15px"}
            bg={"#0070ED"}
            color={"#fff"}
            fontWeight={600}
            my={"45px"}
            _disabled={{ bg: "#353535", color: "#838383" }}
            _hover={{ bg: "#0057E6" }}
            onClick={() => closeModal()}>
            Checked
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default GasCheckModal;
