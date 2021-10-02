import { Box, Center, Text } from '@chakra-ui/layout'
import { useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import ContactForm from './ContactForm'
import Footer from './Footer'
import { MotionCenter, MotionHeading } from './MotionComponents'

const container = {
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
}

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

const Contact = () => {
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [ref, inView] = useInView({ threshold: 0.6 })
    const controls = useAnimation()

    useEffect(() => {
        inView ? controls.start('show') : controls.start('hidden')
    }, [controls, inView])

    return (
        <Box
            as='section'
            aria-label='contact'
            id='contact'
            h='100vh'
            w='100%'
            pt={['3em', '3.5em', '3.5em']}
            ref={ref}
        >
            <MotionCenter
                w='90%'
                h={['88%', '85%', '85%']}
                margin='0 auto'
                maxW='1200px'
                flexDir='column'
                justifyContent='flex-start'
                initial='hidden'
                animate={controls}
                variants={container}
            >
                <MotionHeading
                    variants={child}
                    as='h1'
                    fontFamily='Nunito'
                    fontSize={['2xl', '4xl', '4xl']}
                >
                    Contact
                </MotionHeading>
                <Center w='100%' h='100%' flexDir='column'>
                    <Center flexDir='column' w={['100%', '75%', '50%']} h='100%'>
                        <MotionHeading
                            variants={child}
                            display={!formSubmitted ? 'block' : 'none'}
                            fontSize={['lg', 'xl', 'xl']}
                            fontFamily='Nunito'
                            mb={['0', '0.5em', '0.5em']}
                        >
                            Get In Touch
                        </MotionHeading>
                        {!formSubmitted ? (
                            <ContactForm controls={controls} setFormSubmitted={setFormSubmitted} />
                        ) : (
                            <Center fontSize='xl' alignSelf='center' flexDir='column'>
                                <Text>Your message has beeen sent.</Text>
                                <Text>I will return to your email as soon as possible.</Text>
                            </Center>
                        )}
                    </Center>
                </Center>
            </MotionCenter>
            <Footer />
        </Box>
    )
}

export default Contact
