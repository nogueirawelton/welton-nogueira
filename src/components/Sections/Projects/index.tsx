import { Box, Heading, SimpleGrid, useBreakpointValue } from "@chakra-ui/react"
import { Project } from "./Project"

export const Projects = () => {

  const isMobile = useBreakpointValue({
    base: true,
    md: false
  });

  return (
    <Box id="projects" bg="zinc.900">
      <Box 
      maxW={1280}
      mx="auto"
      px="8"
      py={["24", "32"]}
    >
        <Heading fontSize={["2xl", "3xl"]}>
          PROJETOS
        </Heading>
        <SimpleGrid mt="8" columns={2} spacing="16" minChildWidth={isMobile ? 311 : 416}>
          <Project />
          <Project />
          <Project />
          <Project />
        </SimpleGrid>
      </Box>
    </Box>
  )
}