import { Button, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { useAccount } from "wagmi";
import { trimAddress } from "@/utils";
import { theme } from "@/theme";
import "@fontsource/titillium-web";
import useConnectWallet from "@/hooks/account/useConnectWallet";
const Account = () => {
  const { isConnected, address } = useAccount();
  const buttonText = isConnected ? trimAddress({ address }) : "Connect Wallet";
  const { connetAndDisconntWallet } = useConnectWallet();

  return (
    <Flex
      height={"35px"}
      width={"136px"}
      borderRadius={"17.5px"}
      border={"1px solid #535353"}
      justifyContent={"center"}
      alignItems={"center"}
      mr={"12px"}>
      <Button
        onClick={() => connetAndDisconntWallet()}
        bg={"none"}
        fontWeight={"bold"}
        fontSize={"14px"}
        fontFamily={"Titillium Web, sans-serif"}
        _hover={{ bg: "none" }}
        _focus={{ bg: "none" }}
        _active={{ bg: "none" }}>
        {buttonText}
      </Button>
    </Flex>
  );
};

export default Account;
