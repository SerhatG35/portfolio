import { Box, Center } from '@chakra-ui/layout'
import { Link as ReactScroll } from 'react-scroll'
import { MotionText } from './MotionComponents'

const Navbar = () => {
    return (
        <Box
            as='nav'
            w='100%'
            borderBottom='1px solid #DBDBDB'
            py='0.25em'
            position='fixed'
            top='0'
            zIndex='1000'
            overflow='hidden'
            backdropFilter='blur(10px)'
            bg='hsla(0,0%,100%,.6)'
            fontWeight='700'
        >
            <Box w='90%' margin='0 auto' maxW={['1200px']}>
                <Center w='100%' justifyContent='space-between'>
                    <ReactScroll
                        style={{ cursor: 'pointer', margin: '0.2em 1em', opacity: 0.6 }}
                        to='home'
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <MotionText
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.25 }}
                            fontSize={['sm', 'xl', '2xl', '2xl']}
                            bgGradient='linear(to-l, #542CF2,#F2542C)'
                            bgClip='text'
                            aria-label='scroll to home section'
                        >
                            Serhat Genç
                        </MotionText>
                    </ReactScroll>
                    <Center>
                        <ReactScroll
                            style={{ cursor: 'pointer', margin: '0.2em 1em', opacity: 0.6 }}
                            to='projects'
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <MotionText
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                fontSize={['sm', 'xl', '2xl', '2xl']}
                                aria-label='scroll to projects section'
                            >
                                Projects
                            </MotionText>
                        </ReactScroll>
                        <ReactScroll
                            style={{ cursor: 'pointer', margin: '0.2em 1em', opacity: 0.6 }}
                            to='contact'
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <MotionText
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.75 }}
                                fontSize={['sm', 'xl', '2xl', '2xl']}
                                aria-label='scroll to contact section'
                            >
                                Contact
                            </MotionText>
                        </ReactScroll>
                    </Center>
                </Center>
            </Box>
        </Box>
    )
}

export default Navbar
