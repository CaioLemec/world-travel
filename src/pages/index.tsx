import { Flex, Text, Image } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import { Banner } from '../components/Banner';
import { Icons } from '../components/Icons';
import { Carousel } from '../components/Swiper';
import { GetStaticProps } from 'next';
import { api } from '../services/api';

interface ContinentsProps {
  continents: Continent[];
}

interface Continent {
  id: number;
  title: string;
  description: string;
  countries: number;
  languages: number;
  subtitle: string;
  destinations: Destinations[];
}

interface Destinations {
  id: number;
  country: string;
  capital: string;
  img: string;
}


export default function Home({ continents }: ContinentsProps) {
  return (
    <>
      <Head>
        <title> Home | WorldTrip</title>
      </Head>
      <main>
        <Flex direction="column" h="100vh" w="100%" bg="white" align="center">
          <Flex justifyContent="center" w="100%" maxW={1440} my="4">
            <Image alignItems="center" maxW={185} src="/images/Logo.svg" alt="World Trip Logotype" />
          </Flex>
          <Banner />
          <Icons />
          <Image maxW={90} mb="12" src="/images/Divider.svg" alt="divider" />
          <Text color="gray.dark" fontWeight="medium" fontSize="24">Let's go?</Text>
          <Text color="gray.dark" fontWeight="medium" fontSize="24" mb="6">Then... Choose an continent</Text>
          <Carousel continents={continents} />
        </Flex>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('continents');
  const continents = response.data;

  return {
    props: {
      continents
    }
  }
}

