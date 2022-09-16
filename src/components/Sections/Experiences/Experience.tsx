import { Button } from "@chakra-ui/react"

interface Experience {
  id: number;
  company: string;
}

interface ExperienceProps {
  xp: Experience;
  isActive: boolean;
  setActive: (id: number) => void;
}

export const Experience = ({ setActive, isActive, xp }: ExperienceProps) => {
  return (
    <Button
      textAlign="left"
      fontWeight={isActive ? "semibold" : "normal"}
      pl="8" 
      w="100%"
      h="14"
      variant="unstyled"
      borderLeft={isActive ? "2px" : 0}
      borderColor="teal.500"
      background={isActive ? "#ffffff10" : "transparent"}
      rounded="4"
      _hover={{
        background: "#ffffff10"
      }}
      color={isActive ? "white" : "zinc.300"}
      onClick={() => setActive(xp.id)}
    >
      {xp.company}
    </Button>
  )
}