import { Flex, Checkbox, CheckboxGroup, Text, Stack } from "@chakra-ui/react";
import "font-proxima-nova/style.css";
import Step1 from "./Step1";
import Step2 from './Step2'
import Step3 from "./Step3";
import { useState } from "react";
const ProgressComponent = () => {
  const [step1Completed, setStep1Completed] = useState(false); 
  const[step2Completed, setStep2Completed] = useState(false); 
  const[step3Completed, setStep3Completed] = useState(false); 
  return (
    <Flex  ml={'30px'} flexDir={"column"} fontFamily={"Proxima Nova Rg"}>
    <Step1 step1Completed={step1Completed} setStep1Completed={setStep1Completed}/>
   {step1Completed &&  <Step2 step2Completed={step2Completed} setStep2Completed={setStep2Completed}/>}
   {step2Completed &&  <Step3 step3Completed={step3Completed} setStep3Completed={setStep3Completed}/>}
    </Flex>
  );
};

export default ProgressComponent;
