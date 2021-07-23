//swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {Autoplay,Pagination,Navigation} from 'swiper/core';
import styles from './styles.module.scss'
SwiperCore.use([Autoplay,Pagination,Navigation]);

import { Image, Link, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { api } from "../../services/api";
import { useState } from "react";

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
        <Link className={styles.text} href={`/continents/${continent.title}`}>
        <Image src={`/images/places/${continent.title}/${continent.title}.jpg`} alt={continent.title}/>
        <VStack top="0" w="100%" h="100%" display="flex" alignItems="center" justifyContent="center" position="absolute">
        <Text color="#FFF" fontWeight="700" fontSize="48px" lineHeight="72px" textAlign="center">{continent.title}</Text>
        <Text color="#FFF" fontWeight="700" fontSize="24px" lineHeight="36px" textAlign="center">{continent.description}</Text>
        </VStack>
        </Link> 
        </SwiperSlide>
      ) )}
        </Swiper>
    </>
  )
}

