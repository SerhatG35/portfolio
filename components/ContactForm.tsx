import { Button } from '@chakra-ui/button'
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Center } from '@chakra-ui/layout'
import { useBreakpointValue } from '@chakra-ui/media-query'
import { Textarea } from '@chakra-ui/textarea'
import { yupResolver } from '@hookform/resolvers/yup'
import { ContactSchema } from 'constants/YupSchema'
import { sendForm } from 'emailjs-com'
import { Dispatch, SetStateAction, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import { toaster } from 'utils/Toaster'

type ContactInputTypes = {
    subject: string
    name: string
    email: string
    message: string
}

const ContactForm = ({
    setFormSubmitted,
}: {
    setFormSubmitted: Dispatch<SetStateAction<boolean>>
}) => {
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
            <FormControl
                isInvalid={!!formState.errors?.subject?.message}
                errortext={formState.errors?.subject?.message}
                isRequired
                id='subject'
            >
                <FormLabel>Subject</FormLabel>
                <FormErrorMessage>{formState.errors.subject?.message}</FormErrorMessage>
                <Input
                    _focus={{ boxShadow: '0 0 1px 1px #1f1f1f' }}
                    rounded='md'
                    borderColor='#CCCCCC'
                    {...register('subject')}
                    type='text'
                    size={inputSize}
                />
            </FormControl>
            <FormControl
                isInvalid={!!formState.errors?.name?.message}
                errortext={formState.errors?.name?.message}
                isRequired
                id='name'
            >
                <FormLabel>Name</FormLabel>
                <FormErrorMessage>{formState.errors.name?.message}</FormErrorMessage>
                <Input
                    _focus={{ boxShadow: '0 0 1px 1px #1f1f1f' }}
                    rounded='md'
                    borderColor='#CCCCCC'
                    {...register('name')}
                    type='text'
                    size={inputSize}
                />
            </FormControl>
            <FormControl
                isInvalid={!!formState.errors?.email?.message}
                errortext={formState.errors?.email?.message}
                isRequired
                id='email'
            >
                <FormLabel>Email</FormLabel>
                <FormErrorMessage>{formState.errors.email?.message}</FormErrorMessage>
                <Input
                    _focus={{ boxShadow: '0 0 1px 1px #1f1f1f' }}
                    rounded='md'
                    borderColor='#CCCCCC'
                    {...register('email')}
                    type='email'
                    size={inputSize}
                />
            </FormControl>

            <FormControl
                isInvalid={!!formState.errors?.message?.message}
                errortext={formState.errors?.message?.message}
                isRequired
                id='message'
            >
                <FormLabel>Message</FormLabel>
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
                    mb='0.5em'
                />
            </FormControl>
            <ReCAPTCHA
                sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}`}
                onChange={completeReCaptcha}
            />
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
                my='0.5em'
                border='1px solid #1f1f1f'
            >
                Send
            </Button>
        </Center>
    )
}

export default ContactForm
