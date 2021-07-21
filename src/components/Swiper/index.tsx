import { Box, Image, Link } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import styles from './styles.module.scss'
import React, { useEffect } from "react";
import { api } from "../../services/api";

import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper/core';
import { useState } from "react";

SwiperCore.use([Autoplay,Pagination,Navigation]);

export function Carousel() {
  const [continents, setContinents] = useState([]);

  useEffect(()=> {
    api.get('continents').then(response => setContinents(response.data))
  },[]);


  return (
    <>
        <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
        "delay": 5500,
        "disableOnInteraction": false
        }} 

        pagination={{
        "clickable": true
        }} navigation={true} className={styles.swiperContainer}>

      {continents.map(continent => (
        <SwiperSlide key={continent.id} className={styles.swiperSlide}>
        <Link  href={`/continents/${continent.slug}`}>
        <Image src={`/images/places/${continent.title}/${continent.title}.jpg`} alt={continent.title} />
        </Link> 
        </SwiperSlide>
      ) )}

        </Swiper>
    </>
  )
}



// style={
//     { '--swiper-navigation-color': '#FFBA08' }}