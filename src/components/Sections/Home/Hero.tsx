import { Box, Flex, Text } from "@chakra-ui/react"
import { RiGithubLine, RiLinkedinFill } from "react-icons/ri"
import { Button } from "../../Button"

export const Hero = () => {
  return (
    <Box>
      <Text fontSize={["32","48"]}>Olá, Me chamo</Text>
      <Text
        fontSize={["48","64"]}
        fontWeight="bold"
        bg="linear-gradient(to right, #2dd4bf, #1d4ed8)"
        bgClip="text"
        lineHeight="1.2"
      >
        Welton Nogueira
      </Text>
      <Text fontSize={["24","32"]} mt="4">Desenvolvedor FrontEnd</Text>
      <Flex gap="8" mt="8">
        <Button href="https://www.linkedin.com/in/nogueirawelton" icon={<RiLinkedinFill size="24"/>}>
          LinkedIn
        </Button>
        <Button href="https://github.com/nogueirawelton" icon={<RiGithubLine size="24"/>} secondary>
          GitHub
        </Button>
      </Flex>
    </Box>
  )
}