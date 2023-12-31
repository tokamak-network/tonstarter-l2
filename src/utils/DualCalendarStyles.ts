const styles = `
.rdrCalendarWrapper {
  background-color: #191919;
  color: #fff;
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
  height: 303px;
  display: flex;
  border-bottom: 1px solid #313442;
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
  margin-right: 2px;
}
.rdrStartEdge {
  height: 28px;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  margin-left: 2px;
}
.rdrDayEndPreview {
  margin-right: 4px;
}

.rdrDayStartPreview {
  margin-left: 4px;
}
.rdrDayEndOfMonth .rdrInRange,
.rdrDayEndOfMonth .rdrStartEdge,
.rdrDayEndOfWeek .rdrInRange,
.rdrDayEndOfWeek .rdrStartEdge {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}

.rdrDayEndOfMonth .rdrStartEdge,
.rdrDayEndOfWeek .rdrStartEdge {
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
}

.rdrDayStartOfMonth .rdrInRange,
.rdrDayStartOfMonth .rdrEndEdge,
.rdrDayStartOfWeek .rdrInRange,
.rdrDayStartOfWeek .rdrEndEdge {
border-top-left-radius: 0px;
border-bottom-left-radius: 0px;
}

.rdrDayStartOfMonth .rdrEndEdge,
.rdrDayStartOfWeek .rdrEndEdge {
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
}
  `;


  export default styles