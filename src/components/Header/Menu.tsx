import { Stack } from "@chakra-ui/react"
import { HeaderLink } from "./HeaderLink"
import { useState } from "react";
import { links } from "../../../data.json";

interface MenuProps {
  isMobile: boolean | undefined;
  onClose: () => void;
}

export const Menu = ({ isMobile, onClose }: MenuProps) => {
  const [activeLinkId, setActiveLinkId] = useState(0);

  return (
      <Stack as="nav" spacing="8" direction={isMobile ? "column" : "row"}>
        {
          links.map(l => (
            <HeaderLink
              onClose={onClose}
              key={l.id}
              link={l}
              href={l.href}
              isActive={activeLinkId === l.id}
              setActiveLink={setActiveLinkId}
            />
          ))
        }
      </Stack>
  )
}