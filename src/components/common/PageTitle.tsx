import { Flex , Text} from "@chakra-ui/react";
import "@fontsource/open-sans/700.css";

const PageTitle = (props:{title: string}) => {
const {title} = props
    return (
       <Flex>
<Text color={'#fff'} fontWeight={700} fontSize={'30px'}  fontFamily={"Open Sans, sans-serif"}>{title}</Text>
       </Flex>
    )
}

export default PageTitle