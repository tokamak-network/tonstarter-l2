import { Flex } from "@chakra-ui/react";
import ParticipateLayout from "@/components/participate/ParticipateLayout";

export const metadata = {
    title: 'Tonstarter L2 - Launch',
    description: 'tonstarter l2 - launch'
}

const Participate = () => {

    return (
        <Flex color={'white'}  style={{flex: 1}}>
            <ParticipateLayout/>
        </Flex>
    )
}

export default Participate