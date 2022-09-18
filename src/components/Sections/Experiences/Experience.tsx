import { Button } from "@chakra-ui/react"

interface Experience {
  id: string;
  company: string;
}

interface ExperienceProps {
  data: Experience;
  isActive: boolean;
  setActive: (id: string) => void;
}

export const Experience = ({ setActive, isActive, data: { id, company } }: ExperienceProps) => {
  return (
    <Button
      textAlign="left"
      fontWeight={isActive ? "semibold" : "normal"}
      pl="8" 
      w="100%"
      h="14"
      variant="unstyled"
      borderLeft="2px"
      borderColor={isActive ? "teal.500" : "transparent"}
      background={isActive ? "#ffffff10" : "transparent"}
      rounded="4"
      _hover={{
        background: "#ffffff10"
      }}
      color={isActive ? "white" : "zinc.300"}
      onClick={() => setActive(id)}
    >
      {company}
    </Button>
  )
}