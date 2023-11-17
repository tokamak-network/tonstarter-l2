import { Flex, Button, Text, Stack } from "@chakra-ui/react";
import "font-proxima-nova/style.css";
import Image from "next/image";
import Tick from "@/assets/icons/Tick.svg";
import {
  modalStatus,
} from "@/recoil/launch/atom";
import { useRecoilState } from "recoil";
import { SetStateAction, useState } from "react";

const Step1 = (props: {
  step1Completed: boolean;
  setStep1Completed: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const { step1Completed, setStep1Completed } = props;
    const [modalType, setModalType] = useRecoilState(modalStatus)
  const step1Steps = [
    { step: "Check your wallet", status: true },
    { step: "Check your gas", status: true },
    { step: "Your L1 project token", status: true },
    { step: "Your L2 project token", status: true },
  ];

  const openModal = (index: number) => {
    switch (index) {
      case 0:
        return setModalType('WalletCheck');

      case 1:
        return setModalType('GasCheck')
      case 2:
        return setModalType('L1TokenStatus');
      case 3:
        return setModalType('L2TokenStatus');
    }
  };

  const allChecked = step1Steps.every((step) => step.status === true);

  const CheckMark = (props: { status: boolean; index: number }) => {
    const { status, index } = props;
    return (
      <Flex
        height={18}
        width={18}
        border={status ? "" : "1px solid #535353"}
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius={"4px"}
        cursor={"pointer"}
        bg={status ? "#2A72E5" : ""}
        onClick={() => openModal(index)}>
        {status && <Image src={Tick} alt="check box" height={9} width={9} />}
      </Flex>
    );
  };

  if (step1Completed)
    return (
      <Flex
        lineHeight={"normal"}
        mt={"54px"}
        flexDir={"column"}
        fontFamily={"Proxima Nova Rg"}>
        <Text color={"#64646F"} fontSize={"16px"} fontWeight={400}>
          Deploy finished (4)
        </Text>
      </Flex>
    );
  else
    return (
      <Flex
        mt={"54px"}
        flexDir={"column"}
        fontFamily={"Proxima Nova Rg"}
        height={"100%"}
        justifyContent={"space-between"}>
        <Flex flexDir={"column"}>
          <Text fontSize={"16px"} fontWeight={600} color={"#D0D0DA"}>
            Click and check{" "}
            <span style={{ color: "#64646F" }}>
              (<span style={{ color: "#D0D0DA" }}>2</span>/4)
            </span>
          </Text>
          <Flex rowGap={"9px"} flexDir={"column"} mt={"18px"}>
            {step1Steps.map((step: any, index: number) => {
              const nextStatus =
                index !== 3 ? step1Steps[index + 1].status : step.status;
              const prevStatus =
                index !== 0 ? step1Steps[index - 1].status : true;
              const illuminate = prevStatus && !nextStatus;
              return (
                <Flex key={index} columnGap={"9px"}>
                  <CheckMark status={step.status} index={index} />
                  <Text
                    fontSize={"13px"}
                    color={illuminate ? "#fff" : "#9D9EA5"}
                    fontWeight={illuminate ? 600 : 400}
                    textShadow={illuminate ? "0px 0px 6px #FFFF07;" : ""}>
                    {step.step}
                  </Text>
                </Flex>
              );
            })}
            {allChecked && (
              <Text
                ml={"27px"}
                fontSize={"13px"}
                fontWeight={600}
                color={"#FFFF07"}>
                Finished
              </Text>
            )}
          </Flex>
        </Flex>

        <Flex pl={"15px"}>
          {" "}
          <Button
            w="150px"
            h="40px"
            borderRadius={"20px"}
            fontSize={"15px"}
            bg={"#0070ED"}
            color={"#fff"}
            fontWeight={600}
            isDisabled={!allChecked}
            _disabled={{
              border: "2px solid #353535",
              color: "#838383",
              bg: "transparent",
            }}
            onClick={() => setStep1Completed(true)}
            _hover={
              !allChecked ? { cursor: "not-allowed" } : { bg: "#0057E6" }
            }>
            Deploy
          </Button>
        </Flex>
      </Flex>
    );
};

export default Step1;
