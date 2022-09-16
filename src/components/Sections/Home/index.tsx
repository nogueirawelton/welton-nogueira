import { Box, Flex, SimpleGrid, useBreakpointValue } from "@chakra-ui/react"
import { Hero } from "./Hero";
import { SwiperSlide } from "./SwiperSlide";

import 'swiper/css';
import 'swiper/css/navigation';

export const Home = () => {
  const isMobile = useBreakpointValue({
    base: true,
    md: false
  });

  return (
    <Flex id="home" as="section" h={isMobile ? "auto" : "100vh"}>
      <SimpleGrid
        maxW={1280}
        mx="auto"
        px="8"
        alignItems="center"
        pb={isMobile ? "16" : 0}
        pt={isMobile ? "48" : 0}
        columns={isMobile ? 1 : 2}
        spacing={isMobile ? 16 : 4}
      >
        <Hero />
        <Box>
          <SwiperSlide />
        </Box>
      </SimpleGrid>
    </Flex>
  )
    
}