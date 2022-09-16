import { Link, LinkProps } from "@chakra-ui/react";

interface HeaderLinkProps extends LinkProps {
  children: string;
}

export const HeaderLink = ({ children, href }: HeaderLinkProps) => {
  return (
    <Link color="zinc.300" href={href} fontWeight="medium" _hover={{
      color: "white"
    }}>
      {children}
    </Link>
  )
}