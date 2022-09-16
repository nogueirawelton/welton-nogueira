import { HeaderLink } from "./HeaderLink"

interface MenuProps {
  
}

export const Menu = ({  }: MenuProps) => {
  return (
    <>
      <HeaderLink href="#home">
        Início
      </HeaderLink>
      <HeaderLink href="#about">
        Sobre Mim
      </HeaderLink>
      <HeaderLink href="">
        Experiência
      </HeaderLink>
      <HeaderLink href="">
        Projetos
      </HeaderLink>
      <HeaderLink href="">
        Contato
      </HeaderLink>
    </>
  )
}