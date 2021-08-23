import { Box, Center, Heading, Text } from '@chakra-ui/layout'
import { useState } from 'react'
import ContactForm from './ContactForm'
import Footer from './Footer'

const Contact = () => {
    const [formSubmitted, setFormSubmitted] = useState(false)

    return (
        <Box
            as='section'
            aria-label='contact'
            id='contact'
            h='100vh'
            w='100%'
            pt={['2.5em', '5em', '5em']}
        >
            <Center
                w='90%'
                h={['88%', '85%', '85%']}
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
            </Center>
            <Footer />
        </Box>
    )
}

export default Contact
