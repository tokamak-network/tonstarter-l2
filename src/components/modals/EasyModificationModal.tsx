import {
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Input,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import "font-proxima-nova/style.css";
import { useRecoilState } from "recoil";
import closeIcon from "@/assets/icons/modal_close.svg";
import FuelTop from "@/assets/images/fuel-top.svg";
import FuelLine from "@/assets/images/fuel-line.svg";
import FuelContents from "@/assets/images/fuel-contents.svg";
import FuelBottom from "@/assets/images/fuel-bottom.svg";
import {  modalStatus } from "@/recoil/launch/atom";

const EasyModificationModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [modalType, setModalType] = useRecoilState(modalStatus)

  const closeModal = () => {
    setModalType('');
    onClose;
  };

  const questions = [
    { question: "Number of Rounds", placeholder: "Enter Number of Rounds" },
    { question: "Date of 1st Round", placeholder: "Enter Date of 1st Round" },
    {question: "Interval",placeholder: "Enter Interval"},
    {question: "Token Allocation",placeholder: "Enter Token Allocation"},
  ];
  return (
    <Modal isOpen={modalType==='EasyModification'} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent
      
        maxW="340px"
        bg={"#121318"}
        border={"1px solid #313442"}
        fontFamily={"Proxima Nova Rg"}>
        <Flex w={"100%"} flexDir={"column"}>
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
             Easy Modification
            </Text>
            <Flex
              w={"16px"}
              onClick={closeModal}
              _hover={{ cursor: "pointer" }}>
              <Image src={closeIcon} alt="close_icon" />
            </Flex>
          </Flex>
          <Flex flexDir={"column"} px={"25px"}>
            {questions.map((question: any, index: number) => {
              return (
                <Flex key={index} flexDir={"column"}>
                  <Flex justifyContent={"space-between"}>
                    <Text
                      mb={"9px"}
                      fontWeight={400}
                      fontStyle={"normal"}
                      lineHeight={"normal"}
                      color={"#9D9EA5"}
                      fontSize={"14px"}>
                      {question.question}
                    </Text>
                  </Flex>
                  <Input
                    w={"100%"}
                    h={"42px"}
                    bg={"#252525"}
                    borderRadius={0}
                    _focusVisible={{
                      borderBottom: "1px solid #0070ED !important",
                    }}
                    mb={"30px"}
                    _hover={{ borderBottom: "1px solid #0070ED !important" }}
                    placeholder={question.placeholder}
                    outline={"none"}
                    fontSize={"18px"}
                    fontWeight={600}
                    border={"transparent"}
                    pl={"20px"}
                    _placeholder={{
                      opacity: 1,
                      color: "#818181",
                      fontsize: "18px",
                      lineHeight: "normal",
                    }}
                  />
                </Flex>
              );
            })}
            <Flex justifyContent={"center"}>
              <Button
                w="150px"
                h="40px"
                borderRadius={"20px"}
                fontSize={"15px"}
                bg={"#0070ED"}
                color={"#fff"}
                mb={'45px'}
                mt={'15px'}
                fontWeight={600}
                _disabled={{ bg: "#353535", color: "#838383" }}
                _hover={{ bg: "#0057E6" }}>
                Add
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default EasyModificationModal;
