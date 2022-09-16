import { ReactElement } from "react";
import { Button as ChakraButton, LinkProps } from "@chakra-ui/react";

interface ButtonProps extends LinkProps {
  children: string;
  icon: ReactElement;
  secondary?: boolean;
}

export const Button = ({ href, children, icon, secondary = false }: ButtonProps) => {
  return (
    <ChakraButton
      as="a"
      w="48"
      h="14"
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap="4"
      href={href}
      border="2px"
      borderColor={secondary ? "blue.500" :"teal.500"}
      variant="unstyled"
      target="_blank"
    >
      {icon}
      {children}
    </ChakraButton>
  )
}