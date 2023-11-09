import { Flex, Input, Text } from "@chakra-ui/react";
import { SetStateAction, useMemo, useState } from "react";
import { useTimezoneSelect, allTimezones } from "react-timezone-select";
import Select from "react-select";
import { Overlay_Index } from "@/types/style/overlayIndex";
import Image from "next/image";
import BlueArrow from "@/assets/icons/blue_arrow.svg";
import GrayArrow from "@/assets/icons/gray_arrow.svg";
import UserGuide from "@/components/common/UserGuide";
import { dualCalendarStatus } from "@/recoil/launch/atom";
import { useRecoilState } from "recoil";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type SelectOption = {
  abbrev: string;
  altName: string;
  label: string;
  offset: number;
  value: string;
};
const QuestionSix = (props: { question: any }) => {
  const { question } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const questions = [
    { question: "Select time zone", placeholder: "Time zone selector" },
    { question: "Public sale 1", placeholder: "From", placeholder1: "To" },
    { question: "Public sale 2", placeholder: "From", placeholder1: "To" },
    { question: "Snapshot", placeholder: "Snapshot" },
    { question: "Whitelist", placeholder: "From", placeholder1: "To" },
  ];

  const customStyles = (isOpen: boolean) => {
    return {
      control: (styles: any) => ({
        ...styles,
        backgroundColor: "#252525",
        width: "330px",
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

  const timezones = allTimezones;
  const labelStyle = "original";
  const { options: zones, parseTimezone } = useTimezoneSelect({
    labelStyle,
    timezones,
  });

  const ValueContainer = (props: {
    selectedOption: SelectOption | null;
    isOpen: boolean;
    setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  }) => {
    const { selectedOption, isOpen, setIsOpen } = props;
    if (selectedOption) {
      return (
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          onClick={() => setIsOpen(!isOpen)}
          fontSize={14}
          width={"100%"}>
          <Text
            color={"#fff"}
            whiteSpace={"nowrap"}
            overflow={"hidden"}
            textOverflow={"ellipsis"}
            fontSize={"18px"}>
            {selectedOption.label}
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
        <Text fontSize={"18px"}>Time zone selector</Text>
        <Flex transform={isOpen ? "" : "rotate(180deg)"}>
          <Image src={isOpen ? BlueArrow : GrayArrow} alt="BlueArrow" />
        </Flex>
      </Flex>
    );
  };

  const QuestionOne = () => {
    const [selectedOption, setSelectedOption] = useState<any | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const onChange = async (data: SelectOption) => {
      setSelectedOption(data);
      setIsOpen(false);
    };
    const CustomOption = (props: { data: any }) => {
      const { data } = props;
      return (
        <Flex
          rowGap={"0px"}
          fontFamily={"Proxima Nova Rg"}
          bg={"#252525"}
          p={"0px"}
          h={"22px"}
          w={"290px"}
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
            {data.label}{" "}
          </Text>
        </Flex>
      );
    };

    return (
      <Flex flexDir={"column"} ml={"30px"}>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={"20px"}>
          <Text color={"#9D9EA5"} fontWeight={600} fontSize={"18px"}>
            {"6-"}
            {currentIndex + 1} {questions[0].question}
          </Text>
          <Text
            color={"#353535"}
            fontWeight={400}
            fontSize={"14px"}
            ml={"30px"}
            cursor={"pointer"}
            _hover={{ color: "#0070ED" }}
            onClick={() => setCurrentIndex(currentIndex + 1)}>
            Next
          </Text>
        </Flex>
        {/* <select onChange={e => console.log(parseTimezone(e.currentTarget.value))}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>{option.label}</option>
      ))}
    </select> */}
        <Select
          placeholder="Time zone selector"
          options={zones}
          menuIsOpen={isOpen}
          //   value={selectedTimezone}
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
          styles={customStyles(isOpen)}
          value={selectedOption}></Select>
        <UserGuide />
      </Flex>
    );
  };

  const QuestionTwo = () => {
    const [value, onChange] = useState<Value>([new Date(), new Date()]);
    const [calendarStatus, setCalendarStatus] =
      useRecoilState(dualCalendarStatus);

 
    return (
      <Flex flexDir={"column"} ml={"30px"}>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={"20px"}>
          <Text color={"#9D9EA5"} fontWeight={600} fontSize={"18px"}>
            {"6-"}
            {currentIndex + 1} {questions[1].question}
          </Text>
          <Flex columnGap={"9px"}>
            <Text
              color={"#353535"}
              fontWeight={400}
              fontSize={"14px"}
              cursor={"pointer"}
              _hover={{ color: "#0070ED" }}
              onClick={() => setCurrentIndex(currentIndex - 1)}>
              Prev
            </Text>
            <Text
              color={"#353535"}
              fontWeight={400}
              fontSize={"14px"}
              cursor={"pointer"}
              _hover={{ color: "#0070ED" }}>
              |
            </Text>
            <Text
              color={"#353535"}
              fontWeight={400}
              fontSize={"14px"}
              cursor={"pointer"}
              _hover={{ color: "#0070ED" }}
              onClick={() => setCurrentIndex(currentIndex + 1)}>
              Next
            </Text>
          </Flex>
        </Flex>
        <Flex flexDir={"column"} rowGap={"15px"}>
          {/* <Flex w={"330px"} h={"51px"} bg={"#252525"}></Flex> */}
          <Input
            w={"330px"}
            h={"51px"}
            _hover={{}}
            bg={"#252525"}
            borderRadius={0}
            _focusVisible={{
              border: "none !important",
            }}
            placeholder={"From"}
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
            onClick={() => setCalendarStatus('public1')}
          />
           <Input
            w={"330px"}
            h={"51px"}
            _hover={{}}
            bg={"#252525"}
            borderRadius={0}
            _focusVisible={{
              border: "none !important",
            }}
            placeholder={"To"}
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
            onClick={() => setCalendarStatus('public1')}
          />
           <UserGuide />
        </Flex>
       
        

        {/* <style>{styles}</style>
        <DateRange
            onChange={item => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="horizontal"
            className="calendarElement"
          /> */}
      </Flex>
    );
  };

  const QuestionThree = () => {
    const [value, onChange] = useState<Value>([new Date(), new Date()]);
    const [calendarStatus, setCalendarStatus] =
      useRecoilState(dualCalendarStatus);

 
    return (
      <Flex flexDir={"column"} ml={"30px"}>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={"20px"}>
          <Text color={"#9D9EA5"} fontWeight={600} fontSize={"18px"}>
            {"6-"}
            {currentIndex + 1} {questions[2].question}
          </Text>
          <Flex columnGap={"9px"}>
            <Text
              color={"#353535"}
              fontWeight={400}
              fontSize={"14px"}
              cursor={"pointer"}
              _hover={{ color: "#0070ED" }}
              onClick={() => setCurrentIndex(currentIndex - 1)}>
              Prev
            </Text>
            <Text
              color={"#353535"}
              fontWeight={400}
              fontSize={"14px"}
              cursor={"pointer"}
              _hover={{ color: "#0070ED" }}>
              |
            </Text>
            <Text
              color={"#353535"}
              fontWeight={400}
              fontSize={"14px"}
              cursor={"pointer"}
              _hover={{ color: "#0070ED" }}
              onClick={() => setCurrentIndex(currentIndex + 1)}>
              Next
            </Text>
          </Flex>
        </Flex>
        <Flex flexDir={"column"} rowGap={"15px"}>
          {/* <Flex w={"330px"} h={"51px"} bg={"#252525"}></Flex> */}
          <Input
            w={"330px"}
            h={"51px"}
            _hover={{}}
            bg={"#252525"}
            borderRadius={0}
            _focusVisible={{
              border: "none !important",
            }}
            placeholder={"From"}
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
            onClick={() => setCalendarStatus('public2')}
          />
           <Input
            w={"330px"}
            h={"51px"}
            _hover={{}}
            bg={"#252525"}
            borderRadius={0}
            _focusVisible={{
              border: "none !important",
            }}
            placeholder={"To"}
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
            onClick={() => setCalendarStatus('public2')}
          />
           <UserGuide />
        </Flex>
       
      </Flex>
    );
  };

  const QuestionFour = () => {
    const [calendarStatus, setCalendarStatus] =
    useRecoilState(dualCalendarStatus);

    return (
      <Flex flexDir={"column"} ml={"30px"}>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={"20px"}>
          <Text color={"#9D9EA5"} fontWeight={600} fontSize={"18px"}>
            {"6-"}
            {currentIndex + 1} {questions[3].question}
          </Text>
          <Flex columnGap={"9px"}>
            <Text
              color={"#353535"}
              fontWeight={400}
              fontSize={"14px"}
              cursor={"pointer"}
              _hover={{ color: "#0070ED" }}
              onClick={() => setCurrentIndex(currentIndex - 1)}>
              Prev
            </Text>
            <Text
              color={"#353535"}
              fontWeight={400}
              fontSize={"14px"}
              cursor={"pointer"}
              _hover={{ color: "#0070ED" }}>
              |
            </Text>
            <Text
              color={"#353535"}
              fontWeight={400}
              fontSize={"14px"}
              cursor={"pointer"}
              _hover={{ color: "#0070ED" }}
              onClick={() => setCurrentIndex(currentIndex + 1)}>
              Next
            </Text>
          </Flex>
        </Flex>
        <Input
            w={"330px"}
            h={"51px"}
            _hover={{}}
            bg={"#252525"}
            borderRadius={0}
            _focusVisible={{
              border: "none !important",
            }}
            placeholder={"Snapshot"}
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
            onClick={() => setCalendarStatus('snapshot')}
          />
             <UserGuide />
      </Flex>
    );
  };

  const QuestionFive = () => {
    const [calendarStatus, setCalendarStatus] =
    useRecoilState(dualCalendarStatus);
    return (
      <Flex flexDir={"column"} ml={"30px"}>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        mb={"20px"}>
        <Text color={"#9D9EA5"} fontWeight={600} fontSize={"18px"}>
          {"6-"}
          {currentIndex + 1} {questions[4].question}
        </Text>
        <Flex columnGap={"9px"}>
          <Text
            color={"#353535"}
            fontWeight={400}
            fontSize={"14px"}
            cursor={"pointer"}
            _hover={{ color: "#0070ED" }}
            onClick={() => setCurrentIndex(currentIndex - 1)}>
            Prev
          </Text>
          
        </Flex>
      </Flex>
      <Flex flexDir={"column"} rowGap={"15px"}>
        {/* <Flex w={"330px"} h={"51px"} bg={"#252525"}></Flex> */}
        <Input
          w={"330px"}
          h={"51px"}
          _hover={{}}
          bg={"#252525"}
          borderRadius={0}
          _focusVisible={{
            border: "none !important",
          }}
          placeholder={"From"}
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
          onClick={() => setCalendarStatus('whitelist')}
        />
         <Input
          w={"330px"}
          h={"51px"}
          _hover={{}}
          bg={"#252525"}
          borderRadius={0}
          _focusVisible={{
            border: "none !important",
          }}
          placeholder={"To"}
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
          onClick={() => setCalendarStatus('whitelist')}
        />
         <UserGuide />
      </Flex>
     
    </Flex>
    );
  };

  const getSubQuestion = useMemo(() => {
    switch (currentIndex) {
      case 0:
        return <QuestionOne />;
      case 1:
        return <QuestionTwo />;
      case 2:
        return <QuestionThree />;
      case 3:
        return <QuestionFour />;
      case 4:
        return <QuestionFive />;
    }
  }, [currentIndex]);

  return (
    <Flex
      w={"360px"}
      fontFamily={"Proxima Nova Rg"}
      flexDir={"column"}
     
      mb={"60px"}>
      <Text
        fontSize={"21px"}
        fontWeight={700}
        lineHeight={"normal"}
        mb={"20px"}
        whiteSpace={"break-spaces"}
        color={"#D0D0DA"}>
        {6}
        {". "}
        {question.question}
      </Text>
      {getSubQuestion}
    </Flex>
  );
};

export default QuestionSix;
