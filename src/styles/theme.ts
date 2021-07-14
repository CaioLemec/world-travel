import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        yellow: {
            "highlight": "#FFBA08"
        },
        gray: {
            dark: '#47585B',
            lightDark: '#999999',
            light: '#F5F8FA',
            darkLight: '#DADADA',
        },
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
    },
    styles: {
        global: {
            body: {
                bg: '#000000',
                color: 'gray.dark'
            }
        }
    }
})