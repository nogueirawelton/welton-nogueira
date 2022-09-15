import { Link, LinkProps } from "@chakra-ui/react";

interface HeaderLinkProps extends LinkProps {
  children: string;
}

export const HeaderLink = ({ children, href }: HeaderLinkProps) => {
  const isActive = false;
  return (
    <Link color={isActive ? "white" : "zinc.300"} href={href} fontWeight="medium" _hover={{
      color: "teal.500"
    }}>
      {children}
    </Link>
  )
}