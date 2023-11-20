import { Flex, Button, Text, Stack } from "@chakra-ui/react";
import "font-proxima-nova/style.css";
import Image from "next/image";
import Tick from "@/assets/icons/Tick.svg";
import { modalStatus,vaultStatus } from "@/recoil/launch/atom";
import { useRecoilState } from "recoil";
import { SetStateAction } from "react";

const Step3 = (props: {
  step3Completed: boolean;
  setStep3Completed: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const { step3Completed, setStep3Completed } = props;
  const [modalType, setModalType] = useRecoilState(modalStatus);
const [vaultInfo, setVaultInfo] = useRecoilState(vaultStatus)
  const step3Steps = [
    { step: "Initial Liquidity", status: true },
    { step: "Vesting", status: true },
    { step: "Public Sale", status: true },
    { step: "TON Staker", status: true },
    { step: "TOS Staker", status: true },
    { step: "WTON-TOS LP Reward", status: true },
    { step: "Liquidity Incentive", status: true },
    { step: "Ecosystem", status: true },
    { step: "Team", status: true },
  ];

  const allChecked = step3Steps.every((step) => step.status === true);

  const CheckMark = (props: { status: boolean; index: number, step:any }) => {
    const { status, step } = props;
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
        onClick={() =>{
          setVaultInfo({
            name: step.step
          })
           setModalType("Vault");
           }}>
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
          Deploy finished (9)
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
              (<span style={{ color: "#D0D0DA" }}>1</span>/9)
            </span>
          </Text>
          <Flex
            lineHeight={"normal"}
            rowGap={"9px"}
            flexDir={"column"}
            mt={"18px"}>
            {step3Steps.map((step: any, index: number) => {
              const nextStatus =
                index !== 8 ? step3Steps[index + 1].status : step.status;
              const prevStatus =
                index !== 0 ? step3Steps[index - 1].status : true;
              const illuminate = prevStatus && !nextStatus;
              return (
                <Flex key={index} columnGap={"9px"}>
                  <CheckMark status={step.status} index={index} step={step}/>
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
