import { Flex, Button, Text, Stack } from "@chakra-ui/react";
import "font-proxima-nova/style.css";
import Image from "next/image";
import Tick from "@/assets/icons/Tick.svg";
import {
  walletCheckStatus,
  gasCheckStatus,
  l2TokenStatus,
  l1TokenStatus,
} from "@/recoil/launch/atom";
import { useRecoilState } from "recoil";
import { SetStateAction, useState } from "react";

const Step3 = (props: {
  step3Completed: boolean;
  setStep3Completed: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const { step3Completed, setStep3Completed } = props;
  const [walletCheckModal, setWalletCheckModal] =
    useRecoilState(walletCheckStatus);
  const [gasCheckModal, setGasCheckModal] = useRecoilState(gasCheckStatus);
  const [l2TokenModal, setL2TokenModal] = useRecoilState(l2TokenStatus);
  const [l1TokenModal, setL1TokenModal] = useRecoilState(l1TokenStatus);
  const [deployed, setDeployed] = useState(false);

  const step3Steps = [
    { step: "Initial Liquidity", status: true },
    { step: "Vesting", status: true },
    { step: "Public Sale", status: true },
    { step: "TON Staker", status: true },
    { step: "TOS Staker", status: true },
    { step: "WTON-TOS LP REward", status: true },
    { step: "Liquidity Incentive", status: true },
    { step: "Ecosystem", status: true },
    { step: "Team", status: true },
  ];

  const openModal = (index: number) => {
    switch (index) {
      case 0:
        return setWalletCheckModal(true);

      case 1:
        return setGasCheckModal(true);
      case 2:
        return setL1TokenModal(true);
      case 3:
        return setL2TokenModal(true);
    }
  };

  const allChecked = step3Steps.every((step) => step.status === true);

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

  if (step3Completed)
    return (
      <Flex
        lineHeight={"normal"}
        mt={"12px"}
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
        mt={"12px"}
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
          <Flex   lineHeight={"normal"} rowGap={"9px"} flexDir={"column"} mt={"18px"}>
            {step3Steps.map((step: any, index: number) => {
              const nextStatus =
                index !== 8 ? step3Steps[index + 1].status : step.status;
              const prevStatus =
                index !== 0 ? step3Steps[index - 1].status : true;
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
            onClick={() => setStep3Completed(true)}
            _hover={
              !allChecked ? { cursor: "not-allowed" } : { bg: "#0057E6" }
            }>
            Initialize
          </Button>
        </Flex>
      </Flex>
    );
};

export default Step3;
