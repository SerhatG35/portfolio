import { Center, Link as ChakraLink } from '@chakra-ui/layout'
import Link from 'next/link'
import { RiArrowGoBackFill } from 'react-icons/ri'

const Custom404 = () => {
    return (
        <Center
            w='100%'
            h='100vh'
            backgroundPosition='center'
            backgroundRepeat='no-repeat'
            backgroundImage='url(/404.svg)'
            position='relative'
        >
            <Link href='/' passHref>
                <ChakraLink
                    display='flex'
                    position='absolute'
                    bottom='5'
                    _hover={{ textDecoration: 'none', background: '#1f1f1f', color: '#f5f5f5' }}
                    _focus={{ outline: 'none' }}
                    fontSize={['md', 'lg', 'xl']}
                    alignItems='center'
                    px='2'
                    py='1'
                    rounded='md'
                >
                    Go back <RiArrowGoBackFill style={{ marginLeft: '0.5em' }} />
                </ChakraLink>
            </Link>
        </Center>
    )
}

export default Custom404
