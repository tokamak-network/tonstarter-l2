import {
  Modal,
  ModalOverlay,
  ModalContent,
  Flex,
  Button,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useDisclosure,
} from "@chakra-ui/react";
import ArrowActive from "@/assets/icons/Forward_inactive.svg";
import ArrowInactive from "@/assets/icons/Forward.svg";
import Image from "next/image";
import { addDays } from "date-fns";
import { useRecoilState } from "recoil";
import { dualCalendarStatus } from "@/recoil/launch/atom";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState } from "react";
import "font-proxima-nova/style.css";

const DualCalendarModal = () => {
  const [calendarStatus, setCalendarStatus] =
    useRecoilState(dualCalendarStatus);

  const styles = `
  .rdrCalendarWrapper {
    background-color: #191919;
    color: #fff;
    border-top-left-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
    height:303px;
    display: flex;
    border-bottom:1px solid #313442;
  }
  .rdrDateDisplay {
    display: none;
  }
  .rdrNextPrevButton {
    background: none;
  }
  .rdrNextPrevButton:hover {
    background: none;
  }
  .rdrPprevButton i {
    border-color: transparent rgb(0, 112, 237) transparent transparent;
  }
  .rdrNextButton i {
    border-color: transparent transparent transparent rgb(0, 112, 237);
  }
  
  .rdrMonthName {
    display: none;
  }
  .rdrMonthAndYearWrapper {
    padding-top: 0px;
    height: 47px;
    border-bottom: 1px solid #313442;
  }
  .rdrMonthAndYearPickers {
    font-size: 14px;
    font-weight: 400;
  }
  .rdrMonths .rdrMonthsHorizontal {
    padding-left: 25px;
    padding-right: 25px;
  }
  
  .rdrMonth {
    padding-left: 25px;
    padding-right: 25px;
  }
  .rdrWeekDays {
    display: flex;
    margin-top: 12px;
  }
  
  .rdrWeekDay {
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    color: #777777;
    font-size: 10px;
    font-weight: 400;
  }
  
  .rdrDays {
    margin-top: 9px;
    row-gap: 12px;
    height: 28px;
    line-height: normal;
  }
  
  .rdrDay {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 28px;
    line-height: normal;
  }
  .rdrDay span {
    top: 0px;
    bottom: 0px;
  }
  .rdrDay span span {
    height: 28px;
    width: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff !important;
  }
  .rdrDayPassive .rdrDayNumber span {
    color: #3c3c3c !important;
  }
  
  .rdrDayToday .rdrDayNumber span:after {
    background: none;
    border: 1px solid #0070ed;
    border-radius: 50%;
    height: 26px;
    width: 26px;
    bottom: 0px;
  }
  .rdrEndEdge {
    height: 28px;
    border-top-right-radius: 14px;
    border-bottom-right-radius: 14px;
    margin-right: 2px;
  }
  .rdrStartEdge {
    height: 28px;
    border-top-left-radius: 14px;
    border-bottom-left-radius: 14px;
    margin-left: 2px;
  }
  .rdrDayStartOfWeek .rdrInRange,
  .rdrDayStartOfWeek .rdrEndEdge {
    border-radius: 0px;
  }
  .rdrDayEndOfWeek .rdrInRange,
  .rdrDayEndOfWeek .rdrStartEdge {
    border-radius: 0px;
  }
  
  .rdrDayStartOfMonth .rdrInRange,
  .rdrDayStartOfMonth .rdrEndEdge,
  .rdrDayStartOfWeek .rdrInRange,
  .rdrDayStartOfWeek .rdrEndEdge {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    margin-left: 2px;
  }
  
  .rdrDayStartOfWeek .rdrEndEdge {
    border-top-right-radius: 14px;
    border-bottom-right-radius: 14px;
  }
  
  .rdrDayStartOfWeek .rdrStartEdge {
    border-top-left-radius: 14px;
    border-bottom-left-radius: 14px;
  }
  
  .rdrDayEndOfWeek .rdrEndEdge {
    border-top-right-radius: 14px;
    border-bottom-right-radius: 14px;
  }
  .rdrDayEndOfWeek .rdrStartEdge {
    border-top-left-radius: 14px;
    border-bottom-left-radius: 14px;
  }
  .rdrDayStartOfMonth .rdrInRange,
  .rdrDayStartOfMonth .rdrEndEdge {
    border-top-right-radius: 13px;
    border-bottom-right-radius: 13px;
  }
  
  .rdrDayToday:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span:after,
  .rdrDayToday:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span:after,
  .rdrDayToday:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span:after,
  .rdrDayToday:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span:after {
    background: transparent;
  }
  
  .rdrDayStartPreview {
    margin-left: 3px;
  }
  
  .rdrDayEndPreview {
    margin-right: 3px;
  }
  .rdrDayEndOfWeek .rdrDayEndOfWeek .rdrStartEdge {
    border-radius: 14px;
  }
  
  .rdrStartEdge .rdrEndEdge {
    border-radius: 14px;
  }
  .rdrDayDisabled .rdrInRange,
  .rdrDayDisabled .rdrStartEdge,
  .rdrDayDisabled .rdrEndEdge,
  .rdrDayDisabled .rdrSelected,
  .rdrDayDisabled .rdrDayStartPreview,
  .rdrDayDisabled .rdrDayInPreview,
  .rdrDayDisabled .rdrDayEndPreview {
    display: none;
  }
  
  .rdrDayHovered {
    border: none;
  }  `;

  const [range, setRange] = useState<any>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Modal
      isOpen={calendarStatus !== "" && calendarStatus !== 'snapshot'}
      onClose={() => setCalendarStatus("")}
      isCentered>
      <ModalOverlay />
      <ModalContent
        height={"477px"}
        maxW="302px"
        bg={"#191919"}
        border={"1px solid #313442"}
        fontFamily={"Proxima Nova Rg"}>
        <style>{styles}</style>
        <DateRange
          showMonthAndYearPickers={false}
          rangeColors={["#0070ED"]}
          onChange={(item) => setRange([item.selection])}
          editableDateInputs={true}
          moveRangeOnFirstSelection={false}
          ranges={range}
          months={1}
          direction="horizontal"
          className="calendarElement"
        />
        <Flex
          height={"53px"}
          borderBottom={"1px solid #313442"}
          justifyContent={"center"}
          alignItems={"center"}>
          <NumberInput
            maxH={"29px"}
            maxW={"44px"}
            defaultValue={1}
            colorScheme={"gray"}
            max={12}
            min={1}
            display={"flex"}
            alignItems={"center"}
            mr={"10px"}
            // onChange={(value) => {
            //   setHours(parseInt(value));
            // }}
            borderColor={"transparent"}
            _focus={{
              borderColor: "transparent",
            }}
            _active={{
              borderColor: "transparent",
            }}
            _hover={{
              borderColor: "transparent",
            }}
            focusBorderColor="transparent">
            <NumberInputField
              fontSize="24px"
              fontWeight={400}
              pl={"0px"}
              pr={"14px"}
              textAlign={"right"}
              _hover={{
                borderColor: "transparent",
              }}
            />
            <NumberInputStepper
              borderColor={"transparent"}
              rowGap={"0px"}
              width={"16px"}
              justifyContent={"center"}
              alignItems={"center"}
              display={"flex"}>
              <NumberIncrementStepper
                borderColor={"transparent"}
                _active={{ bg: "transparent" }}>
                <Image src={ArrowInactive} alt="arrowActive" />
              </NumberIncrementStepper>
              <NumberDecrementStepper
                marginLeft={"2px"}
                borderColor={"transparent"}
                transform={"rotate(180deg)"}
                _active={{ bg: "transparent" }}>
                <Image src={ArrowInactive} alt="arrowActive" />
              </NumberDecrementStepper>
            </NumberInputStepper>
          </NumberInput>
          <NumberInput
            maxH={"29px"}
            maxW={"44px"}
            display={"flex"}
            alignItems={"center"}
            defaultValue={0}
            max={59}
            min={0}
            mr={"10px"}
            borderColor={"transparent"}
            _focus={{
              borderColor: "transparent",
            }}
            _active={{
              borderColor: "transparent",
            }}
            _hover={{
              borderColor: "transparent",
            }}
            focusBorderColor="transparent">
            <NumberInputField
              fontSize="24px"
              pl={"0px"}
              pr={"14px"}
              fontWeight={400}
              textAlign={"right"}
              _hover={{
                borderColor: "transparent",
              }}
            />
            <NumberInputStepper
              borderColor={"transparent"}
              rowGap={"0px"}
              width={"16px"}
              justifyContent={"center"}
              alignItems={"center"}
              display={"flex"}>
              <NumberIncrementStepper
                borderColor={"transparent"}
                _active={{ bg: "transparent" }}>
                <Image src={ArrowInactive} alt="arrowActive" />
              </NumberIncrementStepper>
              <NumberDecrementStepper
                marginLeft={"2px"}
                borderColor={"transparent"}
                transform={"rotate(180deg)"}
                _active={{ bg: "transparent" }}>
                <Image src={ArrowInactive} alt="arrowActive" />
              </NumberDecrementStepper>
            </NumberInputStepper>
          </NumberInput>
          <Select
            h={"32px"}
          width={'72px'}
            borderRadius={'0px'}
            _active={{border:'none', outline:'none'}}
            _focus={{border:'none', outline:'none'}}
            _focusVisible={{
              border: "none !important",
            }}
            // color={themeDesign.select[colorMode]}
            bg='#222'
            border={'none'}
            fontWeight={500}
            fontStyle={'15px'}
            // onChange={(e) => {
            //   setMeridiem(e.target.value);
            // }}
          >
            <option>AM</option>
            <option>PM</option>
          </Select>
        </Flex>
        <Flex
          height={"53px"}
          borderBottom={"1px solid #313442"}
          justifyContent={"center"}
          alignItems={"center"}>
        <NumberInput
            maxH={"29px"}
            maxW={"44px"}
            defaultValue={1}
            colorScheme={"gray"}
            max={12}
            min={1}
            display={"flex"}
            alignItems={"center"}
            mr={"10px"}
            // onChange={(value) => {
            //   setHours(parseInt(value));
            // }}
            borderColor={"transparent"}
            _focus={{
              borderColor: "transparent",
            }}
            _active={{
              borderColor: "transparent",
            }}
            _hover={{
              borderColor: "transparent",
            }}
            focusBorderColor="transparent">
            <NumberInputField
              fontSize="24px"
              fontWeight={400}
              pl={"0px"}
              pr={"14px"}
              textAlign={"right"}
              _hover={{
                borderColor: "transparent",
              }}
            />
            <NumberInputStepper
              borderColor={"transparent"}
              rowGap={"0px"}
              width={"16px"}
              justifyContent={"center"}
              alignItems={"center"}
              display={"flex"}>
              <NumberIncrementStepper
                borderColor={"transparent"}
                _active={{ bg: "transparent" }}>
                <Image src={ArrowInactive} alt="arrowActive" />
              </NumberIncrementStepper>
              <NumberDecrementStepper
                marginLeft={"2px"}
                borderColor={"transparent"}
                transform={"rotate(180deg)"}
                _active={{ bg: "transparent" }}>
                <Image src={ArrowInactive} alt="arrowActive" />
              </NumberDecrementStepper>
            </NumberInputStepper>
          </NumberInput>
          <NumberInput
            maxH={"29px"}
            maxW={"44px"}
            display={"flex"}
            alignItems={"center"}
            defaultValue={0}
            max={59}
            min={0}
            mr={"10px"}
            borderColor={"transparent"}
            _focus={{
              borderColor: "transparent",
            }}
            _active={{
              borderColor: "transparent",
            }}
            _hover={{
              borderColor: "transparent",
            }}
            focusBorderColor="transparent">
            <NumberInputField
              fontSize="24px"
              pl={"0px"}
              pr={"14px"}
              fontWeight={400}
              textAlign={"right"}
              _hover={{
                borderColor: "transparent",
              }}
            />
            <NumberInputStepper
              borderColor={"transparent"}
              rowGap={"0px"}
              width={"16px"}
              justifyContent={"center"}
              alignItems={"center"}
              display={"flex"}>
              <NumberIncrementStepper
                borderColor={"transparent"}
                _active={{ bg: "transparent" }}>
                <Image src={ArrowInactive} alt="arrowActive" />
              </NumberIncrementStepper>
              <NumberDecrementStepper
                marginLeft={"2px"}
                borderColor={"transparent"}
                transform={"rotate(180deg)"}
                _active={{ bg: "transparent" }}>
                <Image src={ArrowInactive} alt="arrowActive" />
              </NumberDecrementStepper>
            </NumberInputStepper>
          </NumberInput>
          <Select
            h={"32px"}
          width={'72px'}
            borderRadius={'0px'}
            _active={{border:'none', outline:'none'}}
            _focus={{border:'none', outline:'none'}}
            _focusVisible={{
              border: "none !important",
            }}
            // color={themeDesign.select[colorMode]}
            bg='#222'
            border={'none'}
            fontWeight={500}
            fontStyle={'15px'}
            // onChange={(e) => {
            //   setMeridiem(e.target.value);
            // }}
          >
            <option>AM</option>
            <option>PM</option>
          </Select>
        </Flex>
        <Flex
          columnGap={"12px"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"65px"}>
          <Button
            w="110px"
            h="35px"
            borderRadius={"20px"}
            fontSize={"15px"}
            bg={"#0070ED"}
            color={"#fff"}
            fontWeight={600}
            _disabled={{ bg: "#353535", color: "#838383" }}
            _hover={{ bg: "#0057E6" }}>
            Set up
          </Button>
          <Button
            w="110px"
            h="35px"
            borderRadius={"20px"}
            fontSize={"15px"}
            border={"1px solid #353535"}
            bg={"transparent"}
            color={"#fff"}
            fontWeight={600}
            onClick={() => setCalendarStatus("")}
            _hover={{ bg: "transparent", border: "2px solid #8A8A98" }}>
            Cancel
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default DualCalendarModal;
