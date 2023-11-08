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
import { Calendar } from "react-date-range";

const SingleCalendarModal = () => {
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
  
  .rdrDayHovered {
    border: none;
  } 
  .rdrSelected {
    color: #0070ed !important;
    height:28px;
    width:28px;
    left:8px;
    right:0px;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius:14px
  } `;

  const [range, setRange] = useState<any>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const [date, setDate] = useState<any>(null);

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Modal
      isOpen={calendarStatus === "snapshot"}
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
        {/* <DateRange
          showMonthAndYearPickers={false}
          rangeColors={["#0070ED"]}
          onChange={(item) => setRange([item.selection])}
          editableDateInputs={true}
          moveRangeOnFirstSelection={false}
          ranges={range}
          months={1}
          direction="horizontal"
          className="calendarElement"
        /> */}
         <Calendar   showMonthAndYearPickers={false} onChange={item => setDate(item)}  date={date} />
      
       
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

export default SingleCalendarModal;
