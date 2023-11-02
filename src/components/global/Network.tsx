import { NetworkSymbol } from "../image/NetworkSymbol";

import {
  SupportedChainId,
  SupportedChainProperties,
  supportedChain,
} from "@/types/network/supportedNetwork";
import { Center, Flex, Box, Text } from "@chakra-ui/layout";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { networkStatus } from "@/recoil/global/atom";
import useConnectedNetwork from "@/hooks/network";
import { useAccount, useSwitchNetwork } from "wagmi";
import { SetStateAction, useEffect, useMemo, useRef, useState } from "react";
import Select from "react-select";
import AccoridonArrowImg from "assets/icons/accordionArrow.svg";
import NetworkCircle from "assets/icons/networkCircle.svg";
import { Overlay_Index } from "@/types/style/overlayIndex";
import { convertNetworkName } from "@/utils/network/convertNetworkName";

type SelectOption = SupportedChainProperties & {
  value: SupportedChainProperties["chainId"];
  label: SupportedChainProperties["chainName"];
};

const customStyles = (maxHeight: string, maxWidth: string) => {
  return {
    control: (styles: any) => ({
      ...styles,
      width: "35px",
      justifyContent: 'center',
      alignIntems: 'center',
      maxHeight: `${maxHeight} !important`,
      minHeight: `${maxHeight} !important`,
      backgroundColor: "transparent",
      cursor: "pointer",
      color: "#fff",
      border: "1px solid #535353",
      borderRadius: "50%",
   
     
    }),
    menu: (styles: any) => ({
      margin: "0px",
      marginTop: "27px",
      minWidth: `${maxWidth} !important`,
      maxWidth: `${maxWidth} !important`,
      borderRadius: "4px",
      position: "absolute",
      background: '#191919',
      border: '1px solid #373737',
      // border: "1px solid #313442",
      paddingTop: '15px',
      paddingBottom: '15px',
      right: "0px",
      zIndex: Overlay_Index.AlwaysTop,
    }),
  };
};

