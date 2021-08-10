import { Center } from '@chakra-ui/layout'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Center flexDir='column' fontFamily='Kalam' position='relative' pt='1em' bg='#f5f5f5'>
                <Navbar />
                <Component {...pageProps} />
            </Center>
        </ChakraProvider>
    )
}
export default MyApp
