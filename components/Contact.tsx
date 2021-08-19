import { Button } from '@chakra-ui/button'
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Box, Center, Heading, Link, Text } from '@chakra-ui/layout'
import { Textarea } from '@chakra-ui/textarea'
import { yupResolver } from '@hookform/resolvers/yup'
import { ContactSchema } from 'constants/YupSchema'
import { sendForm } from 'emailjs-com'
import { FormEvent } from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineGithub } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

type ContactInputTypes = {
    email: string
    name: string
    message: string
}

const Contact = () => {
    const {
        formState: { errors },
        handleSubmit,
        register,
    } = useForm<ContactInputTypes>({
        resolver: yupResolver(ContactSchema),
    })

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        sendForm(
            'service_pjtiisg',
            'template_04nqstq',
            '#contact-form',
            'user_EYPXtlwIrekVAS0q2FIMR'
        ).then(
            (result: any) => {
                console.log(result.text)
            },
            error => {
                console.log(error.text)
            }
        )
    }

    return (
        <Box as='section' id='contact' h='100vh' w='100%' pt='5em'>
            <Center
                h='85%'
                w='90%'
                margin='0 auto'
                maxW='1200px'
                flexDir='column'
                justifyContent='flex-start'
            >
                <Center w='100%' flexDir='column'>
                    <Heading as='h1' fontFamily='Nunito' mb='2em'>
                        Contact
                    </Heading>
                    <Center flexDir='column' w={['100%', '50%', '50%']}>
                        <Heading fontSize='xl' fontFamily='Nunito' mb='1em'>
                            Get In Touch
                        </Heading>
                        <Center
                            w='100%'
                            flexDir='column'
                            as='form'
                            id='contact-form'
                            onSubmit={handleSubmit(sendEmail)}
                        >
                            <FormControl
                                isInvalid={!!errors.email?.message}
                                errortext={errors?.email?.message}
                                isRequired
                            >
                                <FormLabel>Email</FormLabel>
                                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                                <Input
                                    _focus={{ boxShadow: '0 0 1px 1px #1f1f1f' }}
                                    type='email'
                                    rounded='xl'
                                    borderColor='#CCCCCC'
                                    {...register('email')}
                                />
                            </FormControl>
                            <FormControl
                                isInvalid={!!errors?.name?.message}
                                errortext={errors?.name?.message}
                                isRequired
                            >
                                <FormLabel>Name</FormLabel>
                                <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
                                <Input
                                    _focus={{ boxShadow: '0 0 1px 1px #1f1f1f' }}
                                    type='name'
                                    rounded='xl'
                                    borderColor='#CCCCCC'
                                    {...register('name')}
                                />
                            </FormControl>
                            <FormControl
                                isInvalid={!!errors?.message?.message}
                                errortext={errors?.message?.message}
                                isRequired
                            >
                                <FormLabel>Message</FormLabel>
                                <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
                                <Textarea
                                    type='message'
                                    rounded='xl'
                                    placeholder='Your message..'
                                    resize='none'
                                    _focus={{ boxShadow: '0 0 1px 1px #1f1f1f' }}
                                    height='150px'
                                    borderColor='#CCCCCC'
                                    {...register('message')}
                                />
                            </FormControl>
                            <Button type='submit' mt='2em' border='1px solid #1f1f1f'>
                                Send
                            </Button>
                        </Center>
                    </Center>
                </Center>
            </Center>
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
        </Box>
    )
}

export default Contact