const ValueContainer = (props: {
  selectedOption: SelectOption | null;
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const { selectedOption, isOpen, setIsOpen } = props;
  const { connectedChainId, isConnectedToMainNetwork } = useConnectedNetwork();

  if (selectedOption) {
    return (
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        fontSize={14}
        borderRadius={"50%"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Flex
          className="header-right-common"
          w={"35px"}
          justifyContent={'center'}
          alignItems={'center'}
          h={"35px"}
          borderRadius={"50%"}>
          <Image
            src={selectedOption.networkImage}
            alt={selectedOption.chainName}
            style={{
              width: "24px",
              height: "24px",
            }}
          />
        </Flex>
      </Flex>
    );
  }
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      fontSize={14}
      onClick={() => setIsOpen(true)}>
      <Center
        className="header-right-common"
        w={"35px"}
        h={"35px"}
        borderRadius={"50%"}>
        <NetworkSymbol
          network={connectedChainId ?? 1}
          w={24}
          h={24}
          isCircle={true}
        />
      </Center>
    </Flex>
  );
};

export default function Network() {
  // const { inNetwork, height, width, isPool } = props;
  const [network, setNetwork] = useRecoilState(networkStatus);
  const { connectedChainId, isConnectedToMainNetwork } = useConnectedNetwork();
  const { switchNetworkAsync, isError, switchNetwork } = useSwitchNetwork();
  const { isConnected } = useAccount();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const inNetwork = true;
  const onChange = async (data: SupportedChainProperties) => {
    try {
      const value: SupportedChainProperties["chainId"] = Number(data.chainId);
      const selectedWork = supportedChain.filter((supportedChain) => {
        return supportedChain.chainId === value;
      })[0];
      if (selectedWork.chainId !== connectedChainId) {
        return isConnected
          ? switchNetwork?.(selectedWork.chainId)
          : setNetwork({ connectedNetwork: selectedWork });
      }
    } finally {
      setIsOpen(false);

      if (isError) {
        console.error(`Couldn't switch network`);
      }
    }
  };

  //connected to the wallet
  useEffect(() => {
    if (connectedChainId) {
      const connectedNetwork = supportedChain.filter((supportedChain) => {
        return supportedChain.chainId === connectedChainId;
      })[0];

      if (connectedNetwork) {
        setSelectedOption({
          ...connectedNetwork,
          value: connectedNetwork.chainId,
          label: connectedNetwork.chainName,
        });
        return setNetwork({ connectedNetwork: connectedNetwork });
      }
    }
  }, [connectedChainId, setNetwork]);

  //not connected to the wallet
  useEffect(() => {
    if (isConnected === false) {
      if (network?.connectedNetwork?.chainId) {
        const connectedNetwork = supportedChain.filter((supportedChain) => {
          return supportedChain.chainId === network?.connectedNetwork?.chainId;
        })[0];

        setSelectedOption({
          ...connectedNetwork,
          value: connectedNetwork.chainId,
          label: connectedNetwork.chainName,
        });
      }
    }
  }, [isConnected, network]);

  //for react-select from this line
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
    null
  );

  const wrapperRef = useRef(null);

  //close when click at outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      //@ts-ignore
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const CustomOption = (props: { data: SelectOption }) => {
    const { data } = props;

    if (data.layer === "L2") {
      return (
        <Flex flexDir={"column"} rowGap={"14px"}>
          <Flex
            w={"100%"}
            h={"12px"}
            alignItems={"center"}
            justifyContent={"space-between"}
            color={"#818181"}>
            <Box w={"36px"} h={"1px"} bgColor={"#373737"} />
            <Text minW={"41px"} fontSize={12} mx={0} textAlign={"center"}>
              Layer 2
            </Text>
            <Box w={"101px"} h={"1px"} bgColor={"#373737"} />
          </Flex>
          <Flex
            w={"100%"}
            h={"21px"}
            color={"#fff"}
            px={"15px"}
            borderRadius={"6px"}
            justifyContent={"space-between"}
            alignItems={"center"}
            fontSize={14}
            cursor={"pointer"}
            bgColor={"#191919"}
            // _hover={{ bgColor: "#313442" }}
            onClick={() => onChange(data)}>
            <Flex columnGap={"6px"} _hover={{textDecor:'underline'}}>
              <Box w={"21px"} h={"21px"}>
                <Image
                  src={data.networkImage}
                  alt={data.chainName}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
              <Text >{convertNetworkName(data.label)}</Text>
            </Flex>
            {/* <Box w={"10px"} h={"10px"}>
              <Image src={AccoridonArrowImg} alt={"AccoridonArrowImg"} />
            </Box> */}
          </Flex>
        </Flex>
      );
    }

    return (
      <Flex
        w={"100%"}
        h={"21px"}
        color={"#fff"}
        px={"15px"}
        justifyContent={"space-between"}
        alignItems={"center"}
        fontSize={14}
        cursor={"pointer"}
        bgColor={"#191919"}
    
        onClick={() => onChange(data)}
        borderRadius={"6px"}>
        <Flex columnGap={"6px"} _hover={{textDecor:'underline'}}>
          <Box w={"20px"} h={"20px"}>
            <Image
              src={data.networkImage}
              alt={data.chainName}
              style={{
                width: "21px",
                height: "21px",
              }}
            />
          </Box>
          <Text>{convertNetworkName(data.label)}</Text>
        </Flex>
        {/* <Box w={"10px"} h={"10px"}>
          <Image src={AccoridonArrowImg} alt={"AccoridonArrowImg"} />
        </Box> */}
      </Flex>
    );
  };

  const optionsList = supportedChain
    .filter((chainInfo) => {
      if (
        isConnectedToMainNetwork === true ||
        isConnectedToMainNetwork === undefined
      ) {
        return [
          SupportedChainId["MAINNET"],
          SupportedChainId["TITAN"],
        ].includes(chainInfo.chainId);
      }
      return [SupportedChainId["GOERLI"], SupportedChainId["DARIUS"]].includes(
        chainInfo.chainId
      );
    })
    .map((chainInfo) => {
      return {
        ...chainInfo,
        value: chainInfo.chainId,
        label: chainInfo.chainName,
      };
    });    
  return (
    // <Center className="header-right-common" w={"48px"} h={"48px"} _hover={{bg:'#313442'}}>
    //   <NetworkSymbol
    //     network={connectedChainId ?? 1}
    //     w={24}
    //     h={24}
    //     isCircle={true}
    //   />
    // </Center>
    <Box ref={wrapperRef} mr="9px">
      <Select
        options={optionsList}
        menuIsOpen={isOpen}
        // onMenuOpen={() => {}}
        // onMenuClose={() => {}}
        // onMenuClose={() => {}}
        components={{
          Option: CustomOption,
          ValueContainer: () => (
            <ValueContainer
              selectedOption={selectedOption}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          ),
          MenuList: (e) => (
            <Flex flexDir={"column"} rowGap={"13px"}>
              {e.children}
            </Flex>
          ),
          IndicatorsContainer: () => null,
        }}
        //@ts-ignore
        styles={customStyles("35px", "190px")}
        value={selectedOption}></Select>
    </Box>
  );
}
