import { Flex, Text, Image, Box } from '@chakra-ui/react';

export function Banner() {
    return (
      <Flex backgroundImage="/images/BannerBg.png" align="center" justify="center" w="100%" maxW={1440} minHeight={300} mx="4">
        <Box w="100%" h="100%" justifyContent="center" alignItems="center" display="flex" flexDirection="column">
          <Box maxW={525} px="4">
            <Text color="gray.light" fontWeight="medium" fontSize="36">5 Continents,</Text>
            <Text color="gray.light" fontWeight="medium" fontSize="36"><Text as="span" color="yellow.highlight">endless</Text> possibilities.</Text>
            <Text color="gray.darkLight" fontWeight="medium" fontSize="20" py="4" >It's time to take the trip you've always dreamed of.</Text>
          </Box>
        </Box>
        <Box position="relative" w="100%" h="100%" justifyContent="center" alignItems="center" display="flex" flexDirection="column">
          <Image position="absolute" bottom={-8} maxWidth={375} src="/images/Airplane.svg" alt="Building" />
        </Box>
      </Flex>
    );
}









