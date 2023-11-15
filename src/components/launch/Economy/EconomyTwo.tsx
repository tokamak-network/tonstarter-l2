import { Overlay_Index } from "@/types/style/overlayIndex";
import {
  Flex,
  Text,
  NumberInput,
  NumberInputField,
  Input,
} from "@chakra-ui/react";
import { SetStateAction, useState } from "react";
import BlueArrow from "@/assets/icons/blue_arrow.svg";
import GrayArrow from "@/assets/icons/gray_arrow.svg";
import UserGuide from "@/components/common/UserGuide";
import Image from "next/image";
import Select from "react-select";
import DetailComponent from "./DetailComponent";

type SelectOption = {
  value: string;
};

const EconomyTwo = (props: { question: any }) => {
  const { question } = props;
  const customStyles = (isOpen: boolean, selectedOption: SelectOption) => {
    return {
      control: (styles: any) => ({
        ...styles,
        backgroundColor: "#252525",
        width: selectedOption.value === "Other" && !isOpen ? "120px" : "360px",
        height: "51px",
        border: "none !important",
        alignItem: "center",
        paddingLeft: "20px",
        paddingRight: "20px",
        color: "#818181",
        fontSize: "18px",
        fontWeight: 600,
        cursor: "pointer",
        borderRadius: "0px",
        borderBottom: !isOpen ? "" : "1px solid #0070ED !important",
        _hover: { borderBottom: "1px solid #0070ED" },
      }),
      menu: (styles: any) => ({
        zIndex: Overlay_Index.AlwaysTop,
      }),
    };
  };

  const ValueContainer = (props: {
    selectedOption: SelectOption | null;
    isOpen: boolean;
    setIsOpen: React.Dispatch<SetStateAction<boolean>>;
    placeHolder: string;
  }) => {
    const { selectedOption, isOpen, setIsOpen, placeHolder } = props;

    console.log(
      'selectedOption?.value === "Other" && !isOpen',
      selectedOption?.value === "Other",
      !isOpen
    );

    if (selectedOption?.value !== "") {
      return (
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          onClick={() => setIsOpen(!isOpen)}
          fontSize={14}
          width={
            selectedOption?.value === "Other" && !isOpen ? "120px" : "360px"
          }>
          <Text
            color={"#fff"}
            whiteSpace={"nowrap"}
            overflow={"hidden"}
            textOverflow={"ellipsis"}
            fontSize={"18px"}>
            {selectedOption?.value}
          </Text>
          <Flex transform={isOpen ? "" : "rotate(180deg)"}>
            <Image src={isOpen ? BlueArrow : GrayArrow} alt="BlueArrow" />
          </Flex>
        </Flex>
      );
    }
    return (
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        fontSize={14}
        width={"100%"}
        onClick={() => setIsOpen(!isOpen)}>
        <Text fontSize={"18px"}>{placeHolder}</Text>
        <Flex transform={isOpen ? "" : "rotate(180deg)"}>
          <Image src={isOpen ? BlueArrow : GrayArrow} alt="BlueArrow" />
        </Flex>
      </Flex>
    );
  };

  const [selectedOption, setSelectedOption] = useState<any | null>({
    value: "",
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onChange = async (data: SelectOption) => {
    setSelectedOption(data);
    setIsOpen(false);
  };

  const dropValues = [
    { value: "100000" },
    { value: "500000" },
    { value: "1000000" },
    { value: "Other" },
  ];
  const CustomOption = (props: { data: any }) => {
    const { data } = props;
    console.log("data", data);

    return (
      <Flex
        rowGap={"0px"}
        fontFamily={"Proxima Nova Rg"}
        bg={"#252525"}
        p={"0px"}
        h={"22px"}
        w={selectedOption.value !== "Other" && isOpen ? "290px" : "120px"}
        fontSize={"18px"}
        fontWeight={400}
        cursor={"pointer"}
        _hover={{ color: "#0070ED" }}
        onClick={() => onChange(data)}
        color={"#fff"}>
        <Text
          whiteSpace={"nowrap"}
          overflow={"hidden"}
          textOverflow={"ellipsis"}>
          {data.value !== "Other" ? "$ " : ""}
          {data.value !== "Other"
            ? Number(data.value).toLocaleString()
            : data.value}{" "}
        </Text>
      </Flex>
    );
  };

  return (
    <Flex
      
      flexDir={"column"}
      mt={"21px"}
      h={"375px"}
      w={"360px"}
      fontFamily={"Proxima Nova Rg"}>
      <Text
        fontSize={"21px"}
        fontWeight={700}
        lineHeight={"normal"}
        mb={"20px"}
        whiteSpace={"break-spaces"}
        color={"#D0D0DA"}>
        {"2. "}
        {question.question}
      </Text>
      <Flex columnGap={"10px"}>
        <Select
          placeholder="Time zone selector"
          options={dropValues}
          menuIsOpen={isOpen}
          //   value={selectedTimezone}
          components={{
            Option: CustomOption,
            ValueContainer: () => (
              <ValueContainer
                selectedOption={selectedOption}
                placeHolder={question.placeholder}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            ),
            MenuList: (e) => (
              <Flex
                flexDir={"column"}
                mt={"0px"}
                rowGap={"11px"}
                pt={"15px"}
                h={"156px"}
                overflowY={"scroll"}
                overflowX={"hidden"}
                px={"20px"}
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
                }}
                zIndex={1000}
                bg={"#252525"}>
                {e.children}
              </Flex>
            ),
            IndicatorsContainer: () => null,
          }}
          //@ts-ignore
          styles={customStyles(isOpen, selectedOption)}
          value={selectedOption}></Select>
        {!isOpen && selectedOption.value === "Other" ? (
          <Input
            w={"330px"}
            h={"51px"}
            bg={"#252525"}
            borderRadius={0}
            _focusVisible={{
              borderBottom: "1px solid #0070ED !important",
            }}
            textAlign={"right"}
            _hover={{ borderBottom: "1px solid #0070ED !important" }}
            placeholder={"0 TON"}
            outline={"none"}
            fontSize={"18px"}
            fontWeight={600}
            border={"transparent"}
            pl={"20px"}
            _placeholder={{
              opacity: 1,
              color: "#818181",
              fontsize: "18px",
              lineHeight: "normal",
            }}
          />
        ) : (
          <></>
        )}
      </Flex>
      <Text
        mt={"9px"}
        lineHeight={"normal"}
        textAlign={"right"}
        mb={"-8px"}
        color={"#9D9EA5"}
        fontWeight={600}
        fontSize={"16px"}>
        {"$"} 0.00/TON
      </Text>

      <UserGuide />
      <DetailComponent />
    </Flex>
  );
};

export default EconomyTwo;
