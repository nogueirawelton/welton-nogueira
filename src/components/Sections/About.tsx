import { Box, Flex, Img, SimpleGrid, Text, useBreakpointValue, Button as ChakraButton } from "@chakra-ui/react"
import { Button } from "../Button";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiOutlineCloudDownload } from "react-icons/ai";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface AboutProps {
  
}

export const About = ({  }: AboutProps) => {

  const isMobile = useBreakpointValue({
    base: true,
    md: false
  });

  function handleCopyEmail() {
    navigator.clipboard.writeText("welton.nogueira.dev@gmail.com");
    toast("Email Copiado!");
  }

  return (
    <Flex id="about" as="section" h={isMobile ? "auto" : "100vh"} bg="zinc.900" align="center">
      <SimpleGrid maxW={1280} mx="auto" px="8" py={isMobile ? "16" : 0} columns={isMobile ? 1 : 2} spacing={["8", "8", "112"]} alignItems="center" >
        <Box position="relative" >
            <Img clipPath="circle()" position="relative" src="https://github.com/nogueirawelton.png" mx={isMobile ? "auto" : 0} />
        </Box>
        <Box>
          <Text fontWeight="bold" fontSize="48">WELTON NOGUEIRA</Text>
          <Text color="zinc.300" fontSize="24">Maricá, Rio de Janeiro</Text>
          <Text color="zinc.600" mt="8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, enim perferendis et libero ab in veritatis est ex modi repudiandae sint voluptatem vel corrupti mollitia eum quo, aperiam repellat nam.</Text>
          <Text color="zinc.600" mt="2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, enim perferendis et libero ab in veritatis est ex modi repudiandae sint voluptatem vel corrupti mollitia eum quo, aperiam repellat nam.</Text>
          <Flex gap="8" mt="8">
            <Button href="" icon={<AiOutlineCloudDownload size={24}/>}>
              Currículo
            </Button>
            <ChakraButton onClick={handleCopyEmail}
              w="48"
              h="14"
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap="4"
              border="2px"
              borderColor="blue.500"
              variant="unstyled"
            >
              <MdOutlineMailOutline size={24}/>
              E-Mail
            </ChakraButton>
          </Flex>
        </Box>
      </SimpleGrid>
      <ToastContainer />
    </Flex>
  )
}