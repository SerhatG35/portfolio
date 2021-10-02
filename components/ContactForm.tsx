import { Button } from '@chakra-ui/button'
import { FormErrorMessage, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Center } from '@chakra-ui/layout'
import { useBreakpointValue } from '@chakra-ui/media-query'
import { Textarea } from '@chakra-ui/textarea'
import { yupResolver } from '@hookform/resolvers/yup'
import { ContactSchema } from 'constants/YupSchema'
import { sendForm } from 'emailjs-com'
import { AnimationControls } from 'framer-motion'
import { ContactInputTypes } from 'global'
import { Dispatch, SetStateAction, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import { toaster } from 'utils/Toaster'
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

type ContactFormTypes = {
    setFormSubmitted: Dispatch<SetStateAction<boolean>>
    controls: AnimationControls
}

const ContactForm = ({ setFormSubmitted, controls }: ContactFormTypes) => {
    const inputSize = useBreakpointValue({ base: 'xs', sm: 'md' })
    const [captchaFilled, setCaptchaFilled] = useState(false)
    const { formState, handleSubmit, register } = useForm<ContactInputTypes>({
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

    return (
        <Center
            w='100%'
            flexDir='column'
            as='form'
            role='form'
            aria-label='contact form to reach me'
            id='contact-form'
            onSubmit={handleSubmit(sendEmail)}
        >
            <MotionFormControl
                variants={child}
                isInvalid={!!formState.errors?.subject?.message}
                isRequired
                id='subject'
                mb={['0.25em', '0.5em', '0.5em']}
            >
                <FormLabel mb={['0','0.25em','0.25em']} fontSize={['sm', 'lg', 'lg']}>
                    Subject
                </FormLabel>
                <FormErrorMessage>{formState.errors.subject?.message}</FormErrorMessage>
                <Input
                    _focus={{ boxShadow: '0 0 1px 1px #1f1f1f' }}
                    rounded='md'
                    borderColor='#CCCCCC'
                    {...register('subject')}
                    type='text'
                    size={inputSize}
                />
            </MotionFormControl>
            <MotionFormControl
                variants={child}
                isInvalid={!!formState.errors?.name?.message}
                isRequired
                id='name'
                mb={['0.25em', '0.5em', '0.5em']}
            >
                <FormLabel mb={['0','0.25em','0.25em']} fontSize={['sm', 'lg', 'lg']}>Name</FormLabel>
                <FormErrorMessage>{formState.errors.name?.message}</FormErrorMessage>
                <Input
                    _focus={{ boxShadow: '0 0 1px 1px #1f1f1f' }}
                    rounded='md'
                    borderColor='#CCCCCC'
                    {...register('name')}
                    type='text'
                    size={inputSize}
                />
            </MotionFormControl>
            <MotionFormControl
                variants={child}
                isInvalid={!!formState.errors?.email?.message}
                isRequired
                id='email'
                mb={['0.25em', '0.5em', '0.5em']}
            >
                <FormLabel mb={['0','0.25em','0.25em']} fontSize={['sm', 'lg', 'lg']}>Email</FormLabel>
                <FormErrorMessage>{formState.errors.email?.message}</FormErrorMessage>
                <Input
                    _focus={{ boxShadow: '0 0 1px 1px #1f1f1f' }}
                    rounded='md'
                    borderColor='#CCCCCC'
                    {...register('email')}
                    type='email'
                    size={inputSize}
                />
            </MotionFormControl>
            <MotionFormControl
                variants={child}
                isInvalid={!!formState.errors?.message?.message}
                isRequired
                id='message'
                mb={['0.25em', '0.5em', '0.5em']}
            >
                <FormLabel mb={['0','0.25em','0.25em']} fontSize={['sm', 'lg', 'lg']}>Message</FormLabel>
                <FormErrorMessage>{formState.errors.message?.message}</FormErrorMessage>
                <Textarea
                    rounded='md'
                    placeholder='Your message..'
                    resize='none'
                    _focus={{ boxShadow: '0 0 1px 1px #1f1f1f' }}
                    height={['80px', '100px', '100px']}
                    borderColor='#CCCCCC'
                    {...register('message')}
                    type='text'
                />
            </MotionFormControl>
            <MotionCenter variants={child}>
                <ReCAPTCHA
                    sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}`}
                    onChange={completeReCaptcha}
                />
            </MotionCenter>
            <MotionCenter w='100%' variants={child}>
                <Button
                    aria-label='Send the contact form'
                    _focus={{
                        boxShadow: 'none',
                    }}
                    transition='background 0.8s'
                    backgroundPosition='center'
                    _hover={{
                        bgColor: `#2f2f2f`,
                        bgGradient: `radial(circle, transparent 1%, #2f2f2f 1%)`,
                        bgPos: 'center',
                        backgroundSize: '15000%',
                    }}
                    _active={{
                        bgColor: `#3f3f3f`,
                        backgroundSize: '100%',
                        transition: 'background 0s',
                    }}
                    bg='#1f1f1f'
                    w='100%'
                    color='#f5f5f5'
                    type='submit'
                    mt={['0.25em', '0.5em', '0.5em']}
                    border='1px solid #1f1f1f'
                >
                    Send
                </Button>
            </MotionCenter>
        </Center>
    )
}

export default ContactForm
