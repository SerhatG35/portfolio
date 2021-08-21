import { Button } from '@chakra-ui/button'
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Box, Center, Heading, Text } from '@chakra-ui/layout'
import { Textarea } from '@chakra-ui/textarea'
import { yupResolver } from '@hookform/resolvers/yup'
import { ContactSchema } from 'constants/YupSchema'
import { sendForm } from 'emailjs-com'
import { useEffect, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import { toaster } from 'utils/Toaster'
import Footer from './Footer'

type ContactInputTypes = {
    subject: string
    name: string
    email: string
    message: string
}

const Contact = () => {
    console.log(process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY)
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [captchaFilled, setCaptchaFilled] = useState(false)
    const { formState, handleSubmit, register, reset } = useForm<ContactInputTypes>({
        resolver: yupResolver(ContactSchema),
    })

    const sendEmail = () => {
        if (captchaFilled) {
            sendForm(
                'service_pjtiisg',
                'template_04nqstq',
                '#contact-form',
                'user_EYPXtlwIrekVAS0q2FIMR'
            )
                .then(() => {
                    toaster('Success', 'Your email has been sent', 'success')
                })
                .catch(() => {
                    toaster('Error', 'There was a problem please try again later', 'error')
                })
            setFormSubmitted(true)
        } else toaster('Failed', 'Please complete reCAPTCHA', 'error')
    }

    const completeReCaptcha = () => setCaptchaFilled(true)

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
                <Center w='100%' h='100%' flexDir='column'>
                    <Heading as='h1' fontFamily='Nunito' mb='1em'>
                        Contact
                    </Heading>
                    <Center flexDir='column' w={['100%', '50%', '50%']} h='100%'>
                        <Heading fontSize='xl' fontFamily='Nunito' mb='0.5em'>
                            Get In Touch
                        </Heading>
                        {!formSubmitted ? (
                            <Center
                                w='100%'
                                flexDir='column'
                                as='form'
                                id='contact-form'
                                onSubmit={handleSubmit(sendEmail)}
                            >
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
                                        height={['50px', '100px', '100px']}
                                        borderColor='#CCCCCC'
                                        {...register('message')}
                                        type='text'
                                        mb='0.5em'
                                    />
                                </FormControl>
                                <ReCAPTCHA
                                    sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}`}
                                    onChange={completeReCaptcha}
                                />
                                <Button
                                    _focus={{ boxShadow: 'none' }}
                                    _hover={{ background: '#2F2F2F' }}
                                    bg='#1f1f1f'
                                    color='#f5f5f5'
                                    type='submit'
                                    mt='0.5em'
                                    border='1px solid #1f1f1f'
                                >
                                    Send
                                </Button>
                            </Center>
                        ) : (
                            <Center alignSelf='center' flexDir='column'>
                                <Text>Your message has beeen sent.</Text>
                                <Text>I will return to your email shortly.</Text>
                            </Center>
                        )}
                    </Center>
                </Center>
            </Center>
            <Footer />
        </Box>
    )
}

export default Contact
