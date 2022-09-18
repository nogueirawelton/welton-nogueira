import { Stack } from "@chakra-ui/react";
import { useExperience } from "../../../hooks/useExperience";
import { Experience } from "./Experience";

export const Companies = () => {
  const { experiences, activeCompany, setCompany } = useExperience();
  return (
    <Stack spacing={2}>
      {
        experiences.map(xp => (
          <Experience key={xp.id} setActive={setCompany} isActive={activeCompany === xp.id} data={xp} />
        ))
      }
    </Stack>
  )
}