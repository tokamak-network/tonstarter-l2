import { Overlay_Index } from "@/types/style/overlayIndex";
import {
  Flex,
  Text,
  Radio,
  RadioGroup,
  Stack,
  Tooltip,
} from "@chakra-ui/react";
import { SetStateAction, useEffect, useRef, useState } from "react";
import BlueArrow from "@/assets/icons/blue_arrow.svg";
import GrayArrow from "@/assets/icons/gray_arrow.svg";
import UserGuide from "@/components/common/UserGuide";
import Image from "next/image";
import Select from "react-select";
import DetailComponent from "./DetailComponent";
import { QuestionOutlineIcon } from "@chakra-ui/icons";
import Rocket from "@/assets/images/rocket.svg";
import ArrowGroup from "@/assets/icons/arrowGroup.svg";
import "font-proxima-nova/style.css";
import * as d3 from "d3";
import { useRecoilState } from "recoil";
import { modalStatus } from "@/recoil/launch/atom";

type Vault = {
  vaultName: string;
  color: string;
  value: number;
};
const EconomyFour = (props: { question: any }) => {
  const { question } = props;
  const [defaultStatus, setDefaultStatus] = useState("1");
  const [modalType, setModalType] = useRecoilState(modalStatus)

  useEffect(() => {
    if (defaultStatus === "2") {
      setModalType('ModifyVault');
    }
  }, [defaultStatus, setModalType]);

  const [vaults] = useState([
    {
      vaultName: "Public",
      color: "#2B66AA",
      value: 30,
    },
    {
      vaultName: "Ecosystem",
      color: "#F23C35",
      value: 35,
    },
    {
      vaultName: "Team",
      color: "#F7B729",
      value: 15,
    },
    {
      vaultName: "Liquidity",
      color: "#5DA344",
      value: 10,
    },
    {
      vaultName: "TONStarter",
      color: "#F17235",
      value: 5,
    },
    // {
    //   vaultName: "TOS",
    //   color: "#f542f5",
    //   value: 5,
    // },
  ]);

  const svgRef = useRef<SVGSVGElement>(null);
  useEffect(() => {
    if (svgRef !== undefined) {
      const h = 140;
      const w = 140;
      const radius = w / 2;
      const svg = d3
        .select(svgRef.current)
        .attr("width", w)
        .attr("height", h)
        .style("overflow", "visible")
        .style("position", "relative")
        .style("top", 70)
        .style("left", 70);
      const pie = d3.pie<Vault>().value((d) => d.value)(vaults);
      const arcGen = d3.arc<any>().innerRadius(0).outerRadius(radius);
      const color = d3.scaleOrdinal<any>().range(d3.schemeGnBu);

      svg
        .selectAll()
        .data(pie)
        .join("path")
        .attr("d", arcGen)
        .attr("fill", (d) => d.data.color);
    }
  }, [vaults, defaultStatus]);

  return (
    <Flex
      flexDir={"column"}
      mt={"21px"}
      mb={"50px"}
      w={"360px"}
      fontFamily={"Proxima Nova Rg"}>
      <Text
        fontSize={"21px"}
        fontWeight={700}
        lineHeight={"normal"}
        mb={"20px"}
        whiteSpace={"break-spaces"}
        color={"#D0D0DA"}>
        {"4. "}
        {question.question}
      </Text>
      <Text
        whiteSpace={"break-spaces"}
        fontSize={"16px"}
        letterSpacing={'0.32px'}
        fontWeight={400}
        color={"#9D9EA5"}
        lineHeight={"21px"}>
        {question.placeholder}
      </Text>
      <Flex justifyContent={"flex-start"}>
        <UserGuide />
      </Flex>
      <Flex flexDir={"column"} alignItems={"center"}>
        <Flex mt={"30px"} columnGap={"17px"} alignItems={"center"}>
          <Image src={Rocket} alt="rocket" />
          <Image src={ArrowGroup} alt="arrow-group" />
          <Flex
            mx={"3px"}
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}>
            <Text
              color={"#9D9EA5"}
              fontSize={"15px"}
              fontWeight={"bold"}
              w={"121px"}
              mb={"15px"}
              fontFamily={"Proxima Nova Lt"}
              whiteSpace={"break-spaces"}
              textAlign={"center"}>
              Your project token Allocation
            </Text>
            <Flex w={"140px"} h={"140px"} mb={"21px"}>
              <svg ref={svgRef}></svg>
            </Flex>
            <RadioGroup onChange={setDefaultStatus} value={defaultStatus}>
              <Stack
                direction="row"
                fontFamily={"Proxima Nova Rg"}
                fontSize={"14px"}
                fontWeight={400}
                color={"#fff"}>
                <Radio colorScheme={"blue"} value="1">
                  Default
                </Radio>
                <Radio value="2">Modify</Radio>
              </Stack>
            </RadioGroup>
          </Flex>
          <Flex transform={"rotate(180deg)"}>
            <Image src={ArrowGroup} alt="arrow-group" />
          </Flex>
          <Image src={Rocket} alt="rocket" />
        </Flex>
        <Flex flexWrap={"wrap"} columnGap={"30px"} mt={"30px"} w={"276px"}>
          {vaults.map((vault: any, index: number) => {
            return (
              <Flex
                w={"123px"}
                key={index}
                alignItems={"center"}
                justifyContent={"space-between"}>
                <Flex alignItems={"center"}>
                  <Flex
                    bg={vault.color}
                    height={"9px"}
                    width={"9px"}
                    borderRadius={"50%"}
                    mr={"6px"}></Flex>
                  <Text
                    fontSize={"13px"}
                    fontWeight={400}
                    letterSpacing={"0.26px"}
                    w={"64px"}
                    mr={"12px"}>
                    {vault.vaultName}
                  </Text>
                </Flex>

                <Text
                  fontSize={"13px"}
                  color={"#9D9EA5"}
                  letterSpacing={"0.26px"}
                  fontWeight={400}>
                  {vault.value} {"%"}
                </Text>
              </Flex>
            );
          })}
        </Flex>
        <Text
          mt={"21px"}
          color={"#9D9EA5"}
          fontSize={"13px"}
          fontWeight={400}
          letterSpacing={"0.26px"}>
          TONStarter section consists of three parts{" "}
          <Tooltip
            label={
              <>
                <div>1. WTON-TOS LP reward (2.5%)</div>
                <div>2. TON Staker (1.25%)</div>
                <div>3. TOS Staker (1.25%)</div>
              </>
            }
            fontSize="12px"
            bg={"#1F2128"}
            color={"#fff"}
            fontWeight={400}>
            <QuestionOutlineIcon />
          </Tooltip>
        </Text>
      </Flex>
    </Flex>
  );
};

export default EconomyFour;
