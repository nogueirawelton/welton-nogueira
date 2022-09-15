import { HeaderLink } from "./HeaderLink"

interface MenuProps {
  
}

export const Menu = ({  }: MenuProps) => {
  return (
    <>
      <HeaderLink href="">
        Início
      </HeaderLink>
      <HeaderLink href="">
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