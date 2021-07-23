import { Flex, Text, Image } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import { Banner } from '../components/Banner';
import { Icons } from '../components/Icons';
import { Carousel } from '../components/Swiper';
import { GetStaticProps } from 'next';
import { api } from '../services/api';
import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace= 'api';
    this.get('/continents', () => {
      return [
        {
          id: 1,
          title: 'Africa',
          description: 'Description about the African continent.',
          countries: 54,
          languages: 1250,
          destinations: [
            {
              country: 'Angola',
              capital: 'Luanda',
              img: '/images/places/Africa/Luanda.jpg'
            },
            {
              country: 'Egypt',
              capital: 'Cairo',
              img: '/images/places/Africa/Cairo.jpg'
            },
            {
              country: 'Kenya',
              capital: 'Nairobi',
              img: '/images/places/Africa/Nairobi.jpg'
            },
            {
              country: 'Nigeria',
              capital: 'Abuja',
              img: '/images/places/Africa/Abuja.jpg'
            },
            {
              country: 'South Africa',
              capital: 'Bloemfontein, Cape Town, Pretoria',
              img: '/images/places/Africa/CapeTown.jpg'
            },
          ]
        },
        {
          id: 2,
          title: 'North-America',
          description: 'Description about the North American continent.',
          countries: 23,
          languages: '350',
          destinations: [
            {
              country: 'Canada',
              capital: 'Ottawa',
              img: '/images/places/AmericaNorth/Ottawa.jpg'
            },
            {
              country: 'Mexico',
              capital: 'Mexico City',
              img: '/images/places/AmericaNorth/MexicoCity.jpg'
            },
            {
              country: 'United States',
              capital: 'Washington, D.C.',
              img: '/images/places/AmericaNorth/Washington.jpg'
            }
          ]
        },
        {
          id: 3,
          title: 'South-America',
          description: 'Description about the South American continent.',
          countries: 14,
          languages: 18,
          destinations: [
            {
              country: 'Argentina',
              capital: 'Buenos Aires',
              img: '/images/places/AmericaSouth/BuenosAires.jpg'
            },
            {
              country: 'Brazil',
              capital: 'Rio de Janeiro',
              img: '/images/places/AmericaSouth/RioDeJaneiro.jpg'
            },
            {
              country: 'Colombia',
              capital: 'Bogotá',
              img: '/images/places/AmericaSouth/Bogotá.jpg'
            },
            {
              country: 'Chile',
              capital: 'Santiago',
              img: '/images/places/AmericaSouth/Santiago.jpg'
            },
            {
              country: 'Peru',
              capital: 'Lima',
              img: '/images/places/AmericaSouth/Lima.jpg'
            },
            {
              country: 'Uruguay',
              capital: 'Montevideo',
              img: '/images/places/AmericaSouth/Montevideo.jpg'
            },
          ]
        },
        {
          id: 4,
          title: 'Asia',
          description: 'Description about the Asian continent.',
          countries: 49,
          languages: 74,
          destinations: [
            {
              country: 'China',
              capital: 'Beijing',
              img: '/images/places/Asia/Beijing.jpg'
            },
            {
              country: 'India',
              capital: 'New Delhi',
              img: '/images/places/Asia/NewDelhi.jpg'
            },
            {
              country: 'Russia',
              capital: 'Moscow',
              img: '/images/places/Asia/Moscow.jpg'
            },
            {
              country: 'Singapore',
              capital: 'Singapore',
              img: '/images/places/Asia/Singapore.jpg'
            },
            {
              country: 'South Korea',
              capital: 'Seoul',
              img: '/images/places/Asia/Seoul.jpg'
            },
          ]
        },
        {
          id: 5,
          title: 'Europe',
          description: 'Description about the European continent.',
          countries: 50,
          languages: 60,
          destinations: [
            {
              country: 'Belgium',
              capital: 'Brussels',
              img: '/images/places/Europe/Brussels.jpg'
            },
            {
              country: 'France',
              capital: 'Paris',
              img: '/images/places/Europe/Paris.jpg'
            },
            {
              country: 'Italy',
              capital: 'Rome',
              img: '/images/places/Europe/Rome.jpg'
            },
            {
              country: 'Netherlands',
              capital: 'Amsterdam',
              img: '/images/places/Europe/Amsterdam.jpg'
            },
            {
              country: 'United Kimdom',
              capital: 'London',
              img: '/images/places/Europe/London.jpg'
            },
          ]
        },
        {
          id: 6,
          title: 'Oceania',
          description: 'Description about the Oceanic continent.',
          countries: 14,
          languages: 30,
          destinations: [
            {
              country: 'Australia',
              capital: 'Canberra',
              img: '/images/places/Oceania/Canberra.jpg'
            },
            {
              country: 'New Zealand',
              capital: 'Wellington',
              img: '/images/places/Oceania/Wellington.jpg'
            },
            {
              country: 'Fiji',
              capital: 'Suva',
              img: '/images/places/Oceania/Suva.jpg'
            }
          ]
        },
      ]
    })
  }
})

interface ContinentsProps {
  continents: Continent[]
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
        <Carousel />
      </Flex>
    </main>
    </>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   const response = await api.get('/continents');

//   const continents = response.data;

//   return {
//     props: {
//       continents
//     }
//   }
// }

