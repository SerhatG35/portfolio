import { Center, Link, Text } from '@chakra-ui/layout'
import { AiOutlineGithub } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

const Footer = () => {
    return (
        <Center h='15%' bg='#1f1f1f' as='footer' w='100%' position='relative'>
                <Link
                    href='https://github.com/SerhatG35'
                    target='_blank'
                    _focus={{ boxShadow: 'none' }}
                    mx={2}
                >
                    <AiOutlineGithub color='#f5f5f5' size={28} />
                </Link>
                <Link
                    href='https://www.linkedin.com/in/serhat-genc/'
                    target='_blank'
                    _focus={{ boxShadow: 'none' }}
                    mx={2}
                >
                    <FaLinkedin color='#f5f5f5' size={28} />
                </Link>
                <Link
                    href='https://www.instagram.com/serhtgenc/'
                    target='_blank'
                    _focus={{ boxShadow: 'none' }}
                    mx={2}
                >
                    <FiInstagram color='#f5f5f5' size={28} />
                </Link>
                <Text color='#f5f5f5' fontSize='xs' position='absolute' bottom='1'>
                    &copy; {new Date().getFullYear()} Serhat Genç
                </Text>
            </Center>
    )
}

export default Footer
