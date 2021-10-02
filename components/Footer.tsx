import { Center, Link, Text } from '@chakra-ui/layout'
import { useBreakpointValue } from '@chakra-ui/media-query'
import { AiOutlineGithub } from 'react-icons/ai'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'

const Footer = () => {
    const iconSize = useBreakpointValue({ base: 24, sm: 28 })
    return (
        <Center
            color='#f5f5f5'
            h={['12%', '15%', '15%']}
            bg='#1f1f1f'
            as='footer'
            aria-label='social links'
            w='100%'
            flexDir='column'
            justifyContent='space-evenly'
        >
            <Center>
                <Link
                    href='mailto:genc.serhat97@gmail.com'
                    _focus={{ boxShadow: 'none' }}
                    _hover={{ color: '#F2542C' }}
                    mx={2}
                >
                    <FaEnvelope size={iconSize} />
                </Link>
                <Link
                    href='https://github.com/SerhatG35'
                    target='_blank'
                    _focus={{ boxShadow: 'none' }}
                    mx={2}
                    _hover={{ color: '#F2542C' }}
                >
                    <AiOutlineGithub size={iconSize} />
                </Link>
                <Link
                    href='https://www.linkedin.com/in/serhat-genc/'
                    target='_blank'
                    _focus={{ boxShadow: 'none' }}
                    mx={2}
                    _hover={{ color: '#F2542C' }}
                >
                    <FaLinkedin size={iconSize} />
                </Link>
                <Link
                    href='https://www.instagram.com/serhtgenc/'
                    target='_blank'
                    _focus={{ boxShadow: 'none' }}
                    mx={2}
                    _hover={{ color: '#F2542C' }}
                >
                    <RiInstagramFill size={iconSize} />
                </Link>
            </Center>
            <Text fontSize='xs'>&copy; {new Date().getFullYear()} Serhat Genç</Text>
        </Center>
    )
}

export default Footer
