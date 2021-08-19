import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Box, Center, Heading, Link } from '@chakra-ui/layout'
import { Textarea } from '@chakra-ui/textarea'
import { AiOutlineGithub } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

const Contact = () => {
    return (
        <Box as='section' id='contact' h='100vh' w='100%' pt='5em'>
            <Center
                h='80%'
                w='90%'
                margin='0 auto'
                maxW='1200px'
                flexDir='column'
                justifyContent='flex-start'
            >
                <Heading fontFamily='Nunito' mb='2em'>
                    Contact
                </Heading>
                <Center w='40%' maxW='500px' flexDir='column'>
                    <FormControl id='first-name'>
                        <FormLabel>Email</FormLabel>
                        <Input
                            _focus={{ boxShadow: '0 0 1px 1px #1f1f1f' }}
                            type='email'
                            rounded='xl'
                        />
                    </FormControl>
                    <FormControl id='first-name'>
                        <FormLabel>Name</FormLabel>
                        <Input
                            _focus={{ boxShadow: '0 0 1px 1px #1f1f1f' }}
                            type='name'
                            rounded='xl'
                        />
                    </FormControl>
                    <FormControl id='first-name'>
                        <FormLabel>Message</FormLabel>
                        <Textarea
                            type='message'
                            rounded='xl'
                            placeholder='Your message..'
                            resize='none'
                            _focus={{ boxShadow: '0 0 1px 1px #1f1f1f' }}
                            height='200px'
                        />
                    </FormControl>
                </Center>
            </Center>
            <Center h='20%' bg='#1f1f1f' as='footer' flexDir='column'>
                <Heading fontSize='lg' mb='1em' color='#f5f5f5' fontFamily='Nunito' as='h4'>
                    Social Links
                </Heading>
                <Center>
                    <Link
                        href='https://github.com/SerhatG35'
                        target='_blank'
                        _focus={{ boxShadow: 'none' }}
                        mx={2}
                    >
                        <AiOutlineGithub color='#f5f5f5' size={36} />
                    </Link>

                    <Link
                        href='https://www.instagram.com/serhtgenc/'
                        target='_blank'
                        _focus={{ boxShadow: 'none' }}
                        mx={2}
                    >
                        <FiInstagram color='#f5f5f5' size={36} />
                    </Link>

                    <Link
                        href='https://www.linkedin.com/in/serhat-genc/'
                        target='_blank'
                        _focus={{ boxShadow: 'none' }}
                        mx={2}
                    >
                        <FaLinkedin color='#f5f5f5' size={36} />
                    </Link>
                </Center>
            </Center>
        </Box>
    )
}

export default Contact
