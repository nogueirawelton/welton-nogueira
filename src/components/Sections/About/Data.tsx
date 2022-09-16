import { Box, Flex, Text, Button as ChakraButton } from "@chakra-ui/react"
import { AiOutlineCloudDownload } from "react-icons/ai"
import { MdOutlineMailOutline } from "react-icons/md"
import { toast } from "react-toastify"
import { Button } from "../../Button"

export const Data = () => {

  function handleCopyEmail() {
    navigator.clipboard.writeText("welton.nogueira.dev@gmail.com");
    toast("Email Copiado!");
  }

  return (
    <Box>
      <Text fontWeight="bold" fontSize={["32", "48"]}>WELTON NOGUEIRA</Text>
      <Text color="zinc.300" fontSize={["18", "24"]}>Maricá, Rio de Janeiro</Text>
      <Text color="zinc.600" mt="8" fontSize={["14", "16"]}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, enim perferendis et libero ab in veritatis est ex modi repudiandae sint voluptatem vel corrupti mollitia eum quo, aperiam repellat nam.</Text>
      <Text color="zinc.600" mt="2" fontSize={["14", "16"]}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, enim perferendis et libero ab in veritatis est ex modi repudiandae sint voluptatem vel corrupti mollitia eum quo, aperiam repellat nam.</Text>
      <Flex gap="8" mt="8">
        <Button href="" icon={<AiOutlineCloudDownload size={24}/>}>
          Currículo
        </Button>
        <ChakraButton onClick={handleCopyEmail}
          w={["32","48"]}
          h={["12", "14"]}
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
  )
}