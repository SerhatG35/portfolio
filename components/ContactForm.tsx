import { Button } from '@chakra-ui/button'
import { FormErrorMessage, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Center, Text } from '@chakra-ui/layout'
import { useBreakpointValue } from '@chakra-ui/media-query'
import { Textarea } from '@chakra-ui/textarea'
import { yupResolver } from '@hookform/resolvers/yup'
import { ContactSchema } from 'constants/YupSchema'
import { sendForm } from 'emailjs-com'
import { ContactInputTypes } from 'global'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { Controller, useForm } from 'react-hook-form'
import { Toaster } from 'utils/Toaster'
import { MotionCenter, MotionFormControl } from './MotionComponents'

const child = {
    hidden: {
        opacity: 0,
        x: -100,
    },
    show: {
        opacity: 1,
        x: 0,
    },
}

const ContactForm = () => {
    const inputSize = useBreakpointValue({ base: 'xs', sm: 'md' })
    const [captchaFilled, setCaptchaFilled] = useState(false)
    const {
        formState: { errors, isSubmitting, isSubmitSuccessful },
        handleSubmit,
        control,
    } = useForm<ContactInputTypes>({
        resolver: yupResolver(ContactSchema),
        defaultValues: {
            email: '',
            message: '',
            name: '',
            subject: '',
        },
    })

    const sendEmail = () => {
        if (captchaFilled) {
            sendForm(
                `${process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID}`,
                `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
                '#contact-form',
                `${process.env.NEXT_PUBLIC_USER_ID}`
            )
                .then(() => {
                    Toaster('Success', 'Your email has been sent', 'success')
                })
                .catch(() => {
                    Toaster('Error', 'There was a problem please try again later', 'error')
                })
        } else Toaster('Failed', 'Please complete reCAPTCHA', 'error')
    }

    const completeReCaptcha = () => setCaptchaFilled(true)

    return (
        <Center
            w={['100%', '75%', '50%']}
            h='100%'
            flexDir='column'
            as='form'
            role='form'
            aria-label='contact form to reach me'
            id='contact-form'
            onSubmit={handleSubmit(sendEmail)}
        >
            {!isSubmitSuccessful ? (
                <>
                    <Controller
                        name='subject'
                        control={control}
                        render={({ field }) => (
                            <MotionFormControl
                                variants={child}
                                isInvalid={!!errors?.subject?.message}
                                id='subject'
                                mb={['0.25em', '0.5em', '0.5em']}
                            >
                                <FormLabel
                                    mb={['0', '0.25em', '0.25em']}
                                    fontSize={['sm', 'lg', 'lg']}
                                >
                                    Subject
                                </FormLabel>
                                <Input
                                    {...field}
                                    _focus={{ boxShadow: '0 0 1px 1px #1f1f1f' }}
                                    rounded='md'
                                    borderColor='#CCCCCC'
                                    type='text'
                                    size={inputSize}
                                />
                                <FormErrorMessage>{errors.subject?.message}</FormErrorMessage>
                            </MotionFormControl>
                        )}
                    />
                    <Controller
                        name='name'
                        control={control}
                        render={({ field }) => (
                            <MotionFormControl
                                variants={child}
                                isInvalid={!!errors?.name?.message}
                                id='name'
                                mb={['0.25em', '0.5em', '0.5em']}
                            >
                                <FormLabel
                                    mb={['0', '0.25em', '0.25em']}
                                    fontSize={['sm', 'lg', 'lg']}
                                >
                                    Name
                                </FormLabel>
                                <Input
                                    {...field}
                                    _focus={{ boxShadow: '0 0 1px 1px #1f1f1f' }}
                                    rounded='md'
                                    borderColor='#CCCCCC'
                                    type='text'
                                    size={inputSize}
                                />
                                <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
                            </MotionFormControl>
                        )}
                    />
                    <Controller
                        name='email'
                        control={control}
                        render={({ field }) => (
                            <MotionFormControl
                                variants={child}
                                isInvalid={!!errors?.email?.message}
                                id='email'
                                mb={['0.25em', '0.5em', '0.5em']}
                            >
                                <FormLabel
                                    mb={['0', '0.25em', '0.25em']}
                                    fontSize={['sm', 'lg', 'lg']}
                                >
                                    Email
                                </FormLabel>
                                <Input
                                    {...field}
                                    _focus={{ boxShadow: '0 0 1px 1px #1f1f1f' }}
                                    rounded='md'
                                    borderColor='#CCCCCC'
                                    type='email'
                                    size={inputSize}
                                />
                                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                            </MotionFormControl>
                        )}
                    />
                    <Controller
                        name='message'
                        control={control}
                        render={({ field }) => (
                            <MotionFormControl
                                variants={child}
                                isInvalid={!!errors?.message?.message}
                                id='message'
                                mb={['0.25em', '0.5em', '0.5em']}
                            >
                                <FormLabel
                                    mb={['0', '0.25em', '0.25em']}
                                    fontSize={['sm', 'lg', 'lg']}
                                >
                                    Message
                                </FormLabel>
                                <Textarea
                                    {...field}
                                    rounded='md'
                                    placeholder='Your message..'
                                    resize='none'
                                    _focus={{ boxShadow: '0 0 1px 1px #1f1f1f' }}
                                    height={['80px', '100px', '100px']}
                                    borderColor='#CCCCCC'
                                />
                                <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
                            </MotionFormControl>
                        )}
                    />
                    <MotionCenter variants={child}>
                        <ReCAPTCHA
                            sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}`}
                            onChange={completeReCaptcha}
                        />
                    </MotionCenter>
                    <MotionCenter w='100%' variants={child}>
                        <Button
                            isLoading={isSubmitting}
                            mt={['0.25em', '0.5em', '0.5em']}
                            type='submit'
                            aria-label='Send the contact form'
                            border='7px solid #494949'
                            borderTopWidth='3px'
                            _hover={{ background: '#565656f8' }}
                            bg='#565656'
                            color='#fff'
                            w='100%'
                            h='35px'
                            _active={{
                                transform: 'scale(0.98)',
                            }}
                        >
                            Send
                        </Button>
                    </MotionCenter>
                </>
            ) : (
                <Center fontSize='xl' alignSelf='center' flexDir='column'>
                    <Text>Your message has beeen sent.</Text>
                    <Text>I will return to your email as soon as possible.</Text>
                </Center>
            )}
        </Center>
    )
}

export default ContactForm
