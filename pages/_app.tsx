import { Center } from '@chakra-ui/layout'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import '../styles/styles.css'

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
    }, [])
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
