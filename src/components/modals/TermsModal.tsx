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
import { useCallback, useState } from "react";
import { useTermsModal } from "@/hooks/modals/useTermsModal";
import closeIcon from "@/assets/icons/modal_close.svg";
import Image from "next/image";
import "font-proxima-nova/style.css";
import { setUpStatus } from "@/recoil/launch/atom";
import { useRecoilState } from "recoil";

const TermsModal = () => {
  const { onOpenTerms, onClose, isOpen: termsModal } = useTermsModal();
  const [isCheck, setIsCheck] = useState<boolean>(false);
  const [setup, setSetup] = useRecoilState(setUpStatus);

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
          <Flex
            alignItems={"flex-start"}
            flexDir={"column"}
            w={"100%"}
            height={"180px"}>
            <OrderedList
              color={"#D0D0DA"}
              fontSize={"13px"}
              fontWeight={700}
              ml={"15px"}>
              <ListItem>
                <Text>Terms of Use</Text>
                <Text fontWeight={400} ml={"-13px"}>
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
                <Text fontWeight={400} mt={"10px"} ml={"-13px"}>
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
                <Text fontWeight={400} mt={"10px"} ml={"-13px"}>
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
                <Text fontWeight={400} mt={"10px"} ml={"-13px"}>
                  <b>1.4</b> In these Terms of Use, &ldquo;we&rdquo;,
                  &ldquo;our&rdquo; and &ldquo;us&rdquo; refers to Tokamak
                  Network and &ldquo;you&rdquo; and &ldquo;your&rdquo; is
                  defined to any person who accesses and uses the Platform.
                </Text>
                <Text fontWeight={400} mt={"10px"} ml={"-13px"}>
                  <b>1.5</b> In the event of any express conflict between these
                  Terms of Use and the terms for the use of any of our Services,
                  or any other such terms and policies which may be promulgated
                  from time to time, the terms for the use of Services shall
                  take precedence.
                </Text>
                <Text fontWeight={400} mt={"10px"} ml={"-13px"}>
                  <b>1.6</b> By using the Platform, you acknowledge that you
                  have read, understood, and (i) agree to be bound by these
                  Terms of Use; (ii) where you use our Service, agree to also be
                  bound by the relevant terms; and (iii) you represent and
                  warrant that you are at least 18 years of age.
                </Text>
              </ListItem>
              <ListItem mt={"10px"}>
                <Text>Accessing the Platform</Text>
                <Text fontWeight={400} ml={"-13px"}>
                  <b>2.1</b> We will use our best efforts to keep the Platform
                  accessible at all times and while we will use our best
                  efforts, we cannot guarantee that the Platform will be fully
                  or partially operational at all times. You agree that we will
                  not be responsible for any losses that may arise from the
                  inability to access the Platform, from visiting the Platform
                  and/or from the reliance on the information provided within
                  the Platform.
                </Text>
                <Text fontWeight={400} ml={"-13px"} mt={"10px"}>
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
              <ListItem mt={"10px"}>
                {" "}
                <Text>Acceptable Use</Text>
                <Text fontWeight={400} ml={"-14px"}>
                  <b>4.1</b> We intend for the Platform to be used for the
                  Services only. The use of the Platform for any other purpose
                  is strictly prohibited.
                </Text>
                <Text fontWeight={400} ml={"-14px"} mt={"10px"}>
                  <b>4.2</b> You also agree:
                </Text>
                <Text fontWeight={400} ml={"-14px"}>
                  <b>4.2.1</b> not to reproduce, duplicate, copy or re-sell any
                  part of or information on the Platform in contravention of any
                  applicable law and the provisions of these Terms of Use;
                </Text>
                <Text fontWeight={400} ml={"-14px"}>
                  <b>4.2.2</b> not to access without authority, interfere with,
                  damage or disrupt any part of the Platform or any software
                  used in the provision of the Services on the Platform; and
                </Text>
                <Text fontWeight={400} ml={"-14px"}>
                  <b>4.2.3</b> not to use the Platform in any manner that
                  constitutes or may constitute money laundering activities,
                  financing of terrorism, illegal transactions, fraudulent
                  activities, or activities that breach or violate any
                  applicable laws, or to facilitate or participate in any
                  activities that constitute or may constitute, or are otherwise
                  related to, money laundering or financing of terrorism.
                </Text>
                <Text fontWeight={400} ml={"-14px"} mt={"10px"}>
                  <b>4.3</b> You further agree that if you are allowed to
                  publish, post, transmit, transfer, distribute, or upload any
                  content, on or through the Platform, you will not, and will
                  not permit any representative, nominee or agent of yours to,
                  list, publish, post, transmit, transfer, distribute, or upload
                  any content, on or through the Platform that:
                </Text>
                <Text fontWeight={400} ml={"-14px"}>
                  <b>4.3.1</b> contains any material which is defamatory of any
                  person;
                </Text>
                <Text fontWeight={400} ml={"-14px"}>
                  <b>4.3.2</b> contains any material which is prohibited by
                  applicable laws;
                </Text>
                <Text fontWeight={400} ml={"-14px"}>
                  <b>4.3.3</b> contains any material which is obscene,
                  offensive, hateful or inflammatory;
                </Text>
                <Text fontWeight={400} ml={"-14px"}>
                  <b>4.3.4</b> provides sexually explicit material;
                </Text>
                <Text fontWeight={400} ml={"-14px"}>
                  <b>4.3.5</b> promotes violence;
                </Text>
                <Text fontWeight={400} ml={"-14px"}>
                  <b>4.3.6</b> promotes discrimination based on race, sex,
                  religion, nationality, disability, or sexual orientation;
                </Text>
                <Text fontWeight={400} ml={"-14px"}>
                  <b>4.3.7</b> infringes any copyright, database right, or
                  trademark of any other person or entity;
                </Text>
                <Text fontWeight={400} ml={"-14px"}>
                  <b>4.3.8</b> contains any content that is not entirely your
                  own or for which you do not have any full rights to use;
                </Text>
                <Text fontWeight={400} ml={"-14px"}>
                  <b>4.3.9</b> is likely to deceive any person;
                </Text>
                <Text fontWeight={400} ml={"-14px"}>
                  <b>4.3.10</b> is threatening, abusive, or invade
                  another&apos;s privacy, or cause annoyance, inconvenience or
                  needless anxiety;
                </Text>
                <Text fontWeight={400} ml={"-14px"}>
                  <b>4.3.11</b> is likely to harass, upset, embarrass, alarm or
                  annoy any other person;
                </Text>
                <Text fontWeight={400} ml={"-14px"}>
                  <b>4.3.12</b> us used to impersonate any person, or to
                  misrepresent your identity or affiliation with any person; or
                </Text>
                <Text fontWeight={400} ml={"-14px"}>
                  <b>4.3.13</b> gives the impression that they emanate from us
                  if it is not the case.
                </Text>
                <Text fontWeight={400} ml={"-14px"} mt={"10px"}>
                  <b>4.4</b> We reserve the right, but not the obligation, to
                  monitor any content you post on the Platform. We will have the
                  right, but not the obligation, without your consent or any
                  prior notice to you, to remove any content that in our sole
                  opinion violates, or may violate any applicable law or these
                  Terms of Use or upon the request of any third party. We will
                  have the right, but not the obligation, without your consent
                  or any prior notice to you, to remove any content if you fail
                  to comply with our requests for information for the purposes
                  of our user identification and verification process.
                </Text>
              </ListItem>
              <ListItem mt={"10px"}>
                <Text>TONStarter Decentralized Launchpad Platform</Text>
                <Text fontWeight={400} ml={"-14px"}>
                  <b>5.1</b> The TONStarter Decentralized Launchpad Platform
                  (“TONStarter”) is an initial DEX offering (IDO) platform built
                  on Ethereum and the Tokamak Network, where blockchain projects
                  can be listed or published (“Projects”). Users of TONStarter
                  can list or publish their blockchain projects on TONStarter
                  (“Publishers”), and participate in initial investment
                  opportunities in respect of such blockchain projects
                  (“Participants”). TONStarter shall form part of the Platform
                  and our Services provided to you, and by accessing or using
                  TONStarter, you accept and agree to be bound by the terms set
                  out in Clause 5. For avoidance of doubt, all other terms
                  contained in these Terms of Use shall continue to apply to
                  your access and use of TONStarter.
                </Text>
                <Text fontWeight={400} ml={"-14px"} mt={"10px"}>
                  <b>5.2</b> You agree that you shall not use TONStarter and the
                  Projects in any manner that constitutes or may constitute
                  money laundering activities, financing of terrorism, illegal
                  transactions, fraudulent activities, or activities that breach
                  or violate any applicable laws, or to facilitate or
                  participate in any activities that constitute or may
                  constitute, or are otherwise related to, money laundering or
                  financing of terrorism.
                </Text>
                <Text fontWeight={400} ml={"-14px"} mt={"10px"}>
                  <b>5.3</b> We reserve the right to delist or otherwise remove
                  from TONStarter and the Platform, without your consent or any
                  prior notice to you, any Projects that you may have listed or
                  published on TONStarter, which in our sole discretion are
                  deemed to be inappropriate, and in such case, we shall not be
                  responsible or liable for any losses incurred by you arising
                  out of or in connection with such delisting or removal of your
                  Projects from TONStarter and the Platform, and we shall have
                  no obligation to compensate you for such losses. The Projects
                  which we may deem as inappropriate and may be subject to
                  delisting or removal from TONStarter and the Platform by us
                  shall include without limitation: (i) any Project listed or
                  published by you where you fail to comply with our requests
                  for your information for the purposes of our user
                  identification and verification process; and (ii) any Project
                  which contains any of the materials listed under Clause 4.3 of
                  these Terms of Use.
                </Text>
                <Text fontWeight={400} ml={"-14px"} mt={"10px"}>
                  <b>5.4</b> You agree that our listing or publishing of any
                  Projects on TONStarter shall not and is not intended to
                  constitute any advice, solicitation, recommendation, or
                  invitation to purchase or subscribe for any investment
                  opportunities in relation to the Projects that may be listed
                  or published on TONStarter, and shall not constitute any such
                  related services. In this regard, any investment opportunities
                  in respect of the Projects that may be listed or published on
                  TONStarter shall be provided solely by the Publishers of such
                  Projects, and Tokamak Network shall not be involved in any
                  manner with regards to the provision of such investment
                  opportunities. Publishers and Participants shall have the sole
                  responsibility of ensuring that they comply with all relevant
                  laws and regulations applicable to them in respect of the
                  listing or publishing of any Projects on TONStarter, and the
                  participation in any investment opportunities related to any
                  Projects that may be listed or published on TONStarter. We do
                  not represent, warrant, or guarantee any of the information
                  that may be provided by the Projects listed or published on
                  TONStarter. In this regard, you shall have the sole
                  responsibility of ensuring that you do your own research and
                  analysis before proceeding to invest or participate in the
                  Projects that may be listed or published on TONStarter.
                </Text>
                <Text fontWeight={400} ml={"-14px"} mt={"10px"}>
                  <b>5.5</b> The Projects that may be listed or published on
                  TONStarter are not related to Tokamak Network and/or its
                  affiliates, unless otherwise notified or stated in writing,
                  and we shall not be responsible for any disputes arising out
                  of or in connection with such projects. You shall have the
                  sole responsibility of ensuring that your use of TONStarter
                  (which shall include without limitation, your listing or
                  publishing of any Projects on TONStarter, and your investment
                  or participation in any Projects that may be listed or
                  published on TONStarter), and your use of any Services in
                  relation to the Projects that may be listed or published on
                  TONStarter are not in breach or violation of any relevant laws
                  and regulations applicable to you. We do not represent,
                  warrant, or guarantee that you will not be in breach or
                  violation of any relevant laws or regulations applicable to
                  you through your use of TONStarter (which shall include
                  without limitation, your listing or publishing of any Projects
                  on TONStarter, and your investment or participation in any
                  Projects that may be listed or published on TONStarter), and
                  your use of any Services in relation to the Projects that may
                  be listed or published on TONStarter. In this regard, you
                  shall have the sole responsibility of ensuring that you comply
                  with all relevant laws and regulations applicable to you, such
                  as licensing and reporting requirements, before proceeding to
                  list or publish your Projects on TONStarter, or proceeding to
                  invest or participate in the Projects that may be listed or
                  published on TONStarter.
                </Text>
              </ListItem>
              <ListItem mt={"10px"}>
                <Text>Tokamak Network’s employees, agents and officers</Text>
                <Text fontWeight={400} ml={"-14px"}>
                  <b>6.1</b> You will not harass, annoy, intimidate, or threaten
                  any of our employee(s) or agent(s) engaged in providing any
                  portion of the Services to you. If we feel that your behavior
                  towards any of our employees, agent or officer is at any time
                  threatening or offensive, we reserve the right to deny you any
                  further access to the Platform and Services provided, as well
                  as to take all such steps as may be available at law against
                  you.
                </Text>
              </ListItem>
              <ListItem mt={"10px"}>
                <Text>Reliance on information</Text>
                <Text fontWeight={400} ml={"-14px"}>
                  <b>7.1</b> We may provide general information on the Platform
                  and do not purport to be a financial, legal, tax or
                  professional advisor. Nothing on the Platform shall be
                  construed as financial, legal or any other professional advice
                  or recommendation of the information or other financial
                  products on the Platform.
                </Text>
                <Text fontWeight={400} ml={"-14px"} mt={"10px"}>
                  <b>7.2</b> Any information provided by and/or on the Platform
                  is to be used at your own discretion and judgement. We strive
                  to provide accurate information and unbiased opinions (if any)
                  but we shall not be responsible in any way if any information
                  is found to be inaccurate or contain any errors and/or
                  omissions.
                </Text>
              </ListItem>
              <ListItem mt={"10px"}>
                <Text>Changes to Content</Text>
                <Text fontWeight={400} ml={"-14px"}>
                  <b>8.1</b> We reserve the right to modify, add, delete or move
                  any information, content, material, and data on the Platform
                  at any time, without any prior notice to you.
                </Text>
              </ListItem>
              <ListItem mt={"10px"}>
                <Text>Cookies and Your Information</Text>
                <Text fontWeight={400} ml={"-14px"}>
                  <b>9.1</b> We may use cookies and may also process information
                  about you in accordance with our internal policy. By using the
                  Platform, and accepting these Terms of Use, you consent to
                  such processing and you warrant that all data provided by you
                  is accurate.
                </Text>
              </ListItem>
              <ListItem mt={"10px"} ml={"6px"}>
                <Text>Links on the Platform</Text>
                <Text fontWeight={400} ml={"-20px"}>
                  <b>10.1</b> We may provide links to third party websites as
                  part of our service to you but it is not an endorsement of any
                  of such third party websites. Third party websites are
                  governed by their own terms of use and/or privacy policies and
                  thus, we have no control over them. You may access these third
                  party websites at your sole discretion and own risk. We shall
                  not be liable for any loss you may incur, arising from your
                  access to the third party websites. To the extent that any of
                  these third parties may be carrying out any activities which
                  are required to be regulated or approved by any government,
                  regulator or agency under the laws of any jurisdiction, we do
                  not represent that nor have the obligation to verify or
                  ascertain that they are in fact so regulated or approved.
                </Text>
              </ListItem>
              <ListItem mt={"10px"} ml={"6px"}>
                <Text>Intellectual Property</Text>
                <Text fontWeight={400} ml={"-20px"}>
                  <b>11.1</b> The content of the Platform including the text,
                  graphics, and logo is our property and is protected by
                  copyright and/or other proprietary rights. You may download,
                  print, and store any copyright material for your personal use,
                  but you shall not republish, distribute or commercially
                  exploit the contents in any form without first obtaining our
                  express written consent. You may not copy, reverse engineer,
                  decompile, or create derivative works of the contents, or
                  frame the Platform or any part of it. You may not modify or
                  alter the contents in any way, or change or delete the
                  copyright notice.
                </Text>
              </ListItem>
              <ListItem mt={"10px"} ml={"6px"}>
                <Text>Indemnity</Text>
                <Text fontWeight={400} ml={"-20px"}>
                  <b>12.1</b> We shall not be liable for any loss that you may
                  incur in any way that may arise from the transactions that you
                  may end up conducting as a result of any Service(s) on the
                  Platform. In this regard, you agree and acknowledge that you
                  shall exercise due caution and judgement when dealing with
                  such transactions.
                </Text>
                <Text fontWeight={400} ml={"-20px"} mt={"10px"}>
                  <b>12.2</b> You undertake fully and effectively to indemnify
                  and keep indemnified at all times us and our officers,
                  employees, agents or authorized representatives against all
                  actions, proceedings, claims, costs, demands, liabilities and
                  expenses whatsoever (including legal and other fees and
                  disbursements) sustained, incurred or paid by us directly or
                  indirectly in respect of:
                </Text>
                <Text fontWeight={400} ml={"-20px"}>
                  <b>12.2.1</b> your access and/or use of the Platform and/or
                  Service(s);
                </Text>
                <Text fontWeight={400} ml={"-20px"}>
                  <b>12.2.2</b> any information data or material published or
                  transmitted by you; and/or
                </Text>
                <Text fontWeight={400} ml={"-20px"}>
                  <b>12.2.3</b> any breach by you of any of the provisions of
                  these Terms of Use or of any applicable law.
                </Text>
                <Text fontWeight={400} ml={"-20px"} mt={"10px"}>
                  <b>12.3</b> You, and your estate, in the case of your death
                  (for individuals), further agree that this indemnification
                  provision covers all third party claims, actions or demands,
                  including those filed by your spouse, partner, children, or
                  any family member or relative. We reserve the right to assume
                  the exclusive defence and control of any matter otherwise
                  subject to indemnification by you, in which event you will
                  fully cooperate with us in connection therewith.
                </Text>
              </ListItem>
              <ListItem mt={"10px"} ml={"6px"}>
                <Text>Limitation of Liability </Text>
                <Text fontWeight={400} ml={"-20px"}>
                  <b>13.1</b> The content displayed on the Platform is provided
                  without any guarantees, conditions or warranties as to its
                  accuracy. To the fullest extent permitted by law, we hereby
                  expressly exclude all conditions, warranties and other terms
                  which might otherwise be implied by statute, common law or the
                  law of equity; and any liability for any losses or damage
                  incurred by any user in connection with the Services or access
                  to the Platform and any materials posted on it.
                </Text>
                <Text fontWeight={400} ml={"-20px"} mt={"10px"}>
                  <b>13.2</b> We expressly exclude liability for consequential
                  loss, damage or corruption to other software or data or for
                  loss of profit business revenue or goodwill incurred by any
                  user.
                </Text>
                <Text fontWeight={400} ml={"-20px"} mt={"10px"}>
                  <b>13.3</b> To the fullest extent permitted by law, we will in
                  no event be liable for any damages whatsoever, whether direct,
                  indirect, general, special, compensatory, consequential,
                  and/or incidental, arising out of or relating to the conduct
                  of you or anyone else in connection with the use of the
                  Services and/or the Platform, including, including without
                  limitation, bodily injury, emotional distress, and/or other
                  damages resulting from use of the Platform.
                </Text>
                <Text fontWeight={400} ml={"-20px"} mt={"10px"}>
                  <b>13.4</b> Notwithstanding the generality of clause 12.3, to
                  the fullest extent permissible under applicable laws, if we
                  are for any reason held to be liable to you, howsoever and
                  whatsoever the cause thereof, our liability will be limited to
                  the amount received from you or S$1,000, whichever is lower.
                </Text>
              </ListItem>
              <ListItem mt={"10px"} ml={"6px"}>
                <Text>Disclaimers</Text>
                <Text fontWeight={400} ml={"-20px"}>
                  <b>14.1</b> We are not responsible for any incorrect or
                  inaccurate content posted on the Platform or in connection
                  with the Services, whether caused by users of the Platform, or
                  by any of the equipment or programming associated with or
                  utilized in the Services. The Platform may include information
                  and materials uploaded by other users. This information and
                  these materials have not been verified or approved by us. The
                  views expressed by other users on our site do not represent
                  our views or values.
                </Text>
                <Text fontWeight={400} ml={"-20px"} mt={"10px"}>
                  <b>14.2</b> We are not responsible for the conduct, whether
                  online or offline, of any user of the Platform.
                </Text>
                <Text fontWeight={400} ml={"-20px"} mt={"10px"}>
                  <b>14.3</b> We are not responsible for any error, omission,
                  interruption, deletion, defect, delay in operation or
                  transmission, communications line failure, theft or
                  destruction or unauthorized access to, or alteration of, user
                  or user communications.
                </Text>
                <Text fontWeight={400} ml={"-20px"} mt={"10px"}>
                  <b>14.4</b> We do not guarantee that the Platform is or will
                  be free of any viruses or anything that may be harmful
                  technologically.
                </Text>
                <Text fontWeight={400} ml={"-20px"} mt={"10px"}>
                  <b>14.5</b> We are not responsible for any problems or
                  technical malfunction of any telephone network or lines,
                  computer online systems, servers or providers, computer
                  equipment, software, failure of email or players on account of
                  technical problems or traffic congestion on the Internet or at
                  any website or combination thereof, including injury or damage
                  to users or to any other person&apos;s computer related to or
                  resulting from participating or downloading materials in
                  connection with the Platform and/or in connection with the
                  Services.
                </Text>
                <Text fontWeight={400} ml={"-20px"} mt={"10px"}>
                  <b>14.6</b> Under no circumstances will we be responsible for
                  any loss or damage, resulting from anyone&apos;s use of the
                  Platform or the Services, any content posted on the Platform
                  or transmitted to any third party, or any interaction or
                  contact between users of the Platform whether online or
                  offline.
                </Text>
                <Text fontWeight={400} ml={"-20px"} mt={"10px"}>
                  <b>14.7</b> Any content of whatever kind or form (“Content”)
                  made available through the Platform are Tokamak Network’s or
                  its licensors’ exclusive property. To the fullest extent
                  allowed by law, we provide the Platform, Services and Content
                  on an &ldquo;as-is&rdquo; and &ldquo;as-available&rdquo; basis
                  and grant no warranties of any kind, either express, implied,
                  statutory or otherwise with respect to the Services or the
                  Platform (including all content contained therein) including
                  (without limitation) any implied warranties of satisfactory
                  quality, merchantability, fitness for a particular purpose,
                  expectations of privacy, or non-infringement. We do not
                  warrant that the Platform or Services will be uninterrupted or
                  error-free, secure, or that any defects or errors will be
                  corrected. Any material downloaded or otherwise obtained
                  through the use of the Services or Platform is accessed at
                  your own discretion and risk, and you will be solely
                  responsible and hereby waive any and all claims and causes of
                  action with respect to any damage to your computer system,
                  internet access, download or display device, or loss or
                  corruption of data that results or may result from the
                  download of any such material. If you do not accept this
                  limitation of liability, you are not authorised to access,
                  download or obtain any material through the Platform or use or
                  access any Services.
                </Text>
                <Text fontWeight={400} ml={"-20px"} mt={"10px"}>
                  <b>14.8</b> As the Contents provided through the Platform is
                  on an “as-is”, “as-available” basis, Tokamak Network does not
                  warrant the results that may be obtained from the use of the
                  Platform, or the accuracy, reliability, currency, or adequacy
                  of any Content (whether from us or any third party), and
                  Tokamak Network expressly disclaims any liability for errors
                  or omissions in the Contents.
                </Text>
                <Text fontWeight={400} ml={"-20px"} mt={"10px"}>
                  <b>14.9</b> You agree that you will only use the Contents as
                  expressly authorised by Tokamak Network. Unless expressly
                  stated otherwise in the terms for Services, Tokamak Network
                  does not transfer any right, title or interest in the Contents
                  to you. You must not copy, modify, reproduce, distribute,
                  publish, forward, on-forward or commercially exploit the
                  Contents or create derivative works from the Contents without
                  expressly being authorised to do so by Tokamak Network. No
                  license or right is granted to the user by implication,
                  estoppel or otherwise
                </Text>
              </ListItem>
              <ListItem mt={"10px"} ml={"6px"}>
                <Text> IT Systems and Security Issues</Text>
                <Text fontWeight={400} ml={"-20px"}>
                  <b>15.1</b> You shall be responsible for obtaining and using
                  the necessary web browser and/or other software and/or
                  hardware and/or equipment to obtain access to the Platform and
                  Services at your own risk and expense. If new or different
                  versions of the web browser and/or other software and/or
                  hardware and/or equipment necessary for the operation of the
                  Platform and for Services to become available, Tokamak Network
                  reserves the right to discontinue support for any prior
                  version of the web browser and/or other software and/or
                  hardware and/or equipment. If you fail to update the relevant
                  web browser and/or other software and/or hardware and/or
                  equipment as required, the Platform may fail to receive the
                  electronic communications or to process them correctly, or you
                  may be unable to obtain access to all features and/or services
                  available, in which events Tokamak Network shall not be held
                  liable.
                </Text>
                <Text fontWeight={400} ml={"-20px"} mt={"10px"}>
                  <b>15.2</b> In the development and operations of the Platform
                  and/or Services, special emphasis has been placed on security.
                  To protect you, Tokamak Network has developed multi-level
                  security capabilities. However, you acknowledge that you may
                  still be exposed to security risks, including without
                  limitation:
                </Text>
                <Text fontWeight={400} ml={"-20px"}>
                  <b>15.2.1</b> Insufficient technical knowledge and lack of
                  safety precautions can make it easier for unauthorised third
                  parties to access your systems or devices (for example,
                  insufficiently protected storage or data on the hard disk,
                  file transfers and monitor emissions) and it is your
                  responsibility to take the necessary security precautions;
                </Text>
                <Text fontWeight={400} ml={"-20px"}>
                  <b>15.2.2</b> Your usage patterns may be monitored by third
                  parties;
                </Text>
                <Text fontWeight={400} ml={"-20px"}>
                  Third parties may gain unnoticed access to your computer
                  systems and detect access to the Platform and Services and
                  communications with Tokamak Network, and/or engage in
                  fraudulent transactions via your accounts;
                </Text>
                <Text fontWeight={400} ml={"-20px"}>
                  <b>15.2.4</b> Viruses and other malicious codes may interfere
                  with the Platform and/or the Services, the web browser or any
                  relevant computer systems;
                </Text>
                <Text fontWeight={400} ml={"-20px"}>
                  <b>15.2.5</b> Third parties may access your electronic
                  communications and any other information in transit between
                  you and us or any other user of the Platform and/or Services;
                  and
                </Text>
                <Text fontWeight={400} ml={"-20px"}>
                  <b>15.2.6</b> Use of untrustworthy software by you for the
                  transacting of Transactions (as defined in the Participation
                  Agreement) may introduce weaknesses or bugs into the core
                  infrastructural elements of the Platform, which may affect the
                  collection, storage and protection of information.
                </Text>
                <Text fontWeight={400} ml={"-20px"} mt={"10px"}>
                  <b>15.3</b> Tokamak Network will use best endeavors to protect
                  the Platform and/or Services from the security risks outlined
                  above. In the event of security risks being detected, Tokamak
                  Network reserves the right but shall not be obliged at any
                  time to suspend the Platform and Services for your protection
                  until the risks are removed.
                </Text>
                <Text fontWeight={400} ml={"-20px"} mt={"10px"}>
                  <b>15.4</b> You are advised to adopt the following security
                  precautions and practices:
                </Text>
                <Text fontWeight={400} ml={"-20px"}>
                  <b>15.4.1</b> to install multiple security apparatus on all
                  devices used for the Platform and Services;
                </Text>
                <Text fontWeight={400} ml={"-20px"}>
                  <b>15.4.2</b> to update security apparatus and associative
                  software on a regular basis;
                </Text>
                <Text fontWeight={400} ml={"-20px"}>
                  <b>15.4.3</b> not to share identification and/or
                  authentication credentials with others;
                </Text>
                <Text fontWeight={400} ml={"-20px"}>
                  <b>15.4.4</b> to make regular backups of critical data;
                </Text>
                <Text fontWeight={400} ml={"-20px"}>
                  <b>15.4.5</b> to log off from all online sessions and password
                  protect device(s) when not in use;
                </Text>
                <Text fontWeight={400} ml={"-20px"}>
                  <b>15.4.6</b> not to install software or run programs of
                  unknown or untrusted origin;
                </Text>
                <Text fontWeight={400} ml={"-20px"}>
                  <b>15.4.7</b> to delete junk, chain or suspicious emails;
                </Text>
                <Text fontWeight={400} ml={"-20px"}>
                  <b>15.4.8</b> not to open suspicious email attachments;
                </Text>
                <Text fontWeight={400} ml={"-20px"}>
                  <b>15.4.9</b> not to use a computer or a device which cannot
                  be trusted; and
                </Text>
                <Text fontWeight={400} ml={"-20px"}>
                  <b>15.4.10</b> not to use public or unsecured network
                  computers to access the Platform and Services.
                </Text>
                <Text fontWeight={400} ml={"-20px"} mt={"10px"}>
                  <b>15.5</b> The above information on security precautions and
                  good practices are not intended to be exhaustive or static.
                  Where applicable, you shall also comply with applicable laws
                  in respect of any aspect in relation to IT systems and
                  security.
                </Text>
                <Text fontWeight={400} ml={"-20px"} mt={"10px"}>
                  <b>15.6</b> Tokamak Network may, at its sole discretion,
                  appoint, partner or collaborate with third party service
                  providers to provide Services connected to the utilization and
                  operations of the Platform.
                </Text>
                <Text fontWeight={400} ml={"-20px"} mt={"10px"}>
                  <b>15.7</b> Save for the obligations in Clause 14.3, Clause 14
                  is not, and shall not be deemed to constitute, an express or
                  implied agreement by Tokamak Network for a higher standard of
                  security than that prescribed in any applicable law.
                </Text>
              </ListItem>
              <ListItem mt={"10px"} ml={"6px"}>
                <Text> Legal Jurisdiction and Dispute</Text>
                <Text fontWeight={400} ml={"-20px"}>
                  <b>16.1</b> Your use of the Platform and any dispute arising
                  out of such use of the same, the relationship between you and
                  us and these Terms of Use are subject to the laws of Singapore
                  without reference to its conflict of laws principles and that
                  the courts of Singapore shall have exclusive jurisdiction over
                  any dispute arising out of or in connection with these Terms
                  of Use. However, we retain the right to bring proceedings
                  against you for breach of any of these Terms of Use in your
                  country of residence or any other relevant country.
                </Text>

                <Text fontWeight={400} ml={"-20px"}>
                  <b>16.2</b> Your use of the Platform and any dispute arising
                  out of such use of the same, the relationship between you and
                  us and these Terms of Use are subject to the laws of Singapore
                  without reference to its conflict of laws principles and that
                  the courts of Singapore shall have exclusive jurisdiction over
                  any dispute arising out of or in connection with these Terms
                  of Use. However, we retain the right to bring proceedings
                  against you for breach of any of these Terms of Use in your
                  country of residence or any other relevant country.
                </Text>
              </ListItem>
              <ListItem mt={"10px"} ml={"6px"}>
                <Text> No Waiver</Text>
                <Text fontWeight={400} ml={"-20px"}>
                  <b>17.1</b> Any delay to exercise our rights under these Terms
                  of Use does not constitute a waiver of our rights. All of our
                  rights are expressly reserved.
                </Text>
              </ListItem>
              <ListItem mt={"10px"} ml={"6px"}>
                <Text> Ownership</Text>
                <Text fontWeight={400} ml={"-20px"}>
                  <b>18.1</b> TONStarter - Tokamak Network is fully owned and
                  operated by Tokamak Network Pte. Ltd. (UEN 201807447M), a
                  company incorporated in Singapore.
                </Text>
              </ListItem>
              <ListItem mt={"10px"} ml={"6px"}>
                <Text> Rights of Third Parties</Text>
                <Text fontWeight={400} ml={"-20px"}>
                  <b>19.1</b> A person or entity who is not a party to this
                  Terms of Use has no right under the Contracts (Rights of Third
                  Parties) Act 2001 or any similar legislation in any
                  jurisdiction to enforce any term of the Terms of Use,
                  regardless of whether such person or entity has been
                  identified by name, as a member of a class, or as answering a
                  particular description.
                </Text>
              </ListItem>
              <ListItem mt={"10px"} ml={"6px"}>
                <Text> Severability</Text>
                <Text fontWeight={400} ml={"-20px"}>
                  <b>20.1</b> If any part of this Terms of Use is found to be
                  illegal, void, or unenforceable (whether in part or in full),
                  it will not be given any effect and will be deemed not to be
                  part of the Terms of Use. However, such treatment of the
                  relevant part of the Terms of Use does not invalidate any of
                  the remaining parts of the Terms of Use.
                </Text>
              </ListItem>
            </OrderedList>
          </Flex>
        </Flex>
        <Flex mt={"30px"} justifyContent={"center"}>
          <Checkbox
            w={"18px"}
            outline={"none"}
            h={"18px"}
            mr={"12px"}
            onChange={() => setIsCheck(!isCheck)}></Checkbox>
          <Text fontSize={"13px"} fontWeight={500}>
            I confirm that I have read, understood and agreed to the Terms of
            Use above.
          </Text>
        </Flex>
        <Flex
          mt={"30px"}
          h={"90px"}
          borderTop={"1px solid #313442"}
          justifyContent={"center"}
          columnGap={"18px"}
          alignItems={"center"}>
          <Button
            w="150px"
            h="40px"
            borderRadius={"20px"}
            fontSize={"15px"}
            bg={"#0070ED"}
            color={"#fff"}
            fontWeight={600}
            _disabled={{ bg: "#353535", color: "#838383" }}
            isDisabled={!isCheck}
            _hover={{ bg: isCheck ? "#0057E6" : "#353535" }}
            onClick={() => {
              setSetup(true);
              onClose();
            }}>
            Confirm
          </Button>
          <Button
            w="150px"
            h="40px"
            borderRadius={"20px"}
            fontSize={"15px"}
            border={"2px solid #353535"}
            bg={"transparent"}
            color={"#fff"}
            _hover={{ bg: "transparent", border: "2px solid #8A8A98" }}
            onClick={onClose}
            fontWeight={600}>
            Cancel
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default TermsModal;
