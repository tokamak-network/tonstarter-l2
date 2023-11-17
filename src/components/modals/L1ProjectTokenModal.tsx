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
import { useRecoilState } from "recoil";
import closeIcon from "@/assets/icons/modal_close.svg";
import { l1TokenStatus } from "@/recoil/launch/atom";
import { useAccount } from "wagmi";

const L1ProjectTokenModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [l1TokenModal, setL1TokenModal] = useRecoilState(l1TokenStatus);
  const { isConnected, address } = useAccount();

  const closeModal = () => {
    setL1TokenModal(false);
    onClose;
  };

  const fields = [
    { name: "Token Name", value: "Mars" },
    { name: "Token Symbol", value: "MARS" },
    { name: "Token Supply", value: "10,0000,000 MARS" },
  ];
  return (
    <Modal isOpen={l1TokenModal} onClose={closeModal} isCentered>
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
              L1 project token
            </Text>
            <Flex
              w={"16px"}
              onClick={closeModal}
              _hover={{ cursor: "pointer" }}>
              <Image src={closeIcon} alt="close_icon" />
            </Flex>
          </Flex>
          <Flex
            w={"100%"}
            px={"25px"}
            mt={"15px"}
            rowGap={"27px"}
            flexDir={"column"}>
            {fields.map((field: any, index: number) => {
              return (
                <Flex
                  w={"100%"}
                  fontSize={"14px"}
                  justifyContent={"space-between"}
                  key={index}>
                  <Text
                    lineHeight={"normal"}
                    color={"#9D9EA5"}
                    fontWeight={400}>
                    {field.name}{" "}
                  </Text>
                  <Text lineHeight={"normal"} fontWeight={500} color={"#fff"}>
                   {field.value}
                  </Text>
                </Flex>
              );
            })}
          </Flex>
          <Flex mt={"36px"} flexDir={"column"} alignItems={'center'}>
              <Text lineHeight={'normal'} fontWeight={600} color={'#FF0420'} fontSize={'15px'}>Warning</Text>
              <Text mt={'9px'} w={'290px'} fontSize={'13px'} color={'#D0D0DA'} lineHeight={'normal'} textAlign={'center'}  whiteSpace={"break-spaces"}>The team will create a TOS Reward Program(TOS) fund by buying $100 worth of TOS token on a daily basis. The fund will be used to reward to the contributors who have worked on the following categories: </Text>
            </Flex>

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
            Approve
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default L1ProjectTokenModal;
