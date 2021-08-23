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
            position='relative'
        >
            <Link href='mailto:genc.serhat97@gmail.com' _focus={{ boxShadow: 'none' }} mx={2}>
                <FaEnvelope size={iconSize} />
            </Link>
            <Link
                href='https://github.com/SerhatG35'
                target='_blank'
                _focus={{ boxShadow: 'none' }}
                mx={2}
            >
                <AiOutlineGithub size={iconSize} />
            </Link>
            <Link
                href='https://www.linkedin.com/in/serhat-genc/'
                target='_blank'
                _focus={{ boxShadow: 'none' }}
                mx={2}
            >
                <FaLinkedin size={iconSize} />
            </Link>
            <Link
                href='https://www.instagram.com/serhtgenc/'
                target='_blank'
                _focus={{ boxShadow: 'none' }}
                mx={2}
            >
                <RiInstagramFill size={iconSize} />
            </Link>
            <Text fontSize='xs' position='absolute' bottom={['0', '1', '1']}>
                &copy; {new Date().getFullYear()} Serhat Genç
            </Text>
        </Center>
    )
}

export default Footer
