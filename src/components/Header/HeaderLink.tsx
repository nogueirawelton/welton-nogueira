import { Link, LinkProps, useDisclosure } from "@chakra-ui/react";

interface Link {
  id: number;
  name: string;
}

interface HeaderLinkProps extends LinkProps {
  link: Link;
  isActive: boolean;
  setActiveLink: (id: number) => void;
  onClose: () => void;
}

export const HeaderLink = ({ link, href, isActive, setActiveLink, onClose }: HeaderLinkProps) => {
  return (
    <Link color={isActive ? "white" : "zinc.300"} href={href} fontWeight="medium" _hover={{
      color: "white"
    }} onClick={() => {
      setActiveLink(link.id);
      setTimeout(onClose, 800);
    }}>
      {link.name}
    </Link>
  )
}