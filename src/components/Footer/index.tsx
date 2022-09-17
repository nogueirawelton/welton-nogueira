import { Box, Flex, Text } from "@chakra-ui/react"

export const Footer = () => {
  return (
    <Box as="footer" bg="zinc.900">
      <Flex maxW={1280} h="24" mx="auto" px="8" align="center" justify="center" textAlign="center">
        <Text color="zinc.300" fontSize={["sm", "md"]}>Desenvolvido com 💙 por Welton Nogueira.</Text>
      </Flex>
    </Box>
  )
}