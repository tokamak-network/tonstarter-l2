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
import styles from '@/utils/DualCalendarStyles'

const DualCalendarModal = () => {
  const [calendarStatus, setCalendarStatus] =
    useRecoilState(dualCalendarStatus);


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
