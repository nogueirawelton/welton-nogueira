import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { useExperience } from "../../../hooks/useExperience";

export const ExperienceData = () => {
  const { activeExperienceData } = useExperience();

  return (
    <Box flex="1">
      <Flex as="header" justify="space-between" align="center">
        <Heading>{activeExperienceData?.role}</Heading>
        <Text color="zinc.300">{activeExperienceData?.date}</Text>
      </Flex>
      <Text color="teal.500" fontWeight="medium">{activeExperienceData?.company}</Text>
      <Text color="zinc.300" mt="4" lineHeight="1.4">{activeExperienceData?.description}</Text>
    </Box>
  )
}