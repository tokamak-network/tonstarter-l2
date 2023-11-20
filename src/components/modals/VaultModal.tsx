import {
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import "font-proxima-nova/style.css";
import { useRecoilState } from "recoil";
import closeIcon from "@/assets/icons/modal_close.svg";
import { modalStatus, vaultStatus } from "@/recoil/launch/atom";
import WalletIcon from "@/assets/icons/Wallet.svg";
import { useAccount } from "wagmi";
import { trimAddress } from "@/utils";

const VaultModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalType, setModalType] = useRecoilState(modalStatus);
  const { address } = useAccount();
  const [vaultInfo, setVaultInfo] = useRecoilState(vaultStatus);

  const closeModal = () => {
    setModalType("");
    setVaultInfo({});
    onClose;
  };

  return (
    <Modal isOpen={modalType === "Vault"} onClose={closeModal} isCentered>
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
              w={"340px"}
              fontWeight={600}
              height={"24px"}>
              {vaultInfo.name}
            </Text>
            <Flex
              w={"16px"}
              onClick={closeModal}
              _hover={{ cursor: "pointer" }}>
              <Image src={closeIcon} alt="close_icon" />
            </Flex>
          </Flex>
          <Text color={"#D0D0DA"} fontSize={"15px"} fontWeight={600}>
            Vault
          </Text>
          <Flex px={"25px"} flexDir={"column"} w={"100%"} pt={"24px"} rowGap={'27px'}>
            <Flex w={"100%"} fontSize={"14px"} justifyContent={"space-between"}>
              <Text lineHeight={"normal"} color={"#9D9EA5"} fontWeight={400}>
                Vault Name
              </Text>
              <Text lineHeight={"normal"} fontWeight={500} color={"#fff"}>
                {vaultInfo.name}
              </Text>
            </Flex>
            <Flex w={"100%"} fontSize={"14px"} justifyContent={"space-between"}>
              <Text lineHeight={"normal"} color={"#9D9EA5"} fontWeight={400}>
                Admin
              </Text>
              <Text lineHeight={"normal"} fontWeight={500} color={"#fff"}>
              0x0000…0000
              </Text>
            </Flex>
            <Flex w={"100%"} fontSize={"14px"} justifyContent={"space-between"}>
              <Text lineHeight={"normal"} color={"#9D9EA5"} fontWeight={400}>
                Contract
              </Text>
              <Text lineHeight={"normal"} fontWeight={500} color={"#fff"}>
              0x0000…0000
              </Text>
            </Flex>
            <Flex w={"100%"} fontSize={"14px"} justifyContent={"space-between"}>
              <Text lineHeight={"normal"} color={"#9D9EA5"} fontWeight={400}>
                Token Allocation
              </Text>
              <Text lineHeight={"normal"} fontWeight={500} color={"#fff"}>
              10,000,000.00 MARS
              </Text>
            </Flex>
            <Flex w={"100%"} fontSize={"14px"} justifyContent={"space-between"}>
              <Text lineHeight={"normal"} color={"#9D9EA5"} fontWeight={400}>
                Token Price
              </Text>
              <Text lineHeight={"normal"} fontWeight={500} color={"#fff"}>
              1 TOS : 10 MARS
              </Text>
            </Flex>
            <Flex w={"100%"} fontSize={"14px"} justifyContent={"space-between"}>
              <Text lineHeight={"normal"} color={"#9D9EA5"} fontWeight={400}>
                Start Time
              </Text>
              <Text lineHeight={"normal"} fontWeight={500} color={"#fff"}>
              17.03.2023 15:10
              </Text>
            </Flex>
          </Flex>

          <Button
            w="150px"
            h="40px"
            borderRadius={"20px"}
            fontSize={"15px"}
            bg={"#0070ED"}
            color={"#fff"}
            fontWeight={600}
            mt={"45px"}
            _disabled={{ bg: "#353535", color: "#838383" }}
            _hover={{ bg: "#0057E6" }}
            onClick={() => closeModal()}>
            Approve
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default VaultModal;
