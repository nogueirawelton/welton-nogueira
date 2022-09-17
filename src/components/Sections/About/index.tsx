import { Flex, Img, SimpleGrid, useBreakpointValue } from "@chakra-ui/react"
import { ToastContainer} from 'react-toastify';
import { Data } from "./Data";

import 'react-toastify/dist/ReactToastify.css';

export const About = () => {

  const isMobile = useBreakpointValue({
    base: true,
    md: false
  });

  return (
    <Flex id="about" as="section" h={isMobile ? "auto" : "100vh"} bg="zinc.900" align="center">
      <SimpleGrid maxW={1280} mx="auto" px="8" py={isMobile ? ["24", "32"] : 0} columns={isMobile ? 1 : 2} spacing={["8", "8", "112"]} alignItems="center" >
        <Img clipPath="circle()" position="relative" src="https://github.com/nogueirawelton.png" mx={isMobile ? "auto" : 0} />
        <Data />
      </SimpleGrid>
      <ToastContainer />
    </Flex>
  )
}