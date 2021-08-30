import { Box, Center, Heading, Text } from '@chakra-ui/layout'
import { useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import ContactForm from './ContactForm'
import Footer from './Footer'
import { MotionCenter } from './MotionComponents'

const variants = {
    hidden: { y: 100, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { stiffness: 70, type: 'spring' } },
}

const Contact = () => {
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [ref, inView] = useInView({ threshold: 0.6, triggerOnce: true })
    const controls = useAnimation()

    useEffect(() => {
        if (inView) controls.start('show')
        if (!inView) controls.start('hidden')
    }, [controls, inView])

    return (
        <Box
            as='section'
            aria-label='contact'
            id='contact'
            h='100vh'
            w='100%'
            pt={['2.5em', '5em', '5em']}
            ref={ref}
        >
            <MotionCenter
                w='90%'
                h={['88%', '85%', '85%']}
                initial='hidden'
                animate={controls}
                variants={variants}
                margin='0 auto'
                maxW='1200px'
                flexDir='column'
                justifyContent='flex-start'
            >
                <Heading display={['none', 'block', 'block']} as='h1' fontFamily='Nunito' mb='1em'>
                    Contact
                </Heading>
                <Center w='100%' h='100%' flexDir='column'>
                    <Heading fontSize='xl' fontFamily='Nunito' mb={['0', '0.5em', '0.5em']}>
                        Get In Touch
                    </Heading>
                    <Center flexDir='column' w={['100%', '50%', '50%']} h='100%'>
                        {!formSubmitted ? (
                            <ContactForm setFormSubmitted={setFormSubmitted} />
                        ) : (
                            <Center alignSelf='center' flexDir='column'>
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
