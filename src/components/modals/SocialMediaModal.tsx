import {
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Button,
  Input,
} from "@chakra-ui/react";
import Image from "next/image";
import "font-proxima-nova/style.css";
import { useRecoilState } from "recoil";
import closeIcon from "@/assets/icons/modal_close.svg";
import { modalStatus, vaultStatus } from "@/recoil/launch/atom";
import WalletIcon from "@/assets/icons/Wallet.svg";
import { useAccount } from "wagmi";
import { trimAddress } from "@/utils";

const SocialMediaModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalType, setModalType] = useRecoilState(modalStatus);
  const { address } = useAccount();

  const closeModal = () => {
    setModalType("");
    onClose;
  };

  const socials = [
    "Website",
    "Github",
    "Telegram",
    "Medium",
    "X (Twitter)",
    "Discord",
  ];
  return (
    <Modal isOpen={modalType === "SocialMedia"} onClose={closeModal} isCentered>
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
              w={"340px"}
              fontWeight={600}
              height={"24px"}>
              Social Media
            </Text>
            <Flex
              w={"16px"}
              onClick={closeModal}
              _hover={{ cursor: "pointer" }}>
              <Image src={closeIcon} alt="close_icon" />
            </Flex>
          </Flex>

          <Text
            mx={"25px"}
            textAlign={"center"}
            fontSize={"13px"}
            color={"#D0D0DA"}
            fontWeight={400}
            lineHeight={"normal"}>
            Social media for your project is a great way to let your community
            know how well your project is doing so far and to garner support
            going forward.
          </Text>
          <Flex rowGap={"9px"} flexDir={"column"} mt={"30px"} w={"100%"}>
            {socials.map((social: string, index: number) => {
              return (
                <Flex key={index} justifyContent={"space-between"} mx={"25px"}>
                  <Text fontSize={"14px"} color={"#9D9EA5"} fontWeight={600}>
                    {social}
                  </Text>
                  <Input
                    w={"200px"}
                    h={"42px"}
                    bg={"#252525"}
                    borderRadius={0}
                    _focusVisible={{
                      borderBottom: "1px solid #0070ED !important",
                    }}
                    textAlign={"left"}
                    _hover={{
                      borderBottom: "1px solid #0070ED !important",
                    }}
                    placeholder={"URL here"}
                    outline={"none"}
                    fontSize={"15px"}
                    fontWeight={600}
                    border={"transparent"}
                    pl={"20px"}
                    _placeholder={{
                      opacity: 1,
                      color: "#818181",
                      fontsize: "15px",
                      lineHeight: "normal",
                    }}
                  />
                </Flex>
              );
            })}
          </Flex>
          <Flex alignItems={'center'} width={'100%'} justifyContent={'center'} columnGap={'20px'} my={'45px'}>
            <Button
              w="135px"
              h="40px"
              borderRadius={"20px"}
              fontSize={"15px"}
              bg={"#0070ED"}
              color={"#fff"}
              fontWeight={600}
            
              _disabled={{ bg: "#353535", color: "#838383" }}
              _hover={{ bg: "#0057E6" }}
              onClick={() => closeModal()}>
              Save
            </Button>
            <Button
              w="135px"
              h="40px"
              borderRadius={"20px"}
              fontSize={"15px"}
              border={"1px solid #353535"}
              bg={"transparent"}
              color={"#fff"}
              fontWeight={600}
              //   onClick={() => router.back()}
              _hover={{ bg: "transparent", border: "2px solid #8A8A98" }}>
              Reset
            </Button>
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default SocialMediaModal;
