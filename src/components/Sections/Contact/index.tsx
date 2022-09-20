import { Box, Flex, Heading, Link, Stack, Text } from "@chakra-ui/react"

export const Contact = () => {
  return (
    <Box 
      id="contact"
      maxW={1280}
      mx="auto"
      px="8"
      py={["24", "32"]}
    >
      <Heading fontSize={["2xl", "3xl"]}>CONTATO</Heading>
      <Stack mt="8" fontSize={["sm", "md"]}>
          <Flex gap="2">
            <Text fontWeight="bold">E-mail:</Text><Text color="zinc.300">welton.nogueira.dev@gmail.com</Text>
          </Flex>
          <Flex gap="2">
            <Text fontWeight="bold">Telefone:</Text><Text color="zinc.300">(21) 97535-8927</Text>
          </Flex>
      </Stack>
    </Box>
  )
}