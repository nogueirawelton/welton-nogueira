import { Box, Flex, Text } from "@chakra-ui/react"
import { RiGithubLine, RiLinkedinFill } from "react-icons/ri"
import { Button } from "../../Button"

export const Hero = () => {
  return (
    <Box>
      <Text fontSize={["3xl","5xl"]}>Olá, Me chamo</Text>
      <Text
        fontSize={["5xl","6xl"]}
        fontWeight="bold"
        bg="linear-gradient(to right, #2dd4bf, #1d4ed8)"
        bgClip="text"
        lineHeight="1.2"
      >
        Welton Nogueira
      </Text>
      <Text fontSize={["2xl","3xl"]} mt="4">e sou Desenvolvedor Web</Text>
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