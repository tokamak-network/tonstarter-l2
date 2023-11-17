import {
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Button
} from "@chakra-ui/react";
import Image from "next/image";
import "font-proxima-nova/style.css";
import { useRecoilState } from "recoil";
import closeIcon from "@/assets/icons/modal_close.svg";
import FuelTop from "@/assets/images/fuel-top.svg";
import FuelLine from "@/assets/images/fuel-line.svg";
import FuelContents from "@/assets/images/fuel-contents.svg";
import FuelBottom from "@/assets/images/fuel-bottom.svg";
import { modalStatus } from "@/recoil/launch/atom";
import WalletIcon from "@/assets/icons/Wallet.svg";
import { useAccount } from "wagmi";
import { trimAddress } from "@/utils";

const WalletCheckModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();


    const [modalType, setModalType] = useRecoilState(modalStatus)
  const { isConnected, address } = useAccount();

  const closeModal = () => {
    setModalType('')
    onClose;
  };
  return (
    <Modal isOpen={modalType === 'WalletCheck'} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent
        height={"508px"}
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
              Wallet check
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
            px={"25px"}
            color={"#D0D0DA"}
            textAlign={"center"}
            fontSize={"13px"}>
            When funding is complete, the funded tokens will be sent to the
            currently linked wallet address. Please check your wallet address
            and reconnect to your preferred wallet address if necessary.
          </Text>
          <Image src={WalletIcon} alt="WalletIcon" />
          <Text
            mt={"45px"}
            fontWeight={400}
            color={"#9D9EA5"}
            textAlign={"center"}
            fontSize={"14px"}>
            Admin Address
          </Text>
          <Flex
            mx={"25px"}
            width={"290px"}
            mt={"9px"}
            px={"15px"}
            height={"42px"}
            justifyContent={"center"}
            alignItems={"center"}
            bg={"#252525"}>
            <Text
              fontSize={"15px"}
              fontWeight={600}
              color={"#fff"}
            >
              {trimAddress({ address: address,  firstChar: 14, lastChar: 14 })}
            </Text>
          </Flex>
          <Button
          w="150px"
          h="40px"
          borderRadius={"20px"}
          fontSize={"15px"}
          bg={"#0070ED"}
          color={"#fff"}
          fontWeight={600}
          mt={'45px'}
          _disabled={{ bg: "#353535", color: "#838383" }}
          _hover={{ bg: "#0057E6" }}
          onClick={()=>closeModal()}
         
          >Checked
            </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default WalletCheckModal;
