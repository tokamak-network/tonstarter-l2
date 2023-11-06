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
const DualCalendarModal = () => {
  const [calendarStatus, setCalendarStatus] =
    useRecoilState(dualCalendarStatus);

    const styles = `
    .rdrCalendarWrapper {
        background-color: #191919;
        color:#FFF
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
        border-color: transparent rgb(0, 112, 237) transparent transparent
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
    <Modal isOpen={calendarStatus !== ""} onClose={() => setCalendarStatus("")} isCentered>
      <ModalOverlay />
      <ModalContent
        height={"477px"}
        maxW="300px"
        bg={"#191919"}
        border={"1px solid #313442"}
        fontFamily={"Proxima Nova Rg"}>
            <style>{styles}</style>
             <DateRange
             
             color="#FFFFFF"
             showMonthAndYearPickers={false}
             rangeColors={['#0070ED']}
            onChange={item => setRange([item.selection])}
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
