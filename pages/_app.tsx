import { Center } from '@chakra-ui/layout'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import '../styles/styles.css'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Center
                flexDir='column'
                fontFamily='Nunito'
                position='relative'
                bg='#f5f5f5'
                color='#1F1F1F'
                userSelect='none'
                textAlign='center'
            >
                <Navbar />
                <Component {...pageProps} />
            </Center>
        </ChakraProvider>
    )
}
export default MyApp
