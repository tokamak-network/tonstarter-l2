import { Flex, Text } from "@chakra-ui/react";
import "font-proxima-nova/style.css";
import { format, getUnixTime, getTime} from "date-fns";

const TimelineComponent = (props: { project: any }) => {
  const { project } = props;

  const now = getTime(new Date())
  console.log('now', now);
  
  const timelineSteps = [
    {
        stepName: 'Snapshot',
        time: project.snapshot
    },
    {
        stepName: 'Whitelist',
        time: project.startAddWhiteTime
    },
    {
        stepName: 'Public 1',
        time: project.startExclusiveTime
    },
    {
        stepName: 'Public 2',
        time: project.startDepositTime
    },
  ]
  return (
    <Flex mt={"90px"} fontFamily={"Proxima Nova Rg"}>
      <Text color={"#fff"} fontSize={'24px'} fontWeight={700} lineHeight={'21px'}>Timeline</Text>
    </Flex>
  );
};

export default TimelineComponent;
