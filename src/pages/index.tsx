import { Flex, Text, Image } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import { Banner } from '../components/Banner';
import { Icons } from '../components/Icons';
import { Carousel } from '../components/Swiper';

export default function Home() {
  return (
    <>
    <Head>
      <title> Home | WorldTrip</title>
    </Head>
    <main>
      <Flex direction="column" h="125vh" w="100%" bg="white" align="center">
        <Flex justifyContent="center" w="100%" maxW={1440} my="4">
          <Image alignItems="center" maxW={185} src="/images/Logo.svg" alt="World Trip Logotype" />
        </Flex>
        <Banner />
        <Icons />
        <Image maxW={90} mb="12" src="/images/Divider.svg" alt="divider" />
        <Text color="gray.dark" fontWeight="medium" fontSize="24">Let's go?</Text>
        <Text color="gray.dark" fontWeight="medium" fontSize="24">Then... Choose an continent</Text>
        <Carousel />
      </Flex>
    </main>
    </>
  )
}



