import { Text, Box, Flex, Image } from '@chakra-ui/react';
import React from 'react';

export function Icons() {
    return (
        <Flex w="100%" h={150} my="12" px="6" alignItems="center" justifyContent="center">
            <Flex w="100%" h="100%" justifyContent="space-between" maxW={1160}>

                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <Image w={85} src="/images/cocktail.svg" alt="cocktail" />
                    <Text fontWeight="600" my="4">Night Life</Text>
                </Box>

                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <Image w={85} src="/images/surf.svg" alt="surf" />
                    <Text fontWeight="600" my="4">Beach</Text>
                </Box>

                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <Image w={85} src="/images/building.svg" alt="building" />
                    <Text fontWeight="600" my="4">Modern</Text>
                </Box>

                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <Image w={85} src="/images/museum.svg" alt="museum" />
                    <Text fontWeight="600" my="4">Classic</Text>
                </Box>

                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <Image w={85} src="/images/earth.svg" alt="earth" />
                    <Text fontWeight="600" my="4">much more...</Text>
                </Box>

            </Flex>
        </Flex>
    );
}















