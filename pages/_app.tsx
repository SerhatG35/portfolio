import { Center } from '@chakra-ui/layout'
import { ChakraProvider } from '@chakra-ui/react'
import LoadingAnimation from 'components/LoadingAnimation'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/styles.css'

function MyApp({ Component, pageProps }: AppProps) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        window.history.scrollRestoration = 'manual'
        setTimeout(() => setLoading(false), 1500)
    }, [])

    return (
        <ChakraProvider>
            {loading ? (
                <Center w='100%' h='100vh' bg='#f5f5f5'>
                    <LoadingAnimation />
                </Center>
            ) : (
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
            )}
        </ChakraProvider>
    )
}
export default MyApp
