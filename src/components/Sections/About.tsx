import { Box } from "@chakra-ui/react"

interface AboutProps {
  
}

export const About = ({  }: AboutProps) => {
  return (
    <Box as="section" h="100vh" bg="zinc.900">
      <Box maxW={1280} mx="auto" px="8">
        <p>Amem</p>
      </Box>
    </Box>
  )
}