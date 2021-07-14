import { Box, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import styles from './styles.module.scss'

import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper/core';

SwiperCore.use([Autoplay,Pagination,Navigation]);


export function Carousel() {
  return (
    <>
        <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
        "delay": 5500,
        "disableOnInteraction": false
        }} 

        pagination={{
        "clickable": true
        }} navigation={true} className={styles.swiperContainer}>

        <SwiperSlide className={styles.swiperSlide}>
        <Box>
          <Image src="/images/places/Africa.jpg" alt="Building" />
        </Box>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
        <Box>
          <Image src="/images/places/Americas.jpg" alt="Building" />
        </Box>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
        <Box>
          <Image src="/images/places/Asia.jpg" alt="Building" />
        </Box>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
        <Box>
          <Image src="/images/places/Europe.jpg" alt="Building" />
        </Box>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
        <Box>
          <Image src="/images/places/Oceania.jpg" alt="Building" />
        </Box>
        </SwiperSlide>


        </Swiper>
    </>
  )
}



// style={
//     { '--swiper-navigation-color': '#FFBA08' }}