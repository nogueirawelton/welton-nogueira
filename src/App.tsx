import { Box } from "@chakra-ui/react"
import { Footer } from "./components/Footer";
import { Header } from "./components/Header/";
import { About } from "./components/Sections/About";
import { Contact } from "./components/Sections/Contact";
import { Experiences } from "./components/Sections/Experiences";
import { Home } from "./components/Sections/Home"
import { Projects } from "./components/Sections/Projects";

import './styles/main.css';

interface AppProps {
  
}

export const App = ({  }: AppProps) => {
  return (
    <>
      <Header />
      <Box as="main">
        <Home />
        <About />
        <Experiences />
        <Projects />
        <Contact />
      </Box>
      <Footer />
    </>
  )
}