import { Box, Flex, Text, Button as ChakraButton } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { AiOutlineCloudDownload } from "react-icons/ai"
import { MdOutlineMailOutline } from "react-icons/md"
import { toast } from "react-toastify"
import { prismic } from "../../../services/prismic"
import { Button } from "../../Button"

interface Resume {
  name: string;
  address: string;
  description_1: string;
  description_2: string;
  src: string;
}
export const Data = () => {

  const [resume, setResume] = useState<Resume>({} as Resume);

  useEffect(() => {
    prismic.getByType("resume").then(({results}) => {
      const data = results[0].data;
      setResume({
        name: data.name.toUpperCase(),
        address: data.address,
        description_1: data.description_1,
        description_2: data.description_2,
        src: data.src.url
      });
    });
  }, [])

  function handleCopyEmail() {
    navigator.clipboard.writeText("welton.nogueira.dev@gmail.com");
    toast("Email Copiado!");
  }

  return (
    <Box fontSize={["sm", "md"]}>
      <Text fontWeight="bold" fontSize={["3xl", "5xl"]}>{resume.name}</Text>
      <Text color="zinc.300" fontSize={["xl", "2xl"]}>{resume.address}</Text>
      <Text color="zinc.600" mt={["4", "8"]}>{resume.description_1}</Text>
      <Text color="zinc.600" mt="2">{resume.description_2}</Text>
      <Flex gap="8" mt="8">
        <Button href={resume.src} icon={<AiOutlineCloudDownload size={24}/>}>
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