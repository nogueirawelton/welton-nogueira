import { Box } from "@chakra-ui/react"
import { Header } from "./components/Header/Header"
import { About } from "./components/Sections/About";
import { Home } from "./components/Sections/Home"

import './styles/main.css';

interface AppProps {
  
}

export const App = ({  }: AppProps) => {
  return (
    <>
      <Header />
      <Box as="main" pt={128}>
        <Home />
        <About />
      </Box>
    </>
  )
}