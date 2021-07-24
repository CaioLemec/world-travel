import { Box, Flex, HStack, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { api } from "../../services/api";

interface ContinentProps {
    continent: Continent
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

export default function Continent({ continent }: ContinentProps) {
    console.log(continent.title)

    return (
        <main>
            <Flex direction="column" h="100vh" w="100%" bg="white" align="center" maxW={1140} mx="auto">

                <Flex justifyContent="center" w="100%" maxW={1440} my="4">
                    <Image alignItems="center" maxW={185} src="/images/Logo.svg" alt="World Trip Logotype" />
                </Flex>

                <Flex position="relative" justifyContent="center" w="100%" maxW={1440} h={350}>
                    <Image w={1440} h={400} m="auto" alignItems="center" src={`/images/places/${continent.title}/${continent.title}.jpg`} alt="World Trip Logotype" />
                    <Text position="absolute" bottom="8px" left="70px" color="gray.light" fontWeight="600" fontSize="48px" lineHeight="72px">{continent.title}</Text>
                </Flex>

                <Flex justifyContent="center" w="100%" maxW={1440} h={450} my="4">
                    <Text mx={4} alignItems="center" justifyContent="center" display="flex" w="100%" h="100%" color="gray.dark" fontWeight="400" fontSize="24px" lineHeight="36px" textAlign="center">{continent.description}</Text>
                    <HStack alignItems="center" justifyContent="center" display="flex" w="100%" h="100%">
                        <Box px={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                            <Text color="yellow.highlight" fontWeight="600" fontSize="48px" lineHeight="72px">{continent.countries}</Text>
                            <Text color="gray.dark" fontWeight="600" fontSize="24px" lineHeight="36px">Countries</Text>
                        </Box>
                        <Box px={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                            <Text color="yellow.highlight" fontWeight="600" fontSize="48px" lineHeight="72px">{continent.languages}+</Text>
                            <Text color="gray.dark" fontWeight="600" fontSize="24px" lineHeight="36px">Languages</Text>
                        </Box>
                    </HStack>
                </Flex>
                <Text pl="70px" pb="20px" w="100%" color="yellow.highlight" fontWeight="600" fontSize="48px" lineHeight="72px">{continent.destinations.length} Destinations</Text>
                <SimpleGrid mb={[4, 4, "2.1875rem"]} mx="auto" columns={[1, 2, 4]} spacing={[5, 5, "2.8125rem"]} justifyContent="center" w="100%" pl="70px" maxW={1440}>
                    {continent.destinations.map(destination => (
                        <Flex key={destination.id} flexDirection="column" w="100%" h="100%">
                            <Box maxH={180}>
                                <Image maxH={100} w="100%" m="auto" alignItems="center" src={`/images/places/${continent.title}/${destination.capital}.jpg`} alt={`Image from ${destination.capital}`} />
                                <Box bg="#FFF" w="100%" maxH={80} border="1px" borderColor="yellow.highlight">
                                    <Text p="2" color="gray.dark" fontWeight="600" fontSize="20px" lineHeight="25px">{destination.capital}</Text>
                                    <Text p="2" pt="0" fontWeight="500" lineHeight="26px" color="#999999">{destination.country}</Text>
                                </Box>
                            </Box>
                        </Flex>
                    ))}
                </SimpleGrid>
            </Flex>


        </main>
    );
}


export const getStaticPaths: GetStaticPaths = async () => {
    const response = await api.get('/continents');
    const continents = response.data

    const paths = continents.map(continent => (
        {
            params: { slug: continent.id }
        }
    ))

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params;

    const response = await api.get(`/continents/${slug}`);

    const continent = response.data
    return {
        props: {
            continent
        }
    }
}


// https://stackoverflow.com/questions/65783199/error-getstaticpaths-is-required-for-dynamic-ssg-pages-and-is-missing-for-xxx