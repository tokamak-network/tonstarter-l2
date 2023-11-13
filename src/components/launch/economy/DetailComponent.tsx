import { Flex, Text } from "@chakra-ui/react";

const DetailComponent = () => {
  const detailData = [
    {
      name: "Funding Target",
      detail: `$ ${1000000}`,

      detail2: `(${1000000}TON)`,
    },
    {
      name: "Current Market Cap",
      detail: `$ ${1000000}`,
    },
    {
      name: "Total Supply",
      detail: `${1000000}`,
    },
    {
      name: "Token Funding Price",
      detail: `${1000000}`,
    },
    {
      name: "Token Listing Price (DEX)",
      detail: `${1000000}`,
    },
  ];
  return (
    <Flex flexDir={"column"} mt={'30px'}>
      {detailData.map((detail: any, index: number) => {
        return (
          <Flex
            key={index}
            w="100%"
            justifyContent={"space-between"}
            fontSize="12px"
            mb="9px">
            <Text lineHeight={"16px"} fontWeight={500} color={"#9d9ea5"}>
              {detail.name}
            </Text>
            <Flex>
              <Text lineHeight={"16px"} fontWeight={"bold"} color={"white.200"}>
                {detail.detail}
              </Text>
              {detail.detail2 ? (
                <Text
                  ml="3px"
                  lineHeight={"16px"}
                  fontWeight={"bold"}
                  color={"white.200"}>
                  {detail.detail2}
                </Text>
              ) : (
                <></>
              )}
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default DetailComponent;