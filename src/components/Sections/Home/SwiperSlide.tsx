import { Box, Img, Text } from "@chakra-ui/react"
import { Swiper, SwiperSlide as SwiperItem } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper';

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


export const SwiperSlide = () => {
  return (
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
          <SwiperItem key={i.id}>
            <Box mx="auto" textAlign="center">
              <Img w="32" mx="auto" src={i.iconURL} alt={i.name}/>
              <Text my="4">{i.name.toUpperCase()}</Text>
            </Box>
          </SwiperItem>
        ))
      }
    </Swiper>
  )
}