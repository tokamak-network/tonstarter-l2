import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Box,
  Heading,
  Text,
  Flex,
  useTheme,
  useColorMode,
  Checkbox,
  ModalHeader,
  ModalCloseButton,
  Button,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
import { termsStatus } from "@/recoil/launch/atom";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { useTermsModal } from "@/hooks/modals/useTermsModal";
import closeIcon from "@/assets/icons/modal_close.svg";
import Image from "next/image";
import "font-proxima-nova/style.css";

const TermsModal = () => {
  const { onOpenTerms, onClose, isOpen: termsModal } = useTermsModal();

  return (
    <Modal isOpen={termsModal} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        height={"568px"}
        maxW="700px"
        bg={"#121318"}
        border={"1px solid #313442"}
        fontFamily={"Proxima Nova Rg"}>
        <Flex
          pr={"20px"}
          borderBottom={"1px solid #313442"}
          h={"84px"}
          justifyContent={"flex-end"}
          columnGap={"240px"}
          maxW="700px"
          alignItems={"center"}>
          <Text fontSize={"20px"} textAlign={"center"} fontWeight={600}>
            TERMS OF USE
          </Text>

          <Flex
            justifyContent={"flex-end"}
            w={"20px"}
            onClick={onClose}
            _hover={{ cursor: "pointer" }}>
            <Image src={closeIcon} alt="close_icon" />
          </Flex>
        </Flex>
        <Flex
          //   justifyContent={"center"}
          mt={"25px"}
          mx={"25px"}
          h={"316px"}
          overflowY={"scroll"}
          flexDir={"column"}
          alignItems={"center"}
          css={{
            "&::-webkit-scrollbar": {
              width: "6px",
            },
            "::-webkit-scrollbar-track": {
              background: "transparent",
              borderRadius: "4px",
            },
            "::-webkit-scrollbar-thumb": {
              background: "#257eee",
              borderRadius: "3px",
            },
          }}>
          <Text fontSize={"15px"} fontWeight={700}>
            Warning
          </Text>
          <Text
            mt={"9px"}
            color={"#D0D0DA"}
            fontSize={"13px"}
            lineHeight={"normal"}
            textAlign={"center"}>
            When funding is complete, the funded tokens will be sent to the
            currently linked wallet address. Please check your wallet address
            and reconnect to your preferred wallet address if necessary.
          </Text>
          <Text fontSize={"15px"} mt="30px" fontWeight={700}>
            Warning
          </Text>
          <Flex alignItems={"flex-start"} flexDir={"column"} w={"100%"}>
            <OrderedList color={"#D0D0DA"} fontSize={"13px"} fontWeight={700}>
              <ListItem>
                <Text>Terms of Use</Text>
                <Text fontWeight={400} ml={"-14px"}>
                  <b>1.1</b> By accessing, browsing or using our platform,
                  system or website operated by us (collectively, the
                  &ldquo;Platform&rdquo;) or linked to our Platform, or any page
                  thereof, through any direct or indirect means (individually or
                  collectively), or by using or accessing the facilities or
                  services (each a{" "}
                  <span style={{ fontWeight: "bold" }}>
                    &ldquo;Service&rdquo;
                  </span>
                  , as the case may be) offered in or through the Platform or
                  through alternative methods (including, for example,
                  telephone, mail, email or facsimile), you accept and agree to
                  be bound by these terms and any other document, terms or
                  conditions that form part of the same, as may be amended,
                  supplemented, modified or added from time to time (these{" "}
                  <span style={{ fontWeight: "bold" }}>
                    &ldquo;Terms of Use&rdquo;
                  </span>
                  ).
                </Text>
                <Text fontWeight={400} mt={"10px"} ml={"-14px"}>
                  <b>1.2</b> If you do not agree to these Terms of Use, you are
                  not authorised to access or use the Platform, and you are to
                  cease accessing or otherwise using the Platform. The details,
                  description, functions and process in respect of each Service
                  will be set out on the Platform itself and may be revised,
                  amended or supplemented from time to time. You agree that for
                  your use of each Service, you will from time to time satisfy
                  yourself by fully reading and understanding the details,
                  description, functions, process and terms in respect of each
                  Service, prior to using any of the Services.
                </Text>
                <Text fontWeight={400} mt={"10px"} ml={"-14px"}>
                  <b>1.3</b> Tokamak Network Pte. Ltd.{" "}
                  <span style={{ fontWeight: "bold" }}>
                    ( &ldquo;Tokamak Network&rdquo;){" "}
                  </span>
                  operates the Platform and shall have the right at any time to
                  change or discontinue any aspect or feature of the Platform
                  and the right to modify these Terms of Use and/or any other
                  terms and conditions applicable to users of the Platform, or
                  any part thereof. Such changes, modification, additions or
                  deletions shall be effective immediately upon posting on the
                  Platform. Any continued use by you of the Platform or the use
                  of the Services offered in or through the Platform shall be
                  deemed to constitute your acceptance of such changes.
                </Text>
                <Text fontWeight={400} mt={"10px"} ml={"-14px"}>
                  <b>1.4</b> In these Terms of Use, &ldquo;we&rdquo;,
                  &ldquo;our&rdquo; and &ldquo;us&rdquo; refers to Tokamak
                  Network and &ldquo;you&rdquo; and &ldquo;your&rdquo; is
                  defined to any person who accesses and uses the Platform.
                </Text>
                <Text fontWeight={400} mt={"10px"} ml={"-14px"}>
                  <b>1.5</b> In the event of any express conflict between these
                  Terms of Use and the terms for the use of any of our Services,
                  or any other such terms and policies which may be promulgated
                  from time to time, the terms for the use of Services shall
                  take precedence.
                </Text>
                <Text fontWeight={400} mt={"10px"} ml={"-14px"}>
                  <b>1.6</b> By using the Platform, you acknowledge that you
                  have read, understood, and (i) agree to be bound by these
                  Terms of Use; (ii) where you use our Service, agree to also be
                  bound by the relevant terms; and (iii) you represent and
                  warrant that you are at least 18 years of age.
                </Text>
              </ListItem>
              <ListItem mt={"10px"}>
                <Text>Accessing the Platform</Text>
                <Text fontWeight={400} ml={"-14px"}>
                  <b>2.1</b> We will use our best efforts to keep the Platform
                  accessible at all times and while we will use our best
                  efforts, we cannot guarantee that the Platform will be fully
                  or partially operational at all times. You agree that we will
                  not be responsible for any losses that may arise from the
                  inability to access the Platform, from visiting the Platform
                  and/or from the reliance on the information provided within
                  the Platform.
                </Text>
                <Text fontWeight={400} ml={"-14px"} mt={"10px"}>
                  <b>2.2</b> We reserve the right to withdraw or amend any
                  Services that are provided on the Platform without any notice.
                </Text>
                <Text fontWeight={400} ml={"-14px"} mt={"10px"}>
                  <b>2.3</b> We may restrict users from certain jurisdictions
                  from accessing the Platform. We do not represent that content
                  available on or through our Platform is appropriate for use in
                  restricted jurisdictions.
                </Text>
              </ListItem>
              <ListItem mt={"10px"}>
                <Text>Use of Platform</Text>
                <Text fontWeight={400} ml={"-14px"}>
                  <b>3.1</b> You shall be granted a non-exclusive,
                  non-transferable, revocable license to access and use and
                  access the Platform solely in connection with the use of the
                  Services.
                </Text>
                <Text fontWeight={400} ml={"-14px"} mt={"10px"}>
                  <b>3.2</b> You shall take all reasonable precautions to
                  prevent any act that may interfere with the proper working of
                  the Platform or the Services, not to transmit to Tokamak
                  Network or the Platform any form of malicious software or any
                  file which contains viruses, worms, Trojan horses or any other
                  contaminating or destructive features, or that otherwise
                  interfere with the proper working of the Platform or the
                  Services.
                </Text>
                <Text fontWeight={400} ml={"-14px"} mt={"10px"}>
                  <b>3.3</b> Tokamak Network reserves the right at any time
                  without providing any notice, to make such modifications,
                  improvements or additions to the Platform and any other
                  systems necessary for the operations or security of the
                  Platform, as Tokamak Network deems fit.
                </Text>
              </ListItem>
              <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            </OrderedList>
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default TermsModal;
