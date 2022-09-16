import { Box, Flex, Heading, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react"
import { Experience } from "./Experience"
import { useState } from "react";

const experiences = [
  {
    id: 1,
    company: "Animo Consultoria",
    role: "Desenvolvedor FrontEnd",
    date: "2019",
    description: "lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit"
  },
  {
    id: 2,
    company: "Empresa Teste",
    role: "Desenvolvedor BackEnd",
    date: "2020",
    description: "lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit"
  },
  { 
    id: 3,
    company: "Empresa Testada",
    role: "Desenvolvedor FullStack",
    date: "2021",
    description: "lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit"
  },
]

export const Experiences = () => {
  const [activeCompanyId, setActiveCompanyId] = useState(1);

  const isMobile = useBreakpointValue({
    base: true,
    md: false
  });

  const companyExperienceData = experiences.find(xp => xp.id === activeCompanyId);
  return (
    <Box maxW={1280} mx="auto" px="8">
      <Box id="experiences" as="section" py="32">
        <Heading fontSize="3xl">
          EXPERIÊNCIAS
        </Heading>
        <SimpleGrid gridTemplateColumns={isMobile ? "auto" : "300px 1fr"} gap="16" mt="8">
          <Box as="ul">
            {
              experiences.map(xp => (
                <Experience key={xp.id} setActive={setActiveCompanyId} isActive={activeCompanyId === xp.id} xp={xp} />
              ))
            }
          </Box>
          <Box flex="1">
            <Flex as="header" justify="space-between" align="center">
              <Heading>{companyExperienceData?.role}</Heading>
              <Text color="zinc.300">{companyExperienceData?.date}</Text>
            </Flex>
            <Text color="teal.500" fontWeight="medium">{companyExperienceData?.company}</Text>
            <Text color="zinc.300" mt="4" lineHeight="1.4">{companyExperienceData?.description}</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  )
}