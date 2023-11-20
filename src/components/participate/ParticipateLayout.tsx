'use client';

import { Flex, Text, Grid, GridItem } from "@chakra-ui/react";
import "font-proxima-nova/style.css";
import ParticipateComponent from "./ParticipateComponent";

const ParticipateLayout = () => {
  const tier = 1;
  
  const grids = [
    {
      title: "Phase 1 Total Staked",
      content: "2,646,790.91",
      unit: "TON",
    },
    {
      title: "Total Ecosystem Value Locked",
      content: "1,560,987.24",
      unit: "$",
    },
    {
      title: "Raised Capital",
      content: "7,115,401.98",
      unit: "$",
    },
    {
      title: "Projects you participate in",
      content: "7",
      unit: "",
    },
    {
      title: "ATH since IDO",
      content: "60.7%",
      unit: "",
    },
    {
      title: "Your sTOS tier:",
      content: "456.12",
      unit: "sTOS",
    },
  ];
  const GridContent = (props: {
    title: string;
    content: string;
    unit: string;
  }) => {
    const { title, content, unit } = props;

    return (
      <Flex
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        lineHeight={"normal"}
        flexDir={"column"}
        rowGap={"9px"}>
        <Text color={"#9D9EA5"} fontSize={"16px"} fontWeight={500}>
          {title} {tier}{" "}
          {unit === "sTOS" ? (
            <span
              onClick={() => console.log("manage")}
              style={{ color: "#0070ED", cursor:'pointer' }}>
              manage
            </span>
          ) : (
            <></>
          )}
        </Text>
        <Text color={"#D0D0DA"} fontSize={"28px"} fontWeight={700}>
          {unit === "$" ? unit : ""} {content}{" "}
          {unit !== "$" ? (
            <span style={{ fontSize: "15px" }}>{unit}</span>
          ) : (
            <></>
          )}
        </Text>
      </Flex>
    );
  };
  return (
    <Flex
      flexDir={"column"}
      color={"white"}
      alignItems={"center"}
      style={{ flex: 1 }}
      lineHeight={"normal"}
      fontFamily={"Proxima Nova Rg"}>
      <Text mt={"60px"} color={"#fff"} fontSize={"40px"} fontWeight={700}>
        TONStarter
      </Text>
      <Text mt={"18px"} color={"#64646F"} fontSize={"20px"} fontWeight={400}>
        Buy or earn new blockchain project tokens
      </Text>
      <Grid
        width={"1050px"}
        height={"281px"}
        mt={"60px"}
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(3, 1fr)">
        {grids.slice(0, 3).map((grid: any, index: number) => {
          return (
            <GridItem
              key={index}
              height={"62px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDir={"column"}>
              <GridContent
                title={grid.title}
                content={grid.content}
                unit={grid.unit}
              />
            </GridItem>
          );
        })}

        <GridItem
          h={"157px"}
          rowSpan={1}
          colSpan={3}
          display={"flex"}
          justifyContent={"center"}>
          <Text mt={"90px"} color={"#fff"} fontSize={"30px"} fontWeight={600}>Your Performance</Text>
        </GridItem>

        {grids.slice(3, 6).map((grid: any, index: number) => {
          return (
            <GridItem
              key={index}
              height={"62px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDir={"column"}>
              <GridContent
                title={grid.title}
                content={grid.content}
                unit={grid.unit}
              />
            </GridItem>
          );
        })}
      </Grid>
      <ParticipateComponent/>
    </Flex>
  );
};

export default ParticipateLayout;
