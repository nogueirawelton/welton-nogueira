import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { useExperience } from "../../../hooks/useExperience";

export const ExperienceData = () => {
  const { activeExperienceData } = useExperience();

  return (
    <Box flex="1" fontSize={["sm", "md"]}>
      <Flex as="header" justify="space-between" align="center" flexWrap="wrap" gap="2">
        <Heading fontSize={["xl", "2xl"]}>{activeExperienceData?.role}</Heading>
        <Text color="zinc.300" w="100">{activeExperienceData?.start_date}{activeExperienceData?.end_date ? ` - ${activeExperienceData?.end_date }` : " - Atualmente"}</Text>
      </Flex>
      <Text color="teal.500" fontWeight="medium">{activeExperienceData?.company}</Text>
      <Text color="zinc.300" mt="4" lineHeight="1.4">{activeExperienceData?.description}</Text>
    </Box>
  )
}