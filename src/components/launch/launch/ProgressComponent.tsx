import { Flex, Checkbox, CheckboxGroup, Text, Stack } from "@chakra-ui/react";
import "font-proxima-nova/style.css";
import Image from "next/image";
import Tick from "@/assets/icons/Tick.svg";
import {
  walletCheckStatus,
  gasCheckStatus,
  l2TokenStatus,
} from "@/recoil/launch/atom";
import { useRecoilState } from "recoil";
const ProgressComponent = () => {
  const [walletCheckModal, setWalletCheckModal] =
    useRecoilState(walletCheckStatus);
  const [gasCheckModal, setGasCheckModal] = useRecoilState(gasCheckStatus);
  const [l2TokenModal, setL2TokenModal] = useRecoilState(l2TokenStatus);

  const step1Steps = [
    { step: "Check your wallet", status: false },
    { step: "Check your gas", status: false },
    { step: "Your L1 project token", status: true },
    { step: "Your L2 project token", status: false },
  ];

  const openModal = (index: number) => {
    switch (index) {
      case 0:
        return setWalletCheckModal(true);

      case 1:
        return setGasCheckModal(true);
      case 2:
        return setL2TokenModal(true);
    }
  };

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
  return (
    <Flex mt={"54px"} flexDir={"column"} fontFamily={"Proxima Nova Rg"}>
      <Text fontSize={"16px"} fontWeight={600} color={"#D0D0DA"}>
        Click and check{" "}
        <span style={{ color: "#64646F" }}>
          (<span style={{ color: "#D0D0DA" }}>2</span>/4)
        </span>
      </Text>
      <Flex rowGap={"9px"} flexDir={"column"} mt={"18px"}>
        {step1Steps.map((step: any, index: number) => {
          const nextStatus = index !== 3 ? step1Steps[index + 1].status : false;
          const prevStatus = index !== 0 ? step1Steps[index - 1].status : true;
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
  );
};

export default ProgressComponent;
