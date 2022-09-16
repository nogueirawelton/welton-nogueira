import { Box, Flex, Img, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react"
import { Button } from "../Button"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import { RiLinkedinFill, RiGithubLine } from 'react-icons/ri';

import 'swiper/css';
import 'swiper/css/navigation';

const data = [
  {
    id: 1,
    name: 'html',
    iconURL: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-plain.svg'
  },
  {
    id: 2,
    name: 'css',
    iconURL: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-plain.svg'
  },
  {
    id: 3,
    name: 'sass',
    iconURL: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg'
  },
  {
    id: 4,
    name: 'tailwind',
    iconURL: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg'
  }
]



interface HomeProps {
  
}

export const Home = ({  }: HomeProps) => {

  const isMobile = useBreakpointValue({
    base: true,
    md: false
  });

  return (
    <Flex id="home" as="section" h="100vh">
      <SimpleGrid columns={isMobile ? 1 : 2} spacing="4" maxW={1280} mx="auto" px="8" alignItems="center">
      <Box>
        <Text fontSize={["32","48"]}>Olá, Me chamo</Text>
        <Text
          fontSize={["48","64"]}
          fontWeight="bold"
          bg="linear-gradient(to right, #2dd4bf, #1d4ed8)"
          bgClip="text"
          lineHeight="1.2"
        >
          Welton Nogueira
        </Text>
        <Text fontSize={["24","32"]} mt="4">Desenvolvedor FrontEnd</Text>
        <Flex gap="8" mt="8">
          <Button href="https://www.linkedin.com/in/nogueirawelton" icon={<RiLinkedinFill size="24"/>}>
            LinkedIn
          </Button>
          <Button href="https://github.com/nogueirawelton" icon={<RiGithubLine size="24"/>} secondary>
            GitHub
          </Button>
        </Flex>
      </Box>
      <Box>
      <Swiper
      modules={[Navigation, Pagination, Autoplay, A11y]}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 10000
        }}
      >
        {
          data.map(i => (
            <SwiperSlide key={i.id}>
              <Box mx="auto" textAlign="center">
                <Img w="32" mx="auto" src={i.iconURL} alt={i.name}/>
                <Text my="4">{i.name.toUpperCase()}</Text>
              </Box>
            </SwiperSlide>
          ))
        }
      </Swiper>
      </Box>
    </SimpleGrid>
    </Flex>
  )
    
}