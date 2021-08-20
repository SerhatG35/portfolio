import { Button } from '@chakra-ui/button'
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Box, Center, Heading, Link, Text } from '@chakra-ui/layout'
import { Textarea } from '@chakra-ui/textarea'
import { yupResolver } from '@hookform/resolvers/yup'
import { ContactSchema } from 'constants/YupSchema'
import { sendForm } from 'emailjs-com'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineGithub } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { toaster } from 'utils/Toaster'

type ContactInputTypes = {
    subject: string
    name: string
    email: string
    message: string
}

const Contact = () => {
    const { formState, handleSubmit, register, reset } = useForm<ContactInputTypes>({
        resolver: yupResolver(ContactSchema),
    })

    const sendEmail = () => {
        sendForm(
            'service_pjtiisg',
            'template_04nqstq',
            '#contact-form',
            'user_EYPXtlwIrekVAS0q2FIMR'
        )
            .then(() => {
                toaster('Success', 'Email has been sent', 'success')
            })
            .catch(() => {
                toaster('Error', 'There was a problem please try later', 'error')
            })
    }

    useEffect(() => {
        if (formState.isSubmitSuccessful) reset()
    }, [formState, reset])

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
                            <div
                                id='recaptcha'
                                className='g-recaptcha'
                                data-sitekey={process.env.RECAPTCHA_SECRET_KEY}
                            ></div>
                            <FormControl
                                isInvalid={!!formState.errors?.subject?.message}
                                errortext={formState.errors?.subject?.message}
                                isRequired
                                id='subject'
                            >
                                <FormLabel>Subject</FormLabel>
                                <FormErrorMessage>
                                    {formState.errors.subject?.message}
                                </FormErrorMessage>
                                <Input
                                    _focus={{ boxShadow: '0 0 1px 1px #1f1f1f' }}
                                    rounded='md'
                                    borderColor='#CCCCCC'
                                    {...register('subject')}
                                    type='text'
                                />
                            </FormControl>
                            <FormControl
                                isInvalid={!!formState.errors?.name?.message}
                                errortext={formState.errors?.name?.message}
                                isRequired
                                id='name'
                            >
                                <FormLabel>Name</FormLabel>
                                <FormErrorMessage>
                                    {formState.errors.name?.message}
                                </FormErrorMessage>
                                <Input
                                    _focus={{ boxShadow: '0 0 1px 1px #1f1f1f' }}
                                    rounded='md'
                                    borderColor='#CCCCCC'
                                    {...register('name')}
                                    type='text'
                                />
                            </FormControl>
                            <FormControl
                                isInvalid={!!formState.errors?.email?.message}
                                errortext={formState.errors?.email?.message}
                                isRequired
                                id='email'
                            >
                                <FormLabel>Email</FormLabel>
                                <FormErrorMessage>
                                    {formState.errors.email?.message}
                                </FormErrorMessage>
                                <Input
                                    _focus={{ boxShadow: '0 0 1px 1px #1f1f1f' }}
                                    rounded='md'
                                    borderColor='#CCCCCC'
                                    {...register('email')}
                                    type='email'
                                />
                            </FormControl>

                            <FormControl
                                isInvalid={!!formState.errors?.message?.message}
                                errortext={formState.errors?.message?.message}
                                isRequired
                                id='message'
                            >
                                <FormLabel>Message</FormLabel>
                                <FormErrorMessage>
                                    {formState.errors.message?.message}
                                </FormErrorMessage>
                                <Textarea
                                    rounded='md'
                                    placeholder='Your message..'
                                    resize='none'
                                    _focus={{ boxShadow: '0 0 1px 1px #1f1f1f' }}
                                    height={['75px', '150px', '150px']}
                                    borderColor='#CCCCCC'
                                    {...register('message')}
                                    type='text'
                                />
                            </FormControl>
                            <Button
                                _focus={{ boxShadow: 'none' }}
                                type='submit'
                                mt='2em'
                                border='1px solid #1f1f1f'
                            >
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
