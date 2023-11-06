import {
  Modal,
  ModalOverlay,
  ModalContent,
  Text,
  Flex,
  Checkbox,
  Button,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
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
    border-radius: 0.375rem;
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
    border: 0.1px solid red;
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
  
  .rdrDayNumber {
  }
  .rdrDayPassive .rdrDayNumber span {
    color: #3c3c3c !important;
  }
  
  .rdrCalendarWrapper:not(.rdrDateRangeWrapper)
    .rdrDayHovered
    .rdrDayNumber:after {
    height: 28px;
  }
  
  .rdrDayToday .rdrDayNumber span:after {
    background: none;
    border: 1px solid #0070ed;
    border-radius: 50%;
    height: 26px;
    width: 28px;
    bottom: 0px;
  }
  .rdrDayToday:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span:after,
  .rdrDayToday:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span:after,
  .rdrDayToday:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span:after,
  .rdrDayToday:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span:after {
    background: transparent;
  }
  .rdrEndEdge {
    height: 28px;
    border-top-right-radius: 14px;
    border-bottom-right-radius: 14px;
  }
  .rdrStartEdge {
    height: 28px;
    border-top-left-radius: 14px;
    border-bottom-left-radius: 14px;
  }
  
  `;

  const [range, setRange] = useState<any>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  return (
    <Modal
      isOpen={calendarStatus !== ""}
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
      </ModalContent>
    </Modal>
  );
};

export default DualCalendarModal;
