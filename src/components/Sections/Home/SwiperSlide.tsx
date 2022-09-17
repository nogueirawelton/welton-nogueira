import { Box, Img, Text } from "@chakra-ui/react"
import { Swiper, SwiperSlide as SwiperItem } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import { prismic } from "../../../services/prismic";
import { useEffect, useState } from "react";

import 'swiper/css';
import 'swiper/css/navigation';

interface Stack {
  id: string;
  name: string;
  src: string;
}


export const SwiperSlide = () => {
  const [stacks, setStacks] = useState<Stack[]>([]);

  useEffect(() => {
    prismic.getByType("stack", {
      orderings: ["document.first_publication_date"]
    }).then(({results}) => {
      const formattedStacks = results.map(result => {
        return {
          id: result.id,
          name: result.data.name,
          src: result.data.src.url
        }
      });
      setStacks(formattedStacks);
    });
  }, [])

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
        stacks.map(i => (
          <SwiperItem key={i.id}>
            <Box mx="auto" textAlign="center">
              <Img w="32" mx="auto" src={i.src} alt={i.name}/>
              <Text my="4">{i.name.toUpperCase()}</Text>
            </Box>
          </SwiperItem>
        ))
      }
    </Swiper>
  )
}