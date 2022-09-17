import { Box, Heading, SimpleGrid, useBreakpointValue } from "@chakra-ui/react"
import { ExperiencesProvider } from "../../../hooks/useExperience";
import { Companies } from "./Companies";
import { ExperienceData } from "./ExperienceData";

export const Experiences = () => {
  const isMobile = useBreakpointValue({
    base: true,
    md: false
  });

  return (
    <Box maxW={1280} mx="auto" px="8">
      <Box id="experiences" as="section" py={["24", "32"]}>
        <Heading fontSize={["2xl", "3xl"]}>
          EXPERIÊNCIAS
        </Heading>
        <SimpleGrid gridTemplateColumns={isMobile ? "auto" : "300px 1fr"} gap="16" mt="8">
          <ExperiencesProvider>
            <Companies />
            <ExperienceData />
          </ExperiencesProvider>
        </SimpleGrid>
      </Box>
    </Box>
  )
}